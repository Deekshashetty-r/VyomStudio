'use client'
import { useScrollReveal } from '@/lib/useScrollReveal'
import Link from 'next/link'
import { ArrowRight, Linkedin, Instagram } from 'lucide-react'

const team = [
  {
    name: 'Kisha Kumar',
    role: 'Founder & CEO',
    bio: 'Visionary behind VYOM Studio. Passionate about helping brands unlock their digital potential through strategy and creativity.',
    initials: 'KK',
    color: '#0084FF',
  },
  {
  name: 'Lenzil',
  role: 'Video Editing Support',
  bio: 'Our editing guy — brings raw footage to life with sharp cuts, smooth transitions, and content that stops the scroll.',
  initials: 'LZ',
  color: '#6745E7',
},
{
  name: 'Deeksha Shetty',
  role: 'Web Developer & Designer',
  bio: 'Designs and builds modern, fast websites that look premium and convert visitors into clients.',
  initials: 'DS',
  color: '#1E40AF',
  linkedin: 'https://www.linkedin.com/in/deeksha-shetty07',
},
{
  name: 'Sheron',
  role: 'Video Shooting & Editing Support',
  bio: 'Transforms ideas into compelling visuals through creative shooting and content support.',
  initials: 'SH',
  color: '#0084FF',
},
]

export default function TeamPage() {
  useScrollReveal()

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 border-b border-gray-200">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white pointer-events-none" />
        <div className="absolute left-0 top-0 w-96 h-96 bg-[#1E40AF] rounded-full opacity-[0.2] blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <span className="accent-line" />
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            The People Behind <br />
            <span className="gradient-text-light">VYOM Studio</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-xl leading-relaxed">
            A small, focused team of creators, strategists, and operators — united by a passion for building great things.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Featured — Founder */}
          <div className="animate-on-scroll mb-8">
            <div className="service-card p-10 lg:p-14 group grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Avatar */}
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full flex items-center justify-center text-white font-display font-bold text-2xl lg:text-4xl flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                  style={{ background: `linear-gradient(135deg, ${team[0].color}, ${team[0].color}88)` }}>
                  {team[0].initials}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-gray-900">{team[0].name}</h3>
                  <span className="text-[#0084FF] text-xs tracking-widest uppercase">{team[0].role}</span>
                </div>
              </div>

              <div className="lg:col-span-2">
                <p className="text-gray-600 leading-relaxed mb-6">{team[0].bio}</p>
                <div className="flex items-center gap-4 relative z-10">
                  <a href="https://www.linkedin.com/in/vyom-studio-8646333b0?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#0084FF] transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="https://www.instagram.com/vyomstudio.in?utm_source=qr&igsi=Zm5xZmlxa3JicXhy" target="_blank" rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#0084FF] transition-colors">
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Rest of Team */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.slice(1).map(({ name, role, bio, initials, color, linkedin }, i) => (
              <div
                key={name}
                className={`animate-on-scroll delay-${(i + 1) * 100} service-card p-6 group flex flex-col`}
              >
                {/* Avatar */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-display font-bold text-lg mb-5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                  style={{ backgroundColor: color }}
                >
                  {initials}
                </div>

                <h3 className="font-display text-lg font-bold text-gray-900 mb-0.5">{name}</h3>
                <span className="text-[#0084FF] text-xs tracking-widest uppercase mb-4">{role}</span>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">{bio}</p>
                {linkedin && (
                  <div className="mt-auto flex items-center relative z-10">
                    <a href={linkedin} target="_blank" rel="noopener noreferrer"
                       className="text-gray-400 hover:text-[#0084FF] transition-colors">
                      <Linkedin size={18} />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="section-pad bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="accent-line" />
              <h2 className="animate-on-scroll font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                How We Work
              </h2>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p className="animate-on-scroll">We're a lean, focused team that believes great work comes from clear communication, shared ownership, and a genuine love of craft.</p>
                <p className="animate-on-scroll delay-100">Every project is a collaboration — between us and our clients. We don't just execute briefs; we partner with you to understand your goals and build something that actually works.</p>
                <p className="animate-on-scroll delay-200">We're growing, learning, and constantly raising the bar for what we deliver. If you want to work with a team that cares as much about your success as you do — we're it.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Client-first mindset', val: '100%' },
                { label: 'On-time delivery', val: '95%' },
                { label: 'Repeat clients', val: '80%' },
                { label: 'Avg. client rating', val: '4.9★' },
              ].map(({ label, val }, i) => (
                <div key={label} className={`animate-on-scroll delay-${(i + 1) * 100} service-card p-6 text-center`}>
                  <div className="font-display text-3xl font-bold text-gray-900 mb-1">{val}</div>
                  <div className="text-gray-600 text-xs uppercase tracking-wide">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hiring CTA */}
      <section className="section-pad border-t border-gray-200 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="animate-on-scroll font-display text-4xl font-bold text-gray-900 mb-6">
            Want to Join the Team?
          </h2>
          <p className="animate-on-scroll delay-100 text-gray-600 mb-8">
            We're always open to collaborating with talented creators, designers, and strategists. If you're passionate about what we do — reach out.
          </p>
          <Link href="/contact" className="animate-on-scroll delay-200 btn-primary inline-flex">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
