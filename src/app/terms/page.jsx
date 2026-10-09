import PlaceholderPage from '@/components/dev/PlaceholderPage'

export const metadata = {
  title: 'Terms of Service',
  description: 'The terms that govern your use of Bidwiser.',
  alternates: { canonical: '/terms' },
  robots: { index: false },
}

export default function TermsPage() {
  return (
    <PlaceholderPage
      title="Terms of Service"
      blurb="The full terms of service will live here."
    />
  )
}
