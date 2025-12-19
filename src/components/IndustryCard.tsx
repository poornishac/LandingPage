import React from 'react';
import Image from 'next/image';

interface IndustryCardProps {
  imageSrc: string | any;
  imageSrcMobile?: string | any;
  title: string;
  description: string;
}

export default function IndustryCard({ imageSrc, imageSrcMobile, title, description }: IndustryCardProps) {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden w-full max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Image */}
      <div className="relative w-full overflow-hidden rounded-t-lg h-48 sm:h-56 md:h-64 lg:h-72">
        {/* Mobile Image */}
        {imageSrcMobile && (
          <Image
            src={imageSrcMobile}
            alt={title}
            fill
            className="object-cover md:hidden"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        )}
        {/* Desktop Image */}
        <Image
          src={imageSrc}
          alt={title}
          fill
          className={`object-cover ${imageSrcMobile ? 'hidden md:block' : ''}`}
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
      
      {/* Content */}
      <div className="px-4 py-4 sm:px-5 sm:py-5 md:px-6 md:py-6">
        {/* Title */}
        <h3 
          className="text-black mb-3 sm:mb-4"
          style={{
            fontFamily: 'var(--font-exo), sans-serif',
            fontWeight: 600,
            fontSize: 'clamp(18px, 4vw, 24px)',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#000000'
          }}
        >
          {title}
        </h3>
        
        {/* Description */}
        <p 
          className="text-black"
          style={{
            fontFamily: 'var(--font-exo), sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(12px, 3vw, 16px)',
            lineHeight: '150%',
            letterSpacing: '0%',
            textAlign: 'left',
            color: '#000000'
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

