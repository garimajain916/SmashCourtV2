import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"
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
            <Button variant="default" asChild>
              <Link href="/register">Sign Up</Link>
            </Button>
            <ModeToggle />
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
          <Button variant="default" asChild>
            <Link href="/register">Sign Up</Link>
          </Button>
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
              <div className="text-2xl">💬</div>
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-2">Coordinate Games</h4>
            <p className="text-muted-foreground">
              Schedule matches at the top 10 courts in downtown Toronto and organize your tennis activities with ease.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl">🎾</div>
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-2">Play Tennis!</h4>
            <p className="text-muted-foreground">
              Meet up, hit the courts, and enjoy real tennis matches with new friends in Toronto.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h3 className="text-4xl font-bold text-center text-foreground mb-4">
          Simple, Transparent Pricing
        </h3>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Start your pool today with our limited-time launch offer
        </p>
        
        <div className="max-w-lg mx-auto bg-card border border-border rounded-xl p-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-3xl text-muted-foreground line-through">$10</span>
            <span className="text-6xl font-bold text-foreground">$0</span>
            <span className="text-xl text-muted-foreground">/month</span>
          </div>
          
          <div className="text-primary text-lg font-medium mb-8">
            Limited Time Launch Offer
          </div>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-foreground">
              <div className="text-primary">✓</div>
              Unlimited match scheduling
            </li>
            <li className="flex items-center gap-3 text-foreground">
              <div className="text-primary">✓</div>
              Real-time availability updates
            </li>
            <li className="flex items-center gap-3 text-foreground">
              <div className="text-primary">✓</div>
              All tournament formats included
            </li>
            <li className="flex items-center gap-3 text-foreground">
              <div className="text-primary">✓</div>
              Premium support
            </li>
          </ul>
          
          <Button asChild className="w-full text-lg py-6" variant="default" size="lg">
            <Link href="/register">Create Your Free Account</Link>
          </Button>
          
          <p className="text-muted-foreground mt-4 text-sm">
            No credit card required
          </p>
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