import type { Project } from '@/lib/types'
import SkillTag from './SkillTag'

export default function ProjectCard({ id, icon, title, description, tags, href }: Project) {
  const className = "project-card-wrapper relative overflow-hidden transition-all duration-400 block"
  const style = {
    background: 'var(--panel-bg)',
    border: '1px solid var(--panel-border)',
    textDecoration: 'none' as const,
  }

  const body = (
    <>
      <span
        className="font-orbitron absolute top-2.5 right-3.5 text-[10px] tracking-[2px] z-10"
        style={{ color: 'var(--text-dim)' }}
      >
        {id}
      </span>

      <div
        className="card-pattern relative h-[140px] flex justify-center items-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(0,212,255,0.1), rgba(255,136,0,0.05))',
        }}
      >
        <span className="text-[48px] z-10" style={{ filter: 'grayscale(0.2)' }}>
          {icon}
        </span>
      </div>

      <div style={{ padding: '5px' }}>
        <h3
          className="font-orbitron font-bold text-[14px] tracking-[2px] mb-2"
          style={{ color: 'var(--cyan)' }}
        >
          {title}
        </h3>
        <p className="text-[12px] leading-[1.7] mb-4" style={{ color: 'var(--text-dim)' }}>
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => <SkillTag key={tag} tag={tag} />)}
        </div>
      </div>

    </>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} style={style}>
        {body}
      </a>
    )
  }

  return (
    <div className={className} style={style}>
      {body}
    </div>
  )
}
