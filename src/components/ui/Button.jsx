import { forwardRef } from 'react'
import { cn } from '@/lib/cn'

/**
 * Button / link-button.
 *   <Button variant="dark" iconRight={<ArrowRight size={18} />}>Request a Demo</Button>
 *   <Button as={Link} to={paths.pricing} variant="outline">Pricing</Button>
 *
 * Variants match the three treatments in the Figma design:
 *  - brand    navy fill (navbar CTA)
 *  - dark     near-black fill (hero primary CTA)
 *  - outline  white with hairline border (hero secondary CTA)
 *  - ghost    text only
 */
const variants = {
  brand: 'bg-brand text-white hover:bg-brand-ink',
  dark: 'bg-ink text-white hover:bg-black',
  outline: 'bg-surface text-ink border border-border hover:bg-surface-soft',
  ghost: 'bg-transparent text-ink hover:bg-surface-soft',
}

const sizes = {
  sm: 'h-9 px-3.5 text-sm gap-1.5',
  md: 'h-11 px-4 text-sm gap-2',
  lg: 'h-12 px-5 text-base gap-2',
}

const Button = forwardRef(function Button(
  { as: Comp = 'button', variant = 'brand', size = 'md', iconLeft, iconRight, className, type, children, ...props },
  ref,
) {
  return (
    <Comp
      ref={ref}
      type={Comp === 'button' ? type || 'button' : type}
      className={cn(
        'inline-flex items-center justify-center rounded-[7px] font-medium transition-colors',
        'disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Comp>
  )
})

export default Button
