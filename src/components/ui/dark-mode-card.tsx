import React from 'react'

interface DarkModeCardProps {
  children: React.ReactNode
  className?: string
}

export function DarkModeCard({ children, className = '' }: DarkModeCardProps) {
  return (
    <div className={`bg-zinc-950 dark:bg-white p-6 rounded-lg border border-zinc-800 dark:border-zinc-200 ${className}`}>
      {children}
    </div>
  )
} 