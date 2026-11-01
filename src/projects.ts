import { getCollection } from 'astro:content'
import type { Lang } from '~/i18n'

/** Projects for one language, sorted by `order`. Entry ids look like "zh/deadliner-mac". */
export async function getProjects(lang: Lang) {
  const all = await getCollection('projects', (entry) => entry.id.startsWith(`${lang}/`))
  return all
    .map((entry) => ({ ...entry, slug: entry.id.slice(lang.length + 1) }))
    .sort((a, b) => a.data.order - b.data.order)
}
