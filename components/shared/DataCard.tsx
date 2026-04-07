import type { DataCard as DataCardType } from '@/lib/types'
import SkillTag from './SkillTag'

export default function DataCard({ index, title, body, stats, tags }: DataCardType) {
  return (
    <div
      className="relative transition-all duration-300 group"
      style={{
        background: 'var(--panel-bg)',
        border: '1px solid var(--panel-border)',
        padding: '10px',
      }}
    >
      {/* Index label */}
      <span
        className="font-orbitron absolute top-2 right-3 text-[10px] tracking-[2px]"
        style={{ color: 'var(--text-dim)' }}
      >
        {index}
      </span>

      <h3
        className="font-orbitron font-bold text-[13px] tracking-[3px] uppercase mb-3"
        style={{ color: 'var(--orange)' }}
      >
        {title}
      </h3>

      {body && (
        <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text)' }}>
          {body}
        </p>
      )}

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => <SkillTag key={tag} tag={tag} />)}
        </div>
      )}

      {stats && (
        <div>
          {stats.map((row, i) => (
            <div
              key={i}
              className="flex justify-between items-center py-2 text-[12px]"
              style={{
                borderBottom: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
              }}
            >
              <span style={{ color: 'var(--text-dim)' }}>{row.label}</span>
              <span className="font-bold" style={{ color: 'var(--cyan)' }}>
                {row.active && <span className="status-dot" />}
                {row.value}
              </span>
            </div>
          ))}
        </div>
      )}

    </div>
  )
}
