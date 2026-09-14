'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { allWorks } from '@/lib/works'
import { ArrowRight, ChevronRight, Camera, Clapperboard, Aperture, Star, Sparkles } from 'lucide-react'

/* ── Data ─────────────────────────────────────────────────── */
const pillars = [
  { num: '01', title: 'Branding', desc: 'Visual identities, logo systems, and comprehensive brand guideline kits built for recognition.' },
  { num: '02', title: 'Digital Marketing', desc: 'Targeted growth campaigns, performance marketing, and conversion optimization strategies.' },
  { num: '03', title: 'Content Creation', desc: 'High-retention video production, trend-based social media reels, and visual storytelling.' },
  { num: '04', title: 'Web Development', desc: 'Fast, responsive, modern web applications built for conversion and seamless user experience.' },
]

// All 9 works — 4 images + 5 videos — pulled from shared data
// Duplicated 4× for a seamless infinite marquee loop
const ltrRow = [...allWorks, ...allWorks, ...allWorks, ...allWorks]
const rtlRow = [...allWorks, ...allWorks, ...allWorks, ...allWorks].reverse()

const marqueeItems = [
  'Branding', 'Digital Marketing', 'Content Creation',
  'Web Development', 'Strategy', 'Visual Identity',
  'Social Media', 'Performance Marketing', 'Brand Growth',
  'UI Design',
]

const stats = [
  { value: 100, suffix: '+', label: 'Projects Delivered' },
  { value: 50,  suffix: '+', label: 'Brands Elevated' },
  { value: 4,   suffix: 'yr', label: 'Years of Craft' },
  { value: 98,  suffix: '%', label: 'Client Satisfaction' },
]

/* ── Typewriter Words ─────────────────────────────────────── */
const WORDS = ['transform brands', 'launch campaigns', 'tell stories', 'drive growth', 'craft identities']

