import { cn } from '@/lib/cn'
import GradientDot from './GradientDot'

/**
 * Section eyebrow — ✓ Figma: soft grey filled pill (no border), gradient orb,
 * 11px uppercase DM Sans medium, light tracking. Seen on HOW IT WORKS /
 * COMPARISON / FAQ / CUSTOMER STORY. `tone="light"` for dark backgrounds.
 * `self-start` so it never stretches inside a flex-col parent.
 */
export default function EyebrowPill({ children, tone = 'dark', className }) {
  return (
    <span
      className={cn(
        'inline-flex w-fit items-center gap-2 self-start rounded-pill px-3 py-1.5',
        'text-[11px] font-medium uppercase tracking-[0.06em]',
        tone === 'light' ? 'bg-white/15 text-white' : 'bg-[#f1f1f2] text-ink',
        className,
      )}
    >
      <GradientDot size={14} />
      {children}
    </span>
  )
}
