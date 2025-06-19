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
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-7 w-7 md:h-8 md:w-8 text-primary text-xl md:text-2xl font-bold">🎾</div>
            <h1 className="text-xl md:text-2xl font-bold text-foreground">Smash Court</h1>
          </div>
          <nav className="flex items-center space-x-3 md:space-x-6">
            <Link href="/login" className="text-sm md:text-base text-foreground hover:text-primary transition-colors">
              Login
            </Link>
            <Button variant="default" size="sm" className="md:text-base" asChild>
              <Link href="/register">Sign Up</Link>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-16 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
          Connect with Local
          <span className="text-primary block mt-1">Tennis Players</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-2">
          Find players in downtown Toronto, coordinate games, and build your tennis community. 
          Join Smash Court today and never play alone again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
          <Button variant="default" size="lg" className="text-base md:text-lg py-5 md:py-6 px-6 md:px-8 w-full sm:w-auto" asChild>
            <Link href="/register">Create Your Free Account</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8 md:mb-12">
          Everything you need to find tennis partners
        </h3>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          <div className="text-center p-4 md:p-6 bg-card/50 rounded-lg border border-border/50">
            <div className="text-sm text-primary font-medium mb-3 md:mb-4">Step 1</div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <h4 className="text-lg md:text-xl font-semibold text-foreground">Find Players</h4>
              <div className="text-xl md:text-2xl">👥</div>
            </div>
            <p className="text-sm md:text-base text-muted-foreground">
              Discover tennis players in downtown Toronto based on skill level, availability, and court preferences.
            </p>
          </div>
          <div className="text-center p-4 md:p-6 bg-card/50 rounded-lg border border-border/50">
            <div className="text-sm text-primary font-medium mb-3 md:mb-4">Step 2</div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <h4 className="text-lg md:text-xl font-semibold text-foreground">Coordinate Games</h4>
              <div className="text-xl md:text-2xl">💬</div>
            </div>
            <p className="text-sm md:text-base text-muted-foreground">
              Schedule matches with players and coordinate game times that work for everyone.
            </p>
          </div>
          <div className="text-center p-4 md:p-6 bg-card/50 rounded-lg border border-border/50">
            <div className="text-sm text-primary font-medium mb-3 md:mb-4">Step 3</div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <h4 className="text-lg md:text-xl font-semibold text-foreground">Play Tennis!</h4>
              <div className="text-xl md:text-2xl">🎾</div>
            </div>
            <p className="text-sm md:text-base text-muted-foreground">
              Meet up, hit the courts, and enjoy real tennis matches with new friends in Toronto.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 text-center">
        <h3 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-3 md:mb-4">
          Simple, Transparent Pricing
        </h3>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto px-2">
          Start your pool today with our limited-time launch offer
        </p>
        
        <div className="max-w-lg mx-auto bg-card border border-border rounded-xl p-6 md:p-8">
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-4">
            <span className="text-2xl md:text-3xl text-muted-foreground line-through">$10</span>
            <span className="text-5xl md:text-6xl font-bold text-foreground">$0</span>
            <span className="text-lg md:text-xl text-muted-foreground">/month</span>
          </div>
          
          <div className="text-primary text-base md:text-lg font-medium mb-6 md:mb-8">
            Limited Time Launch Offer
          </div>
          
          <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 text-left px-2">
            <li className="flex items-center gap-3 text-foreground text-sm md:text-base">
              <div className="text-primary">✓</div>
              Unlimited match scheduling
            </li>
            <li className="flex items-center gap-3 text-foreground text-sm md:text-base">
              <div className="text-primary">✓</div>
              Real-time availability updates
            </li>
            <li className="flex items-center gap-3 text-foreground text-sm md:text-base">
              <div className="text-primary">✓</div>
              All tournament formats included
            </li>
            <li className="flex items-center gap-3 text-foreground text-sm md:text-base">
              <div className="text-primary">✓</div>
              Premium support
            </li>
          </ul>
          
          <Button asChild className="w-full text-base md:text-lg py-5 md:py-6" variant="default" size="lg">
            <Link href="/register">Create Your Free Account</Link>
          </Button>
          
          <p className="text-muted-foreground mt-4 text-xs md:text-sm">
            No credit card required
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-12 md:mt-16">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm md:text-base text-muted-foreground text-center md:text-left">
              © 2024 Smash Court. Built with ❤️ for the Toronto tennis community.
            </p>
            <div className="flex items-center space-x-4 md:space-x-6">
              <Link href="/terms" className="text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="/contact" className="text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 