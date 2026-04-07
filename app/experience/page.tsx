import PageLayout from '@/components/shared/PageLayout'
import SectionHeader from '@/components/shared/SectionHeader'
import TimelineItem from '@/components/shared/TimelineItem'
import ScrollReveal from '@/components/shared/ScrollReveal'
import { timeline } from '@/lib/data'

export default function ExperiencePage() {
  return (
    <PageLayout>
      <section className="py-20 px-10">
        <ScrollReveal>
          <SectionHeader code="CASPER-3" title="EXPERIENCE" jp="経験" />
        </ScrollReveal>
        <div className="relative pl-10">
          <div className="timeline-line" />
          {timeline.map((entry, i) => (
            <ScrollReveal key={i} direction="left">
              <TimelineItem {...entry} />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
