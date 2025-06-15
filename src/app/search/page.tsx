"use client";
import { useState } from 'react'
import { torontoCourts } from '@/lib/toronto-courts'
import { PlayerCard } from '@/components/PlayerCard'

// Mock player data
const mockPlayers = [
  {
    id: '1',
    name: 'Alex Kim',
    ntrp: 3.5,
    courts: ['queens-park', 'trinity-bellwoods'],
    availability: {
      monday: ['evening'],
      tuesday: [],
      wednesday: ['morning', 'evening'],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: [],
    },
    bio: 'Love to rally and play matches!',
    image: '/players/alex.jpg',
  },
  {
    id: '2',
    name: 'Priya Singh',
    ntrp: 4.0,
    courts: ['high-park', 'christie-pits'],
    availability: {
      monday: [],
      tuesday: ['afternoon'],
      wednesday: [],
      thursday: ['evening'],
      friday: [],
      saturday: [],
      sunday: [],
    },
    bio: 'Looking for advanced players.',
    image: '/players/priya.jpg',
  },
  {
    id: '3',
    name: 'Jordan Lee',
    ntrp: 2.5,
    courts: ['regent-park'],
    availability: {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: ['morning'],
      sunday: ['afternoon'],
    },
    bio: 'Beginner, just getting started!',
    image: '/players/jordan.jpg',
  },
]

type Player = typeof mockPlayers[number];

const PAGE_SIZE = 6

const ntrpOptions = [1.0,1.5,2.0,2.5,3.0,3.5,4.0,4.5,5.0,5.5,6.0,6.5,7.0];
const dayOptions = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
const timeOptions = ["morning","afternoon","evening"];

export default function SearchPage() {
  const [selectedCourts, setSelectedCourts] = useState<string[]>([]);
  const [selectedNtrps, setSelectedNtrps] = useState<number[]>([]);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  // Checkbox handlers
  const handleCheckbox = (value: string | number, selected: any[], setter: any) => {
    if (selected.includes(value)) {
      setter(selected.filter((v: any) => v !== value));
    } else {
      setter([...selected, value]);
    }
    setPage(1);
  };

  // Filter logic
  const filteredPlayers = mockPlayers.filter(player => {
    // If no filters are selected, show all players
    if (
      selectedCourts.length === 0 &&
      selectedNtrps.length === 0 &&
      selectedDays.length === 0 &&
      selectedTimes.length === 0
    ) {
      return true;
    }
    // OR logic: show player if they match ANY filter
    const courtMatch = selectedCourts.some(court => player.courts.includes(court));
    const ntrpMatch = selectedNtrps.includes(player.ntrp);
    const dayMatch = selectedDays.some(day => Object.keys(player.availability).includes(day) && (player.availability as Record<string, string[]>)[day].length > 0);
    const timeMatch = selectedTimes.some(time => Object.values(player.availability as Record<string, string[]>).some(timesArr => timesArr.includes(time)));
    return courtMatch || ntrpMatch || dayMatch || timeMatch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredPlayers.length / PAGE_SIZE);
  const paginatedPlayers = filteredPlayers.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleViewProfile = (player: Player) => setSelectedPlayer(player);
  const handleCloseModal = () => setSelectedPlayer(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-foreground">Find Tennis Players</h1>
      <div className="flex gap-8">
        {/* Filter Panel */}
        <div className="w-full max-w-xs bg-card border border-border rounded-lg p-4 flex flex-col gap-4">
          <div>
            <label className="block text-sm mb-2 text-foreground font-semibold">Court</label>
            <div className="flex flex-col gap-1 max-h-32 overflow-y-auto">
              {torontoCourts.map(court => (
                <label key={court.id} className="flex items-center gap-2 text-foreground">
                  <input
                    type="checkbox"
                    checked={selectedCourts.includes(court.id)}
                    onChange={() => handleCheckbox(court.id, selectedCourts, setSelectedCourts)}
                  />
                  {court.name}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm mb-2 text-foreground font-semibold">NTRP</label>
            <div className="flex flex-col gap-1 max-h-32 overflow-y-auto">
              {ntrpOptions.map(r => (
                <label key={r} className="flex items-center gap-2 text-foreground">
                  <input
                    type="checkbox"
                    checked={selectedNtrps.includes(r)}
                    onChange={() => handleCheckbox(r, selectedNtrps, setSelectedNtrps)}
                  />
                  {r}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm mb-2 text-foreground font-semibold">Day</label>
            <div className="flex flex-col gap-1 max-h-24 overflow-y-auto">
              {dayOptions.map(d => (
                <label key={d} className="flex items-center gap-2 text-foreground">
                  <input
                    type="checkbox"
                    checked={selectedDays.includes(d)}
                    onChange={() => handleCheckbox(d, selectedDays, setSelectedDays)}
                  />
                  {d.charAt(0).toUpperCase()+d.slice(1)}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm mb-2 text-foreground font-semibold">Time</label>
            <div className="flex flex-col gap-1 max-h-24 overflow-y-auto">
              {timeOptions.map(t => (
                <label key={t} className="flex items-center gap-2 text-foreground">
                  <input
                    type="checkbox"
                    checked={selectedTimes.includes(t)}
                    onChange={() => handleCheckbox(t, selectedTimes, setSelectedTimes)}
                  />
                  {t.charAt(0).toUpperCase()+t.slice(1)}
                </label>
              ))}
            </div>
          </div>
        </div>
        {/* Player Cards */}
        <div className="flex-1">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedPlayers.length === 0 && (
              <div className="col-span-full text-muted-foreground">No players found. Try adjusting your filters.</div>
            )}
            {paginatedPlayers.map((player: Player) => (
              <PlayerCard key={player.id} player={player} onViewProfile={() => handleViewProfile(player)} />
            ))}
          </div>
          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                className="px-4 py-2 rounded bg-accent text-foreground disabled:opacity-50"
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
              >
                Previous
              </button>
              <span className="text-foreground">Page {page} of {totalPages}</span>
              <button
                className="px-4 py-2 rounded bg-accent text-foreground disabled:opacity-50"
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
      {/* Profile Modal */}
      {selectedPlayer && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-card border border-border rounded-lg p-8 max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-2xl text-muted-foreground hover:text-foreground"
              onClick={handleCloseModal}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-2 text-foreground">{selectedPlayer.name}</h2>
            <div className="mb-2 text-muted-foreground">NTRP: {selectedPlayer.ntrp}</div>
            <div className="mb-2 text-muted-foreground">Courts: {selectedPlayer.courts.map(cid => torontoCourts.find(c => c.id === cid)?.name).join(', ')}</div>
            <div className="mb-2 text-muted-foreground">Availability: {Object.entries(selectedPlayer.availability).map(([d, times]) => `${d.charAt(0).toUpperCase()+d.slice(1)} (${(times as string[]).join(', ')})`).join('; ')}</div>
            <div className="mb-2 text-muted-foreground">{selectedPlayer.bio}</div>
            {selectedPlayer.image && (
              <img src={selectedPlayer.image} alt={selectedPlayer.name} className="w-32 h-32 object-cover rounded-full mx-auto mt-4" />
            )}
          </div>
        </div>
      )}
    </div>
  );
} 