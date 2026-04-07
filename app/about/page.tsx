import PageLayout from '@/components/shared/PageLayout'
import SectionHeader from '@/components/shared/SectionHeader'
import DataCard from '@/components/shared/DataCard'
import ScrollReveal from '@/components/shared/ScrollReveal'
import { aboutCards } from '@/lib/data'

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="py-20 px-10">
        <ScrollReveal>
          <SectionHeader code="MELCHIOR-1" title="ABOUT ME" jp="情報" />
        </ScrollReveal>
        <ScrollReveal>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {aboutCards.map((card) => (
              <DataCard key={card.index} {...card} />
            ))}
          </div>
        </ScrollReveal>
      </section>
    </PageLayout>
  )
}
