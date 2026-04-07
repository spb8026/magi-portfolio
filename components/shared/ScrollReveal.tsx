'use client'

import { useEffect, useRef } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  direction?: 'up' | 'left'
}

export default function ScrollReveal({ children, className = '', direction = 'up' }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('reveal-visible')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const initialTransform = direction === 'left' ? 'translateX(-20px)' : 'translateY(30px)'

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: initialTransform,
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
      // When .reveal-visible is added, inline style is overridden via a global rule below.
      // We use a data attribute to drive the transition instead.
      data-reveal={direction}
    >
      {children}
      <style>{`
        .reveal-visible {
          opacity: 1 !important;
          transform: none !important;
        }
      `}</style>
    </div>
  )
}
