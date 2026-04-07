'use client'

import { useEffect, useRef, useState } from 'react'
import { bootLines } from '@/lib/data'

interface Props {
  onComplete: () => void
}

export default function BootScreen({ onComplete }: Props) {
  const [visibleCount, setVisibleCount] = useState(0)
  const [done, setDone] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    let index = 0

    function addLine() {
      if (index >= bootLines.length) {
        timeoutRef.current = setTimeout(() => {
          setDone(true)
          onComplete()
        }, 600)
        return
      }
      setVisibleCount(index + 1)
      const line = bootLines[index]
      index++
      timeoutRef.current = setTimeout(addLine, line.cls === 'ok' ? 100 : 180)
    }

    timeoutRef.current = setTimeout(addLine, 400)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [onComplete])

  return (
    <div
      className="fixed inset-0 z-[10000] flex flex-col justify-center items-center transition-opacity duration-700"
      style={{
        background: 'var(--bg)',
        opacity: done ? 0 : 1,
        pointerEvents: done ? 'none' : 'all',
      }}
    >
      <div
        className="text-sm max-w-[600px] w-[90%] leading-relaxed"
        style={{ fontFamily: 'var(--font-mono), monospace', color: 'var(--cyan)' }}
      >
        {bootLines.slice(0, visibleCount).map((line, i) => (
          <div
            key={i}
            className="boot-line"
            style={{
              color:
                line.cls === 'ok'
                  ? 'var(--green)'
                  : line.cls === 'warn'
                  ? 'var(--orange)'
                  : line.cls === 'sys'
                  ? 'var(--text-dim)'
                  : 'var(--cyan)',
            }}
          >
            {line.text || '\u00A0'}
          </div>
        ))}
      </div>
    </div>
  )
}
