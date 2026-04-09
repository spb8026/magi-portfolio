import type { AcademicEntry } from '@/lib/types'
import SkillTag from './SkillTag'

export default function AcademicCard({ title, description, tags, inProgress }: AcademicEntry) {
  return (
    <div
      className="relative transition-all duration-300 data-card-hover"
      style={{
        background: 'var(--panel-bg)',
        border: '1px solid var(--panel-border)',
        padding: '5px',
      }}
    >
      <div className="flex items-center justify-between mb-2">
        <h3
          className="font-orbitron font-bold text-[12px] tracking-[2px] uppercase"
          style={{ color: 'var(--cyan)' }}
        >
          {title}
        </h3>
        {inProgress && (
          <span
            className="font-orbitron text-[9px] tracking-[2px] flex items-center gap-1.5"
            style={{ color: 'var(--cyan)' }}
          >
            <span className="status-dot" />
            IN PROGRESS
          </span>
        )}
      </div>
      <p className="text-[11px] leading-relaxed mb-3" style={{ color: 'var(--text-dim)' }}>
        {description}
      </p>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => <SkillTag key={tag} tag={tag} />)}
        </div>
      )}
    </div>
  )
}
