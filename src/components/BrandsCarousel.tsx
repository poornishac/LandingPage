'use client';

import React from 'react';
import Image from 'next/image';

interface BrandsCarouselProps {
  images: (string | any)[];
}

export default function BrandsCarousel({ images }: BrandsCarouselProps) {
  return (
    <section className="bg-white py-8">
      <div className="mx-auto max-w-7xl px-5 md:px-[50px]">
        <div className="overflow-x-auto md:overflow-hidden">
          <div className="flex gap-4 md:gap-8 md:animate-scroll">
            {/* First set of images */}
            {images.map((image, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-24 h-12 sm:w-32 sm:h-16 md:w-48 md:h-24 lg:w-52 lg:h-28"
              >
                <Image
                  src={image}
                  alt={`Brand ${index + 1}`}
                  width={200}
                  height={100}
                  className="object-contain w-full h-full"
                  sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1024px) 192px, 208px"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {images.map((image, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-24 h-12 sm:w-32 sm:h-16 md:w-48 md:h-24 lg:w-52 lg:h-28"
              >
                <Image
                  src={image}
                  alt={`Brand ${index + 1}`}
                  width={200}
                  height={100}
                  className="object-contain w-full h-full"
                  sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1024px) 192px, 208px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