/* ── Component ───────────────────────────────────────────── */
export default function HomePage() {
  useScrollReveal()

  /* Typewriter state */
  const [wordIdx, setWordIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [cursorOn, setCursorOn] = useState(true)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const current = WORDS[wordIdx]

    if (!deleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65)
    } else if (!deleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setWordIdx((i) => (i + 1) % WORDS.length)
    }

    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  }, [displayed, deleting, wordIdx])

  /* Cursor blink */
  useEffect(() => {
    const id = setInterval(() => setCursorOn((v) => !v), 530)
    return () => clearInterval(id)
  }, [])

  /* Magnetic button effect */
  const magneticRef = useRef<HTMLAnchorElement | null>(null)
  const magneticRef2 = useRef<HTMLAnchorElement | null>(null)

  const makeMagnetic = (ref: React.RefObject<HTMLAnchorElement | null>) => ({
    onMouseMove: (e: React.MouseEvent<HTMLAnchorElement>) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      el.style.transform = `translate(${x * 0.28}px, ${y * 0.28}px)`
    },
    onMouseLeave: () => {
      const el = ref.current
      if (!el) return
      el.style.transform = ''
    },
  })

  return (
    <>
      {/* ═══════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════ */}
      <header className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Floating orbs */}
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />

        {/* Decorative floating icons */}
        <div className="hidden lg:block absolute top-1/4 left-[10%] animate-float text-white/30 rotate-12" style={{ animationDelay: '0s' }}>
          <Camera size={44} strokeWidth={1} />
        </div>
        <div className="hidden lg:block absolute bottom-1/4 left-[14%] animate-float text-white/20 -rotate-12" style={{ animationDelay: '2s' }}>
          <Clapperboard size={52} strokeWidth={1} />
        </div>
        <div className="hidden lg:block absolute top-1/3 right-[11%] animate-float text-white/25 rotate-45" style={{ animationDelay: '1s' }}>
          <Aperture size={60} strokeWidth={1} />
        </div>
        <div className="hidden lg:block absolute bottom-1/3 right-[20%] animate-float text-white/40 rotate-[20deg]" style={{ animationDelay: '3s' }}>
          <Star size={28} strokeWidth={1.5} fill="currentColor" className="opacity-50" />
        </div>
        <div className="hidden lg:block absolute top-1/2 right-[8%] animate-float text-white/20" style={{ animationDelay: '1.5s' }}>
          <Sparkles size={36} strokeWidth={1} />
        </div>

        {/* Hero content */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 text-center z-10">

          {/* Kicker badge */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <span className="kicker">
              <span className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full animate-pulse" />
              Where Ideas Go Beyond
            </span>
          </div>

          {/* Main heading */}
          <h1 className="hero-title text-5xl sm:text-7xl lg:text-[7rem] font-bold text-white leading-[1.05] tracking-tight mb-4 animate-fade-up mt-2">
            VYOM{' '}
            <span className="font-serif italic font-normal gradient-text">Studio</span>
          </h1>

          {/* Typewriter subtitle */}
          <div className="h-14 sm:h-16 flex items-center justify-center mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-white/60">
              We{' '}
              <span className="gradient-text-lime font-bold">{displayed}</span>
              <span
                className="inline-block w-[3px] h-[1em] bg-[#CCFF00] ml-1 align-middle rounded-sm"
                style={{ opacity: cursorOn ? 1 : 0, transition: 'opacity 0.1s' }}
              />
            </p>
          </div>

          <p className="hero-subtitle text-white/65 text-lg sm:text-xl max-w-2xl mx-auto mb-10 animate-fade-up font-body leading-relaxed"
            style={{ animationDelay: '0.15s' }}>
            We transform progressive brands through high-impact branding, intelligent web solutions, and strategic content creation.
          </p>

          <div className="cta-group flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: '0.25s' }}>
            <Link
              href="/contact"
              className="btn-primary"
              ref={magneticRef}
              style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease' }}
              {...makeMagnetic(magneticRef)}
            >
              Start a Project
              <span className="icon-circle">↗</span>
            </Link>
            <Link
              href="/services"
              className="btn-secondary"
              ref={magneticRef2}
              style={{ transition: 'transform 0.3s ease, border-color 0.3s ease, color 0.3s ease, background 0.3s ease' }}
              {...makeMagnetic(magneticRef2)}
            >
              Explore Services ↗
            </Link>
          </div>

          {/* Scroll cue — sits near hero bottom (light blue zone) */}
          <div className="mt-16 animate-fade-in flex flex-col items-center gap-2" style={{ animationDelay: '1s', opacity: 0.5 }}>
            <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: '#10132b' }}>Scroll</span>
            <div className="w-px h-10 animate-bounce" style={{ background: 'linear-gradient(to bottom, #25307b, transparent)' }} />
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════
          MARQUEE STRIP — light blue, flows from hero bottom
      ═══════════════════════════════════════════════════ */}
      <div className="border-y border-white/10 py-4 overflow-hidden" style={{ background: '#10132b' }}>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="marquee-item" style={{ color: '#ffffff' }}>
                <span className="marquee-dot" style={{ background: '#6673e4' }} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          ABOUT — Soft cream / light lavender
      ═══════════════════════════════════════════════════ */}
      <section className="section-pad border-t border-purple-900/30" style={{ background: '#faf8ff' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="accent-line" />
              <h2 className="slide-left font-display text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6" style={{ color: '#1a0533' }}>
                We help brands go beyond — with strategy and craft.
              </h2>
              <p className="animate-on-scroll delay-100 text-base leading-relaxed mb-8" style={{ color: 'rgba(26,5,51,0.65)' }}>
                VYOM Studio is a modern digital agency. We partner with progressive brands to build high-impact identity systems, growth campaigns, content, and web experiences that convert.
              </p>
              <Link href="/about" className="animate-on-scroll delay-200 btn-outline-dark inline-flex">
                Learn About Us <ChevronRight size={16} />
              </Link>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, suffix, label }, i) => (
                <div key={label} className={`scale-in delay-${(i + 1) * 100} glass-card text-center`}>
                  <div
                    className="stat-number mb-1"
                    data-target={value}
                    data-suffix={suffix}
                  >
                    0{suffix}
                  </div>
                  <p className="text-xs leading-relaxed font-medium" style={{ color: 'rgba(26,5,51,0.55)' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SERVICES — Deep Purple Dark + Animated Border Cards
      ═══════════════════════════════════════════════════ */}
      <section id="services" className="section-pad border-t border-purple-900/40" style={{ background: '#06000f' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <span className="accent-line" />
              <span className="section-eyebrow">Our Expertise</span>
              <h2 className="slide-left font-display text-4xl lg:text-5xl font-bold text-white tracking-tight">
                What We Do
              </h2>
            </div>
            <Link href="/services" className="animate-on-scroll mt-6 md:mt-0 text-sm text-[#94A3B8] hover:text-[#CCFF00] transition-colors inline-flex items-center gap-2 hover-underline">
              All Services <ArrowRight size={14} />
            </Link>
          </div>

          <div className="services-grid">
            {pillars.map(({ num, title, desc }, i) => (
              <div key={title} className={`animate-on-scroll delay-${(i % 4) * 100 + 100} service-card`}>
                <span className="service-num">{num}</span>
                <h3 className="text-white font-display font-semibold text-xl mb-3">{title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{desc}</p>
                <div className="mt-5 flex items-center gap-2 text-[#CCFF00] text-xs font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>→ Explore</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WORK — Dual Running Marquee Gallery
      ═══════════════════════════════════════════════════ */}
      <section className="border-t border-white/5 overflow-hidden" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 40%, #0d1a3a 0%, #0A1128 60%, #050810 100%)',
        padding: '5rem 0 6rem'
      }}>
        {/* Section header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-14">
          <div className="flex items-end justify-between">
            <div>
              <span className="section-eyebrow">Selected Works</span>
              <h2 className="slide-left font-display text-4xl lg:text-6xl font-bold text-white tracking-tight leading-none">
                Our <span className="font-serif italic font-normal gradient-text">Work</span>
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="animate-on-scroll text-xs tracking-[0.2em] uppercase text-white/40 hover:text-[#CCFF00] transition-colors inline-flex items-center gap-2 border-b border-white/20 pb-0.5 hover-underline"
            >
              View All <ArrowRight size={12} />
            </Link>
          </div>
        </div>

        {/* ── Row 1: Left → Right  (all 9 works × 4 for seamless loop) ── */}
        <div className="work-row-wrapper mb-5">
          <div className="work-row work-row--ltr">
            {ltrRow.map(({ id, title, category, type, src }, i) => (
              <div key={`ltr-${i}-${id}`} className="work-card group">
                <div className="work-card-media">
                  {type === 'video' ? (
                    <video
                      src={src}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                      muted loop playsInline autoPlay
                    />
                  ) : (
                    <img
                      src={src}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                    />
                  )}
                  {/* Dark gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Slide-up info */}
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="text-[#CCFF00] text-[10px] uppercase tracking-[0.2em] font-mono block mb-0.5">{category}</span>
                    <span className="text-white text-sm font-semibold leading-snug">{title}</span>
                  </div>
                </div>
                <div className="work-card-meta">
                  <span className="text-white/50 text-xs font-medium truncate">{title}</span>
                  <span className="text-[#CCFF00]/60 text-[10px] font-mono uppercase tracking-wider">{category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Row 2: Right → Left  (reversed order for variety) ── */}
        <div className="work-row-wrapper">
          <div className="work-row work-row--rtl">
            {rtlRow.map(({ id, title, category, type, src }, i) => (
              <div key={`rtl-${i}-${id}`} className="work-card group">
                <div className="work-card-media">
                  {type === 'video' ? (
                    <video
                      src={src}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                      muted loop playsInline autoPlay
                    />
                  ) : (
                    <img
                      src={src}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="text-[#CCFF00] text-[10px] uppercase tracking-[0.2em] font-mono block mb-0.5">{category}</span>
                    <span className="text-white text-sm font-semibold leading-snug">{title}</span>
                  </div>
                </div>
                <div className="work-card-meta">
                  <span className="text-white/50 text-xs font-medium truncate">{title}</span>
                  <span className="text-[#CCFF00]/60 text-[10px] font-mono uppercase tracking-wider">{category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHY VYOM — Light Cream + Animated Slide-In
      ═══════════════════════════════════════════════════ */}
      <section className="section-pad border-t border-purple-200/40" style={{ background: '#f3eeff' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="accent-line" />
          <span className="section-eyebrow section-eyebrow--dark">Our Difference</span>
          <h2 className="slide-left font-display text-4xl lg:text-5xl font-bold tracking-tight mb-14" style={{ color: '#1a0533' }}>
            Why VYOM Studio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
            {[
              { num: '01', title: 'Data-Driven Creative', desc: 'Strategy and craft work together. We design for recognition, then optimize for results.' },
              { num: '02', title: 'Four Core Pillars', desc: 'Branding, digital marketing, content, and web — one studio, full coverage.' },
              { num: '03', title: 'Built for Conversion', desc: 'Every campaign, page, and asset is designed to move people from interest to action.' },
              { num: '04', title: 'Modern Aesthetic', desc: 'Premium creative output that makes your brand look world-class.' },
              { num: '05', title: 'Transparent Communication', desc: 'Clear reporting, honest timelines, and open communication at every stage.' },
              { num: '06', title: 'Ideas That Go Beyond', desc: 'We push past templates to build identities and experiences that stay with people.' },
            ].map(({ num, title, desc }, i) => (
              <div
                key={num}
                className="why-item"
                data-delay={String(i * 90)}
              >
                <span className="font-display text-4xl font-bold leading-none select-none flex-shrink-0" style={{ color: 'rgba(109,40,217,0.18)' }}>
                  {num}
                </span>
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: '#1a0533' }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(26,5,51,0.6)' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CONTACT CTA — Animated Gradient Border Card
      ═══════════════════════════════════════════════════ */}
      <section id="contact" className="section-pad border-t border-blue-900/30" style={{ background: 'linear-gradient(160deg, #10132b 0%, #171c43 50%, #0b0e27 100%)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Animated gradient border card */}
          <div className="cta-card animate-on-scroll">
            <div className="cta-card-inner">

              {/* Top glow line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[#CCFF00]/60 to-transparent" />
              {/* Corner orbs */}
              <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl" style={{ background: 'rgba(75,84,227,0.2)' }} />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl" style={{ background: 'rgba(204,255,0,0.08)' }} />

              <p className="text-[11px] tracking-[0.3em] uppercase text-[#CCFF00]/70 mb-4 relative">Let&apos;s Build Together</p>
              <h2 className="slide-left font-display text-4xl lg:text-6xl font-bold text-white tracking-tight mb-6 relative">
                Ready to Go <span className="gradient-text">Beyond?</span>
              </h2>
              <p className="animate-on-scroll delay-100 text-[#94A3B8] text-lg max-w-lg mx-auto mb-10 relative">
                Let&apos;s talk about how VYOM Studio can help you build a stronger brand, sharper digital presence, and experiences that convert.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll delay-200 relative">
                <Link href="/contact" className="btn-shimmer">
                  Start a Project <span className="ml-1">↗</span>
                </Link>
                <a
                  href="https://wa.me/918792547821?text=Hi%20VYOM%20Studio%2C%20I%27m%20interested%20in%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
