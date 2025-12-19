import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  icon?: React.ReactNode;
  imageSrc?: string | any;
  heading: string;
  description: string;
  className?: string;
}

export default function ProductCard({ icon, imageSrc, heading, description, className = '' }: ProductCardProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center ${className}`}
      style={{
        width: '100%',
        maxWidth: '297px',
        height: '220px',
        paddingTop: '16px',
        paddingRight: '13px',
        paddingBottom: '25px',
        paddingLeft: '13px',
        gap: '10px',
        borderRadius: '8px', // Small border radius (adjust if you have a specific value)
        backgroundColor: '#FAFAFA',
        opacity: 1
      }}
    >
      {/* Icon/Logo/Image */}
      {(icon || imageSrc) && (
        <div className="mb-2">
          {imageSrc ? (
              <Image src={imageSrc} alt={heading} width={40} height={40} className="object-contain" />
          ) : (
            icon
          )}
        </div>
      )}
      
      {/* Heading */}
      <h3 
        className="mb-2"
        style={{
          fontFamily: 'var(--font-exo), sans-serif',
          fontWeight: 600,
          fontSize: '20px',
          lineHeight: '100%',
          letterSpacing: '0%',
          textAlign: 'center',
          color: '#000000'
        }}
      >
        {heading}
      </h3>
      
      {/* Description */}
      <p 
        style={{
          fontFamily: 'var(--font-exo), sans-serif',
          fontWeight: 300,
          fontSize: '14px',
          lineHeight: '1.2rem',
          letterSpacing: '0%',
          textAlign: 'center',
          color: '#000000'
        }}
      >
        {description}
      </p>
    </div>
  );
}

