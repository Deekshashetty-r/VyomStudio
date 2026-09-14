'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import BrandLogo from './BrandLogo'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Work' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  const isHome = pathname === '/'
  const isLight = !isHome || scrolled

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl rounded-full
        transition-all duration-500 ease-out
        ${isLight
          ? 'bg-white/85 backdrop-blur-2xl border border-gray-200/80 shadow-[0_8px_32px_rgba(0,0,0,0.12)]'
          : 'bg-[#191929]/20 backdrop-blur-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
        }
        ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
      `}
      style={{ transitionProperty: 'background, border-color, box-shadow, opacity, transform' }}
    >
      <nav className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-[60px] lg:h-[72px]">
        <div className="transition-transform duration-300 hover:scale-[1.03]">
          <BrandLogo theme={isLight ? 'light' : 'dark'} />
        </div>

        <ul className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <li key={href} className="relative">
                <Link
                  href={href}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-200 pb-1 group
                    ${active
                      ? (isLight ? 'text-gray-900' : 'text-white')
                      : (isLight ? 'text-gray-500 hover:text-gray-900' : 'text-white/55 hover:text-white')
                    }`}
                >
                  {label}
                  {/* Active indicator */}
                  <span
                    className={`absolute bottom-0 left-0 h-px rounded-full bg-gradient-to-r from-[#0084FF] to-[#6673e4] transition-all duration-300 ease-out
                      ${active ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-60'}`}
                  />
                </Link>
              </li>
            )
          })}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className={`hidden md:inline-flex items-center gap-2 rounded-full text-xs font-semibold py-2 px-3 pr-1.5
            transition-all duration-300 hover:scale-105 hover:-translate-y-0.5
            ${isLight
              ? 'bg-gray-900 text-white hover:bg-[#111] shadow-sm'
              : 'bg-white text-black hover:bg-gray-200'
            }`}
        >
          Get in Touch
          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-base transition-all duration-300
            ${isLight ? 'bg-white text-gray-900' : 'bg-[#191929] text-white'}`}>
            ↗
          </span>
        </Link>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-1.5 rounded-full transition-colors ${isLight ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block transition-all duration-300 ${open ? 'rotate-90 opacity-0 absolute' : 'rotate-0 opacity-100'}`}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </span>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden rounded-2xl mx-2 mb-2 transition-all duration-400 ease-out
          ${isLight ? 'bg-white/95 border border-gray-100 shadow-xl' : 'bg-[#191929]/97 border border-white/10 shadow-2xl'}
          ${open ? 'max-h-96 opacity-100 mt-1' : 'max-h-0 opacity-0 mt-0'}`}
        style={{ transitionProperty: 'max-height, opacity, margin-top' }}
      >
        <ul className="flex flex-col px-6 py-5 gap-4">
          {links.map(({ href, label }, i) => (
            <li key={href} style={{ transitionDelay: `${i * 40}ms` }}>
              <Link
                href={href}
                className={`text-sm tracking-wide block transition-colors duration-200
                  ${pathname === href
                    ? (isLight ? 'text-gray-900 font-semibold' : 'text-white font-semibold')
                    : (isLight ? 'text-gray-500 hover:text-gray-900' : 'text-white/55 hover:text-white')
                  }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className={`inline-flex text-xs py-2.5 px-6 mt-1 rounded-full font-semibold transition-all duration-300 hover:scale-105
                ${isLight ? 'bg-gray-900 text-white' : 'bg-white text-black hover:bg-gray-200'}`}
            >
              Get in Touch
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
