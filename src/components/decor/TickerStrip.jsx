import { cn } from '@/lib/cn'

/** "Barcode" ruler strip at the top edge of dark sections. Full-bleed. */
export default function TickerStrip({ height = 36, className }) {
  return (
    <div
      aria-hidden="true"
      className={cn('ticker w-full border-b border-ink-grid bg-night', className)}
      style={{ height }}
    />
  )
}
