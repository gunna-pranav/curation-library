import useSWR from 'swr'
import { client } from '@/lib/sanity'

interface Tag {
  _id: string
  _createdAt: string
  name: string
  tagType: string
  usageCount: number
}

const query = `*[_type == "tag"] | order(name asc) {
  _id,
  _createdAt,
  name,
  tagType,
  usageCount
}`

async function fetchTags() {
  const tags = await client.fetch(query)
  return tags
}

export function useTags() {
  const { data, error, isLoading, mutate } = useSWR<Tag[]>(
    'tags',
    fetchTags,
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
    }
  )

  return {
    tags: data || [],
    error,
    isLoading,
    mutate,
  }
}
