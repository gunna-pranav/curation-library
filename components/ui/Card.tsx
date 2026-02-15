import React, { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-surface border border-border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow ${className}`}>
      {children}
    </div>
  )
}
