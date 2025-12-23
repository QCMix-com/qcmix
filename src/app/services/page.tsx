import Link from 'next/link'

const services = [
  {
    title: 'Web Design',
    href: '/services/web-design',
    description:
      'Modern, fast websites built for leads, trust, and Core Web Vitals.'
  },
  {
    title: 'Managed Hosting',
    href: '/services/managed-hosting',
    description:
      'Reliable hosting with monitoring, updates, backups, and performance tuning.'
  },
  {
    title: 'Visibility Pillars',
    href: '/services/visibility-pillars',
    description:
      'Local SEO + AI search inclusion built on an authority-first content system.'
  }
]

export default function ServicesIndex() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold">Services</h1>
        <p className="mt-4 text-gray-700">
          Choose a performance-first package or combine services for full local dominance.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map(s => (
          <Link
            key={s.href}
            href={s.href}
            className="rounded-xl border p-6 hover:border-gray-400"
          >
            <h2 className="text-lg font-semibold">{s.title}</h2>
            <p className="mt-2 text-sm text-gray-700">{s.description}</p>
            <div className="mt-4 text-sm font-medium">View details →</div>
          </Link>
        ))}
      </section>

      <section className="mt-14 rounded-xl border p-6">
        <h2 className="text-xl font-semibold">Book a QC Fit Call</h2>
        <p className="mt-2 max-w-2xl text-sm text-gray-700">
          Tell us your industry, your city, and what “more leads” means to you. We’ll map a plan
          that’s measurable and fast to deploy.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-flex rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-gray-900"
        >
          Book a QC Fit Call
        </Link>
      </section>
    </main>
  )
}
