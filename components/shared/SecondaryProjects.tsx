'use client'
import { useState } from 'react'
import type { Project } from '@/lib/types'
import ProjectCard from './ProjectCard'

export default function SecondaryProjects({ projects }: { projects: Project[] }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ marginTop: '48px' }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '0 0 16px 0',
          width: '100%',
        }}
      >
        <span
          style={{
            color: 'var(--text-dim)',
            fontSize: '11px',
            letterSpacing: '3px',
            fontFamily: 'var(--font-orbitron), Orbitron, sans-serif',
            fontWeight: 700,
            textTransform: 'uppercase',
          }}
        >
          OTHER PROJECTS
        </span>
        <span
          style={{
            flex: 1,
            height: '1px',
            background: 'var(--panel-border)',
          }}
        />
        <span
          style={{
            color: 'var(--text-dim)',
            fontSize: '10px',
            letterSpacing: '2px',
            fontFamily: 'var(--font-mono), monospace',
            transition: 'transform 0.3s ease',
            display: 'inline-block',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          ▼
        </span>
      </button>

      <div
        style={{
          overflow: 'hidden',
          maxHeight: open ? '2000px' : '0',
          opacity: open ? 1 : 0,
          transitionProperty: 'max-height, opacity',
          transitionDuration: '0.5s',
          transitionTimingFunction: 'ease',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}
