import Link from 'next/link'

import { paths } from '@/lib/paths'
import { caseStudiesPage as c, logoWalls } from '@/data/landing'
import Container from '@/components/ui/Container'
import EyebrowPill from '@/components/ui/EyebrowPill'
import HatchDivider from '@/components/decor/HatchDivider'
import LogoWall from '@/components/sections/LogoWall'

export const metadata = {
  title: 'Case Studies',
  description: 'See how companies use Bidwiser to bid on more tenders in less time.',
  alternates: { canonical: '/case-studies' },
}

/**
 * ✓ Figma "Case Studies" page:
 *   centred hero (eyebrow + serif headline) → hatch band → "Backed and Trusted
 *   by" wall → blank band → 2-column ruled grid of story cards → blank band →
 *   footer. Cards get the soft blue gradient on hover.
 */
export default function CaseStudiesPage() {
  return (
    <>
      {/* ── hero ────────────────────────────────────────────────────── */}
      <section className="bg-surface">
        <Container framed className="!px-0">
          <div className="flex flex-col items-center px-6 pb-36 pt-32 text-center md:pb-40 md:pt-36">
            <EyebrowPill className="!self-center">{c.eyebrow}</EyebrowPill>
            <h1 className="mt-5 max-w-[22ch] text-[clamp(2.4rem,4.6vw,4.1rem)] leading-[1.12] text-ink">
              {c.heading}
            </h1>
          </div>
          <HatchDivider className="border-t-0" />
        </Container>
      </section>

      {/* ── logo wall (same as home) + blank band ───────────────────── */}
      <LogoWall {...logoWalls.backed} gapBelow={80} />

      {/* ── story grid ──────────────────────────────────────────────── */}
      <section className="bg-surface">
        <Container framed className="!px-0">
          <ul className="grid md:grid-cols-2">
            {c.studies.map((s) => (
              <li key={s.name} className="border-b border-grid md:odd:border-r">
                <Link
                  href={`${paths.caseStudies}/${s.slug}`}
                  className="group relative flex h-[380px] flex-col bg-[#fafafa] p-7 transition-colors duration-300 lg:h-[420px]"
                >
                  {/* ✓ Figma: hovered card shows the soft blue gradient */}
                  <span
                    aria-hidden="true"
                    className="sky-gradient pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  <span className="relative inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.06em] text-muted">
                    <span className="size-2.5 rounded-full border border-current" />
                    {s.tag}
                  </span>

                  <span className="relative flex flex-1 items-center justify-center">
                    <img
                      src={s.logo}
                      alt={s.name}
                      loading="lazy"
                      className="max-h-[96px] max-w-[52%] object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.04]"
                    />
                  </span>

                  <p className="relative max-w-[34ch] text-[17px] leading-snug text-ink">{s.blurb}</p>
                </Link>
              </li>
            ))}
          </ul>

          {/* ✓ Figma: blank band before the footer */}
          <div aria-hidden="true" className="h-40" />
        </Container>
      </section>
    </>
  )
}
