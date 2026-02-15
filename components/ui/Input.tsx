import React, { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export default function Input({
  label,
  error,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col">
      {label && <label className="text-sm font-medium mb-1 text-text-primary">{label}</label>}
      <input
        className={`bg-surface border border-border text-text-primary rounded-md px-3 py-2 focus:outline-none focus:border-accent-primary ${
          error ? 'border-error' : ''
        } ${className}`}
        {...props}
      />
      {error && <span className="text-sm text-error mt-1">{error}</span>}
    </div>
  )
}
