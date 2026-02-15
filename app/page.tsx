'use client'

import Link from 'next/link'
import { Button, Card } from '@/components/ui'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Curation Library</h1>
          <div className="flex gap-4">
            <Link href="/add" className="text-accent-primary hover:text-accent-secondary">
              Add Item
            </Link>
            <Link href="/library" className="text-accent-primary hover:text-accent-secondary">
              Library
            </Link>
            <Link href="/portfolio" className="text-accent-primary hover:text-accent-secondary">
              Portfolio
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-5xl font-bold mb-4">Capture Your Taste</h2>
        <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
          A personal curation platform for items you find interesting. Organize with intention, share your aesthetic.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="primary">
            <Link href="/add">Start Curating</Link>
          </Button>
          <Button variant="secondary">
            <Link href="/portfolio">View Portfolio</Link>
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-3 gap-6">
        <Card>
          <h3 className="text-xl font-bold mb-2">Paste URL</h3>
          <p className="text-text-secondary">Paste a product URL and we'll automatically extract metadata and images.</p>
        </Card>
        <Card>
          <h3 className="text-xl font-bold mb-2">Organize</h3>
          <p className="text-text-secondary">Filter by sector and tags. Discover patterns in your taste.</p>
        </Card>
        <Card>
          <h3 className="text-xl font-bold mb-2">Share</h3>
          <p className="text-text-secondary">Beautiful public portfolio of your curated items.</p>
        </Card>
      </div>
    </main>
  )
}
