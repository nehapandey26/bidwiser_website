import Link from 'next/link'

import { paths } from '@/lib/paths'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { ArrowRight } from '@/components/icons'

export const metadata = { title: 'Page not found' }

export default function NotFound() {
  return (
    <Container framed className="border-b border-grid py-28 md:py-36">
      <div className="mx-auto max-w-md text-center">
        <p className="font-serif text-hero text-brand">404</p>
        <h1 className="mt-2 text-h2 text-ink">Page not found</h1>
        <p className="mt-3 text-lead text-copy">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        </p>
        <Button as={Link} href={paths.home} variant="dark" iconRight={<ArrowRight size={18} />} className="mt-8">
          Back to home
        </Button>
      </div>
    </Container>
  )
}
