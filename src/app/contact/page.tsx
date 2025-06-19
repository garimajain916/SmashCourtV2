import { Button } from "@/components/ui/button"
import { PageBreadcrumb } from "@/components/PageBreadcrumb"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-lg mx-auto">
          <div className="mb-6">
            <PageBreadcrumb items={[{ label: "Contact" }]} />
          </div>
          
          <h1 className="text-3xl font-bold text-foreground mb-6">Contact Us</h1>
          <p className="text-muted-foreground mb-8">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          
          <form 
            action="https://formspree.io/f/garimajain916@gmail.com" 
            method="POST"
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={4}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                placeholder="How can we help you?"
              />
            </div>
            
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
} 