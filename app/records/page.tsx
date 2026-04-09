import PageLayout from '@/components/shared/PageLayout'
import SectionHeader from '@/components/shared/SectionHeader'
import ScrollReveal from '@/components/shared/ScrollReveal'
import FileViewer from '@/components/files/FileViewer'
import FileRow from '@/components/files/FileRow'
import { fileRecords } from '@/lib/data'

const NOISE_ROWS = Array.from({ length: 20 }, (_, i) => ({
  label: `STREAM-${String(i + 1).padStart(3, '0')}`,
  value: '— — — CONNECTION OFFLINE — — —',
}))

const PENDING_FILES = [
  { id: 'FILE-002', title: 'DEV NOTES — ACTIVE LOG', desc: 'Ongoing development notes and session logs' },
  { id: 'FILE-003', title: 'TECHNICAL SPECIFICATIONS', desc: 'System architecture and design decisions' },
  { id: 'FILE-004', title: 'PROJECT DOSSIERS', desc: 'Expanded case files per project' },
]

export default function RecordsPage() {
  return (
    <PageLayout>
      <section className="py-20 px-10">
        <ScrollReveal>
          <SectionHeader code="ARCHIVE-α" title="STORED RECORDS" />
        </ScrollReveal>

        {/* Two-panel amber layout (mirrors reference image) */}
        <ScrollReveal>
          <div
            className="records-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
              alignItems: 'start',
            }}
          >
            {/* ── LEFT PANEL: STORED FILES ── */}
            <FileViewer
              title="ARCHIVE // STORED FILES"
              badge="STORED DATA"
              badgeVariant="ok"
              columns={['FILE ID', 'RECORD DATA']}
            >
              <FileRow isSection label="AVAILABLE RECORDS" />
              {fileRecords.map((f) => (
                <a
                  key={f.id}
                  href={f.href}
                  className="file-row-link"
                  style={{ gridTemplateColumns: '28% 1fr', gap: '16px' }}
                >
                  <span style={{ color: 'var(--file-text-dim)', opacity: 0.85 }}>{f.id}</span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span style={{ color: 'var(--file-text)', fontWeight: 600 }}>{f.title}</span>
                    <span style={{ color: 'var(--file-text-dim)', fontSize: '11px' }}>{f.description}</span>
                  </span>
                </a>
              ))}

              <FileRow isSection label="RESTRICTED ACCESS" />
              {PENDING_FILES.map((f) => (
                <div
                  key={f.id}
                  className="file-row-link file-row-pending"
                  style={{ gridTemplateColumns: '28% 1fr', gap: '16px' }}
                >
                  <span style={{ color: 'var(--file-text-dim)' }}>{f.id}</span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span style={{ color: 'var(--file-text)', fontWeight: 600 }}>{f.title}</span>
                    <span style={{ color: 'var(--file-text-dim)', fontSize: '11px' }}>{f.desc}</span>
                  </span>
                </div>
              ))}

              <FileRow isSection label="ARCHIVE METADATA" />
              <FileRow label="TOTAL RECORDS" value="4" />
              <FileRow label="ACCESSIBLE" value="1" />
              <FileRow label="CLASSIFICATION" value="OPEN / RESTRICTED" />
            </FileViewer>

            {/* ── RIGHT PANEL: DEV NOTES ── */}
            <FileViewer
              title="ARCHIVE // DEV NOTES"
              badge="INCOMING DATA"
              badgeVariant="warn"
              columns={['STREAM ID', 'PAYLOAD']}
            >
              {NOISE_ROWS.map((row) => (
                <FileRow key={row.label} label={row.label} value={row.value} />
              ))}
              <FileRow isSection label="CONNECTION STATUS" />
              <FileRow label="LINK" value="OFFLINE — DATA PENDING SYNC" />
              <FileRow label="MODULE" value="DEV NOTES v0.0.0 — NOT DEPLOYED" />
              <FileRow label="ETA" value="UNDETERMINED" />
            </FileViewer>
          </div>
        </ScrollReveal>
      </section>
    </PageLayout>
  )
}
