import { cn } from '@/lib/cn'

/**
 * Bidwiser mark — an approximation of the pennant/flag glyph in the Figma file.
 * Replace the SVG with the exact exported asset when the Figma file is available.
 *
 * variant:
 *  - "mark"   plain navy glyph on transparent      — navbar, inline
 *  - "badge"  white glyph on a filled brand square  — app mockups, gradient cards
 */
export default function BrandMark({ variant = 'mark', size = 24, className }) {
  if (variant === 'badge') {
    return (
      <span
        className={cn('inline-grid shrink-0 place-items-center rounded-[28%] bg-brand', className)}
        style={{ width: size, height: size }}
      >
        <Flag size={size * 0.58} color="#fff" />
      </span>
    )
  }
  return (
    <span className={cn('inline-block shrink-0 text-brand', className)} style={{ lineHeight: 0 }}>
      <Flag size={size} color="currentColor" />
    </span>
  )
}

function Flag({ size, color }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      {/* pennant */}
      <path d="M6 2.6 19 8.2a1 1 0 0 1 0 1.84L6 15.6V2.6Z" fill={color} />
      {/* staff */}
      <path d="M6 2.6v18.8" stroke={color} strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  )
}
