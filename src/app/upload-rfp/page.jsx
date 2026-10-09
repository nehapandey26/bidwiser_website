import PlaceholderPage from '@/components/dev/PlaceholderPage'

export const metadata = {
  title: 'Upload RFP for Analysis',
  description:
    'Upload a tender document and Bidwiser checks your eligibility, extracts every form, and flags disqualification risks.',
  alternates: { canonical: '/upload-rfp' },
}

export default function UploadRfpPage() {
  return (
    <PlaceholderPage
      title="Upload RFP for Analysis"
      blurb="Drop in a tender document and Bidwiser returns an eligibility check, the full form list, and anything that could get you disqualified."
    />
  )
}
