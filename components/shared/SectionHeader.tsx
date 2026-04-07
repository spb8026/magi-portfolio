interface Props {
  code: string
  title: string
  jp: string
}

export default function SectionHeader({ code, title, jp }: Props) {
  return (
    <div className="flex items-center gap-4 mb-12 relative">
      <span
        className="font-orbitron text-[12px] tracking-[3px] whitespace-nowrap"
        style={{ color: 'var(--orange)', fontWeight: 900 }}
      >
        {code}
      </span>
      <span
        className="font-orbitron font-bold tracking-[4px] whitespace-nowrap text-cyan-glow"
        style={{
          fontSize: 'clamp(18px, 3vw, 28px)',
          color: 'var(--cyan)',
        }}
      >
        {title}
      </span>
      <span
        className="font-jp text-[18px] tracking-[8px]"
        style={{ color: 'var(--text-dim)', fontWeight: 900 }}
      >
        {jp}
      </span>
      <div className="section-header-line" />
    </div>
  )
}
