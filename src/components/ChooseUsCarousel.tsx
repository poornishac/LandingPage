'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import arrowImg from '@/images/arrow.png';

// Import all images from ChooseUs folder
import chooseUs1 from '@/images/ChooseUs/1b5939eb6868954c4c6b22c9e1b6d6b45539cefa.jpg';
import chooseUs2 from '@/images/ChooseUs/5ce7c1a0b82ed4d5c4c74a984106b7d68ed0bf80.jpg';
import chooseUs3 from '@/images/ChooseUs/6e949a782f121d0617b912f7aa7c8617fc15658e.jpg';

const chooseUsImages = [
  chooseUs1,
  chooseUs2,
  chooseUs3,
];

export default function ChooseUsCarousel() {
  const splideRef = useRef<{ splide: any } | null>(null);

  const goToPrevious = () => {
    if (splideRef.current?.splide) {
      splideRef.current.splide.go('<');
    }
  };

  const goToNext = () => {
    if (splideRef.current?.splide) {
      splideRef.current.splide.go('>');
    }
  };

  return (
    <section className="bg-white py-8">
      <div className="mx-auto max-w-7xl px-5 md:px-[50px]">
        <div className="flex items-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="flex-shrink-0 bg-transparent hover:opacity-80 transition-opacity z-10 hidden sm:block"
            aria-label="Previous"
            style={{ cursor: 'pointer' }}
          >
            <Image
              src={arrowImg}
              alt="Previous"
              width={40}
              height={40}
              className="rotate-90 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
              style={{ display: 'block' }}
            />
          </button>

          {/* Splide Carousel */}
          <div className="flex-1" style={{ width: '100%' }}>
            <Splide
              ref={splideRef}
              options={{
                type: 'loop',
                perPage: 3,
                perMove: 1,
                gap: '0.75rem',
                pagination: false,
                arrows: false,
                drag: 'free',
                wheel: false,
                keyboard: false,
                width: '100%',
                fixedWidth: false,
                trimSpace: false,
                updateOnMove: true,
                breakpoints: {
                  1280: {
                    perPage: 3,
                    gap: '1.5rem',
                    drag: false,
                  },
                  1024: {
                    perPage: 3,
                    gap: '1rem',
                    drag: false,
                  },
                  768: {
                    perPage: 2,
                    gap: '1rem',
                    drag: 'free',
                  },
                  640: {
                    perPage: 1,
                    gap: '0.75rem',
                    drag: 'free',
                  },
                },
              }}
              className="splide"
            >
              {chooseUsImages.map((image, index) => (
                <SplideSlide key={`chooseus-${index}`} className="h-full">
                  <div className="relative w-full h-[250px] sm:h-56 md:h-64 lg:h-72 xl:h-80">
                    <Image
                      src={image}
                      alt={`Choose Us ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="flex-shrink-0 bg-transparent hover:opacity-80 transition-opacity z-10 hidden sm:block"
            aria-label="Next"
            style={{ cursor: 'pointer' }}
          >
            <Image
              src={arrowImg}
              alt="Next"
              width={40}
              height={40}
              className="-rotate-90 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
              style={{ display: 'block' }}
            />
          </button>
        </div>
        
        {/* Download Brochure Button */}
        <div className="flex justify-center mt-8">
          <button
            className="bg-[#DC2626] text-white px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
            style={{
              fontFamily: 'var(--font-exo), sans-serif',
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '100%',
              letterSpacing: '0%',
            }}
          >
            Download Our Brochure
          </button>
        </div>
      </div>
    </section>
  );
}

