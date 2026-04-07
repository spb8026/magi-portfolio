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
  position: 'relative' as const,
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

interface Bar { x1: number; y1: number; x2: number; y2: number }
interface TitleCenter { y: number; maxWidth: number }

export default function MagiHero({ startTyping }: Props) {
  const [projIndex, setProjIndex] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const phase    = useRef<'in' | 'hold' | 'out'>('in')
  const countRef = useRef(0)
  const timer    = useRef<ReturnType<typeof setTimeout> | null>(null)

  const containerRef  = useRef<HTMLDivElement>(null)
  const balthasarRef  = useRef<HTMLAnchorElement>(null)
  const casperRef     = useRef<HTMLAnchorElement>(null)
  const melchiorRef   = useRef<HTMLAnchorElement>(null)
  const [bars, setBars] = useState<Bar[]>([])
  const [titleCenter, setTitleCenter] = useState<TitleCenter | null>(null)

  useEffect(() => {
    function calcBars() {
      const cr = containerRef.current?.getBoundingClientRect()
      const br = balthasarRef.current?.getBoundingClientRect()
      const ca = casperRef.current?.getBoundingClientRect()
      const me = melchiorRef.current?.getBoundingClientRect()
      if (!cr || !br || !ca || !me) return

      // Connection points derived from each panel's clip-path percentages
      const bbl = { x: br.left - cr.left + br.width * 0.25, y: br.bottom - cr.top }   // BALTHASAR bottom-left  (25%,100%)
      const bbr = { x: br.left - cr.left + br.width * 0.75, y: br.bottom - cr.top }   // BALTHASAR bottom-right (75%,100%)
      const ctr = { x: ca.right - cr.left,                   y: ca.top - cr.top + ca.height * 0.44 } // CASPER top-right cut   (100%,44%)
      const mtl = { x: me.left - cr.left,                    y: me.top - cr.top + me.height * 0.44 } // MELCHIOR top-left cut  (0%,44%)

      setBars([
        { x1: bbl.x, y1: bbl.y, x2: ctr.x, y2: ctr.y }, // BALTHASAR → CASPER
        { x1: bbr.x, y1: bbr.y, x2: mtl.x, y2: mtl.y }, // BALTHASAR → MELCHIOR
        { x1: ctr.x, y1: ctr.y, x2: mtl.x, y2: mtl.y }, // CASPER → MELCHIOR
      ])

      // Title center = midpoint between BALTHASAR bottom and CASPER/MELCHIOR cut level
      const titleY = (bbl.y + ctr.y) / 2
      // At titleY, interpolate along each diagonal bar to find the available width
      const t = (titleY - bbl.y) / (ctr.y - bbl.y)
      const leftX  = bbl.x + t * (ctr.x - bbl.x)
      const rightX = bbr.x + t * (mtl.x - bbr.x)
      setTitleCenter({ y: titleY, maxWidth: rightX - leftX - 24 })
    }

    calcBars()
    const ro = new ResizeObserver(calcBars)
    if (containerRef.current) ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

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
        ref={containerRef}
        className="magi-outer-border relative"
        style={{
          width: 'min(1500px, 96vw)',
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
        {/* Connecting bars between the three cores */}
        <svg
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%', height: '100%',
            pointerEvents: 'none',
            zIndex: 3,
            overflow: 'visible',
          }}
        >
          {bars.map((b, i) => (
            <line
              key={i}
              x1={b.x1} y1={b.y1}
              x2={b.x2} y2={b.y2}
              stroke="var(--orange)"
              strokeWidth="4"
              strokeLinecap="butt"
              style={{ filter: 'drop-shadow(0 0 6px var(--orange-glow))' }}
            />
          ))}
        </svg>

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
        <a ref={balthasarRef} href="/projects" className="magi-panel magi-panel-balthasar" style={{ ...panelStyle, gridColumn: 2, gridRow: 1 }}>
          <div style={panelLabelStyle}>PROJECTS</div>
          <div style={panelSubStyle}>BALTHASAR · 2</div>
        </a>
        <div />

        {/* Row 2: CASPER / MAGI / MELCHIOR */}
        <a ref={casperRef} href="/experience" className="magi-panel magi-panel-casper" style={{ ...panelStyle, gridColumn: 1, gridRow: 2 }}>
          <div style={panelLabelStyle}>EXPERIENCE</div>
          <div style={panelSubStyle}>CASPER · 3</div>
        </a>

        <div
          style={{
            position: 'absolute',
            top: titleCenter ? `${titleCenter.y}px` : '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            background: 'transparent',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            padding: '20px',
            pointerEvents: 'none',
            width: titleCenter ? `${titleCenter.maxWidth}px` : undefined,
          }}
        >
          {/* Name */}
          <span
            className="font-orbitron font-black"
            style={{
              fontSize: 'clamp(14px, 2.4vw, 28px)',
              color: 'var(--orange)',
              letterSpacing: '4px',
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

        <a ref={melchiorRef} href="/about" className="magi-panel magi-panel-melchior" style={{ ...panelStyle, gridColumn: 3, gridRow: 2 }}>
          <div style={panelLabelStyle}>ABOUT ME</div>
          <div style={panelSubStyle}>MELCHIOR · 1</div>
        </a>

        {/* Row 3: empty */}
        <div /><div /><div />
      </div>

    </section>
  )
}
