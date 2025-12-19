'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import TestimonialCard from './TestimonialCard';
import arrowImg from '@/images/arrow.png';

interface TestimonialItem {
  rating: number;
  description: string;
  name: string;
  designation: string;
}

const testimonials: TestimonialItem[] = [
  {
    rating: 5,
    description: "Got branded wires and switches for our flat. Owner was very polite. Explained wire load properly. Reasonable pricing. Billing was clean. Nalla experience.",
    name: "Karthikeyan",
    designation: "Project Manager"
  },
  {
    rating: 5,
    description: "Na romba places la poi paathen. But finally found proper plumbing elbows, taps and couplers here. Even for rare sizes. Very helpful anna at the counter.",
    name: "Ramesh",
    designation: "Electrical Contractor"
  },
];

export default function TestimonialsCarousel() {
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
      <div className="mx-auto max-w-7xl px-5 md:px-[50px] overflow-visible">
        <div className="flex items-center gap-4 relative">
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
          <div className="flex-1 min-w-0" style={{ width: '100%' }}>
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
              {testimonials.map((testimonial, index) => (
                <SplideSlide key={`testimonial-${index}`}>
                  <TestimonialCard
                    rating={testimonial.rating}
                    description={testimonial.description}
                    name={testimonial.name}
                    designation={testimonial.designation}
                  />
                </SplideSlide>
              ))}
            </Splide>
          </div>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="flex-shrink-0 bg-transparent hover:opacity-80 transition-opacity z-10 hidden sm:block relative"
            aria-label="Next"
            style={{ cursor: 'pointer', minWidth: '40px' }}
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
      </div>
    </section>
  );
}

