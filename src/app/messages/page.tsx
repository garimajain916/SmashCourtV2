"use client";
import { useState, useRef, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  name: string;
  image?: string;
}

interface Message {
  id: string;
  senderId: string;
  recipientId: string;
  content: string;
  createdAt: string;
}

const fallbackAvatar = '/default-avatar.png';

function formatTime(date: string) {
  return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export default function MessagesPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Redirect if not authenticated
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login');
    }
  }, [status, router]);

  // Fetch users on mount (only if authenticated)
  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/users')
        .then(res => res.json())
        .then(data => {
          // Filter out current user from the list
          const otherUsers = data.filter((user: User) => user.id !== session?.user?.id);
          setUsers(otherUsers);
          if (otherUsers.length > 0) setSelectedUserId(otherUsers[0].id);
        });
    }
  }, [status, session]);

  const currentUser = session?.user;
  const otherUser = users.find(u => u.id === selectedUserId);

  // Fetch messages when selectedUserId or currentUser changes
  useEffect(() => {
    if (!currentUser?.id || !selectedUserId) return;
    setLoading(true);
    fetch(`/api/messages?user1=${currentUser.id}&user2=${selectedUserId}`)
      .then(res => res.json())
      .then(data => setMessages(data))
      .finally(() => setLoading(false));
  }, [currentUser, selectedUserId]);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, selectedUserId]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !currentUser?.id || !selectedUserId) return;
    const res = await fetch('/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ senderId: currentUser.id, recipientId: selectedUserId, content: input }),
    });
    const newMsg = await res.json();
    setMessages(msgs => [...msgs, newMsg]);
    setInput('');
  };

  // Show loading while checking authentication
  if (status === 'loading') {
    return (
      <div className="container mx-auto px-2 py-6 md:px-4 md:py-8">
        <div className="text-center text-muted-foreground">Loading...</div>
      </div>
    );
  }

  // Show message if not authenticated
  if (status === 'unauthenticated') {
    return (
      <div className="container mx-auto px-2 py-6 md:px-4 md:py-8">
        <div className="text-center text-muted-foreground">Please sign in to view messages.</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-2 py-6 md:px-4 md:py-8">
      <h1 className="text-3xl font-bold mb-6 text-foreground">Messages</h1>
      <div className="flex flex-col md:flex-row border border-border rounded-lg overflow-hidden bg-card min-h-[400px] h-[70vh]">
        {/* User List */}
        <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-border bg-background p-2 md:p-4 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-x-visible">
          <h2 className="hidden md:block text-lg font-semibold mb-2 text-foreground">Players</h2>
          {users.map(user => (
            <button
              key={user.id}
              className={`flex items-center gap-3 text-left px-3 py-2 rounded transition-colors min-w-[140px] md:min-w-0 ${selectedUserId === user.id ? 'bg-primary text-primary-foreground' : 'hover:bg-accent text-foreground'}`}
              onClick={() => setSelectedUserId(user.id)}
            >
              <img
                src={user.image || fallbackAvatar}
                alt={user.name}
                className="w-8 h-8 rounded-full object-cover border border-border bg-background"
                onError={e => (e.currentTarget.src = fallbackAvatar)}
              />
              <span className="truncate">{user.name}</span>
            </button>
          ))}
        </div>
        {/* Chat Window */}
        <div className="flex-1 flex flex-col min-w-0">
          {selectedUserId && otherUser ? (
            <>
              <div className="flex-1 p-2 md:p-4 overflow-y-auto flex flex-col gap-2">
                {loading ? (
                  <div className="text-muted-foreground">Loading messages...</div>
                ) : (
                  messages.map((msg) => (
                    <div key={msg.id} className={`flex items-end gap-2 ${msg.senderId === currentUser?.id ? 'justify-end' : 'justify-start'}`}>
                      {msg.senderId !== currentUser?.id && (
                        <img
                          src={otherUser.image || fallbackAvatar}
                          alt="avatar"
                          className="w-7 h-7 rounded-full object-cover border border-border bg-background"
                          onError={e => (e.currentTarget.src = fallbackAvatar)}
                        />
                      )}
                      <div className={`max-w-xs px-4 py-2 rounded-lg text-sm ${msg.senderId === currentUser?.id ? 'bg-primary text-primary-foreground' : 'bg-accent text-foreground'}`}>
                        {msg.content}
                        <div className="text-xs text-muted-foreground mt-1 text-right">{formatTime(msg.createdAt)}</div>
                      </div>
                      {msg.senderId === currentUser?.id && (
                        <img
                          src={currentUser?.image || fallbackAvatar}
                          alt="me"
                          className="w-7 h-7 rounded-full object-cover border border-border bg-background"
                          onError={e => (e.currentTarget.src = fallbackAvatar)}
                        />
                      )}
                    </div>
                  ))
                )}
                <div ref={chatEndRef} />
              </div>
              <form
                className="flex border-t border-border p-2 md:p-4 gap-2 bg-background"
                onSubmit={handleSend}
              >
                <input
                  className="flex-1 px-3 py-2 rounded border border-input bg-background text-foreground focus:outline-none"
                  placeholder="Type your message..."
                  value={input}
                  onChange={e => setInput(e.target.value)}
                />
                <button type="submit" className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90">Send</button>
              </form>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-muted-foreground text-lg">
              Select a player to start chatting.
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 