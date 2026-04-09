import PageLayout from '@/components/shared/PageLayout'
import SectionHeader from '@/components/shared/SectionHeader'
import DataCard from '@/components/shared/DataCard'
import ScrollReveal from '@/components/shared/ScrollReveal'
import { aboutCards } from '@/lib/data'

export default function AboutPage() {
  return (
    <PageLayout fitScreen>
      <section className="pt-4 pb-6 px-4 md:px-10" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <ScrollReveal>
          <SectionHeader code="MELCHIOR-1" title="ABOUT ME" />
        </ScrollReveal>
        <ScrollReveal>
          <div
            className="about-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '24px',
              alignItems: 'start',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {aboutCards.filter((c) => c.index !== '04').map((card) => (
                <DataCard key={card.index} {...card} />
              ))}
            </div>
            <div>
              {aboutCards.filter((c) => c.index === '04').map((card) => (
                <DataCard key={card.index} {...card} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
    </PageLayout>
  )
}
