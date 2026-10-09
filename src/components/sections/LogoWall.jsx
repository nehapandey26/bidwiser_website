import { cn } from '@/lib/cn'
import Container from '@/components/ui/Container'
import HatchDivider from '@/components/decor/HatchDivider'

/**
 * "Backed and Trusted by" / "Supported by" / "Featured On".
 * ✓ Figma: full-colour logos centred in ruled cells.
 * Pass `logos={[{ name, src }]}`; walls without logos render empty slots.
 * `gapAbove` / `hatchAbove` / `gapBelow` (px) — ✓ Figma: "Featured On" sits
 * under a blank band + hatch strip after the FAQ, and both "Supported by" and
 * "Featured On" leave a blank band before the dark section that follows. The
 * frame's side rules continue through these bands.
 */
export default function LogoWall({
  title,
  count = 6,
  logos = [],
  gapAbove = 0,
  hatchAbove = false,
  gapBelow = 0,
  className,
}) {
  const n = logos.length || count
  const cells = logos.length ? logos : Array.from({ length: count }).map(() => null)
  const gridCols =
    n >= 6
      ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6'
      : 'grid-cols-2 lg:grid-cols-4'

  return (
    <section className={cn('bg-surface', className)}>
      <Container framed className="border-b border-grid">
        {gapAbove > 0 && <div aria-hidden="true" style={{ height: gapAbove }} />}
        {hatchAbove && <HatchDivider className="border-t-0" />}

        {/* ✓ Figma: Sentient 40px / 300 / line-height 70px / -0.04em */}
        <h2 className="py-10 text-center text-[2.5rem] font-light leading-[1.75] tracking-[-0.04em] text-ink">
          {title}
        </h2>

        {/* full grid of rule lines: top+left on the wrapper, bottom+right on each cell */}
        <div className={cn('grid border-l border-t border-grid', gridCols)}>
          {cells.map((logo, i) => (
            <div
              key={i}
              className="flex h-24 items-center justify-center border-b border-r border-grid"
            >
              {logo ? (
                <img
                  src={logo.src}
                  alt={logo.name}
                  loading="lazy"
                  className="max-h-[72px] max-w-[82%] object-contain mix-blend-multiply transition-transform duration-300 hover:scale-[1.04]"
                />
              ) : (
                <span className="text-sm text-muted/40">Logo</span>
              )}
            </div>
          ))}
        </div>

        {gapBelow > 0 && <div aria-hidden="true" style={{ height: gapBelow }} />}
      </Container>
    </section>
  )
}
