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
  }
  yourNote?: string
  tags: Array<{
    _ref: string
    _key: string
  }>
  discoveryDate: string
  isPublic: boolean
}

const query = `*[_type == "curatedItem" && _id == $id][0] {
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

async function fetchItemById(id: string) {
  const item = await client.fetch(query, { id })
  return item
}

export function useItemById(id: string | null) {
  const { data, error, isLoading, mutate } = useSWR(
    id ? `item-${id}` : null,
    id ? () => fetchItemById(id) : null,
    {
      revalidateOnFocus: false,
    }
  )

  return {
    item: (data as CuratedItem | undefined) || null,
    error,
    isLoading,
    mutate,
  }
}
