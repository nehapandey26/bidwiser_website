import Container from '@/components/ui/Container'
import EyebrowPill from '@/components/ui/EyebrowPill'
import RequestDemoForm from '@/components/forms/RequestDemoForm'

export const metadata = {
  title: 'Request a Demo',
  description: 'See Bidwiser on one of your own live RFPs. Book a walkthrough with our team.',
  alternates: { canonical: '/request-demo' },
}

export default function RequestDemoPage() {
  return (
    <Container framed className="border-b border-grid py-20 md:py-28">
      <div className="mx-auto max-w-lg">
        <EyebrowPill>Request a Demo</EyebrowPill>
        <h1 className="mt-5 text-h1 text-ink">See Bidwiser on your own tender.</h1>
        <p className="mt-3 text-lead text-copy">
          Tell us a little about your team and we&rsquo;ll set up a walkthrough with one of your
          live RFPs.
        </p>
        <RequestDemoForm />
      </div>
    </Container>
  )
}
