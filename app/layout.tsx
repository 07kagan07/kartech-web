import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat, Orbitron, Rajdhani } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
const orbitron = Orbitron({ subsets: ['latin'], weight: ['700', '900'], variable: '--font-orbitron' })
const rajdhani = Rajdhani({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-rajdhani' })

export const metadata: Metadata = {
  title: 'KARTECH | Profesyonel Güvenlik Sistemleri ve Kamera Kurulumu',
  description:
    'IP kamera, AHD kamera, alarm sistemleri ve diyafon kurulumu. Yeni inşaat ve mevcut binalar için anahtar teslim güvenlik çözümleri.',
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
