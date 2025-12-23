import Link from 'next/link'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pillars/local-discovery', label: 'Pillars' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-bold">
          QCMix
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-gray-700 hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-gray-900"
        >
          Book a QC Fit Call
        </Link>
      </div>
    </header>
  )
}
