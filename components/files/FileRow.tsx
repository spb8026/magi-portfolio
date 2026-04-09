interface Props {
  label: string
  value?: string
  isSection?: boolean
}

export default function FileRow({ label, value, isSection }: Props) {
  if (isSection) {
    return (
      <div
        className="font-orbitron"
        style={{
          background: 'var(--file-bg-section)',
          borderBottom: '1px solid var(--file-border)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '5px 16px',
        }}
      >
        <span
          style={{
            color: 'var(--file-text)',
            fontSize: '9px',
            letterSpacing: '3px',
            fontWeight: 800,
            opacity: 0.9,
          }}
        >
          {label}
        </span>
        <div style={{ flex: 1, height: '1px', background: 'var(--file-border)' }} />
      </div>
    )
  }

  return (
    <div
      className="file-row"
      style={{
        display: 'grid',
        gridTemplateColumns: '28% 1fr',
        gap: '16px',
        padding: '4px 16px',
        fontSize: '12px',
        lineHeight: '1.6',
        background: 'var(--file-bg)',
      }}
    >
      <span style={{ color: 'var(--file-text-dim)', opacity: 0.85, flexShrink: 0 }}>
        {label}
      </span>
      <span style={{ color: 'var(--file-text)', whiteSpace: 'pre-line' }}>
        {value}
      </span>
    </div>
  )
}
