import { cn } from '@/lib/cn'

/** Diagonal-hatch band used between light sections. Sits inside a framed Container. */
export default function HatchDivider({ tone = 'light', height = 40, className }) {
  return (
    <div
      aria-hidden="true"
      className={cn('hatch border-y', tone === 'dark' ? 'border-ink-grid' : 'border-grid', className)}
      style={{ height }}
    />
  )
}
