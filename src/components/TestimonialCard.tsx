import React from 'react';

interface TestimonialCardProps {
  rating: number;
  description: string;
  name: string;
  designation: string;
}

export default function TestimonialCard({ rating, description, name, designation }: TestimonialCardProps) {
  return (
    <div 
      className="bg-white rounded-lg p-4 sm:p-6 flex flex-col items-center text-center w-full max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg"
      style={{ 
        backgroundColor: '#FAFAFA'
      }}
    >
      {/* Star Rating */}
      <div className="flex gap-1 mb-3 sm:mb-4">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            viewBox="0 0 24 24"
            fill={index < rating ? "#FFD700" : "#E5E5E5"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        ))}
      </div>

      {/* Description */}
      <p 
        className="mb-4 sm:mb-6"
        style={{
          fontFamily: 'var(--font-exo), sans-serif',
          fontWeight: 300,
          fontSize: 'clamp(14px, 3.5vw, 16px)',
          lineHeight: '150%',
          letterSpacing: '0%',
          textAlign: 'center',
          color: '#000000'
        }}
      >
        {description}
      </p>

      {/* Name */}
      <h3 
        className="mb-1"
        style={{
          fontFamily: 'var(--font-exo), sans-serif',
          fontWeight: 600,
          fontSize: 'clamp(16px, 4vw, 20px)',
          lineHeight: '100%',
          letterSpacing: '0%',
          textAlign: 'center',
          color: '#000000'
        }}
      >
        {name}
      </h3>

      {/* Designation */}
      <p 
        style={{
          fontFamily: 'var(--font-exo), sans-serif',
          fontWeight: 300,
          fontSize: 'clamp(12px, 3vw, 14px)',
          lineHeight: '100%',
          letterSpacing: '0%',
          textAlign: 'center',
          color: '#000000'
        }}
      >
        {designation}
      </p>
    </div>
  );
}

