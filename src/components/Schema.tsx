import Script from 'next/script'

export default function Schema() {
  return (
    <>
      <Script id="org-schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'QCMix',
          url: 'https://qcmix.com',
          areaServed: 'Quad Cities',
          serviceOffered: {
            '@type': 'Service',
            name: 'Web Design & Local SEO'
          }
        })}
      </Script>
    </>
  )
}
