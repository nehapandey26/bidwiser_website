import { bidNoBidPage as b } from '@/data/landing'
import Container from '@/components/ui/Container'
import EyebrowPill from '@/components/ui/EyebrowPill'
import HatchDivider from '@/components/decor/HatchDivider'
import FeatureStage from '@/components/sections/FeatureStage'

export const metadata = {
  title: 'Bid / No-Bid Engine',
  description:
    'Every clause that decides the bid, checked against your own company documents in minutes — before you commit.',
  alternates: { canonical: '/product/bid-no-bid' },
}

/**
 * ✓ Figma "Bid / No-Bid Engine":
 *   centred hero → hatch → blank band → pinned feature sequence on the sky
 *   gradient → hatch → blank band → footer.
 */
export default function BidNoBidPage() {
  return (
    <section className="bg-surface">
      <Container framed className="!px-0">
        {/* ── hero ── */}
        <div className="flex flex-col items-center px-6 pb-24 pt-24 text-center md:pb-28 md:pt-28">
          <EyebrowPill className="!self-center">{b.eyebrow}</EyebrowPill>
          <h1 className="mt-5 max-w-[22ch] text-[clamp(2.2rem,4.2vw,3.4rem)] leading-[1.15] text-ink">
            {b.heading}
          </h1>
        </div>

        <HatchDivider className="border-t-0" />
        <div aria-hidden="true" className="h-16" />

        {/* ── features (pinned on desktop, stacked below lg) ── */}
        <FeatureStage features={b.features} tone="sky" />

        <HatchDivider />
        {/* ✓ Figma: blank band before the footer */}
        <div aria-hidden="true" className="h-40" />
      </Container>
    </section>
  )
}
