import Link from 'next/link'

import { careersPage as c } from '@/data/landing'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import EyebrowPill from '@/components/ui/EyebrowPill'
import HatchDivider from '@/components/decor/HatchDivider'
import { ArrowRight } from '@/components/icons'

export const metadata = {
  title: 'Careers',
  description: "Let's make bidding simpler, together. See open roles at Bidwiser.",
  alternates: { canonical: '/careers' },
}

const OPEN_ROLES_ID = 'open-roles'

/**
 * ✓ Figma "Careers" page:
 *   left-aligned hero (eyebrow + serif headline + dark CTA) → full-width
 *   team photo (1207×569, greyscale) → "Bidwiser Values" → 3×2 ruled grid of
 *   values → hatch band → blank band → footer.
 */
export default function CareersPage() {
  return (
    <>
      {/* ── hero ────────────────────────────────────────────────────── */}
      <section className="bg-surface">
        <Container framed className="!px-0">
          <div className="px-8 pb-16 pt-24 md:pt-28 lg:px-10">
            <EyebrowPill>{c.eyebrow}</EyebrowPill>
            <h1 className="mt-5 max-w-[17ch] text-[clamp(2.4rem,4.6vw,4.1rem)] leading-[1.12] text-ink">
              {c.heading}
            </h1>
            <Button
              as={Link}
              href={`#${OPEN_ROLES_ID}`}
              variant="dark"
              size="sm"
              iconRight={<ArrowRight size={13} />}
              className="mt-8 !px-3 !py-1.5 !text-[11px]"
            >
              {c.cta}
            </Button>
          </div>

          {/* ── team photo ── ✓ Figma: greyscale, edge-to-edge in the frame ── */}
          <figure className="relative aspect-[1207/569] w-full overflow-hidden border-y border-grid bg-[#eaeaea]">
            <img
              src={c.photo.src}
              alt={c.photo.alt}
              className="h-full w-full object-cover object-center grayscale"
            />
          </figure>

          {/* ── values ── */}
          <h2 className="py-10 text-center text-[2rem] font-light leading-[1.4] tracking-[-0.04em] text-ink">
            {c.valuesHeading}
          </h2>

          <ul id={OPEN_ROLES_ID} className="grid border-t border-grid sm:grid-cols-2 lg:grid-cols-3">
            {c.values.map((v) => (
              <li
                key={v.title}
                className="flex min-h-[200px] flex-col justify-between border-b border-grid p-6 sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:not(:nth-child(3n))]:border-r"
              >
                <h3 className="font-serif text-[15px] font-normal tracking-[-0.01em] text-ink">{v.title}</h3>
                <p className="mt-10 max-w-[38ch] text-[11.5px] leading-relaxed text-muted">{v.body}</p>
              </li>
            ))}
          </ul>

          <HatchDivider className="border-t-0" />

          {/* ✓ Figma: blank band before the footer */}
          <div aria-hidden="true" className="h-40" />
        </Container>
      </section>
    </>
  )
}
