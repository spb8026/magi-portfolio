import { projects, academic, timeline } from './data'

const SLUG_OVERRIDES: Record<string, string> = {
  'C++': 'cpp',
  'C#': 'csharp',
  'Next.js': 'nextjs',
}

export function tagToSlug(tag: string): string {
  if (SLUG_OVERRIDES[tag]) return SLUG_OVERRIDES[tag]
  return tag.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')
}

export function getAllTags(): string[] {
  const seen = new Set<string>()
  const all = [
    ...projects.flatMap(p => [...p.tags, ...(p.hiddenTags ?? [])]),
    ...academic.flatMap(a => [...a.tags, ...(a.hiddenTags ?? [])]),
    ...timeline.flatMap(t => [...(t.tags ?? []), ...(t.hiddenTags ?? [])]),
  ]
  return all.filter(t => { const r = !seen.has(t); seen.add(t); return r })
}

export function slugToDisplayName(slug: string): string {
  const found = getAllTags().find(t => tagToSlug(t) === slug)
  return found ?? slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}
