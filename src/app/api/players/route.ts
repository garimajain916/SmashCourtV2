import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function parseArrayParam(param: string | null): string[] {
  if (!param) return [];
  try {
    return JSON.parse(param);
  } catch {
    return param.split(',').map(s => s.trim()).filter(Boolean);
  }
}

function parseNumberArrayParam(param: string | null): number[] {
  return parseArrayParam(param).map(Number).filter(n => !isNaN(n));
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const courts = parseArrayParam(searchParams.get('courts'));
    const ntrps = parseNumberArrayParam(searchParams.get('ntrps'));
    const days = parseArrayParam(searchParams.get('days'));
    const times = parseArrayParam(searchParams.get('times'));

    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        image: true,
        profile: {
          select: {
            ntrpRating: true,
            courtPreferences: true,
            availability: true,
            bio: true,
          },
        },
      },
    });

    // Map and parse JSON fields for frontend, filter out users with no profile
    let players = users
      .filter(user => user.profile)
      .map(user => ({
        id: user.id,
        name: user.name || '',
        image: user.image || undefined,
        ntrp: user.profile?.ntrpRating ?? null,
        courts: user.profile?.courtPreferences ? JSON.parse(user.profile.courtPreferences) : [],
        availability: user.profile?.availability ? JSON.parse(user.profile.availability) : {},
        bio: user.profile?.bio || '',
      }));

    // Apply filters in-memory (can be optimized to DB later)
    if (courts.length > 0 || ntrps.length > 0 || days.length > 0 || times.length > 0) {
      players = players.filter(player => {
        const courtMatch = courts.length > 0 && courts.some(court => player.courts.includes(court));
        const ntrpMatch = ntrps.length > 0 && typeof player.ntrp === 'number' && ntrps.includes(player.ntrp);
        const dayMatch = days.length > 0 && days.some(day => Object.keys(player.availability).includes(day) && (player.availability as Record<string, string[]>)[day].length > 0);
        const timeMatch = times.length > 0 && times.some(time => Object.values(player.availability as Record<string, string[]>).some(timesArr => timesArr.includes(time)));
        return courtMatch || ntrpMatch || dayMatch || timeMatch;
      });
    }

    return NextResponse.json(players);
  } catch (error) {
    console.error('Error fetching players:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 