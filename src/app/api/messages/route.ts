import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const user1 = searchParams.get('user1');
  const user2 = searchParams.get('user2');
  const conversationsFor = searchParams.get('conversationsFor');

  // Fetch messages between two users
  if (user1 && user2) {
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

  // Fetch all conversations for a user
  if (conversationsFor) {
    // Find all unique user ids this user has messaged with
    const sent = await prisma.message.findMany({
      where: { senderId: conversationsFor },
      select: { recipientId: true },
    });
    const received = await prisma.message.findMany({
      where: { recipientId: conversationsFor },
      select: { senderId: true },
    });
    const userIds = Array.from(new Set([
      ...sent.map(m => m.recipientId),
      ...received.map(m => m.senderId),
    ])).filter(id => id !== conversationsFor);

    // For each user, get the latest message
    const conversations = await Promise.all(userIds.map(async otherUserId => {
      const latest = await prisma.message.findFirst({
        where: {
          OR: [
            { senderId: conversationsFor, recipientId: otherUserId },
            { senderId: otherUserId, recipientId: conversationsFor },
          ],
        },
        orderBy: { createdAt: 'desc' },
      });
      let user = await prisma.user.findUnique({ where: { id: otherUserId }, select: { id: true, name: true, image: true } });
      if (!user) user = { id: otherUserId, name: 'Unknown', image: null };
      return { user, latestMessage: latest };
    }));
    return NextResponse.json(conversations);
  }

  return NextResponse.json({ error: 'Missing user ids' }, { status: 400 });
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