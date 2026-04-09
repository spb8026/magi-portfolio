import { contactLinks } from '@/lib/data'

export default function Footer() {
  return (
    <footer
      id="contact"
      className="px-5 py-[30px] text-center relative"
      style={{ borderTop: '1px solid var(--panel-border)' }}
    >
      <div
        className="font-orbitron text-[13px] tracking-[4px] mb-6"
        style={{ color: 'var(--text-dim)' }}
      >
        SYSTEM STATUS: ALL NORMAL
      </div>

      <div className="flex justify-center gap-4 flex-wrap">
        {contactLinks.map(({ label, icon, href, external }) => (
          <a
            key={label}
            href={href}
            className="contact-link text-[15px] tracking-[2px] px-8 py-3 border transition-all duration-300"
            style={{
              color: 'var(--cyan)',
              borderColor: 'var(--panel-border)',
              textDecoration: 'none',
            }}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {icon} {label}
          </a>
        ))}
      </div>

      <div
        className="mt-8 text-[13px] tracking-[2px]"
        style={{ color: 'var(--text-dim)' }}
      >
        MAGI SYSTEM v2.026 — ALL SYSTEMS NOMINAL — NERV
      </div>

    </footer>
  )
}
