import { cn } from '@/lib/cn'

/** Percentage match pill used in the tender-search mock (green / amber / red). */
export default function MatchBadge({ value, className }) {
  const tone = value >= 80 ? 'high' : value >= 50 ? 'mid' : 'low'
  const styles = {
    high: 'text-match-high bg-match-high-bg',
    mid: 'text-match-mid bg-match-mid-bg',
    low: 'text-match-low bg-match-low-bg',
  }
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-pill px-2 py-0.5 text-[11px] font-semibold',
        styles[tone],
        className,
      )}
    >
      {value}%
    </span>
  )
}
