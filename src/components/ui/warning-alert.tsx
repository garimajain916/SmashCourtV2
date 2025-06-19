import React from 'react'
import { AlertTriangle } from 'lucide-react'

interface WarningAlertProps {
  title?: string
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'subtle'
}

export function WarningAlert({ 
  title, 
  children, 
  className = '',
  variant = 'default' 
}: WarningAlertProps) {
  const baseClasses = "flex items-start gap-3 p-4 rounded-lg border"
  const variantClasses = variant === 'default' 
    ? "bg-warning text-warning-foreground border-warning/20" 
    : "bg-warning/10 text-warning-foreground border-warning/20"
  
  return (
    <div className={`${baseClasses} ${variantClasses} ${className}`}>
      <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" />
      <div className="flex-1">
        {title && (
          <h4 className="font-semibold mb-1">{title}</h4>
        )}
        <div className="text-sm">
          {children}
        </div>
      </div>
    </div>
  )
} 