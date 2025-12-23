'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="mx-auto max-w-xl px-6 py-16">
      <h1 className="text-3xl font-bold">Book a QC Fit Call</h1>

      {submitted ? (
        <p className="mt-4">Thanks — we’ll be in touch.</p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input className="w-full border p-2" placeholder="Name" required />
          <input className="w-full border p-2" placeholder="Email" required />
          <textarea className="w-full border p-2" placeholder="Tell us about your business" />
          <button className="rounded bg-black px-4 py-2 text-white">
            Submit
          </button>
        </form>
      )}
    </main>
  )
}
