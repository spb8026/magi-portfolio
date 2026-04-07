'use client'
import { useRouter } from 'next/navigation'
import { tagToSlug } from '@/lib/skillUtils'

export default function SkillTag({ tag }: { tag: string }) {
  const router = useRouter()
  return (
    <button
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); router.push(`/skills/${tagToSlug(tag)}`) }}
      className="skill-tag text-[12px] tracking-[1.5px] uppercase px-3.5 py-1 cursor-pointer"
      style={{ color: 'var(--orange)', border: '1px solid var(--orange-dim)', background: 'transparent' }}
    >
      {tag}
    </button>
  )
}
