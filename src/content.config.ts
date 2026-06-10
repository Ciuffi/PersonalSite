import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

// generateId keeps the exact filename (minus extension) as the entry id so
// the original site's mixed-case URLs (/projects/DarkSlackApp, /projects/ciuffiDev)
// keep working on case-sensitive GitHub Pages.
const projects = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/projects',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      year: z.string(),
      tags: z.array(z.string()),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      links: z
        .object({
          github: z.string().url().optional(),
          appstore: z.string().url().optional(),
          live: z.string().url().optional(),
        })
        .optional(),
      featured: z.boolean().default(false),
      order: z.number(),
    }),
})

export const collections = { projects }
