import PageLayout from '@/components/shared/PageLayout'
import SectionHeader from '@/components/shared/SectionHeader'
import ProjectCard from '@/components/shared/ProjectCard'
import AcademicCard from '@/components/shared/AcademicCard'
import ScrollReveal from '@/components/shared/ScrollReveal'
import { academic, projects } from '@/lib/data'

export default function ProjectsPage() {
  return (
    <PageLayout>
      {/* Side Projects */}
      <section className="py-20 px-10">
        <ScrollReveal>
          <SectionHeader code="BALTHASAR-2" title="SIDE PROJECTS" jp="計画" />
        </ScrollReveal>
        <ScrollReveal>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Academic */}
      <section className="py-20 px-10">
        <ScrollReveal>
          <SectionHeader code="BALTHASAR-2 // ACADEMIC" title="COURSEWORK" jp="学術" />
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
