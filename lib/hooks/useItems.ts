import useSWR from 'swr'
import { client } from '@/lib/sanity'

interface CuratedItem {
  _id: string
  _createdAt: string
  _updatedAt: string
  productName: string
  companyName: string
  sector: string
  productUrl: string
  images: Array<{
    _key: string
    _type: string
    asset: {
      _ref: string
      _type: string
    }
    alt?: string
  }>
  thumbnailImage: {
    _type: string
    asset: {
      _ref: string
      _type: string
    }
    hotspot?: boolean
  }
  yourNote?: string
  tags: Array<{
    _ref: string
    _key: string
  }>
  discoveryDate: string
  isPublic: boolean
}

const query = `*[_type == "curatedItem"] | order(discoveryDate desc) {
  _id,
  _createdAt,
  _updatedAt,
  productName,
  companyName,
  sector,
  productUrl,
  images,
  thumbnailImage,
  yourNote,
  tags,
  discoveryDate,
  isPublic
}`

async function fetchItems() {
  const items = await client.fetch(query)
  return items
}

export function useItems() {
  const { data, error, isLoading, mutate } = useSWR<CuratedItem[]>(
    'items',
    fetchItems,
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
    }
  )

  return {
    items: data || [],
    error,
    isLoading,
    mutate,
  }
}
