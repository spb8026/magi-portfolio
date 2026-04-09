export interface StatRow {
  label: string
  value: string
  active?: boolean // renders a pulsing status indicator before the value
}

export interface SkillEntry {
  name: string
  level: 1 | 2 | 3 | 4 | 5
}

export interface TagGroup {
  label: string
  tags: SkillEntry[]
}

export interface DataCard {
  index: string
  title: string
  body?: string
  info?: string[]
  stats?: StatRow[]
  tags?: string[]
  tagGroups?: TagGroup[]
}

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  id: string
  icon: string
  title: string
  description: string
  tags: string[]
  hiddenTags?: string[]
  links?: ProjectLink[]
  inProgress?: boolean
  secondary?: boolean
}

export interface TimelineEntry {
  range: string
  role: string
  company: string
  description: string
  tags?: string[]
  hiddenTags?: string[]
  secondary?: boolean
}

export interface ContactLink {
  label: string
  href: string
  icon: string
  external?: boolean
}

export interface BootLine {
  text: string
  cls: '' | 'ok' | 'warn' | 'sys'
}

export interface AcademicEntry {
  title: string
  description: string
  tags: string[]
  hiddenTags?: string[]
  inProgress?: boolean
}

export interface ActiveProject {
  code: string   // e.g. "PRJ-001"
  name: string   // short file-style name, e.g. "MAGI_PORTFOLIO"
  tech: string   // e.g. "NEXT.JS / TS"
  status: string // e.g. "IN PROGRESS" | "ACTIVE" | "TESTING"
  priority: string // e.g. "AAA" | "AA" | "A"
}

export interface HeroMessage {
  type: 'warn' | 'info' | 'tip' | 'sys'
  header: string
  lines: string[]
}

export interface FileRecord {
  id: string
  title: string
  description: string
  status: 'ok' | 'offline'
  href: string
}
