import { useId } from 'react'
import { cn } from '@/lib/cn'

const GLYPH = (
  <>
    <path
      d="M18.6453 20.1876C18.5139 20.2436 18.4094 20.3398 18.2599 20.469C18.2297 20.4954 18.1978 20.5229 18.184 20.5608C18.1742 20.5872 18.1747 20.6163 18.1747 20.6444C18.1983 23.3611 18.1763 26.0783 18.1763 28.795C18.1763 28.988 18.1763 29.1809 18.1763 29.3739C18.1763 31.1791 18.1763 32.9838 18.1763 34.7891C18.1763 35.4174 18.1763 36.0457 18.1763 36.6741C18.1763 37.0517 18.0175 37.7361 18.593 37.6575C19.1356 37.5833 19.9574 36.0512 20.2895 35.623C21.5236 34.0316 22.7577 32.4402 23.9918 30.8487C26.4056 27.7363 28.8062 24.6128 31.2332 21.5107C31.43 21.2595 32.2595 20.5009 31.7691 20.1854C31.662 20.1161 31.5273 20.1073 31.4003 20.1161C30.0865 20.2068 28.7727 20.1496 27.4566 20.1502C26.078 20.1507 24.6987 20.1513 23.32 20.1524C23.1683 20.1524 23.0166 20.1524 22.8649 20.1529C21.5835 20.154 20.2972 20.1903 19.0174 20.1331C18.858 20.1265 18.7437 20.1458 18.6453 20.1876Z"
      fill="#20429B"
    />
    <path
      d="M30.7587 12.0762C30.7217 12.0347 30.6684 12.0115 30.6128 12.0115L18.3803 12.0001C18.3077 12 18.2407 12.0392 18.2063 12.1031C18.154 12.2001 18.1034 12.2983 18.0547 12.3976C18.0208 12.4667 18.0311 12.5492 18.08 12.6088L23.5742 19.3069C23.6121 19.3531 23.6687 19.3799 23.7284 19.3799H25.2867C25.3464 19.3799 25.403 19.3532 25.4409 19.307L30.969 12.5768C31.0276 12.5055 31.0299 12.4031 30.9725 12.3308C30.9035 12.2438 30.8324 12.1589 30.7587 12.0762Z"
      fill="#20429B"
    />
    <path d="M19.5352 38.0237L22.6317 33.9492L24.2314 38.0237H19.5352Z" fill="#20429B" />
  </>
)

/**
 * ✓ Exact Figma asset ("Frame 1.svg"): Bidwiser flag glyph in #20429B.
 * `bg={true}` (default) draws the full 49×49 rounded-square gradient badge
 * (navy → ink, 23% opacity) — used as the origin node in the "Find it" flow.
 * `bg={false}` renders just the glyph, cropped tight, no background square —
 * used for the header/footer logo.
 */
export default function BrandBadge({ size = 49, bg = true, className }) {
  const id = useId()
  const grad = `bw-badge-${id}`

  if (!bg) {
    // tight crop around the glyph's own bounding box (no wasted padding)
    return (
      <svg
        width={size}
        height={(size * 30) / 18}
        viewBox="16 10 18 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('shrink-0', className)}
        aria-hidden="true"
      >
        {GLYPH}
      </svg>
    )
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      aria-hidden="true"
    >
      <rect width="49" height="49" rx="9.08571" fill={`url(#${grad})`} fillOpacity="0.23" />
      {GLYPH}
      <defs>
        <linearGradient id={grad} x1="24.5" y1="0" x2="24.5" y2="47.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#20429B" />
          <stop offset="1" stopColor="#0B1735" />
        </linearGradient>
      </defs>
    </svg>
  )
}
