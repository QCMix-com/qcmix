import Script from 'next/script'

export default function Analytics() {
  return (
    <Script
      strategy="afterInteractive"
      src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
    />
  )
}
