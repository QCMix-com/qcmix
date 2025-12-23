import Link from 'next/link'

const pillars = [
  'Local Discovery System',
  'AI Search Inclusion',
  'Conversion Architecture',
  'Speed & Core Web Vitals',
  'On-Page SEO',
  'Trust & Compliance',
  'Tracking & Revenue Proof',
  'Authority Building'
]

export default function VisibilityPillarsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <header className="max-w-2xl">
        <p className="text-sm font-medium text-gray-700">Service</p>
        <h1 className="mt-2 text-4xl font-bold">Visibility Pillars</h1>
        <p className="mt-4 text-gray-700">
          An authority system that ranks locally and performs in AI search. Built on structured
          pages, schema, and proof.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border p-6 md:col-span-2">
          <h2 className="text-lg font-semibold">The 8 Pillars</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
            {pillars.map(p => (
              <li key={p} className="mt-2">
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Link href="/pillars/local-discovery" className="text-sm font-medium hover:underline">
              View sample pillar →
            </Link>
          </div>
        </div>

        <div className="rounded-xl border p-6">
          <h2 className="text-lg font-semibold">Next step</h2>
          <p className="mt-2 text-sm text-gray-700">
            We’ll choose your target cities + industries and map a 30–60 day rollout.
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
