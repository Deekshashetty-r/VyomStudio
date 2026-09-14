import Link from 'next/link'
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react'
import BrandLogo from './BrandLogo'

const socialLinks = [
  {
    href: 'https://www.instagram.com/vyomstudio.in?utm_source=qr&igsi=Zm5xZmlxa3JicXhy',
    label: 'Instagram',
    icon: <Instagram size={17} />,
  },
  {
    href: 'https://www.linkedin.com/in/vyom-studio-8646333b0?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    label: 'LinkedIn',
    icon: <Linkedin size={17} />,
  },
  {
    href: 'mailto:kishakumar062006@gmail.com',
    label: 'Email',
    icon: <Mail size={17} />,
  },
  {
    href: 'tel:8792547821',
    label: 'Phone',
    icon: <Phone size={17} />,
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#030006] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand col */}
          <div className="md:col-span-2">
            <div className="mb-5 inline-block hover:opacity-80 transition-opacity">
              <BrandLogo />
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Where Ideas Go Beyond. A data-driven creative studio for branding, digital marketing, content, and web development.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="group relative w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40
                    hover:border-[#6673e4]/50 hover:text-[#6673e4] hover:bg-[#6673e4]/8
                    transition-all duration-300 hover:-translate-y-1"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation col */}
          <div>
            <h4 className="text-white/90 text-[10px] uppercase tracking-[0.2em] mb-5 font-semibold">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Work', href: '/portfolio' },
                { label: 'Team', href: '/team' },
                { label: 'Contact', href: '/contact' },
              ].map(({ label, href }) => (
                <li key={label} className="overflow-hidden">
                  <Link
                    href={href}
                    className="group relative inline-flex items-center gap-1.5 text-white/40 text-sm hover:text-white transition-colors duration-250"
                  >
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-px">
                      {label}
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#6673e4] text-xs">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div>
            <h4 className="text-white/90 text-[10px] uppercase tracking-[0.2em] mb-5 font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm text-white/40">
              <li>
                <a href="tel:8792547821" className="hover:text-white transition-colors duration-200">
                  +91 87925 47821
                </a>
              </li>
              <li>
                <a href="mailto:kishakumar062006@gmail.com" className="hover:text-white transition-colors duration-200 break-all">
                  kishakumar062006@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/vyomstudio.in?utm_source=qr&igsi=Zm5xZmlxa3JicXhy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  @vyomstudio.in
                </a>
              </li>
            </ul>

            <a
              href="https://wa.me/918792547821?text=Hi%20VYOM%20Studio%2C%20I%27m%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-white text-xs bg-[#6673e4] px-4 py-2.5 rounded-full
                hover:bg-[#a8b0f2] hover:text-[#10132b] transition-all duration-300 font-semibold hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(102,115,228,0.3)]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} VYOM Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-[#6673e4] animate-pulse" />
            <p className="text-white/25 text-xs">Where Ideas Go Beyond.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
