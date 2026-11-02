import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const chapters = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/chapters' }),
  schema: z.object({
    title: z.string(),
    chapter: z.number(),
    date: z.coerce.date(),
    description: z.string(),
    // Drafts show on the local preview but are left out of the live site.
    draft: z.boolean().default(false),
  }),
})

export const collections = { chapters }
