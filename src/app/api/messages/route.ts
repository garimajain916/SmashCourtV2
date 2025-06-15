import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const user1 = searchParams.get('user1');
  const user2 = searchParams.get('user2');
  if (!user1 || !user2) {
    return NextResponse.json({ error: 'Missing user ids' }, { status: 400 });
  }
  const messages = await prisma.message.findMany({
    where: {
      OR: [
        { senderId: user1, recipientId: user2 },
        { senderId: user2, recipientId: user1 },
      ],
    },
    orderBy: { createdAt: 'asc' },
  });
  return NextResponse.json(messages);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { senderId, recipientId, content } = data;
  if (!senderId || !recipientId || !content) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }
  const message = await prisma.message.create({
    data: { senderId, recipientId, content },
  });
  return NextResponse.json(message);
}

export function handler() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
} 