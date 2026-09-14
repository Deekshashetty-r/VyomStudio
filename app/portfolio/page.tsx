'use client'
import { useState, useRef } from 'react'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { allWorks } from '@/lib/works'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Play, Pause, Volume2, VolumeX } from 'lucide-react'

const categories = ['All', 'Design', 'Video']


function VideoCard({ src, title, category }: { src: string; title: string; category: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (playing) {
      videoRef.current.pause()
      setPlaying(false)
    } else {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!videoRef.current) return
    videoRef.current.muted = !muted
    setMuted(!muted)
  }

  return (
    <div
      className="relative overflow-hidden group cursor-pointer w-full h-full"
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
        onEnded={() => setPlaying(false)}
      />

      <div className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`} />

      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
        <div className="w-12 h-12 bg-white/90 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform">
          {playing ? <Pause size={16} className="text-black" /> : <Play size={16} className="text-black ml-0.5" />}
        </div>
      </div>

      <button
        onClick={toggleMute}
        className="absolute top-3 right-3 w-8 h-8 bg-black/50 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
      >
        {muted ? <VolumeX size={13} className="text-white" /> : <Volume2 size={13} className="text-white" />}
      </button>
    </div>
  )
}


// Cipher.tv-inspired scatter config — each item has its own unique placement.

// widthPct: how wide the card is (% of the container)
// marginLeft: offset from the left (% of the container)
// aspectRatio: the card's aspect ratio
// translateY: vertical nudge in px (creates irregular vertical rhythm)
// quote: poetic editorial line shown in the empty space beside the card
// quoteAlign: 'left' = quote sits in empty space to the left, 'right' = to the right
const scatterConfig = [
  { widthPct: 58, marginLeft: 0,  aspectRatio: '16/10', translateY: 0,   quote: 'The invisible,\nmade visible.',          quoteAlign: 'right' as const }, // 001
  { widthPct: 36, marginLeft: 54, aspectRatio: '9/16',  translateY: -60, quote: 'Branding the\nforgotten sense.',        quoteAlign: 'left'  as const }, // 002
  { widthPct: 42, marginLeft: 10, aspectRatio: '9/16',  translateY: 0,   quote: 'Motion that\nleaves a mark.',           quoteAlign: 'right' as const }, // 003
  { widthPct: 28, marginLeft: 62, aspectRatio: '4/3',   translateY: 40,  quote: 'Strategy dressed\nas beauty.',           quoteAlign: 'left'  as const }, // 004
  { widthPct: 50, marginLeft: 20, aspectRatio: '16/10', translateY: 0,   quote: 'Stillness that\nspeaks louder.',          quoteAlign: 'right' as const }, // 005
  { widthPct: 32, marginLeft: 0,  aspectRatio: '3/4',   translateY: -40, quote: 'Ideas that refuse\nto be ordinary.',      quoteAlign: 'right' as const }, // 006
  { widthPct: 36, marginLeft: 46, aspectRatio: '4/3',   translateY: 0,   quote: 'Craft with\npurpose.',                  quoteAlign: 'left'  as const }, // 007
  { widthPct: 55, marginLeft: 5,  aspectRatio: '16/9',  translateY: 0,   quote: 'Every frame\ntells a story.',            quoteAlign: 'right' as const }, // 008
  { widthPct: 30, marginLeft: 60, aspectRatio: '3/4',   translateY: -80, quote: 'Born from instinct,\nbuilt for impact.',  quoteAlign: 'left'  as const }, // 009
]

export default function PortfolioPage() {
  useScrollReveal()
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? allWorks : allWorks.filter(w => w.category === active)

  // When filtered, fall back to sequential scatter positions
  const getConfig = (i: number) => scatterConfig[i % scatterConfig.length]

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-36 pb-12"
        style={{ background: '#f0ede6' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-xs tracking-[0.25em] uppercase text-gray-500 mb-4 font-body">
            Selected Works
          </p>
          <h1 className="font-display text-6xl lg:text-8xl font-bold text-gray-900 leading-[1] mb-0">
            Our
          </h1>
          <h1
            className="font-serif italic font-normal text-gray-900 leading-[1] mb-0"
            style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}
          >
            Work
          </h1>
        </div>
      </section>

      {/* Filter */}
      <section
        className="sticky top-16 lg:top-20 z-30 backdrop-blur-md border-b border-black/10"
        style={{ background: 'rgba(240,237,230,0.92)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex gap-3 overflow-x-auto items-center">
          <span className="text-[11px] tracking-[0.2em] uppercase text-gray-400 mr-2 hidden sm:block">Filter</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`flex-shrink-0 text-xs tracking-widest uppercase px-4 py-1.5 transition-all duration-200 rounded-full ${
                active === cat
                  ? 'bg-black text-white font-medium'
                  : 'text-gray-600 border border-gray-400/40 hover:border-black/60 hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Staggered Works — cipher.tv style */}
      <section
        className="relative pb-32"
        style={{ background: '#f0ede6', paddingTop: '5rem' }}
      >
        {/* Mobile: single column */}
        <div className="lg:hidden max-w-lg mx-auto px-6 flex flex-col gap-10">
          {filtered.map((work, i) => {
            const cfg = scatterConfig[i % scatterConfig.length]
            return (
              <div key={work.id} className="animate-on-scroll">
                <p className="text-[11px] tracking-[0.2em] text-gray-400 mb-3 uppercase">
                  ▪ {String(i + 1).padStart(3, '0')}
                </p>
                <div
                  className="relative overflow-hidden w-full"
                  style={{ aspectRatio: work.type === 'video' ? '9/16' : '3/4' }}
                >
                  {work.type === 'video' ? (
                    <VideoCard src={work.src} title={work.title} category={work.category} />
                  ) : (
                    <Image
                      src={work.src}
                      alt={work.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  )}
                </div>
                {/* Editorial line — mobile caption */}
                <p className="text-xs text-gray-800 mt-3 font-medium tracking-wide">{work.title}</p>
                <p className="font-serif italic text-gray-400 text-sm mt-1 leading-snug">
                  {cfg.quote.replace('\n', ' ')}
                </p>
              </div>
            )
          })}
        </div>

        {/* Desktop: cipher.tv stagger layout */}
        <div className="hidden lg:block relative max-w-7xl mx-auto px-6 lg:px-12">
          {filtered.map((work, i) => {
            const cfg = getConfig(i)
            // Empty space % on each side
            const emptyRight = 100 - cfg.widthPct - cfg.marginLeft
            const emptyLeft = cfg.marginLeft
            // Place the quote in whichever side has more empty space
            const showRight = cfg.quoteAlign === 'right' && emptyRight > 12
            const showLeft  = cfg.quoteAlign === 'left'  && emptyLeft  > 12

            return (
              <div
                key={work.id}
                className="relative animate-on-scroll"
                style={{
                  width: '100%',
                  marginBottom: i === filtered.length - 1 ? 0 : '4rem',
                  marginTop: cfg.translateY < 0 ? `${cfg.translateY}px` : 0,
                }}
              >
                {/* Inner row: card + quote side by side */}
                <div className="relative flex items-start" style={{ transform: `translateY(${cfg.translateY}px)` }}>

                  {/* Quote — LEFT side */}
                  {showLeft && (
                    <div
                      className="flex-shrink-0 flex flex-col justify-center pr-8"
                      style={{ width: `${emptyLeft}%`, paddingTop: '10%' }}
                    >
                      <p className="font-serif italic text-gray-700 leading-tight"
                        style={{ fontSize: 'clamp(1rem, 1.6vw, 1.5rem)' }}
                      >
                        {cfg.quote.split('\n').map((line, li) => (
                          <span key={li} className="block">{line}</span>
                        ))}
                      </p>
                      <span className="block mt-3 w-6 h-px bg-gray-400" />
                    </div>
                  )}

                  {/* Spacer when no left quote */}
                  {!showLeft && emptyLeft > 0 && (
                    <div className="flex-shrink-0" style={{ width: `${emptyLeft}%` }} />
                  )}

                  {/* Card column */}
                  <div className="flex-shrink-0" style={{ width: `${cfg.widthPct}%` }}>
                    {/* Number label */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] tracking-[0.25em] text-gray-400 uppercase font-mono">
                        ▪ {String(i + 1).padStart(3, '0')}
                      </span>
                      <span className="text-[11px] tracking-widest text-gray-400 uppercase">
                        {work.title}
                      </span>
                    </div>

                    {/* Card */}
                    <div
                      className="relative overflow-hidden group w-full"
                      style={{ aspectRatio: cfg.aspectRatio }}
                    >
                      {work.type === 'video' ? (
                        <VideoCard src={work.src} title={work.title} category={work.category} />
                      ) : (
                        <>
                          <Image
                            src={work.src}
                            alt={work.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            sizes="(max-width: 1280px) 60vw, 800px"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-500" />
                          <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                            <span className="text-xs tracking-[0.2em] text-white/70 uppercase block mb-1">
                              {work.category}
                            </span>
                            <span className="text-white text-sm font-medium">{work.title}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Quote — RIGHT side */}
                  {showRight && (
                    <div
                      className="flex-shrink-0 flex flex-col justify-center pl-8"
                      style={{ width: `${emptyRight}%`, paddingTop: '10%' }}
                    >
                      <p className="font-serif italic text-gray-700 leading-tight"
                        style={{ fontSize: 'clamp(1rem, 1.6vw, 1.5rem)' }}
                      >
                        {cfg.quote.split('\n').map((line, li) => (
                          <span key={li} className="block">{line}</span>
                        ))}
                      </p>
                      <span className="block mt-3 w-6 h-px bg-gray-400" />
                    </div>
                  )}
                </div>
              </div>
            )
          })}

          {filtered.length === 0 && (
            <div className="text-center py-32 text-gray-500">No projects in this category yet.</div>
          )}
        </div>
      </section>

      {/* Footer CTA */}
      <section
        className="py-24 border-t border-black/10 text-center"
        style={{ background: '#f0ede6' }}
      >
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-4">More coming soon</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Want Work Like This?
          </h2>
          <Link href="/contact" className="btn-outline inline-flex items-center gap-2">
            Start a Project <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  )
}