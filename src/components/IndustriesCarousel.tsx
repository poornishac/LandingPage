'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import IndustryCard from './IndustryCard';
import arrowImg from '@/images/arrow.png';

// Import all images from Industry folder (desktop)
import industry1 from '@/images/Industry/commercialBuildings.png';
import industry2 from '@/images/Industry/contractorsAndBuilders.png';
import industry3 from '@/images/Industry/healthcareFacilities.png';
import industry4 from '@/images/Industry/infrastructureProject.png';
import industry5 from '@/images/Industry/ItCompanies.png';
import industry6 from '@/images/Industry/coworkingSpace.png';
import industry7 from '@/images/Industry/architechAndInteriors.png';
import industry8 from '@/images/Industry/MEPContractor.png';
import industry9 from '@/images/Industry/manufacturingIndustries.png';

// Import all images from IndustryMobile folder (mobile)
import industryMobile1 from '@/images/IndustryMobile/CommercialBuilding.png';
import industryMobile2 from '@/images/IndustryMobile/contractorsAndBuilders.png';
import industryMobile3 from '@/images/IndustryMobile/healthcareFacilities.png';
import industryMobile4 from '@/images/IndustryMobile/infrastructureProject.png';
import industryMobile5 from '@/images/IndustryMobile/ItCompanies.png';
import industryMobile6 from '@/images/IndustryMobile/coworkingSpace.png';
import industryMobile7 from '@/images/IndustryMobile/architechAndInteriors.png';
import industryMobile8 from '@/images/IndustryMobile/MEPContractor.png';
import industryMobile9 from '@/images/IndustryMobile/manufacturingIndustries.png';

interface IndustryItem {
  imageSrc: string | any;
  imageSrcMobile?: string | any;
  title: string;
  description: string;
}

const industryImages = [
  industry1,
  industry2,
  industry3,
  industry4,
  industry5,
  industry6,
  industry7,
  industry8,
  industry9,
];

const industryMobileImages = [
  industryMobile1,
  industryMobile2,
  industryMobile3,
  industryMobile4,
  industryMobile5,
  industryMobile6,
  industryMobile7,
  industryMobile8,
  industryMobile9,
];

const defaultTitles = [
  "Commercial Buildings",
  "Contractors & Builders",
  "Healthcare Facilities",
  "Infrastructure Projects",
  "It Companies",
  "Co Working Space",
  "Architect & Interiors",
  "MEP Contractor",
  "Manufacturing Industries",
];

const defaultDescriptions = [
  "Offices, retail spaces, and malls need efficient electrical and plumbing setups. We supply modular fittings, lighting solutions, DB boxes, and energy meters tailored for commercial loads.",
  "Your go-to supply partner for large-scale construction projects—wires, pipes, switches, panels, and everything in between. Bulk deals and dependable delivery timelines.",
  "Hospitals and labs require reliable electrical performance and backup systems. We offer MCBs, control panels, timers, and fittings compliant with high-precision environments.",
  "For metro, highway, and smart city works—find rugged cabling, outdoor floodlights, and panel boards designed to perform in open-site conditions.",
  "IT parks and offices need reliable wiring and metering. We supply branded network cables, backup solutions, DBs, and panels for consistent and safe performance.",
  "Shared workspaces require safe, efficient fittings. We provide lighting, switches, sockets, fans, and plumbing essentials tailored for co-working infrastructure.",
  "We support designers with stylish lights. modular switches, concealed boxes, and ceiling fans — ideal for modern, functional and aesthetic interior setups.",
  "We supply certified wires, switchgear, digital meters, pipes, and DB boxes — all trusted by MEP contractors for bulk supply and project readiness.",
  "Factories and warehouses require high-load support. We offer industrial-grade fans, cables, isolators, and plumbing materials for demanding applications.",
];

interface IndustriesCarouselProps {
  items?: IndustryItem[];
}

export default function IndustriesCarousel({ items }: IndustriesCarouselProps) {
  // Use provided items or generate from imported images
  const industryItems: IndustryItem[] = items || industryImages.map((img, index) => ({
    imageSrc: img,
    imageSrcMobile: industryMobileImages[index],
    title: defaultTitles[index] || `Industry ${index + 1}`,
    description: defaultDescriptions[index] || "Quality electrical and plumbing solutions for your needs.",
  }));
  
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
              {industryItems.map((item, index) => (
                <SplideSlide key={`industry-${index}`}>
                  <IndustryCard
                    imageSrc={item.imageSrc}
                    imageSrcMobile={item.imageSrcMobile}
                    title={item.title}
                    description={item.description}
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

