'use client'
import { useState } from 'react'
import type { Project } from '@/lib/types'
import SkillTag from './SkillTag'

export default function ProjectCard({ id, icon, title, description, tags, links, inProgress }: Project) {
  const [hovered, setHovered] = useState(false)
  const hasLinks = !!(links && links.length > 0)

  return (
    <div
      className="project-card-wrapper relative overflow-hidden transition-all duration-400"
      style={{
        background: 'var(--panel-bg)',
        border: '1px solid var(--panel-border)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ID badge */}
      <span
        className="font-orbitron absolute top-2.5 right-3.5 text-[10px] tracking-[2px] z-10"
        style={{ color: 'var(--text-dim)' }}
      >
        {id}
      </span>

      {/* In-progress badge */}
      {inProgress && (
        <span
          className="font-orbitron absolute top-2.5 left-3.5 text-[9px] tracking-[2px] z-10 flex items-center gap-1.5"
          style={{ color: 'var(--cyan)' }}
        >
          <span className="status-dot" />
          IN PROGRESS
        </span>
      )}

      {/* Icon area */}
      <div
        className="card-pattern relative h-[140px] flex justify-center items-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(0,212,255,0.1), rgba(255,136,0,0.05))',
        }}
      >
        <span className="text-[48px] z-10" style={{ filter: 'grayscale(0.2)' }}>
          {icon}
        </span>

        {hasLinks && (
          <div
            className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 px-3 pb-3 flex-wrap"
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'translateY(0)' : 'translateY(6px)',
              transition: 'opacity 0.25s ease, transform 0.25s ease',
              pointerEvents: hovered ? 'auto' : 'none',
            }}
          >
            {links!.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-orbitron text-[10px] tracking-[2px] px-4 py-2 border transition-all duration-200"
                style={{
                  color: 'var(--cyan)',
                  borderColor: 'var(--cyan)',
                  textDecoration: 'none',
                  background: 'rgba(0,0,0,0.6)',
                }}
              >
                ↗ {label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Card body */}
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
    </div>
  )
}
