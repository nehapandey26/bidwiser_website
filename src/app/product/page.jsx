import PlaceholderPage from '@/components/dev/PlaceholderPage'

export const metadata = {
  title: 'Product',
  description:
    'How Bidwiser reads a tender, checks eligibility, fills every form, and drafts the technical bid.',
  alternates: { canonical: '/product' },
}

export default function ProductPage() {
  return (
    <PlaceholderPage
      title="Product"
      blurb="How Bidwiser reads a tender, fills every form, and drafts the technical bid."
    />
  )
}
