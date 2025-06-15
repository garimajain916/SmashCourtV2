import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const users = await prisma.user.findMany({
    select: { id: true, name: true, image: true },
  });
  return NextResponse.json(users);
}

export function handler() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
} 