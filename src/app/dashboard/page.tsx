import Link from 'next/link'
import { torontoCourts } from '@/lib/toronto-courts'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 text-primary text-2xl">🎾</div>
            <h1 className="text-2xl font-bold text-foreground">Smash Court</h1>
          </div>
          <nav className="flex items-center space-x-6">
            <Link href="/dashboard" className="text-primary font-medium">
              Dashboard
            </Link>
            <Link href="/search" className="text-foreground hover:text-primary transition-colors">
              Find Players
            </Link>
            <Link href="/messages" className="text-foreground hover:text-primary transition-colors">
              Messages
            </Link>
            <Link href="/profile" className="text-foreground hover:text-primary transition-colors">
              Profile
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Welcome back, John!</h2>
          <p className="text-muted-foreground">
            Ready to find your next tennis partner in downtown Toronto?
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link href="/search" className="bg-card border border-border rounded-lg p-6 hover:bg-accent transition-colors">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <div className="text-xl">🔍</div>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Find Players</h3>
            </div>
            <p className="text-muted-foreground">
              Discover tennis players in downtown Toronto based on skill level and availability.
            </p>
          </Link>

          <Link href="/messages" className="bg-card border border-border rounded-lg p-6 hover:bg-accent transition-colors">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <div className="text-xl">💬</div>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Messages</h3>
            </div>
            <p className="text-muted-foreground">
              Check your messages and coordinate games with other players.
            </p>
          </Link>

          <Link href="/profile" className="bg-card border border-border rounded-lg p-6 hover:bg-accent transition-colors">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <div className="text-xl">👤</div>
              </div>
              <h3 className="text-lg font-semibold text-foreground">My Profile</h3>
            </div>
            <p className="text-muted-foreground">
              Update your profile, NTRP rating, and availability preferences.
            </p>
          </Link>
        </div>

        {/* Profile Summary */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-foreground">Your Profile</h3>
            <Link href="/profile" className="text-primary hover:underline text-sm">
              Edit Profile
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-foreground mb-2">NTRP Rating</h4>
              <p className="text-2xl font-bold text-primary">3.0</p>
              <p className="text-sm text-muted-foreground">Intermediate</p>
            </div>
            
            <div>
              <h4 className="font-medium text-foreground mb-2">Favorite Courts</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-accent px-2 py-1 rounded text-sm">Queen&apos;s Park Courts</span>
                <span className="bg-accent px-2 py-1 rounded text-sm">Trinity Bellwoods Courts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Toronto Courts Overview */}
        <div className="bg-card border border-border rounded-lg p-6 mt-6">
          <h3 className="text-xl font-semibold text-foreground mb-6">Popular Courts in Downtown Toronto</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {torontoCourts.slice(0, 6).map((court) => (
              <div key={court.id} className="border border-border rounded-lg p-4">
                <h4 className="font-medium text-foreground mb-1">{court.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">{court.neighborhood}</p>
                <div className="flex flex-wrap gap-1">
                  {court.features.slice(0, 2).map((feature, index) => (
                    <span key={index} className="bg-accent px-2 py-1 rounded text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
} 