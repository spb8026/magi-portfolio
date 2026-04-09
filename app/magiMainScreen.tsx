'use client'

import { useCallback, useState } from 'react'
import BootScreen from '@/components/boot/BootScreen'
import CrtOverlay from '@/components/overlays/CrtOverlay'
import ParticleField from '@/components/overlays/ParticleField'
import Header from '@/components/shared/Header'
import MagiHero from '@/components/hero/MagiHero'
import MagiTerminal, { BAR_HEIGHT } from '@/components/shared/MagiTerminal'

export default function MagiMainScreen() {
  const [bootDone, setBootDone] = useState(false)

  const handleBootComplete = useCallback(() => {
    setBootDone(true)
  }, [])

  return (
    <div
      className="relative magi-main-screen"
      style={{
        height: '100vh',
        background: 'var(--bg)',
        overflow: 'hidden',
        paddingBottom: bootDone ? `${BAR_HEIGHT}px` : 0,
        transition: 'padding-bottom 0.3s ease',
      }}
    >
      <CrtOverlay />
      <ParticleField />
      <BootScreen onComplete={handleBootComplete} />
      <Header visible={bootDone} />
      <div style={{ opacity: bootDone ? 1 : 0, transition: 'opacity 0.7s ease', minHeight: '100%' }}>
        <MagiHero startTyping={bootDone} />
      </div>
      {bootDone && <MagiTerminal />}
    </div>
  )
}
