import { cn } from '@/lib/cn'
import { aboutPage as a } from '@/data/landing'
import Container from '@/components/ui/Container'
import EyebrowPill from '@/components/ui/EyebrowPill'
import HatchDivider from '@/components/decor/HatchDivider'
import TickerStrip from '@/components/decor/TickerStrip'

export const metadata = {
  title: 'About Us',
  description: 'The people behind Bidwiser.',
  alternates: { canonical: '/company' },
}

/**
 * ✓ Figma "About Us":
 *   hero → hatch → dark founder band (#1E1E1E, ticker strip top and bottom,
 *   bio + partner logos on the left, greyscale photo on the right) → centred
 *   pull quote → hatch → blank band → footer.
 */
export default function AboutPage() {
  const f = a.founder

  return (
    <>
      {/* ── hero ── */}
      <section className="bg-surface">
        <Container framed className="!px-0">
          <div className="px-8 pb-16 pt-20 md:pt-24 lg:px-10">
            <EyebrowPill>{a.eyebrow}</EyebrowPill>
            <h1 className="mt-5 max-w-[14ch] text-[clamp(2.2rem,4.2vw,3.4rem)] leading-[1.15] text-ink">
              {a.heading}
            </h1>
          </div>
          <HatchDivider className="border-t-0" />
          <div aria-hidden="true" className="h-14" />
        </Container>
      </section>

      {/* ── founder band ── */}
      <section className="bg-ink text-on-ink">
        <TickerStrip />
        <Container framed tone="dark" className="!px-0">
          <div className="grid md:grid-cols-[1fr_0.85fr]">
            <div className="flex flex-col p-8 lg:p-10">
              <p className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.08em] text-on-ink-muted">
                <span className="size-1.5 rounded-full bg-brand" />
                {f.role}
              </p>
              <h2 className="mt-5 text-[clamp(1.5rem,2.4vw,2rem)] leading-tight text-on-ink">{f.name}</h2>
              <p className="mt-4 max-w-[42ch] text-[12.5px] leading-relaxed text-on-ink-muted">{f.bio}</p>

              {/* partner logos — placeholders until the real assets land */}
              <ul className="mt-auto flex flex-wrap items-center gap-2 pt-12">
                {f.logos.map((logo) => (
                  <li
                    key={logo.name}
                    className={cn(
                      'rounded-[2px] px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.04em]',
                      logo.tone === 'orange' ? 'bg-[#e8681f] text-white' : 'bg-white text-ink',
                    )}
                  >
                    {logo.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative min-h-[320px] overflow-hidden bg-[#2a2a2a] md:min-h-[520px]">
              <img
                src={f.photo}
                alt={f.name}
                className="h-full w-full object-cover grayscale"
              />
            </div>
          </div>
        </Container>
        <TickerStrip />
      </section>

      {/* ── pull quote ── */}
      <section className="bg-surface">
        <Container framed className="!px-0">
          <blockquote className="mx-auto max-w-[34ch] px-6 py-24 text-center text-[clamp(1.35rem,2.2vw,1.85rem)] leading-snug text-muted md:py-28">
            {a.quote.lead}
            <em className="italic text-brand">{a.quote.em}</em>
            {a.quote.tail}
          </blockquote>

          <HatchDivider className="border-t-0" />
          {/* ✓ Figma: blank band before the footer */}
          <div aria-hidden="true" className="h-40" />
        </Container>
      </section>
    </>
  )
}
