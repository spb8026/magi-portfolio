'use client'

import { useEffect, useRef, useState } from 'react'
import GlitchText from './GlitchText'
import { activeProjects } from '@/lib/data'
import type { ActiveProject } from '@/lib/types'

const TYPE_SPEED   = 28   // ms per char typing in
const DELETE_SPEED = 14   // ms per char typing out
const HOLD_MS      = 2800 // ms to hold after fully typed

function buildLines(p: ActiveProject) {
  return [
    p.code,
    `FILE:${p.name}`,
    `TECH:${p.tech}`,
    `STATUS:${p.status}`,
    `PRIORITY:${p.priority}`,
  ]
}

function buildText(p: ActiveProject) {
  return buildLines(p).join('\n')
}

const panelStyle = {
  background: 'var(--panel-bg)',
  border: '1px solid var(--panel-border)',
  position: 'relative' as const,
  overflow: 'hidden' as const,
  display: 'flex',
  flexDirection: 'column' as const,
  justifyContent: 'center',
  alignItems: 'center',
  padding: '16px',
  cursor: 'pointer',
  transition: 'all 0.4s ease',
  textDecoration: 'none' as const,
}

const panelLabelStyle = {
  fontSize: 'clamp(12px, 1.6vw, 20px)',
  letterSpacing: '3px',
  color: 'var(--cyan)',
  textShadow: '0 0 15px var(--cyan-glow)',
  whiteSpace: 'nowrap' as const,
  fontWeight: 'bold' as const,
  zIndex: 1,
  fontFamily: 'var(--font-orbitron), Orbitron, sans-serif',
}

const panelSubStyle = {
  fontSize: '10px',
  color: 'var(--text-dim)',
  letterSpacing: '2px',
  marginTop: '6px',
  zIndex: 1,
}

interface Props {
  startTyping: boolean
}

