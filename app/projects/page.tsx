import PageLayout from '@/components/shared/PageLayout'
import SectionHeader from '@/components/shared/SectionHeader'
import ProjectCard from '@/components/shared/ProjectCard'
import AcademicCard from '@/components/shared/AcademicCard'
import ScrollReveal from '@/components/shared/ScrollReveal'
import SecondaryProjects from '@/components/shared/SecondaryProjects'
import { academic, projects } from '@/lib/data'

export default function ProjectsPage() {
  const primary = projects.filter(p => !p.secondary)
  const secondary = projects.filter(p => p.secondary)

  return (
    <PageLayout>
      {/* Side Projects */}
      <section className="py-20 px-10">
        <ScrollReveal>
          <SectionHeader code="BALTHASAR-2" title="SIDE PROJECTS" />
        </ScrollReveal>
        <ScrollReveal>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {primary.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </ScrollReveal>
        {secondary.length > 0 && <SecondaryProjects projects={secondary} />}
      </section>

      {/* Academic */}
      <section className="py-20 px-10">
        <ScrollReveal>
          <SectionHeader code="BALTHASAR-2 // ACADEMIC" title="COURSEWORK" />
        </ScrollReveal>
        <ScrollReveal>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px',
            }}
          >
            {academic.map((entry) => (
              <AcademicCard key={entry.title} {...entry} />
            ))}
          </div>
        </ScrollReveal>
      </section>
    </PageLayout>
  )
}
