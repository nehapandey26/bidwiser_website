import PlaceholderPage from '@/components/dev/PlaceholderPage'

export const metadata = {
  title: 'Privacy Policy',
  description: 'How Bidwiser handles your tender documents, bids, and account data.',
  alternates: { canonical: '/privacy' },
  robots: { index: false },
}

export default function PrivacyPage() {
  return (
    <PlaceholderPage
      title="Privacy Policy"
      blurb="The full privacy policy will live here. Bidwiser encrypts documents in transit and at rest, never trains shared models on your data, and records every action in an audit trail."
    />
  )
}
