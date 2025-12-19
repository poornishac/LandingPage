import React from 'react';

interface SectionHeadingProps {
  title: string;
  description?: string;
}

export default function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <section className="bg-white py-8" style={{ marginTop: '110px' }}>
      <div className="mx-auto max-w-7xl px-5 md:px-[50px]">
        {/* Mobile: Stacked layout */}
        <div className="flex flex-col gap-4 md:hidden">
          {/* Red line + Title */}
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 bg-[#DC2626]"></div>
            <h2 className="text-xl font-bold text-black">
              {title}
            </h2>
          </div>
          
          {/* Description (if provided) */}
          {description && (
            <p 
              style={{
                fontFamily: 'var(--font-exo), sans-serif',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'left',
                color: '#000000'
              }}
            >
              {description}
            </p>
          )}
        </div>

        {/* Desktop: Horizontal layout */}
        <div className="hidden md:flex items-center justify-between md:px-[50px]">
          {/* Left Side: Red line + Title */}
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 bg-[#DC2626]"></div>
            <h2 className="text-2xl font-bold text-black">
              {title}
            </h2>
          </div>
          
          {/* Right Side: Description (if provided) */}
          {description && (
            <p 
              style={{
                fontFamily: 'var(--font-exo), sans-serif',
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'right',
                color: '#000000'
              }}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

