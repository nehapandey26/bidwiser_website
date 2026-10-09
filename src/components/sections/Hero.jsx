import Link from 'next/link'

import { paths } from '@/lib/paths'
import { TAGLINE } from '@/constants/app'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { ArrowRight, Upload } from '@/components/icons'

export default function Hero() {
  return (
    <section className="bg-surface">
      <Container framed className="border-b border-grid">
        {/* ✓ Figma: inline-flex, align-items flex-start, gap 80px. Headline box 630px,
            right column 431px (container 1140px). No divider between them in Figma. */}
        <div className="grid gap-10 py-14 lg:grid-cols-[630px_1fr] lg:items-start lg:gap-x-20 lg:py-24">
          {/* headline */}
          <div>
            <h1 className="max-w-[630px] text-hero">{TAGLINE}</h1>
          </div>

          {/* supporting copy + CTAs */}
          <div className="flex flex-col lg:max-w-[431px]">
            <p className="text-lead text-copy">
              It reads all the tender documents, fills your forms, and writes your
              technical bid. It also shows you anything that could get you disqualified.
            </p>

            {/* ✓ Figma: 36px gap paragraph → buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                as={Link}
                href={paths.requestDemo}
                variant="dark"
                size="sm"
                iconRight={<ArrowRight size={16} />}
              >
                Request a Demo
              </Button>
              <Button
                as={Link}
                href={paths.uploadRfp}
                variant="outline"
                size="sm"
                iconLeft={<Upload size={15} />}
              >
                Upload RFP for Analysis
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
