'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { ArrowRight } from 'lucide-react'

const values = [
  { title: 'Clarity', desc: 'We believe great communication starts with clarity. Every piece of work we create is purposeful and precise.' },
  { title: 'Creativity', desc: 'We push creative boundaries to deliver work that stands out — visually, strategically, and emotionally.' },
  { title: 'Consistency', desc: 'Growth requires consistency. We build systems that ensure your brand shows up reliably across every channel.' },
  { title: 'Commitment', desc: "Your growth is our mission. We're invested in your success and treat every project like it's our own." },
]

export default function AboutPage() {
  useScrollReveal()

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: '#10132b' }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(59,73,199,0.5) 0%, transparent 70%)'
        }} />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full opacity-30 blur-[100px] pointer-events-none"
          style={{ background: '#3b49c7' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <span className="accent-line" />
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-3xl">
            We Are <span className="gradient-text">VYOM Studio</span>
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: 'rgba(168,176,242,0.75)' }}>
            Where Ideas Go Beyond. A data-driven creative digital agency built for progressive brands — and the opportunities ahead of them.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad" style={{ background: '#faf8ff' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="accent-line" />
          <h2 className="animate-on-scroll font-display text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#10132b' }}>
                Our Story
              </h2>
              <div className="space-y-5 text-base leading-relaxed" style={{ color: 'rgba(16,19,43,0.65)' }}>
                <p className="animate-on-scroll">
                  VYOM Studio was founded on a simple observation: most brands have tremendous potential — but lack the identity, digital systems, and creative support to realize it.
                </p>
                <p className="animate-on-scroll delay-100">
                  We started as a focused creative studio and have grown into a full-service digital agency. Every service we offer is designed to solve real problems for real businesses — not just tick boxes.
                </p>
                <p className="animate-on-scroll delay-200">
                  Today, VYOM Studio supports brands across industries with branding, digital marketing, content creation, and web development — all under one roof.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="animate-on-scroll service-card--light p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-[#6673e4] text-xs uppercase tracking-widest mb-3">Our Mission</h3>
                <p className="font-display text-xl font-medium leading-snug" style={{ color: '#10132b' }}>
                  To empower brands with the identity, digital tools, and creative systems they need to grow with confidence.
                </p>
              </div>
              <div className="animate-on-scroll delay-100 service-card--light p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-[#6673e4] text-xs uppercase tracking-widest mb-3">Our Vision</h3>
                <p className="font-display text-xl font-medium leading-snug" style={{ color: '#10132b' }}>
                  To become the most trusted creative partner for progressive brands — known for craft, consistency, and results.
                </p>
              </div>
              <div className="animate-on-scroll delay-200 service-card--light p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-[#6673e4] text-xs uppercase tracking-widest mb-3">What Drives Us</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(16,19,43,0.65)' }}>
                  We&apos;re driven by impact. Every brand we support, every campaign we run, every experience we build — it all points toward meaningful, measurable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad" style={{ background: '#0b0e27' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="accent-line" />
          <h2 className="animate-on-scroll font-display text-4xl lg:text-5xl font-bold text-white mb-14">
            Our Core Values
          </h2>
          <div className="services-grid">
            {values.map(({ title, desc }, i) => (
              <div key={title} className={`animate-on-scroll delay-${(i + 1) * 100} service-card`}>
                <h3 className="font-display text-2xl font-bold text-white mb-4">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(168,176,242,0.7)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus */}
      <section className="section-pad" style={{ background: '#faf8ff' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="accent-line" />
          <h2 className="animate-on-scroll font-display text-4xl lg:text-5xl font-bold mb-14" style={{ color: '#10132b' }}>
            What We Focus On
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { area: 'Branding', detail: 'Visual identities, logo systems, and brand guidelines built for recognition and long-term recall.' },
              { area: 'Digital Marketing', detail: 'Targeted growth campaigns, performance marketing, and conversion optimization across channels.' },
              { area: 'Content Creation', detail: 'High-retention video, social storytelling, and content systems that keep your audience engaged.' },
              { area: 'Web Development', detail: 'Fast, responsive, conversion-focused websites and web applications with a seamless user experience.' },
            ].map(({ area, detail }, i) => (
              <div key={area} className={`animate-on-scroll delay-${(i % 2 + 1) * 100} flex gap-6 p-6 service-card--light rounded-2xl`}>
                <span className="service-num text-3xl mb-0 leading-none flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-medium mb-2" style={{ color: '#10132b' }}>{area}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(16,19,43,0.6)' }}>{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad text-center" style={{ background: 'linear-gradient(160deg, #10132b 0%, #171c43 50%, #0b0e27 100%)' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="animate-on-scroll font-display text-4xl lg:text-5xl font-bold text-white mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="animate-on-scroll delay-100 mb-8" style={{ color: 'rgba(168,176,242,0.7)' }}>
            Whether you&apos;re just starting or looking to scale — VYOM Studio has the team, tools, and strategy to help.
          </p>
          <Link href="/contact" className="animate-on-scroll delay-200 btn-primary inline-flex">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
