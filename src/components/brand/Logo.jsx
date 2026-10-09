import Link from 'next/link'

import { cn } from '@/lib/cn'
import { paths } from '@/lib/paths'
import { APP_NAME } from '@/constants/app'
import BrandBadge from './BrandBadge'

/**
 * Lockup: mark + "Bidwiser" wordmark.
 * ✓ Figma: header icon is the gradient badge ("Frame 1.svg" — navy→ink
 * gradient square at 23% opacity with the flag glyph), not the flat flag mark.
 * The wordmark in Figma looks like a custom/serif logotype — using the serif
 * face as the closest match. `tone="light"` for use on dark backgrounds.
 */
export default function Logo({ tone = 'dark', withText = true, className, markSize = 26 }) {
  return (
    <Link
      href={paths.home}
      aria-label={`${APP_NAME} — home`}
      className={cn('inline-flex items-center gap-2', className)}
    >
      <BrandBadge size={markSize} bg={false} className={tone === 'light' ? 'brightness-0 invert' : undefined} />
      {withText && (
        <span
          className={cn(
            'font-serif text-[1.45rem] leading-none tracking-tight',
            tone === 'light' ? 'text-white' : 'text-brand',
          )}
        >
          {APP_NAME}
        </span>
      )}
    </Link>
  )
}
