'use client'

import { useState } from 'react'

interface Props {
  visible: boolean
  terminalWidth?: number
}

const navLinks = [
  { href: '/about',      label: 'ABOUT'      },
  { href: '/projects',   label: 'PROJECTS'   },
  { href: '/experience', label: 'EXPERIENCE' },
  { href: '/records',    label: 'RECORDS'    },
]

export default function Header({ visible, terminalWidth = 0 }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header
        id="main-header"
        className="fixed top-0 left-0 z-[100] flex justify-between items-center px-6 md:px-10 py-4 md:py-6 transition-opacity duration-700"
        style={{
          right: `${terminalWidth}px`,
          background: 'linear-gradient(180deg, var(--bg) 0%, transparent 100%)',
          opacity: visible ? 1 : 0,
        }}
      >
        <a href="/" className="flex items-center gap-4" style={{ textDecoration: 'none' }}>
          <div
            className="font-orbitron font-black text-[16px] md:text-[20px] tracking-[3px]"
            style={{ color: 'var(--orange)', textShadow: '0 0 20px var(--orange-glow)' }}
          >
            SHAWN BRODERICK
          </div>
        </a>

        {/* Hamburger button — always visible */}
        <button
          className="flex flex-col gap-[5px] justify-center items-end w-10 h-10"
          style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <span style={{ fontSize: '18px', color: 'var(--cyan)', lineHeight: 1, display: 'block' }}>✕</span>
          ) : (
            <>
              <span style={{ width: '22px', height: '2px', background: 'var(--cyan)', display: 'block', boxShadow: '0 0 6px var(--cyan-glow)' }} />
              <span style={{ width: '22px', height: '2px', background: 'var(--cyan)', display: 'block', boxShadow: '0 0 6px var(--cyan-glow)' }} />
              <span style={{ width: '14px', height: '2px', background: 'var(--cyan)', display: 'block', boxShadow: '0 0 6px var(--cyan-glow)' }} />
            </>
          )}
        </button>
      </header>

      {/* Dropdown — full-width column, all screen sizes */}
      {menuOpen && (
        <div
          className="fixed z-[99]"
          style={{
            top: '64px',
            left: 0,
            right: `${terminalWidth}px`,
            background: 'var(--panel-bg)',
            borderBottom: '2px solid var(--cyan-dim)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.7)',
          }}
        >
          {/* Header row */}
          <div
            style={{
              padding: '8px 24px',
              borderBottom: '1px solid var(--panel-border)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span
              className="font-orbitron text-[9px] tracking-[3px]"
              style={{ color: 'var(--text-dim)' }}
            >
              MAGI SYSTEM // NAVIGATION
            </span>
            <span className="status-dot" />
          </div>

          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="nav-link block text-[13px] tracking-[3px] uppercase px-8 py-5 transition-all duration-300"
              style={{
                color: 'var(--text-dim)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--panel-border)',
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
