import Link from 'next/link'
import Image from 'next/image'
import { getTennisCourtImages, getTennisPlayerImages } from '@/lib/pexels'

export default async function Home() {
  // Fetch images from Pexels API
  const courtImages = await getTennisCourtImages()
  const playerImages = await getTennisPlayerImages()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 text-primary text-2xl font-bold">🎾</div>
            <h1 className="text-2xl font-bold text-foreground">Smash Court</h1>
          </div>
          <nav className="flex items-center space-x-6">
            <Link href="/login" className="text-foreground hover:text-primary transition-colors">
              Login
            </Link>
            <Link href="/register" className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
              Sign Up
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Connect with Local
          <span className="text-primary block">Tennis Players</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Find players in downtown Toronto, coordinate games, and build your tennis community. 
          Join Smash Court today and never play alone again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/register" className="bg-primary text-primary-foreground px-8 py-3 rounded-md text-lg font-semibold hover:bg-primary/90 transition-colors">
            Sign Up
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center text-foreground mb-12">
          Everything you need to find tennis partners
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl">👥</div>
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-2">Find Players</h4>
            <p className="text-muted-foreground">
              Discover tennis players in downtown Toronto based on skill level, availability, and court preferences.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl">🎾</div>
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-2">Coordinate Games</h4>
            <p className="text-muted-foreground">
              Schedule matches at the top 10 courts in downtown Toronto and organize your tennis activities with ease.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl">💬</div>
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-2">Play Tennis!</h4>
            <p className="text-muted-foreground">
              Meet up, hit the courts, and enjoy real tennis matches with new friends in Toronto.
            </p>
          </div>
        </div>
      </section>

      {/* Toronto Courts Preview */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center text-foreground mb-12">
          Top Courts in Downtown Toronto
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Queen&apos;s Park Tennis Courts", neighborhood: "Downtown", features: ["Historic Location", "Public Transit"] },
            { name: "Trinity Bellwoods Park Courts", neighborhood: "Queen West", features: ["Community Atmosphere", "Cafes Close"] },
            { name: "High Park Tennis Courts", neighborhood: "High Park", features: ["Multiple Courts", "Park Setting"] },
            { name: "Christie Pits Park Courts", neighborhood: "Christie Pits", features: ["Community Events", "Affordable"] },
            { name: "Sherbourne Common Courts", neighborhood: "Waterfront", features: ["Waterfront Location", "Scenic Views"] },
            { name: "Regent Park Courts", neighborhood: "Regent Park", features: ["Modern Facilities", "Public Transit"] },
          ].map((court, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-2">{court.name}</h4>
              <p className="text-sm text-muted-foreground mb-3">{court.neighborhood}</p>
              <div className="flex flex-wrap gap-1">
                {court.features.map((feature, featureIndex) => (
                  <span key={featureIndex} className="bg-accent px-2 py-1 rounded text-xs">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Smash Court. Built with ❤️ for the Toronto tennis community.
          </p>
        </div>
      </footer>
    </div>
  )
} 