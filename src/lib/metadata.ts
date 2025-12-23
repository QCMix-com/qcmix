import type { Metadata } from 'next'

export function buildMetadata({
  title,
  description,
  url
}: {
  title: string
  description: string
  url: string
}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'QCMix',
      images: [
        {
          url: '/og-default.png',
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      locale: 'en_US',
      type: 'website'
    }
  }
}
