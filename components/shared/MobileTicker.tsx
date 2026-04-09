'use client'

import { activeProjects, heroMessages } from '@/lib/data'
import type { HeroMessage } from '@/lib/types'

type Chunk = { text: string; color: string }
type Segment = Chunk[]

function getMsgLabelColor(type: HeroMessage['type']): string {
  if (type === 'warn') return 'var(--orange)'
  if (type === 'sys')  return 'var(--text-dim)'
  return 'var(--cyan)'
}

function buildSegments(): Segment[] {
  const segs: Segment[] = []

  for (const p of activeProjects) {
    segs.push([
      { text: '[PROJ]',      color: 'var(--orange)'  },
      { text: ' ' + p.code, color: 'var(--orange-dim)' },
      { text: '  FILE:',     color: 'var(--text-dim)' },
      { text: p.name,        color: 'var(--cyan)'     },
      { text: '  STATUS:',   color: 'var(--text-dim)' },
      { text: p.status,      color: p.status.toUpperCase().includes('ACTIVE') ? 'var(--green)' : 'var(--text)' },
      { text: '  PRIORITY:', color: 'var(--text-dim)' },
      { text: p.priority,    color: 'var(--text)'     },
    ])
  }

  for (const m of heroMessages) {
    const labelColor = getMsgLabelColor(m.type)
    segs.push([
      { text: `[${m.type.toUpperCase()}]`, color: labelColor   },
      { text: ' ' + m.header,              color: 'var(--text)' },
    ])
  }

  return segs
}

const SEP: Chunk[] = [{ text: '  //  ', color: 'var(--panel-border)' }]

// Pre-build once at module level — data is static
const segments = buildSegments()

function TickerContent() {
  return (
    <>
      {segments.map((seg, i) => (
        <span key={i}>
          {seg.map((chunk, j) => (
            <span key={j} style={{ color: chunk.color }}>{chunk.text}</span>
          ))}
          {SEP.map((s, k) => (
            <span key={k} style={{ color: s.color }}>{s.text}</span>
          ))}
        </span>
      ))}
    </>
  )
}

export default function MobileTicker() {
  return (
    <div className="mobile-ticker">
      <div className="mobile-ticker-label">MAGI FEED</div>
      <div className="mobile-ticker-track">
        {/* Content doubled for seamless translateX(-50%) loop */}
        <span>
          <TickerContent />
          <TickerContent />
        </span>
      </div>
    </div>
  )
}
