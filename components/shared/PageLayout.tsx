import CrtOverlay from '@/components/overlays/CrtOverlay'
import ParticleField from '@/components/overlays/ParticleField'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

interface Props {
  children: React.ReactNode
  fitScreen?: boolean
}

export default function PageLayout({ children, fitScreen }: Props) {
  return (
    <div
      className="relative"
      style={{
        background: 'var(--bg)',
        ...(fitScreen ? { height: '100vh', display: 'flex', flexDirection: 'column' } : { minHeight: '100vh' }),
      }}
    >
      <CrtOverlay />
      <ParticleField />
      <Header visible={true} />
      <main
        style={{
          paddingTop: fitScreen ? '72px' : '100px',
          ...(fitScreen ? { flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 } : {}),
        }}
      >
        {children}
        <div style={{ paddingTop: '20px', ...(fitScreen ? { marginTop: 'auto' } : {}) }}>
          <Footer />
        </div>
      </main>
    </div>
  )
}
