'use client'
import { useState } from 'react'
import type { TimelineEntry } from '@/lib/types'
import TimelineItem from './TimelineItem'
import ScrollReveal from './ScrollReveal'

export default function SecondaryExperience({ entries }: { entries: TimelineEntry[] }) {
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
          OTHER EXPERIENCE
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
          transition: 'max-height 0.5s ease',
          opacity: open ? 1 : 0,
          transitionProperty: 'max-height, opacity',
          transitionDuration: '0.5s',
          transitionTimingFunction: 'ease',
        }}
      >
        <div className="relative">
          <div className="timeline-line" />
          {entries.map((entry, i) => (
            <ScrollReveal key={i} direction="left">
              <TimelineItem {...entry} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
