import './globals.css'
import Header from '@/components/Header'
import Schema from '@/components/Schema'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'QCMix | Fast Local Websites for Quad Cities Businesses',
  description:
    'QCMix builds performance-first websites for Quad Cities service businesses. Designed for SEO, AI search, and conversions.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Schema />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
