import PageLayout from '@/components/shared/PageLayout'
import DataCard from '@/components/shared/DataCard'
import TimelineItem from '@/components/shared/TimelineItem'
import ScrollReveal from '@/components/shared/ScrollReveal'
import { timeline, aboutCards } from '@/lib/data'

export default function ResumePage() {
  const experience = timeline.filter((e) => !e.secondary)
  const education = aboutCards.find((c) => c.index === '02')!
  const skills = aboutCards.find((c) => c.index === '04')!

  return (
    <PageLayout>
      <section className="py-20 px-10">

        {/* Header row — SectionHeader inlined so download button sits on the same line */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-8 relative">
            <span
              className="font-orbitron text-[12px] tracking-[3px] whitespace-nowrap"
              style={{ color: 'var(--orange)', fontWeight: 900 }}
            >
              FILE-001
            </span>
            <span
              className="font-orbitron font-bold tracking-[4px] whitespace-nowrap text-cyan-glow"
              style={{ fontSize: 'clamp(18px, 3vw, 28px)', color: 'var(--cyan)' }}
            >
              RESUME
            </span>
            <div className="section-header-line" />
            <a
              href="/Broderick_Shawn_Resume.pdf"
              download
              className="font-orbitron resume-download-btn"
              style={{
                color: 'var(--cyan)',
                border: '1px solid var(--cyan-dim)',
                fontSize: '11px',
                letterSpacing: '2px',
                textDecoration: 'none',
              }}
            >
              ↓ DOWNLOAD PDF
            </a>
          </div>
        </ScrollReveal>

        {/* Contact bar */}
        <ScrollReveal>
          <div
            className="flex flex-wrap gap-x-8 gap-y-2 mb-10"
            style={{
              padding: '12px 16px',
              borderLeft: '2px solid var(--orange)',
              background: 'rgba(255, 136, 0, 0.04)',
            }}
          >
            {[
              { label: 'EMAIL', value: 'shawnbroderick65@gmail.com', href: 'mailto:shawnbroderick65@gmail.com', external: false },
              { label: 'GITHUB', value: 'github.com/spb8026', href: 'https://github.com/spb8026', external: true },
              { label: 'LINKEDIN', value: 'linkedin.com/in/shawn-broderick/', href: 'https://linkedin.com/in/shawn-broderick/', external: true },
            ].map(({ label, value, href, external }) => (
              <div key={label} className="flex items-center gap-2.5">
                <span
                  className="font-orbitron text-[10px] tracking-[2px]"
                  style={{ color: 'var(--orange)' }}
                >
                  {label}
                </span>
                <a
                  href={href}
                  className="resume-contact-link text-[12px]"
                  style={{ color: 'var(--text-dim)', textDecoration: 'none' }}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {value}
                </a>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Education + Experience */}
        <ScrollReveal>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '24px',
              marginBottom: '24px',
              alignItems: 'start',
            }}
          >
            <DataCard {...education} />

            <div className="relative">
              <div className="timeline-line" />
              {experience.map((entry, i) => (
                <TimelineItem key={i} {...entry} />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Technical Skills */}
        <ScrollReveal>
          <DataCard {...skills} />
        </ScrollReveal>

      </section>
    </PageLayout>
  )
}
