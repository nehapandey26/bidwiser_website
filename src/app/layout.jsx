import '@/styles/index.css'
import { sentient, dmSans } from './fonts'
import { APP_NAME, APP_DESCRIPTION, SITE_URL } from '@/constants/app'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import JsonLd from '@/components/seo/JsonLd'
import { organizationSchema } from '@/lib/schema'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${APP_NAME} — turns an RFP into a winning bid`,
    template: `%s — ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  keywords: [
    'tender management',
    'RFP software',
    'bid writing',
    'proposal automation',
    'procurement',
    'eligibility check',
    'tender documents',
  ],
  authors: [{ name: APP_NAME }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: `${APP_NAME} — turns an RFP into a winning bid`,
    description: APP_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${APP_NAME} — turns an RFP into a winning bid`,
    description: APP_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export const viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${sentient.variable}`}>
      <body className="flex min-h-dvh flex-col bg-surface">
        <JsonLd data={organizationSchema()} />
        <Navbar />
        <main className="flex-1 overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
