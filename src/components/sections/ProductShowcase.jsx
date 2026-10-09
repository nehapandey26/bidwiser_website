import Container from '@/components/ui/Container'
import HatchDivider from '@/components/decor/HatchDivider'
import ShowcaseScene from '@/components/mockups/ShowcaseScene'

/**
 * ✓ Figma: full-bleed brand-gradient band with three overlapping product
 * windows (Active Bid Packages / Tender Dashboard / RFP Analysis), cropped at
 * the band's bottom edge, followed by the hatch divider.
 */
export default function ProductShowcase() {
  return (
    <section>
      <div className="brand-gradient">
        <Container framed className="!px-0">
          {/* The scene is composed at a fixed 1140px so the three windows keep
              their exact Figma overlap, then scaled down to fit narrower
              screens — no cropping on tablet. Heights track 560 × scale. */}
          <div className="relative h-[280px] overflow-hidden sm:h-[336px] md:h-[370px] lg:h-[482px] xl:h-[560px]">
            <div
              className={
                'absolute left-1/2 top-0 w-[1140px] origin-top -translate-x-1/2 ' +
                'scale-[0.5] sm:scale-[0.6] md:scale-[0.66] lg:scale-[0.86] xl:scale-100'
              }
            >
              <ShowcaseScene />
            </div>
          </div>
        </Container>
      </div>
      <Container framed className="!px-0">
        <HatchDivider className="border-t-0" />
      </Container>
    </section>
  )
}
