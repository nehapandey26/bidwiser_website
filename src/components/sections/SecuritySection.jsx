import { cn } from '@/lib/cn'
import { security } from '@/data/landing'
import { sections } from '@/lib/paths'
import Container from '@/components/ui/Container'
import TickerStrip from '@/components/decor/TickerStrip'
import WireGlobe from '@/components/decor/WireGlobe'

/**
 * "Your tender data stays private" — security + ISO certifications.
 * ✓ Figma (xl+): three 507×324 cards edge-to-edge (shared 1px #3F3F40
 * borders, square corners, #1E1E1E bg) — wider than the container, so the
 * outer two bleed off and get clipped. Below xl the cards shrink to fit the
 * viewport (3 columns on tablet, stacked on phones) so none are lost.
 * Blue globe glow appears on hover.
 */
export default function SecuritySection() {
  return (
    <section id={sections.security} className="bg-night text-on-ink">
      <TickerStrip />
      <Container framed tone="dark" className="overflow-hidden !px-0">
        <div className="mx-auto max-w-4xl px-6 pt-20 pb-16 text-center md:pt-28 md:pb-20">
          <h2 className="text-h1 text-on-ink">{security.heading}</h2>
          <p className="mx-auto mt-5 max-w-[52ch] text-lead text-on-ink-muted">{security.body}</p>
        </div>

        {/* card row — stacked on phones, 3 fitted columns on tablet, and the
            exact Figma 507×324 cards (bleeding past the frame) from xl up */}
        <div className="grid justify-center border-y border-ink-grid sm:grid-cols-3 xl:grid-cols-[repeat(3,507px)]">
          {security.certifications.map((cert) => (
            <div
              key={cert.name}
              className={cn(
                'group grid h-[200px] place-items-center border-ink-grid bg-ink transition-colors duration-300 hover:bg-[#222222]',
                'border-t first:border-t-0 sm:h-[240px] sm:border-t-0 sm:border-l sm:first:border-l-0',
                'xl:h-[324px]',
              )}
            >
              <WireGlobe
                label={cert.name}
                sub={cert.sub}
                className="w-[140px] sm:w-[150px] lg:w-[170px] xl:w-[184px]"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
