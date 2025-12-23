import Link from 'next/link'

const industries = [
  'HVAC',
  'Plumbing',
  'Electrical',
  'Roofing',
  'Remodeling',
  'Landscaping',
  'Cleaning',
  'Pest Control',
  'Auto Repair',
  'Real Estate'
]

export default function IndustriesIndex() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl font-bold">Industries We Serve</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {industries.map(i => (
          <div key={i} className="rounded-lg border p-4">
            {i}
          </div>
        ))}
      </div>
    </main>
  )
}
