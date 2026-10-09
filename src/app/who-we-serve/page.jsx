import { whoWeServePage as w } from '@/data/landing'
import Container from '@/components/ui/Container'
import EyebrowPill from '@/components/ui/EyebrowPill'
import HatchDivider from '@/components/decor/HatchDivider'

export const metadata = {
  title: 'Who We Serve',
  description: 'Bidwiser works on government and private tenders, across every sector that bids.',
  alternates: { canonical: '/who-we-serve' },
}

/**
 * ✓ Figma "Who we serve":
 *   hero (eyebrow + heading + one-line body) → hatch → blank band → 2 × 2
 *   ruled grid of industry segments → blank band → hatch → footer.
 */
export default function WhoWeServePage() {
  return (
    <section className="bg-surface">
      <Container framed className="!px-0">
        {/* ── hero ── */}
        <div className="px-8 pb-14 pt-20 md:pt-24 lg:px-10">
          <EyebrowPill>{w.eyebrow}</EyebrowPill>
          <h1 className="mt-5 text-[clamp(2.2rem,4.2vw,3.4rem)] leading-[1.15] text-ink">{w.heading}</h1>
          <p className="mt-4 max-w-[46ch] text-[13px] leading-relaxed text-muted">{w.body}</p>
        </div>

        <HatchDivider className="border-t-0" />
        <div aria-hidden="true" className="h-14" />

        {/* ── industries ── */}
        <ul className="grid border-t border-grid sm:grid-cols-2">
          {w.industries.map((item) => (
            <li
              key={item}
              className="flex min-h-[150px] border-b border-grid p-7 text-[13px] leading-snug text-ink sm:[&:nth-child(odd)]:border-r"
            >
              <span className="max-w-[28ch]">{item}</span>
            </li>
          ))}
        </ul>

        <div aria-hidden="true" className="h-14" />
        <HatchDivider className="border-b-0" />
        {/* ✓ Figma: blank band before the footer */}
        <div aria-hidden="true" className="h-24" />
      </Container>
    </section>
  )
}
