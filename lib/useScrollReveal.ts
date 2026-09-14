'use client'
import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    // ── Scroll-reveal observer ──────────────────────────────
    const revealClasses = [
      'animate-on-scroll',
      'slide-left',
      'why-item',
      'scale-in',
      'clip-reveal-anim',
    ]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // respect data-delay attribute for fine-grained staggering
            const delay = (entry.target as HTMLElement).dataset.delay
            if (delay) {
              setTimeout(() => {
                entry.target.classList.add('visible')
              }, Number(delay))
            } else {
              entry.target.classList.add('visible')
            }
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    const selector = revealClasses.map((c) => `.${c}`).join(', ')
    const elements = document.querySelectorAll(selector)
    elements.forEach((el) => observer.observe(el))

    // ── Counter animation observer ─────────────────────────
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const target = Number(el.dataset.target ?? '0')
            const suffix = el.dataset.suffix ?? ''
            const duration = 1800
            const start = performance.now()

            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1)
              // ease-out cubic
              const eased = 1 - Math.pow(1 - progress, 3)
              el.textContent = Math.floor(eased * target) + suffix
              if (progress < 1) requestAnimationFrame(tick)
            }

            requestAnimationFrame(tick)
            counterObserver.unobserve(el)
          }
        })
      },
      { threshold: 0.5 }
    )

    const counters = document.querySelectorAll('[data-target]')
    counters.forEach((el) => counterObserver.observe(el))

    return () => {
      observer.disconnect()
      counterObserver.disconnect()
    }
  }, [])
}
