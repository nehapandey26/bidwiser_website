import { cn } from '@/lib/cn'

/**
 * Constrains content to the site max-width and applies the page gutter.
 * `framed` draws the vertical rule lines that define the editorial grid look
 * seen throughout the Figma design.
 */
export default function Container({ as: Comp = 'div', framed = false, tone = 'light', className, ...props }) {
  return (
    <Comp
      className={cn(
        'mx-auto w-full max-w-[var(--container-max)] px-[var(--gutter)]',
        framed && 'border-x',
        framed && (tone === 'dark' ? 'border-ink-grid' : 'border-grid'),
        className,
      )}
      {...props}
    />
  )
}
