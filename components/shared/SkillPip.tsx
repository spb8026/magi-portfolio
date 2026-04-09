'use client'
import { useRouter } from 'next/navigation'
import { tagToSlug } from '@/lib/skillUtils'

interface Props {
  name: string
  level: 1 | 2 | 3 | 4 | 5
}

const TIERS: Record<number, { label: string; borderColor: string; bg: string; nameColor: string; labelColor: string; shadow: string }> = {
  5: { label: 'EXPERT',     borderColor: 'var(--orange)',              bg: 'rgba(255,136,0,0.12)', nameColor: 'var(--orange)',    labelColor: 'var(--orange)',    shadow: '0 0 14px var(--orange-glow)' },
  4: { label: 'ADVANCED',   borderColor: 'var(--orange)',              bg: 'rgba(255,136,0,0.07)', nameColor: 'var(--orange)',    labelColor: 'var(--orange)',    shadow: '0 0 8px var(--orange-glow)'  },
  3: { label: 'PROFICIENT', borderColor: 'var(--orange-dim)',          bg: 'transparent',          nameColor: 'var(--orange)',    labelColor: 'var(--text-dim)',  shadow: 'none'                        },
  2: { label: 'FAMILIAR',   borderColor: 'rgba(153, 79, 0, 0.5)',     bg: 'transparent',          nameColor: 'var(--text-dim)', labelColor: 'var(--text-dim)',  shadow: 'none'                        },
  1: { label: 'LEARNING',   borderColor: 'rgba(153, 79, 0, 0.3)',     bg: 'transparent',          nameColor: 'var(--text-dim)', labelColor: 'var(--text-dim)',  shadow: 'none'                        },
}

export default function SkillPip({ name, level }: Props) {
  const router = useRouter()
  const tier = TIERS[level]

  return (
    <button
      onClick={(e) => { e.stopPropagation(); router.push(`/skills/${tagToSlug(name)}`) }}
      style={{
        background: tier.bg,
        border: `1px solid ${tier.borderColor}`,
        boxShadow: tier.shadow,
        padding: '6px 12px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '3px',
        transition: 'all 0.2s ease',
      }}
    >
      <span style={{ color: tier.nameColor, fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase', whiteSpace: 'nowrap', fontFamily: 'var(--font-orbitron), Orbitron, sans-serif', fontWeight: 700 }}>
        {name}
      </span>
      <span style={{ color: tier.labelColor, fontSize: '8px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'var(--font-mono), monospace' }}>
        {tier.label}
      </span>
    </button>
  )
}
