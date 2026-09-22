import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

interface CollegeLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'navy' | 'white';
  showText?: boolean;
  showTagline?: boolean;
  className?: string;
  imgClassName?: string;
}

export const CollegeLogo: React.FC<CollegeLogoProps> = ({
  size = 'md',
  variant = 'navy',
  showText = false,
  showTagline = false,
  className = '',
  imgClassName = ''
}) => {
  const sources = [
    COLLEGE_INFO.logoUrl, // Local asset: /decimal-logo.jpg
    COLLEGE_INFO.logoUrlCdn, // Cached image proxy
    '/logo.jpg',
    COLLEGE_INFO.logoUrlMedium
  ].filter(Boolean);

  const [srcIndex, setSrcIndex] = useState(0);
  const [allFailed, setAllFailed] = useState(false);

  // Dimension mapping for image box
  const sizeMap = {
    xs: { box: 'w-8 h-8', icon: 'w-4 h-4', text: 'text-base', sub: 'text-[9px]' },
    sm: { box: 'w-9 h-9 sm:w-10 sm:h-10', icon: 'w-4 h-4 sm:w-5 sm:h-5', text: 'text-lg', sub: 'text-[10px]' },
    md: { box: 'w-10 h-10 sm:w-12 sm:h-12', icon: 'w-6 h-6 sm:w-7 sm:h-7', text: 'text-xl sm:text-2xl', sub: 'text-[10px] sm:text-[11px]' },
    lg: { box: 'w-14 h-14 sm:w-16 sm:h-16', icon: 'w-8 h-8 sm:w-9 sm:h-9', text: 'text-2xl sm:text-3xl', sub: 'text-xs' },
    xl: { box: 'w-24 h-24 sm:w-28 sm:h-28', icon: 'w-14 h-14', text: 'text-3xl sm:text-4xl', sub: 'text-sm' }
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  const handleImgError = () => {
    if (srcIndex + 1 < sources.length) {
      setSrcIndex(prev => prev + 1);
    } else {
      setAllFailed(true);
    }
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Logo Emblem Container */}
      <div 
        className={`relative ${currentSize.box} rounded-2xl p-0.5 bg-white flex items-center justify-center shrink-0 shadow-md border border-[#D4A017]/80 overflow-hidden group-hover:scale-105 transition-transform duration-200`}
      >
        {!allFailed ? (
          <img
            key={sources[srcIndex]}
            src={sources[srcIndex]}
            alt="Decimal College Official Logo"
            className={`w-full h-full object-contain rounded-xl ${imgClassName}`}
            referrerPolicy="no-referrer"
            loading="eager"
            onError={handleImgError}
          />
        ) : (
          /* Graceful Fallback if image host is unreachable */
          <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#0A2F5C] via-[#0E3E75] to-[#124b8d] flex flex-col items-center justify-center text-white p-1">
            <GraduationCap className={`${currentSize.icon} text-[#D4A017]`} />
            {size !== 'xs' && (
              <span className="text-[8px] font-black text-[#D4A017] uppercase tracking-tighter mt-0.5">
                2072
              </span>
            )}
          </div>
        )}
      </div>

      {/* Optional College Typography Header */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 leading-none">
            <span 
              className={`font-extrabold tracking-tight font-serif ${currentSize.text} ${
                variant === 'white' || variant === 'dark' ? 'text-white' : 'text-[#0A2F5C]'
              }`}
            >
              DECIMAL
            </span>
            <span 
              className={`font-bold tracking-tight font-serif ${currentSize.text} text-[#D4A017]`}
            >
              COLLEGE
            </span>
          </div>
          {showTagline && (
            <p 
              className={`font-semibold uppercase tracking-wider mt-1 ${currentSize.sub} ${
                variant === 'white' || variant === 'dark' ? 'text-blue-200' : 'text-slate-500'
              }`}
            >
              Panitanki-8, Birgunj • Estd. 2072 B.S.
            </p>
          )}
        </div>
      )}
    </div>
  );
};
