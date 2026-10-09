import { cn } from '@/lib/cn'
import EyebrowPill from './EyebrowPill'

/**
 * Eyebrow pill + serif title + optional description.
 * `onDark` flips text colours for dark sections.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  onDark = false,
  align = 'left',
  as: Heading = 'h2',
  className,
  titleClassName,
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow && <EyebrowPill tone={onDark ? 'light' : 'dark'}>{eyebrow}</EyebrowPill>}
      {title && (
        <Heading
          className={cn(
            'text-h2',
            onDark ? 'text-on-ink' : 'text-ink',
            titleClassName,
          )}
        >
          {title}
        </Heading>
      )}
      {description && (
        <p
          className={cn(
            'max-w-[46ch] text-lead',
            onDark ? 'text-on-ink-muted' : 'text-copy',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