export default function MagiHero({ startTyping }: Props) {
  const [projIndex, setProjIndex] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const phase    = useRef<'in' | 'hold' | 'out'>('in')
  const countRef = useRef(0)
  const timer    = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (!startTyping) return

    const fullText = buildText(activeProjects[projIndex])
    countRef.current = 0
    phase.current = 'in'
    setCharCount(0)

    function tick() {
      if (timer.current) clearTimeout(timer.current)

      if (phase.current === 'in') {
        countRef.current = Math.min(countRef.current + 1, fullText.length)
        setCharCount(countRef.current)
        if (countRef.current >= fullText.length) {
          phase.current = 'hold'
          timer.current = setTimeout(tick, HOLD_MS)
        } else {
          timer.current = setTimeout(tick, TYPE_SPEED)
        }
      } else if (phase.current === 'hold') {
        phase.current = 'out'
        timer.current = setTimeout(tick, DELETE_SPEED)
      } else {
        countRef.current = Math.max(countRef.current - 1, 0)
        setCharCount(countRef.current)
        if (countRef.current <= 0) {
          setProjIndex((i) => (i + 1) % activeProjects.length)
        } else {
          timer.current = setTimeout(tick, DELETE_SPEED)
        }
      }
    }

    timer.current = setTimeout(tick, TYPE_SPEED)
    return () => { if (timer.current) clearTimeout(timer.current) }
  }, [projIndex, startTyping])

  const fullLines = buildLines(activeProjects[projIndex])
  let charsLeft = charCount
  const renderedLines = fullLines.map((line) => {
    if (charsLeft <= 0) return ''
    const slice = line.slice(0, charsLeft)
    charsLeft -= line.length + 1 // +1 for '\n'
    return slice
  })

  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center relative"
      style={{ height: '100vh', padding: '80px 40px 124px' }}
    >
      {/* MAGI cross grid */}
      <div
        className="magi-outer-border relative"
        style={{
          width: 'min(1100px, 94vw)',
          height: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateRows: '1fr 1fr 0.25fr',
          gap: '6px',
          padding: '20px',
          border: '2px solid var(--panel-border)',
          background: 'var(--bg)',
          boxShadow: 'inset 0 0 60px rgba(0,0,0,0.8), 0 0 40px rgba(0,212,255,0.05)',
        }}
      >
        {/* JP corner labels — hidden on mobile via responsive style */}
        <div
          className="font-jp font-black absolute top-6 left-6 z-[5] hide-mobile"
          style={{ fontSize: 'clamp(20px, 3vw, 32px)', color: 'var(--cyan)', letterSpacing: '12px' }}
        >
          質 問
        </div>
        <div
          className="font-jp font-black absolute top-6 right-6 z-[5] hide-mobile"
          style={{ fontSize: 'clamp(20px, 3vw, 32px)', color: 'var(--cyan)', letterSpacing: '12px' }}
        >
          解 決
        </div>

        {/* Info badge — right edge, vertically centered */}
        <div
          className="font-jp font-black absolute z-[5] hide-mobile"
          style={{
            top: '50%',
            right: '24px',
            transform: 'translateY(-50%)',
            background: 'var(--orange)',
            color: 'var(--bg)',
            fontSize: '14px',
            padding: '6px 10px',
            letterSpacing: '4px',
          }}
        >
          情 報
        </div>

        {/* Left meta block — rotating active projects, positioned below 質 問 */}
        <div
          className="absolute z-[5] hide-mobile"
          style={{ top: '80px', left: '30px' }}
        >
          {/* Code heading */}
          <div
            className="font-orbitron font-bold"
            style={{ color: 'var(--orange)', fontSize: 'clamp(16px, 2.2vw, 26px)', letterSpacing: '2px', minHeight: '1.4em' }}
          >
            {renderedLines[0]}
            {renderedLines[0].length < fullLines[0].length && (
              <span className="typing-cursor" />
            )}
          </div>

          {/* Metadata lines */}
          <div
            className="text-[13px] mt-1"
            style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-mono), monospace', lineHeight: '1.8' }}
          >
            {renderedLines.slice(1).map((line, i) => (
              <div key={i} style={{ minHeight: '1.8em' }}>
                {line}
                {/* Show cursor on the last non-empty, still-typing line */}
                {line.length > 0 && line.length < fullLines[i + 1].length && (
                  <span className="typing-cursor" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Row 1: empty / BALTHASAR / empty */}
        <div />
        <a href="/projects" className="magi-panel" style={{ ...panelStyle, gridColumn: 2, gridRow: 1 }}>
          <div style={panelLabelStyle}>PROJECTS</div>
          <div style={panelSubStyle}>BALTHASAR · 2</div>
        </a>
        <div />

        {/* Row 2: CASPER / MAGI / MELCHIOR */}
        <a href="/experience" className="magi-panel" style={{ ...panelStyle, gridColumn: 1, gridRow: 2 }}>
          <div style={panelLabelStyle}>EXPERIENCE</div>
          <div style={panelSubStyle}>CASPER · 3</div>
        </a>

        <div
          style={{
            gridColumn: 2,
            gridRow: 2,
            background: 'transparent',
            border: '1px solid var(--orange-dim)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            padding: '20px',
          }}
        >
          {/* Name */}
          <span
            className="font-orbitron font-black"
            style={{
              fontSize: 'clamp(18px, 3.5vw, 32px)',
              color: 'var(--orange)',
              letterSpacing: '6px',
              textShadow: '0 0 30px var(--orange-glow)',
              textAlign: 'center',
              display: 'block',
              zIndex: 1,
            }}
          >
            <GlitchText text="SHAWN BRODERICK" />
          </span>

          {/* Divider */}
          <div style={{ width: '60%', height: '1px', background: 'var(--orange-dim)' }} />

          {/* Subtitle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', zIndex: 1 }}>
            <span style={{ color: 'var(--cyan)', fontSize: '10px', fontFamily: 'var(--font-mono), monospace' }}>//</span>
            <span
              className="font-orbitron"
              style={{
                fontSize: 'clamp(9px, 1.2vw, 13px)',
                color: 'var(--cyan)',
                letterSpacing: '4px',
                textShadow: '0 0 12px var(--cyan-glow)',
              }}
            >
              SOFTWARE DEVELOPER
            </span>
            <span style={{ color: 'var(--cyan)', fontSize: '10px', fontFamily: 'var(--font-mono), monospace' }}>//</span>
          </div>
        </div>

        <a href="/about" className="magi-panel" style={{ ...panelStyle, gridColumn: 3, gridRow: 2 }}>
          <div style={panelLabelStyle}>ABOUT ME</div>
          <div style={panelSubStyle}>MELCHIOR · 1</div>
        </a>

        {/* Row 3: empty */}
        <div /><div /><div />
      </div>

    </section>
  )
}
