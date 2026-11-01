import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

// One Markdown file per project and language: src/content/projects/<lang>/<slug>.md
const projects = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      role: z.string(),
      period: z.string(),
      order: z.number(),
      /** Card size in the bento grid. */
      size: z.enum(['wide', 'tall', 'normal']).default('normal'),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
      links: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
    }),
})

export const collections = { projects }
