import CrtOverlay from '@/components/overlays/CrtOverlay'
import ParticleField from '@/components/overlays/ParticleField'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

interface Props {
  children: React.ReactNode
}

export default function PageLayout({ children }: Props) {
  return (
    <div className="relative min-h-screen" style={{ background: 'var(--bg)' }}>
      <CrtOverlay />
      <ParticleField />
      <Header visible={true} />
      <main style={{ paddingTop: '100px' }}>
        {children}
        <Footer />
      </main>
    </div>
  )
}
