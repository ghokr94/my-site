import { getCollection } from 'astro:content'

// Newest first. Drafts are only included on the local dev preview.
export async function getChapters() {
  const chapters = await getCollection('chapters', ({ data }) => import.meta.env.DEV || !data.draft)
  return chapters.sort((a, b) => b.data.chapter - a.data.chapter)
}

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })
}
