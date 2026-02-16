'use client'

import Link from 'next/link'
import { useItems, useTags } from '@/lib/hooks'
import { Button, Card } from '@/components/ui'

export default function Home() {
  const { items, isLoading: itemsLoading, error: itemsError } = useItems()
  const { tags, isLoading: tagsLoading, error: tagsError } = useTags()

  return (
    <main className="min-h-screen bg-background text-text-primary">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Curation Library</h1>
          <div className="flex gap-4">
            <Link href="/library" className="text-accent-primary hover:text-accent-secondary">
              Library
            </Link>
            <Link href="/admin/library" className="text-accent-primary hover:text-accent-secondary">
              Admin
            </Link>
          </div>
        </div>
      </nav>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <div className="text-sm text-text-secondary">Curated Items</div>
            <div className="text-4xl font-bold">
              {itemsLoading ? '...' : items.length}
            </div>
            {itemsError && <div className="text-error text-sm mt-2">Error loading items</div>}
          </Card>
          <Card>
            <div className="text-sm text-text-secondary">Tags</div>
            <div className="text-4xl font-bold">
              {tagsLoading ? '...' : tags.length}
            </div>
            {tagsError && <div className="text-error text-sm mt-2">Error loading tags</div>}
          </Card>
        </div>
      </div>
    </main>
  )
}
