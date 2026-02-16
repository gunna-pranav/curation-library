import { client } from '@/lib/sanity'

export async function createCuratedItem(data: any) {
  try {
    const result = await client.create({
      _type: 'curatedItem',
      ...data,
    })
    return result
  } catch (error) {
    console.error('Error creating item:', error)
    throw error
  }
}

export async function updateCuratedItem(id: string, data: any) {
  try {
    const result = await client.patch(id).set(data).commit()
    return result
  } catch (error) {
    console.error('Error updating item:', error)
    throw error
  }
}

export async function deleteCuratedItem(id: string) {
  try {
    const result = await client.delete(id)
    return result
  } catch (error) {
    console.error('Error deleting item:', error)
    throw error
  }
}

export async function createTag(data: { name: string; tagType: string }) {
  try {
    const result = await client.create({
      _type: 'tag',
      ...data,
      usageCount: 0,
    })
    return result
  } catch (error) {
    console.error('Error creating tag:', error)
    throw error
  }
}

export async function incrementTagUsage(tagId: string) {
  try {
    const result = await client
      .patch(tagId)
      .inc({ usageCount: 1 })
      .commit()
    return result
  } catch (error) {
    console.error('Error updating tag:', error)
    throw error
  }
}
