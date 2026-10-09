import { useId } from 'react'
import { cn } from '@/lib/cn'

/**
 * ✓ Exact Figma asset ("Frame 278.svg"): 18×18 white disc with two blurred
 * colour blobs — a red→orange one bottom-left and a navy→violet one top-right.
 * Sits inside eyebrow pills, hero pills and the "LLMs" mock header.
 *
 * Animated: the blob layer slowly orbits and breathes (`.orb-spin`), so the
 * colours drift inside the disc like a live gradient. Respects reduced-motion.
 */
export default function GradientDot({ size = 16, className, animate = true }) {
  const id = useId().replace(/:/g, '')
  const clip = `orb-clip-${id}`
  const f0 = `orb-f0-${id}`
  const f1 = `orb-f1-${id}`
  const g0 = `orb-g0-${id}`
  const g1 = `orb-g1-${id}`

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block shrink-0', className)}
      aria-hidden="true"
    >
      <g clipPath={`url(#${clip})`}>
        <rect width="18" height="18" rx="9" fill="white" />
        {/* everything below rotates around the disc centre */}
        <g className={cn(animate && 'orb-spin')} style={{ transformOrigin: '9px 9px' }}>
          <g filter={`url(#${f0})`}>
            <ellipse cx="5.10947" cy="12.8837" rx="10.1837" ry="10.1649" fill={`url(#${g0})`} />
          </g>
          <g filter={`url(#${f1})`}>
            <path
              d="M24.0576 3.03109C27.3022 2.76194 29.958 0.363646 30.8803 -0.801856C36.1374 -6.34844 34.3739 9.52604 28.0262 18.8034C21.6784 28.0809 16.2086 18.967 9.6682 11.5754C3.12782 4.18386 20.0017 3.36752 24.0576 3.03109Z"
              fill={`url(#${g1})`}
            />
          </g>
        </g>
      </g>
      <defs>
        <filter id={f0} x="-8.83204" y="-1.03907" width="27.8828" height="27.8457" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="1.87891" result="effect1_foregroundBlur" />
        </filter>
        <filter id={f1} x="-5.88722" y="-16.0152" width="53.9278" height="52.8116" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="7.03297" result="effect1_foregroundBlur" />
        </filter>
        <linearGradient id={g0} x1="5.09786" y1="6.11719" x2="5.10947" y2="23.0486" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FB3748" />
          <stop offset="1" stopColor="#F58A25" stopOpacity="0" />
          <stop offset="1" stopColor="#809BE1" />
        </linearGradient>
        <linearGradient id={g1} x1="33.5718" y1="-4.08205" x2="12.2614" y2="18.081" gradientUnits="userSpaceOnUse">
          <stop offset="0.0865385" stopColor="#20429B" />
          <stop offset="0.798077" stopColor="#575EFF" />
        </linearGradient>
        <clipPath id={clip}>
          <rect width="18" height="18" rx="9" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
