interface Props {
  visible: boolean
  terminalWidth?: number
}

export default function Header({ visible, terminalWidth = 0 }: Props) {
  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 z-[100] flex justify-between items-center px-10 py-6 transition-opacity duration-700"
      style={{
        right: `${terminalWidth}px`,
        background: 'linear-gradient(180deg, var(--bg) 0%, transparent 100%)',
        opacity: visible ? 1 : 0,
      }}
    >
      <a
        href="/"
        className="flex items-center gap-4"
        style={{ textDecoration: 'none' }}
      >
        <div
          className="font-orbitron font-black text-[20px] tracking-[3px]"
          style={{
            color: 'var(--orange)',
            textShadow: '0 0 20px var(--orange-glow)',
          }}
        >
          SHAWN BRODERICK
        </div>
      </a>

      <nav className="flex gap-2">
        {[
          { href: '/about', label: 'MELCHIOR' },
          { href: '/projects', label: 'BALTHASAR' },
          { href: '/experience', label: 'CASPER' },
          { href: '#contact', label: 'LINK' },
        ].map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="nav-link text-[14px] tracking-[2px] uppercase px-5 py-2.5 border border-transparent transition-all duration-300"
            style={{ color: 'var(--text-dim)', textDecoration: 'none' }}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}
