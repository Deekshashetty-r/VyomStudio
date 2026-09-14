/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#0084FF',
          light: '#3b82f6',
          dark: '#1E40AF',
          neon: '#CCFF00',
          purple: '#6745E7',
        },
        surface: {
          DEFAULT: '#0a0a0c',
          card: '#121318',
          border: 'rgba(255,255,255,0.08)',
          subtle: '#121318',
        }
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'line-expand': 'lineExpand 0.8s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 28s linear infinite',
        'marquee2': 'marquee2 28s linear infinite',
        'orb-drift': 'orbDrift 12s ease-in-out infinite',
        'orb-drift-2': 'orbDrift2 16s ease-in-out infinite',
        'orb-drift-3': 'orbDrift3 20s ease-in-out infinite',
        'shimmer': 'shimmer 2.4s linear infinite',
        'gradient-flow': 'gradientFlow 5s ease infinite',
        'slide-in-left': 'slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-up': 'slideInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'clip-reveal': 'clipReveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'blink': 'blink 1s step-end infinite',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        lineExpand: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        orbDrift: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(60px, -40px) scale(1.08)' },
          '66%': { transform: 'translate(-30px, 50px) scale(0.95)' },
        },
        orbDrift2: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(-50px, 60px) scale(1.05)' },
          '66%': { transform: 'translate(40px, -30px) scale(0.92)' },
        },
        orbDrift3: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(30px, -50px) scale(1.1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientFlow: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        clipReveal: {
          '0%': { clipPath: 'inset(0 100% 0 0)', opacity: '1' },
          '100%': { clipPath: 'inset(0 0% 0 0)', opacity: '1' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(204,255,0,0.3), 0 0 60px rgba(204,255,0,0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(204,255,0,0.6), 0 0 100px rgba(204,255,0,0.2)' },
        },
      }
    },
  },
  plugins: [],
}
