import { torontoCourts } from '@/lib/toronto-courts'
import { useState } from 'react'
import { Button } from "@/components/ui/button"

interface PlayerCardProps {
  player: {
    id: string
    name: string
    ntrp: number
    courts: string[]
    availability: Record<string, string[]>
    bio: string
    image?: string
  }
  onViewProfile?: () => void
}

const fallbackAvatar = '/default-avatar.png';

export function PlayerCard({ player, onViewProfile }: PlayerCardProps) {
  const [imgSrc, setImgSrc] = useState(player.image || fallbackAvatar);
  return (
    <div className="bg-card border border-border rounded-lg p-6 flex flex-col gap-2 items-center">
      <div className="relative w-20 h-20 mb-2">
        <img
          src={imgSrc}
          alt={player.name}
          className="w-20 h-20 object-cover rounded-full border border-border bg-background"
          onError={() => setImgSrc(fallbackAvatar)}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-full bg-black/60">
          <span className="text-white font-semibold text-sm text-center leading-tight drop-shadow">
            {player.name}
          </span>
          <span className="text-white text-xs mt-1 drop-shadow">NTRP: {player.ntrp}</span>
        </div>
      </div>
      <div className="text-sm text-muted-foreground w-full text-left">Courts: {player.courts.map(cid => torontoCourts.find(c => c.id === cid)?.name).join(', ')}</div>
      <div className="text-sm text-muted-foreground w-full text-left">
        Availability:
        <ul className="ml-2 mt-1 flex flex-col gap-0.5">
          {Object.entries(player.availability)
            .filter(([, times]) => times.length > 0)
            .map(([day, times]) => (
              <li key={day}>
                <span className="font-medium">{day.charAt(0).toUpperCase() + day.slice(1)}:</span>{' '}
                {times.join(', ')}
              </li>
            ))}
        </ul>
      </div>
      <div className="text-sm text-muted-foreground w-full text-left">{player.bio}</div>
      <Button variant="outline" onClick={onViewProfile} className="mt-2">Message</Button>
    </div>
  )
} 