import type { AcademicEntry } from '@/lib/types'

export default function AcademicCard({ title, description, tags }: AcademicEntry) {
  return (
    <div
      className="relative p-5 transition-all duration-300 data-card-hover"
      style={{
        background: 'var(--panel-bg)',
        border: '1px solid var(--panel-border)',
      }}
    >
      <h3
        className="font-orbitron font-bold text-[12px] tracking-[2px] uppercase mb-2"
        style={{ color: 'var(--cyan)' }}
      >
        {title}
      </h3>
      <p className="text-[11px] leading-relaxed mb-3" style={{ color: 'var(--text-dim)' }}>
        {description}
      </p>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] tracking-[1px] uppercase px-2 py-0.5"
              style={{ color: 'var(--orange)', border: '1px solid var(--orange-dim)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
