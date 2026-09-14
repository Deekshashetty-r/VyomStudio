import Link from 'next/link'

export default function BrandLogo({ compact = false, theme = 'dark' }: { compact?: boolean, theme?: 'light' | 'dark' }) {
  const isLight = theme === 'light';
  const strokeColor = isLight ? '#10132b' : '#c3c8fb';
  
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <img
        src="/logo.png"
        alt="VYOM Logo"
        className="w-12 h-10 object-contain flex-shrink-0"
      />
      <span className={`font-display font-bold text-lg tracking-tight leading-none ${isLight ? 'text-[#10132b]' : 'text-white'}`}>
        VYOM
        {!compact && (
          <span className={`font-body font-medium text-sm tracking-wide ml-1.5 ${isLight ? 'text-[rgba(16,19,43,0.6)]' : 'text-white/70'}`}>
            Studio
          </span>
        )}
      </span>
    </Link>
  )
}
