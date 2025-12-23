const locations = [
  'Davenport',
  'Bettendorf',
  'Moline',
  'Rock Island',
  'East Moline',
  'Silvis'
]

export default function LocationsIndex() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl font-bold">Locations We Serve</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {locations.map(l => (
          <div key={l} className="rounded-lg border p-4">
            {l}
          </div>
        ))}
      </div>
    </main>
  )
}
