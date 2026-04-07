import { notFound } from 'next/navigation'
import { projects, academic, timeline } from '@/lib/data'
import { tagToSlug, slugToDisplayName } from '@/lib/skillUtils'
import PageLayout from '@/components/shared/PageLayout'
import SectionHeader from '@/components/shared/SectionHeader'
import ProjectCard from '@/components/shared/ProjectCard'
import AcademicCard from '@/components/shared/AcademicCard'
import TimelineItem from '@/components/shared/TimelineItem'
import ScrollReveal from '@/components/shared/ScrollReveal'

export default async function SkillPage({ params }: { params: Promise<{ skill: string }> }) {
  const { skill } = await params
  const displayName = slugToDisplayName(skill)

  const matchingExperience = timeline.filter(t => (t.tags ?? []).some(t2 => tagToSlug(t2) === skill))
  const matchingProjects   = projects.filter(p => p.tags.some(t => tagToSlug(t) === skill))
  const matchingAcademic   = academic.filter(a => a.tags.some(t => tagToSlug(t) === skill))

  if (!matchingExperience.length && !matchingProjects.length && !matchingAcademic.length) {
    notFound()
  }

  const subheadStyle = {
    color: 'var(--orange)',
    fontSize: 'clamp(16px, 2vw, 22px)',
    letterSpacing: '4px',
    fontWeight: 900,
  }

  return (
    <PageLayout>
      <section className="py-20 px-10">
        <ScrollReveal>
          <SectionHeader code="SKILL-DB" title={displayName.toUpperCase()} jp="技術" />
        </ScrollReveal>

        {matchingExperience.length > 0 && (
          <ScrollReveal>
            <div className="mb-12">
              <div className="font-orbitron mb-6" style={subheadStyle}>
                // EXPERIENCE
              </div>
              <div className="relative pl-10">
                <div className="timeline-line" />
                {matchingExperience.map((entry, i) => (
                  <TimelineItem key={i} {...entry} />
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {matchingProjects.length > 0 && (
          <ScrollReveal>
            <div className="mb-12">
              <div className="font-orbitron mb-6" style={subheadStyle}>
                // PROJECTS
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '24px',
                }}
              >
                {matchingProjects.map(p => (
                  <ProjectCard key={p.id} {...p} />
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {matchingAcademic.length > 0 && (
          <ScrollReveal>
            <div className="mb-12">
              <div className="font-orbitron mb-6" style={subheadStyle}>
                // COURSEWORK
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '16px',
                }}
              >
                {matchingAcademic.map((entry, i) => (
                  <AcademicCard key={i} {...entry} />
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}
      </section>
    </PageLayout>
  )
}

export async function generateStaticParams() {
  const slugs = new Set<string>()
  ;[
    ...projects.flatMap(p => p.tags),
    ...academic.flatMap(a => a.tags),
    ...timeline.flatMap(t => t.tags ?? []),
  ].forEach(t => slugs.add(tagToSlug(t)))
  return [...slugs].map(skill => ({ skill }))
}
