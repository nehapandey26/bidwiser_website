import Link from 'next/link'

import { cn } from '@/lib/cn'
import { paths } from '@/lib/paths'
import { pricingPage as c } from '@/data/landing'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import EyebrowPill from '@/components/ui/EyebrowPill'
import HatchDivider from '@/components/decor/HatchDivider'
import PlanColumns from '@/components/pricing/PlanColumns'
import { ArrowRight } from '@/components/icons'

export const metadata = {
  title: 'Pricing',
  description: 'Choose the Bidwiser plan that fits your team — Silver, Gold, Platinum or Enterprise.',
  alternates: { canonical: '/pricing' },
}

/**
 * ✓ Figma "Pricing" page:
 *   left-aligned hero → hatch → blank band → 3 ruled plan columns (the
 *   selected one carries the gradient — see PlanColumns) → full-width
 *   Enterprise row → hatch → blank band → footer.
 */
export default function PricingPage() {
  return (
    <section className="bg-surface">
      <Container framed className="!px-0">
        {/* ── hero ── */}
        <div className="px-8 pb-16 pt-24 md:pt-28 lg:px-10">
          <EyebrowPill>{c.eyebrow}</EyebrowPill>
          <h1 className="mt-5 max-w-[18ch] text-[clamp(2.4rem,4.6vw,4.1rem)] leading-[1.12] text-ink">
            {c.heading}
          </h1>
          <Button
            as={Link}
            href={paths.requestDemo}
            variant="dark"
            size="sm"
            iconRight={<ArrowRight size={13} />}
            className="mt-8 !px-3 !py-1.5 !text-[11px]"
          >
            {c.cta}
          </Button>
        </div>

        <HatchDivider className="border-t-0" />
        <div aria-hidden="true" className="h-16" />

        {/* ── plans (interactive) ── */}
        <PlanColumns plans={c.plans} />

        {/* ── enterprise ── */}
        <div className="grid border-t border-grid md:grid-cols-[1fr_1.6fr]">
          <div className="border-b border-grid p-8 md:border-b-0 md:border-r lg:p-10">
            <h2 className="text-[2rem] font-light leading-none tracking-[-0.04em] text-ink">
              {c.enterprise.name}
            </h2>
            <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.06em] text-brand">
              {c.enterprise.tagline}
            </p>
            <Link
              href={paths.requestDemo}
              className={cn(
                'mt-3 inline-flex w-[62%] items-center justify-center gap-1.5 rounded-[3px] py-1.5',
                'bg-[#e9e9eb] text-[11px] font-medium text-ink transition-colors hover:bg-[#dedee1]',
              )}
            >
              {c.enterprise.cta} <ArrowRight size={12} />
            </Link>
          </div>
          <div className="p-8 lg:p-10">
            <p className="text-[10px] font-medium uppercase tracking-[0.06em] text-muted">
              {c.enterprise.listTitle}
            </p>
            <ul className="mt-4 space-y-2.5">
              {c.enterprise.list.map((item) => (
                <li key={item} className="text-[12px] text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <HatchDivider />
        {/* ✓ Figma: blank band before the footer */}
        <div aria-hidden="true" className="h-40" />
      </Container>
    </section>
  )
}
