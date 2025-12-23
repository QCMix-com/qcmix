import Script from 'next/script'

export default function FAQSchema({ faq }: { faq: { q: string; a: string }[] }) {
  if (!faq?.length) return null

  return (
    <Script
      type="application/ld+json"
      id="faq-schema"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faq.map(item => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.a
            }
          }))
        })
      }}
    />
  )
}
