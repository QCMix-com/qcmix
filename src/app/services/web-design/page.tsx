import Link from 'next/link'

const bullets = [
  'Design-first, performance-first builds (Core Web Vitals)',
  'Conversion architecture: clear CTA paths, proof, and friction removal',
  'Clean components for fast iteration during vibe coding',
  'SEO-ready foundations: metadata, schema, and content structure'
]

export default function WebDesignPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <header className="max-w-2xl">
        <p className="text-sm font-medium text-gray-700">Service</p>
        <h1 className="mt-2 text-4xl font-bold">Web Design</h1>
        <p className="mt-4 text-gray-700">
          Modern Next.js websites that load fast and convert local service traffic into calls.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border p-6 md:col-span-2">
          <h2 className="text-lg font-semibold">What you get</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
            {bullets.map(b => (
              <li key={b} className="mt-2">
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border p-6">
          <h2 className="text-lg font-semibold">Next step</h2>
          <p className="mt-2 text-sm text-gray-700">
            We’ll review your current site, competitors, and a simple lead flow.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex w-full justify-center rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-gray-900"
          >
            Book a QC Fit Call
          </Link>
        </div>
      </section>

      <div className="mt-10">
        <Link href="/services" className="text-sm font-medium hover:underline">
          ← Back to Services
        </Link>
      </div>
    </main>
  )
}
