'use client'

import { useState } from 'react'
import { TERMINAL_WIDTH } from '@/lib/constants'

export { TERMINAL_WIDTH }

const BAR_HEIGHT = 88

export { BAR_HEIGHT }

export default function MagiTerminal() {
  const [question, setQuestion] = useState('')

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: `${BAR_HEIGHT}px`,
        zIndex: 150,
        borderTop: '1px solid var(--cyan-dim)',
        background: 'var(--panel-bg)',
        boxShadow: '0 -4px 30px rgba(0,212,255,0.06)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
      }}
    >
      {/* Branding column */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 24px',
          gap: '6px',
          borderRight: '1px solid var(--panel-border)',
          background: 'rgba(0,212,255,0.06)',
          flexShrink: 0,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            className="font-orbitron font-black text-[11px] tracking-[3px]"
            style={{ color: 'var(--orange)', textShadow: '0 0 10px var(--orange-glow)' }}
          >
            MAGI
          </span>
          <span
            className="font-orbitron text-[9px] tracking-[2px]"
            style={{ color: 'var(--text-dim)' }}
          >
            // QUERY INTERFACE
          </span>
          <span className="status-dot" />
        </div>
        <div
          style={{
            fontSize: '9px',
            color: 'var(--text-dim)',
            fontFamily: 'var(--font-mono), monospace',
            display: 'flex',
            gap: '12px',
          }}
        >
          <span>MAGI SYSTEM v2.026</span>
          <span style={{ color: 'var(--green)' }}>ONLINE</span>
        </div>
      </div>

      {/* Divider + access code */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 24px',
          gap: '6px',
          borderRight: '1px solid var(--panel-border)',
          flexShrink: 0,
          width: '200px',
        }}
      >
        <div
          className="font-orbitron text-[9px] tracking-[2px]"
          style={{ color: 'var(--text-dim)' }}
        >
          ACCESS CODE
        </div>
        <div className="flex items-center gap-2" style={{ fontSize: '10px' }}>
          <div className="code-input-line" style={{ flex: 1 }} />
        </div>
      </div>

      {/* Query input */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 24px',
          gap: '6px',
          borderRight: '1px solid var(--panel-border)',
          width: '300px',
          flexShrink: 0,
        }}
      >
        <div
          className="font-orbitron text-[9px] tracking-[2px]"
          style={{ color: 'var(--text-dim)' }}
        >
          QUERY INPUT
        </div>
        <div
          className="flex items-center gap-1.5 px-2.5 py-1.5"
          style={{
            background: 'rgba(0,0,0,0.3)',
            border: '1px solid var(--panel-border)',
          }}
        >
          <span style={{ color: 'var(--cyan)', fontSize: '11px' }}>▸</span>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter query..."
            className="bg-transparent outline-none w-full text-[11px] tracking-wide placeholder:opacity-30"
            style={{
              color: 'var(--text)',
              fontFamily: 'var(--font-mono), monospace',
              caretColor: 'var(--cyan)',
            }}
          />
        </div>
      </div>

      {/* Response area */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 24px',
          gap: '6px',
          flex: 1,
        }}
      >
        <div
          className="font-orbitron text-[9px] tracking-[2px]"
          style={{ color: 'var(--text-dim)' }}
        >
          SYSTEM RESPONSE
        </div>
        <div
          className="text-[11px] leading-relaxed"
          style={{
            color: 'var(--text-dim)',
            fontFamily: 'var(--font-mono), monospace',
          }}
        >
          {question.trim() ? (
            <>— AWAITING SYSTEM LINK —<span className="typing-cursor" /></>
          ) : (
            <>— STANDBY —</>
          )}
        </div>
      </div>
    </div>
  )
}
