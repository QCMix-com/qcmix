export default function Process() {
  const steps = [
    {
      step: '01',
      title: 'Audit + Strategy',
      desc: 'We review your market, competitors, and current site to define a clear win path.'
    },
    {
      step: '02',
      title: 'Build + Optimize',
      desc: 'We design and build a fast, conversion-ready site with SEO and schema baked in.'
    },
    {
      step: '03',
      title: 'Launch + Expand',
      desc: 'We deploy, track performance, and expand into cities, industries, and pillars.'
    }
  ]

  return (
    <section className="border-b">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold">Our Process</h2>
        <p className="mt-3 max-w-2xl text-gray-700">
          Simple, structured, and focused on measurable outcomes.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map(s => (
            <div key={s.step} className="rounded-xl border p-6">
              <div className="text-sm font-medium text-gray-500">{s.step}</div>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
