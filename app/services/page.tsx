'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { Palette, TrendingUp, Video, Globe, ArrowRight, Check } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Branding',
    tagline: 'Built for recognition.',
    desc: 'Visual identities, logo systems, and comprehensive brand guideline kits. We shape how your brand looks, sounds, and is remembered.',
    features: ['Logo & identity systems', 'Brand guideline kits', 'Visual language', 'Packaging & collateral', 'Rebrand strategy'],
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    tagline: 'Growth you can measure.',
    desc: 'Targeted growth campaigns, performance marketing, and conversion optimization strategies designed to turn attention into results.',
    features: ['Performance campaigns', 'Conversion optimization', 'Social growth strategy', 'Analytics & reporting', 'Funnel design'],
  },
  {
    icon: Video,
    title: 'Content Creation',
    tagline: 'Stories that hold attention.',
    desc: 'High-retention video production, trend-based social media reels, and visual storytelling that feels native to every platform.',
    features: ['Reel & short-form video', 'Visual storytelling', 'Content systems', 'Scripting & editing', 'Monthly production'],
  },
  {
    icon: Globe,
    title: 'Web Development',
    tagline: 'Built for conversion.',
    desc: 'Fast, responsive, modern web applications built for conversion and a seamless user experience — from first visit to last click.',
    features: ['Website design & development', 'Performance & SEO', 'Conversion-focused UX', 'Content updates', 'Ongoing support'],
  },
]

export default function ServicesPage() {
  useScrollReveal()

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: '#10132b' }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 60% 60% at 100% 0%, rgba(59,73,199,0.4) 0%, transparent 70%)'
        }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] pointer-events-none"
          style={{ background: '#3b49c7' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <span className="accent-line" />
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Services & Expertise
          </h1>
          <p className="text-xl max-w-2xl leading-relaxed" style={{ color: 'rgba(168,176,242,0.75)' }}>
            Four core pillars — branding, digital marketing, content creation, and web development — designed around one goal: meaningful, measurable growth.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section id="services" className="section-pad" style={{ background: '#0b0e27' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-4">
          {services.map(({ icon: Icon, title, tagline, desc, features }, i) => (
            <div
              key={title}
              className={`animate-on-scroll delay-${Math.min((i + 1) * 50, 500)} service-card p-8 lg:p-10 group`}
              style={{ background: 'rgba(16, 19, 43, 0.95)' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-1">
                  <span className="service-num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="w-12 h-12 flex items-center justify-center mb-5 rounded-xl transition-colors"
                    style={{ background: 'rgba(59,73,199,0.12)' }}>
                    <Icon size={20} style={{ color: '#93c5fd' }} />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-white mb-2">{title}</h2>
                  <p className="text-sm italic" style={{ color: '#93c5fd' }}>{tagline}</p>
                </div>

                <div className="lg:col-span-1">
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(168,176,242,0.7)' }}>{desc}</p>
                </div>

                <div>
                  <ul className="space-y-2">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm" style={{ color: 'rgba(168,176,242,0.7)' }}>
                        <Check size={14} className="text-[#CCFF00] mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad text-center" style={{ background: 'linear-gradient(160deg, #10132b 0%, #171c43 50%, #0b0e27 100%)' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="animate-on-scroll font-display text-4xl lg:text-5xl font-bold mb-6 text-white">
            Not Sure Where to Start?
          </h2>
          <p className="animate-on-scroll delay-100 mb-8" style={{ color: 'rgba(168,176,242,0.7)' }}>
            Get in touch and we&apos;ll help you figure out the right combination of services for your brand goals and budget.
          </p>
          <Link href="/contact" className="animate-on-scroll delay-200 btn-primary inline-flex">
            Book a Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
