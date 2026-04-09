import PageLayout from '@/components/shared/PageLayout'
import SectionHeader from '@/components/shared/SectionHeader'
import TimelineItem from '@/components/shared/TimelineItem'
import ScrollReveal from '@/components/shared/ScrollReveal'
import SecondaryExperience from '@/components/shared/SecondaryExperience'
import { timeline } from '@/lib/data'

export default function ExperiencePage() {
  const primary = timeline.filter(e => !e.secondary)
  const secondary = timeline.filter(e => e.secondary)

  return (
    <PageLayout>
      <section className="py-12 md:py-20 px-4 md:px-10">
        <ScrollReveal>
          <SectionHeader code="CASPER-3" title="EXPERIENCE" />
        </ScrollReveal>
        <div className="relative">
          <div className="timeline-line" />
          {primary.map((entry, i) => (
            <ScrollReveal key={i} direction="left">
              <TimelineItem {...entry} />
            </ScrollReveal>
          ))}
        </div>
        {secondary.length > 0 && <SecondaryExperience entries={secondary} />}
      </section>
    </PageLayout>
  )
}
