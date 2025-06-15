import Link from 'next/link'

export default function ProfilePage() {
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
            <Link href="/dashboard" className="text-foreground hover:text-primary transition-colors">
              Dashboard
            </Link>
            <Link href="/search" className="text-foreground hover:text-primary transition-colors">
              Find Players
            </Link>
            <Link href="/messages" className="text-foreground hover:text-primary transition-colors">
              Messages
            </Link>
            <Link href="/profile" className="text-primary font-medium">
              Profile
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">
              <div className="text-xl">←</div>
            </Link>
            <h2 className="text-3xl font-bold text-foreground">Edit Profile</h2>
          </div>

          <form className="space-y-8">
            {/* Basic Information */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">Basic Information</h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    defaultValue="John"
                    className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    defaultValue="Doe"
                    className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-foreground mb-2">
                  Bio
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  rows={3}
                  placeholder="Tell other players about yourself..."
                  className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                />
              </div>
            </div>

            {/* NTRP Rating */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">NTRP Rating</h3>
              
              <div>
                <label htmlFor="ntrpRating" className="block text-sm font-medium text-foreground mb-2">
                  Current NTRP Rating
                </label>
                <select
                  id="ntrpRating"
                  name="ntrpRating"
                  defaultValue="3.0"
                  className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  <option value="1.0">1.0 - Beginner</option>
                  <option value="1.5">1.5 - Beginner</option>
                  <option value="2.0">2.0 - Beginner</option>
                  <option value="2.5">2.5 - Beginner/Intermediate</option>
                  <option value="3.0">3.0 - Intermediate</option>
                  <option value="3.5">3.5 - Intermediate</option>
                  <option value="4.0">4.0 - Intermediate/Advanced</option>
                  <option value="4.5">4.5 - Advanced</option>
                  <option value="5.0">5.0 - Advanced</option>
                  <option value="5.5">5.5 - Advanced</option>
                  <option value="6.0">6.0 - Professional</option>
                  <option value="6.5">6.5 - Professional</option>
                  <option value="7.0">7.0 - World Class</option>
                </select>
                <p className="text-sm text-muted-foreground mt-2">
                  NTRP (National Tennis Rating Program) ratings help match you with players of similar skill level.
                </p>
              </div>
            </div>

            {/* Court Preferences */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">Favorite Courts</h3>
              
              <div>
                <label htmlFor="courts" className="block text-sm font-medium text-foreground mb-2">
                  Select your favorite courts in downtown Toronto
                </label>
                <select
                  id="courts"
                  name="courts"
                  multiple
                  className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  <option value="central-park">Central Park Courts</option>
                  <option value="queens-park">Queen's Park Tennis Courts</option>
                  <option value="trinity-bellwoods">Trinity Bellwoods Park Courts</option>
                  <option value="high-park">High Park Tennis Courts</option>
                  <option value="christie-pits">Christie Pits Park Courts</option>
                  <option value="dovercourt-park">Dovercourt Park Courts</option>
                  <option value="stanley-park">Stanley Park Courts</option>
                  <option value="sherbourne-common">Sherbourne Common Courts</option>
                  <option value="regent-park">Regent Park Courts</option>
                  <option value="corktown-common">Corktown Common Courts</option>
                </select>
                <p className="text-sm text-muted-foreground mt-2">
                  Select the courts you frequently play at in downtown Toronto.
                </p>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">Availability</h3>
              
              <div className="space-y-4">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                  <div key={day} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground w-24">{day}</span>
                    <div className="flex space-x-2">
                      {['Morning', 'Afternoon', 'Evening'].map((time) => (
                        <label key={time} className="flex items-center">
                          <input
                            type="checkbox"
                            name={`availability.${day.toLowerCase()}.${time.toLowerCase()}`}
                            className="rounded border-input bg-background text-primary focus:ring-ring"
                          />
                          <span className="ml-2 text-sm text-foreground">{time}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-6 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors flex items-center space-x-2"
              >
                <div className="text-sm">💾</div>
                <span>Save Changes</span>
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
} 