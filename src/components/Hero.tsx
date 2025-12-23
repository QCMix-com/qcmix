import Link from 'next/link'

export default function Hero() {
  return (
    <section className="border-b">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-600">
          Quad Cities Web Infrastructure
        </p>

        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
          Fast, modern websites built to win local searches and convert calls.
        </h1>

        <p className="mt-5 max-w-2xl text-base text-gray-700 md:text-lg">
          Performance-first websites for Quad Cities service businesses. Built for Core Web Vitals,
          local SEO, and AI search visibility.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex justify-center rounded-md bg-black px-6 py-3 text-sm text-white hover:bg-gray-900"
          >
            Book a QC Fit Call
          </Link>
          <Link
            href="/services"
            className="inline-flex justify-center rounded-md border px-6 py-3 text-sm hover:border-gray-400"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  )
}
