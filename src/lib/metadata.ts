import type { Metadata } from 'next'

export function buildMetadata({
  title,
  description,
  url,
  image
}: {
  title: string
  description: string
  url: string
  image?: string
}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'QCMix',
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: title
            }
          ]
        : [],
      locale: 'en_US',
      type: 'website'
    }
  }
}
