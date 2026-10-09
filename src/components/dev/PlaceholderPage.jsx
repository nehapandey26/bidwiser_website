import Link from 'next/link'

import { paths } from '@/lib/paths'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import EyebrowPill from '@/components/ui/EyebrowPill'
import { ArrowRight } from '@/components/icons'

/**
 * TEMPORARY. Stand-in for routes that exist in the navbar but aren't in the
 * Figma prototype yet (only "/" is designed). Replace each with a real page.
 */
export default function PlaceholderPage({ title, blurb }) {
  return (
    <Container framed className="border-b border-grid py-24 md:py-32">
      <div className="mx-auto max-w-xl text-center">
        <EyebrowPill className="mx-auto">Coming soon</EyebrowPill>
        <h1 className="mt-6 text-h1 text-ink">{title}</h1>
        <p className="mt-4 text-lead text-copy">
          {blurb ?? 'This page is routed and ready — the design for it isn’t in the Figma prototype yet.'}
        </p>
        <Button
          as={Link}
          href={paths.home}
          variant="dark"
          iconRight={<ArrowRight size={18} />}
          className="mt-8"
        >
          Back to home
        </Button>
      </div>
    </Container>
  )
}
