import React from 'react';

interface LogoProps {
  variant?: 'full' | 'horizontal' | 'badge' | 'icon';
  theme?: 'dark' | 'light';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  theme = 'light',
  className = '',
  size = 'md'
}) => {
  const isDark = theme === 'dark';
  
  // Dimensions
  const emblemSizes = {
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const textSizes = {
    sm: { prose: 'text-lg', partners: 'text-[10px] tracking-[0.2em]', llc: 'text-[9px]' },
    md: { prose: 'text-2xl', partners: 'text-xs tracking-[0.22em]', llc: 'text-[10px]' },
    lg: { prose: 'text-3xl', partners: 'text-sm tracking-[0.25em]', llc: 'text-xs' },
    xl: { prose: 'text-4xl', partners: 'text-base tracking-[0.28em]', llc: 'text-sm' }
  };

  // Emblem Vector (Monogram PP with document, quill, scales of justice and gold circular rim)
  const renderEmblem = () => (
    <svg
      viewBox="0 0 200 200"
      className={`${emblemSizes[size]} flex-shrink-0 transition-transform duration-300`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="ProSe Partners LLC Emblem"
    >
      {/* Outer Navy Ring */}
      <circle cx="100" cy="100" r="96" stroke={isDark ? '#c59b27' : '#0f2038'} strokeWidth="4" fill={isDark ? '#07111e' : '#ffffff'} />
      {/* Inner Gold Rim */}
      <circle cx="100" cy="100" r="90" stroke="#c59b27" strokeWidth="2.5" strokeDasharray="4 2" />
      <circle cx="100" cy="100" r="85" stroke={isDark ? '#dfb743' : '#0f2038'} strokeWidth="1.5" />

      {/* Document Sheet in center */}
      <path
        d="M65 38 H125 L145 58 V125 H65 Z"
        fill={isDark ? '#11223b' : '#f8fafc'}
        stroke={isDark ? '#dfb743' : '#0f2038'}
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Document corner fold */}
      <path d="M125 38 V58 H145" fill="#c59b27" stroke={isDark ? '#dfb743' : '#0f2038'} strokeWidth="3" />
      {/* Document lines */}
      <line x1="80" y1="70" x2="130" y2="70" stroke={isDark ? '#dfb743' : '#0f2038'} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="80" y1="84" x2="130" y2="84" stroke={isDark ? '#dfb743' : '#0f2038'} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="80" y1="98" x2="115" y2="98" stroke={isDark ? '#dfb743' : '#0f2038'} strokeWidth="2.5" strokeLinecap="round" />

      {/* Stylized Double 'PP' Monogram */}
      {/* First P (Dark Navy / Bright on dark) */}
      <text
        x="64"
        y="114"
        fontFamily="Times New Roman, Times, serif"
        fontSize="76"
        fontWeight="bold"
        fill={isDark ? '#ffffff' : '#0f2038'}
        style={{ letterSpacing: '-0.05em' }}
      >
        P
      </text>
      {/* Second Interlocking P (Warm Gold / Teal Accent) */}
      <text
        x="88"
        y="120"
        fontFamily="Times New Roman, Times, serif"
        fontSize="72"
        fontWeight="bold"
        fill="#0e7c8e"
        opacity="0.95"
      >
        P
      </text>

      {/* Feather Quill (Left side in Gold) */}
      <path
        d="M48 118 C38 95 44 68 62 50 C58 64 54 84 56 104 C57 114 54 122 42 128 C50 126 58 122 62 114"
        fill="#c59b27"
        stroke="#b3881c"
        strokeWidth="1.5"
      />
      {/* Quill Nib */}
      <path d="M42 128 L35 136 L46 131 Z" fill="#c59b27" />

      {/* Scales of Justice (Right side in Gold) */}
      <g transform="translate(132, 70) scale(0.42)">
        {/* Center column */}
        <line x1="30" y1="10" x2="30" y2="90" stroke="#c59b27" strokeWidth="4" strokeLinecap="round" />
        <path d="M15 90 H45" stroke="#c59b27" strokeWidth="5" strokeLinecap="round" />
        <circle cx="30" cy="10" r="6" fill="#c59b27" />
        {/* Crossbeam */}
        <line x1="0" y1="26" x2="60" y2="26" stroke="#c59b27" strokeWidth="4" strokeLinecap="round" />
        {/* Left pan */}
        <line x1="0" y1="26" x2="-12" y2="52" stroke="#c59b27" strokeWidth="2.5" />
        <line x1="0" y1="26" x2="12" y2="52" stroke="#c59b27" strokeWidth="2.5" />
        <path d="M-18 52 Q0 64 18 52 Z" fill="#c59b27" />
        {/* Right pan */}
        <line x1="60" y1="26" x2="48" y2="52" stroke="#c59b27" strokeWidth="2.5" />
        <line x1="60" y1="26" x2="72" y2="52" stroke="#c59b27" strokeWidth="2.5" />
        <path d="M42 52 Q60 64 78 52 Z" fill="#c59b27" />
      </g>

      {/* Bottom Navy Banner Arch */}
      <path
        d="M20 128 Q100 156 180 128 C172 165 140 186 100 186 C60 186 28 165 20 128 Z"
        fill={isDark ? '#050d18' : '#0f2038'}
        stroke="#c59b27"
        strokeWidth="2"
      />
      {/* Banner Text: ProSe */}
      <text
        x="72"
        y="156"
        fontFamily="Times New Roman, Times, serif"
        fontSize="24"
        fontWeight="bold"
        fill="#ffffff"
      >
        Pro
      </text>
      <text
        x="108"
        y="156"
        fontFamily="Times New Roman, Times, serif"
        fontSize="24"
        fontWeight="bold"
        fill="#c59b27"
      >
        Se
      </text>
      {/* Subtitle in Banner */}
      <text
        x="100"
        y="172"
        fontFamily="Times New Roman, Times, serif"
        fontSize="9"
        fontWeight="600"
        fill="#e2e8f0"
        textAnchor="middle"
        letterSpacing="0.25em"
      >
        PARTNERS LLC
      </text>
    </svg>
  );

  if (variant === 'icon' || variant === 'badge') {
    return <div className={`inline-flex items-center ${className}`}>{renderEmblem()}</div>;
  }

  const currentTextSizes = textSizes[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {renderEmblem()}
      
      <div className="flex flex-col justify-center">
        {/* ProSe Wordmark */}
        <div className="flex items-baseline leading-none font-bold">
          <span className={`${currentTextSizes.prose} font-serif tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Pro
          </span>
          <span className={`${currentTextSizes.prose} font-serif tracking-tight text-gold-500 font-bold ml-[1px]`}>
            Se
          </span>
        </div>

        {/* Partners LLC with Gold Divider */}
        <div className="flex items-center gap-1.5 mt-1">
          <span className="h-[1px] w-2.5 bg-gold-500 opacity-80" />
          <span
            className={`${currentTextSizes.partners} uppercase font-bold font-serif ${
              isDark ? 'text-slate-200' : 'text-slate-800'
            }`}
          >
            Partners
          </span>
          <span
            className={`${currentTextSizes.llc} uppercase font-semibold font-serif ${
              isDark ? 'text-gold-400' : 'text-gold-600'
            }`}
          >
            LLC
          </span>
          <span className="h-[1px] w-2.5 bg-gold-500 opacity-80" />
        </div>

        {/* Subtle tagline when large or full */}
        {(size === 'lg' || size === 'xl') && (
          <div className="text-[11px] text-slate-500 dark:text-slate-400 font-serif mt-1 italic tracking-normal">
            Legal Document Preparation & Case Support • Colorado
          </div>
        )}
      </div>
    </div>
  );
};
