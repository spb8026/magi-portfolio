import type { ReactNode } from 'react'

interface Props {
  title: string
  badge: string
  badgeVariant?: 'ok' | 'warn'
  columns?: [string, string]
  children: ReactNode
}

export default function FileViewer({
  title,
  badge,
  badgeVariant = 'ok',
  columns,
  children,
}: Props) {
  return (
    <div className="file-document">
      {/* Header bar */}
      <div
        className="font-orbitron"
        style={{
          background: 'var(--file-header-bg)',
          borderBottom: '1px solid var(--file-border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 16px',
        }}
      >
        <span
          style={{
            color: 'var(--text)',
            fontSize: '13px',
            letterSpacing: '2px',
            fontWeight: 700,
          }}
        >
          {title}
        </span>
        <span
          style={{
            background: badgeVariant === 'ok' ? 'var(--file-badge-ok-bg)' : 'var(--file-badge-warn-bg)',
            color: badgeVariant === 'ok' ? 'var(--file-badge-ok-text)' : 'var(--file-badge-warn-text)',
            padding: '3px 10px',
            fontSize: '10px',
            letterSpacing: '2px',
            fontWeight: 800,
          }}
        >
          {badge}
        </span>
      </div>

      {/* Column headers */}
      {columns && (
        <div
          className="font-orbitron"
          style={{
            background: 'var(--file-col-header-bg)',
            borderBottom: '1px solid var(--file-border)',
            display: 'grid',
            gridTemplateColumns: '28% 1fr',
            gap: '16px',
            padding: '5px 16px',
          }}
        >
          <span style={{ color: 'var(--file-text-dim)', fontSize: '9px', letterSpacing: '3px' }}>
            {columns[0]}
          </span>
          <span style={{ color: 'var(--file-text-dim)', fontSize: '9px', letterSpacing: '3px' }}>
            {columns[1]}
          </span>
        </div>
      )}

      {/* Amber body */}
      <div style={{ background: 'var(--file-bg)', color: 'var(--file-text)' }}>
        {children}
      </div>
    </div>
  )
}
