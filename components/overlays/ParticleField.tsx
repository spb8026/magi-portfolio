'use client'

import { useEffect, useState } from 'react'

interface Particle {
  left: string
  duration: string
  delay: string
  size: string
}

export default function ParticleField() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const generated: Particle[] = Array.from({ length: 30 }, () => {
      const size = (1 + Math.random() * 2).toFixed(1) + 'px'
      return {
        left: Math.random() * 100 + '%',
        duration: (8 + Math.random() * 12).toFixed(1) + 's',
        delay: (Math.random() * 10).toFixed(1) + 's',
        size,
      }
    })
    setParticles(generated)
  }, [])

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: p.left,
            animationDuration: p.duration,
            animationDelay: p.delay,
            width: p.size,
            height: p.size,
          }}
        />
      ))}
    </div>
  )
}
