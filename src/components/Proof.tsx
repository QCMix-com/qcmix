export default function Proof() {
  const proofs = [
    {
      title: 'Performance-First Builds',
      desc: 'Every site is engineered for Core Web Vitals, fast loads, and clean architecture.'
    },
    {
      title: 'Local SEO Focused',
      desc: 'City + industry targeting built into structure, not bolted on later.'
    },
    {
      title: 'Modern Stack',
      desc: 'Next.js, Tailwind, MDX, and Vercel—no bloated themes or plugins.'
    }
  ]

  return (
    <section className="border-b bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold">Why QCMix Works</h2>
        <p className="mt-3 max-w-2xl text-gray-700">
          We don’t sell websites. We build local web infrastructure that produces measurable results.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {proofs.map(p => (
            <div key={p.title} className="rounded-xl border bg-white p-6">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
