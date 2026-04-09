import type { FileRecord } from '@/lib/types'

export default function FileCard({ id, title, description, status, href }: FileRecord) {
  return (
    <a href={href} style={{ textDecoration: 'none' }} className="file-card-wrapper">
      <div className="file-document" style={{ minHeight: '180px', cursor: 'pointer' }}>
        {/* Header bar */}
        <div
          className="font-orbitron"
          style={{
            background: 'var(--file-header-bg)',
            borderBottom: '1px solid var(--file-border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '8px 12px',
          }}
        >
          <span style={{ color: 'var(--text-dim)', fontSize: '10px', letterSpacing: '2px' }}>
            {id}
          </span>
          <span
            style={{
              background: status === 'ok' ? 'var(--file-badge-ok-bg)' : 'var(--file-badge-warn-bg)',
              color: status === 'ok' ? 'var(--file-badge-ok-text)' : 'var(--file-badge-warn-text)',
              padding: '2px 8px',
              fontSize: '9px',
              letterSpacing: '2px',
              fontWeight: 800,
            }}
          >
            {status === 'ok' ? 'STORED DATA' : 'OFFLINE'}
          </span>
        </div>

        {/* Amber body */}
        <div
          style={{
            background: 'var(--file-bg)',
            padding: '14px 12px',
            minHeight: '120px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <div
            className="font-orbitron"
            style={{
              color: 'var(--file-text)',
              fontSize: '12px',
              letterSpacing: '2px',
              fontWeight: 700,
            }}
          >
            {title}
          </div>
          <div
            style={{
              color: 'var(--file-text-dim)',
              fontSize: '11px',
              lineHeight: '1.6',
              fontFamily: 'var(--font-mono)',
            }}
          >
            {description}
          </div>
          <div
            className="font-orbitron"
            style={{
              marginTop: 'auto',
              color: 'var(--file-text-dim)',
              fontSize: '9px',
              letterSpacing: '2px',
              opacity: 0.6,
            }}
          >
            → VIEW FILE
          </div>
        </div>
      </div>
    </a>
  )
}
