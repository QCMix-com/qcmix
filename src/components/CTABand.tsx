import Link from 'next/link'

export default function CTABand() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">
          Ready to turn your website into a lead engine?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-300">
          Book a QC Fit Call and we’ll map exactly how to win in your city and industry.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="rounded-md bg-white px-6 py-3 text-sm font-medium text-black hover:bg-gray-200"
          >
            Book a QC Fit Call
          </Link>
        </div>
      </div>
    </section>
  )
}
