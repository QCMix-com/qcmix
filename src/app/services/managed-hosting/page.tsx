import Link from 'next/link'

const bullets = [
  'Monitoring + uptime checks',
  'Automated backups',
  'Security headers + baseline hardening',
  'Performance tuning + CDN-friendly setup',
  'Simple monthly reporting'
]

export default function ManagedHostingPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <header className="max-w-2xl">
        <p className="text-sm font-medium text-gray-700">Service</p>
        <h1 className="mt-2 text-4xl font-bold">Managed Hosting</h1>
        <p className="mt-4 text-gray-700">
          Hosting that stays fast, stable, and maintained—without you thinking about it.
        </p>
      </header>

      <section className="mt-10 rounded-xl border p-6">
        <h2 className="text-lg font-semibold">Included</h2>
        <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
          {bullets.map(b => (
            <li key={b} className="mt-2">
              {b}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 rounded-xl border p-6">
        <h2 className="text-lg font-semibold">Book a QC Fit Call</h2>
        <p className="mt-2 text-sm text-gray-700">
          We’ll confirm your stack, traffic needs, and what “hands-off” looks like for you.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-flex rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-gray-900"
        >
          Book a QC Fit Call
        </Link>
      </section>

      <div className="mt-10">
        <Link href="/services" className="text-sm font-medium hover:underline">
          ← Back to Services
        </Link>
      </div>
    </main>
  )
}
