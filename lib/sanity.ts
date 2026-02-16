import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiToken = process.env.SANITY_API_TOKEN

export const client = createClient({
  projectId,
  dataset,
  useCdn: false,
  apiVersion: '2024-02-16',
  token: apiToken,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
