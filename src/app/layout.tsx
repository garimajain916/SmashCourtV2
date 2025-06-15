import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SessionProvider from '@/components/providers/SessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Smash Court - Connect with Local Tennis Players',
  description: 'Find and connect with local tennis players. Coordinate games and build your tennis community.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <SessionProvider>
          <div className="min-h-screen bg-background text-foreground">
            {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  )
} 