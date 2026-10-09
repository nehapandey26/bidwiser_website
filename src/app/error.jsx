'use client'

import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function Error({ error, reset }) {
  return (
    <Container framed className="border-b border-grid py-28 md:py-36">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-h2 text-ink">Something went wrong</h1>
        <p className="mt-3 text-lead text-copy">
          {error?.message || 'An unexpected error occurred. Please try again.'}
        </p>
        <Button onClick={() => reset()} variant="dark" className="mt-8">
          Try again
        </Button>
      </div>
    </Container>
  )
}
