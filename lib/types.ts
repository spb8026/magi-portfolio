export interface StatRow {
  label: string
  value: string
  active?: boolean // renders a pulsing status indicator before the value
}

export interface DataCard {
  index: string
  title: string
  body?: string
  stats?: StatRow[]
  tags?: string[]
}

export interface Project {
  id: string
  icon: string
  title: string
  description: string
  tags: string[]
  href?: string
}

export interface TimelineEntry {
  range: string
  role: string
  company: string
  description: string
  tags?: string[]
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
}

export interface ActiveProject {
  code: string   // e.g. "PRJ-001"
  name: string   // short file-style name, e.g. "MAGI_PORTFOLIO"
  tech: string   // e.g. "NEXT.JS / TS"
  status: string // e.g. "IN PROGRESS" | "ACTIVE" | "TESTING"
  priority: string // e.g. "AAA" | "AA" | "A"
}
