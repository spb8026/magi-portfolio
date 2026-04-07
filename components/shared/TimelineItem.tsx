import type { TimelineEntry } from '@/lib/types'

export default function TimelineItem({ range, role, company, description }: TimelineEntry) {
  return (
    <div className="relative mb-12">
      {/* Diamond bullet */}
      <div className="timeline-bullet" />

      <div
        className="font-orbitron text-[11px] tracking-[2px] mb-1.5"
        style={{ color: 'var(--orange)' }}
      >
        {range}
      </div>
      <h3
        className="font-orbitron font-bold text-[15px] tracking-[2px] mb-1"
        style={{ color: 'var(--cyan)' }}
      >
        {role}
      </h3>
      <div className="text-[12px] tracking-[1px] mb-3" style={{ color: 'var(--text-dim)' }}>
        {company}
      </div>
      <p
        className="text-[12px] leading-[1.8]"
        style={{ color: 'var(--text)' }}
      >
        {description}
      </p>
    </div>
  )
}
