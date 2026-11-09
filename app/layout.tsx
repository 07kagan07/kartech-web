import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat, Orbitron, Rajdhani } from 'next/font/google'
import { SITE } from '@/lib/site'

import './globals.css'

const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin', 'latin-ext'], variable: '--font-montserrat' })
const orbitron = Orbitron({ subsets: ['latin'], weight: ['700', '900'], variable: '--font-orbitron' })
const rajdhani = Rajdhani({ subsets: ['latin', 'latin-ext'], weight: ['600', '700'], variable: '--font-rajdhani' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: SITE.keywords,
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName, url: SITE.url }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  category: 'Güvenlik Sistemleri',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: '/',
    siteName: SITE.legalName,
    title: SITE.title,
    description: SITE.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} ${montserrat.variable} ${orbitron.variable} ${rajdhani.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
