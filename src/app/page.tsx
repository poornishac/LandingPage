import Image from "next/image";
import logo from "@/images/logo.svg";
import banner from "@/images/Banner.png";
import bannerMobile from "@/images/BannerMobile.png";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import BrandsCarousel from "@/components/BrandsCarousel";
import IndustriesCarousel from "@/components/IndustriesCarousel";
import ChooseUsCarousel from "@/components/ChooseUsCarousel";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import wiresAndCablesImg from "@/images/wiresandcables.png";
import switchgearsImg from "@/images/switchgears.png";
import switchesImg from "@/images/switches.png";
import lightImg from "@/images/light.png";
import meterImg from "@/images/meter.png";
import plumbingImg from "@/images/plumbing.png";
import toolsImg from "@/images/tools.png";
import hardwareImg from "@/images/hardware.png";
import brand1 from "@/images/Brands/50aa1a1109bc645b7aaf3637a655b00feb1a77e1.jpg";
import brand2 from "@/images/Brands/5ba04c916af8b6c13ca191ec1fcf698c7d7276bc.jpg";
import brand3 from "@/images/Brands/8224c9e27e31f30bc7571c70f8cd1204ad967bf0.jpg";
import brand4 from "@/images/Brands/840874a3eb1482dfaae9a58aa8e064cd0a07b4c5.jpg";
import brand5 from "@/images/Brands/a6bfb42f8bc3dcec9a38b3fe01360ba13f4d027c.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header - Fixed Panel */}
      <header 
        className="fixed top-0 left-0 right-0 z-[100] bg-white shadow-md w-full px-4 sm:px-8 md:px-[231px] h-[92px] md:h-[149px]"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          paddingTop: '23px',
          paddingBottom: '23px',
          gap: '10px'
        }}
      >
        {/* Mobile: Logo centered */}
        <div className="flex items-center justify-center lg:hidden h-full">
          <Image 
            src={logo} 
            alt="Logo" 
            width={48} 
            height={56} 
            className="object-contain"
            style={{ maxHeight: '56px', maxWidth: '48px' }}
          />
        </div>

        {/* Tablet: Logo centered */}
        <div className="hidden md:flex lg:hidden items-center justify-center h-full">
          <Image 
            src={logo} 
            alt="Logo" 
            width={54} 
            height={103} 
            className="object-contain"
          />
        </div>

        {/* Desktop: Logo left, buttons right */}
        <div className="hidden lg:flex items-center justify-between" style={{ minHeight: '103px', gap: '10px' }}>
          {/* Logo Section */}
          <div className="flex items-center" style={{ gap: '10px' }}>
            <Image src={logo} alt="Logo" width={54} height={103} />
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center" style={{ gap: '10px' }}>
            <button 
              className="border border-[#DC2626] bg-white text-black text-sm font-medium hover:bg-red-50 transition-colors"
              style={{
                width: '234px',
                height: '56px',
                paddingTop: '15px',
                paddingRight: '45px',
                paddingBottom: '15px',
                paddingLeft: '45px',
                gap: '10px',
                borderRadius: '4px',
                borderWidth: '1px',
                opacity: 1
              }}
            >
              Contact Us Today
            </button>
            <button 
              className="bg-[#DC2626] text-white text-sm font-medium hover:bg-[#B91C1C] transition-colors"
              style={{
                width: '234px',
                height: '56px',
                paddingTop: '15px',
                paddingRight: '45px',
                paddingBottom: '15px',
                paddingLeft: '45px',
                gap: '10px',
                borderRadius: '4px',
                opacity: 1
              }}
            >
              Get Direction
            </button>
          </div>
        </div>
      </header>

      {/* Spacer to account for fixed header */}
      <div className="h-[92px] md:h-[149px]"></div>

      {/* Banner Image */}
      <div className="w-full overflow-hidden">
        {/* Mobile Banner */}
        <Image 
          src={bannerMobile} 
          alt="Banner" 
          className="w-full h-auto object-cover md:hidden"
          priority
          sizes="100vw"
        />
        {/* Desktop Banner */}
        <Image 
          src={banner} 
          alt="Banner" 
          className="hidden md:block w-full h-auto object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Product Categories Header */}
      <SectionHeading 
        title="Product Categories"
        description="Explore Our Full Range of Certified Electrical Supplies"
      />

      {/* Product Cards Section */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-7xl px-5 md:px-[50px] overflow-x-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center md:justify-items-start">
            <ProductCard
              imageSrc={wiresAndCablesImg}
              heading="Wires & Cables"
              description="Branded copper wires, flexible cables, control cables, and more — for residential and industrial use."
            />
            <ProductCard
              imageSrc={switchgearsImg}
              heading="Switchgears"
              description="MCCBs, isolators, MCBs, DB boxes, and panel boards from top-rated brands."
            />
            <ProductCard
              imageSrc={switchesImg}
              heading="Switches"
              description="Modular switches, sockets, and accessories — ideal for modern interiors and commercial spaces"
            />
            <ProductCard
              imageSrc={lightImg}
              heading="LED Profile & Lights"
              description="Ceiling lights, LED panels, flood lights, spotlights, and decorative fixtures."
            />
            <ProductCard
              imageSrc={meterImg}
              heading="Instruments & Meters"
              description="Digital meters, voltmeters, ammeters, timers, and energy monitoring devices."
            />
            <ProductCard
              imageSrc={toolsImg}
              heading="Tools"
              description="Power tools, hand tools, drill bits, and accessories for electrical, plumbing, and general installation use"
            />
            <ProductCard
              imageSrc={hardwareImg}
              heading="Hardware"
              description="Essential hardware items including fasteners, screws, clamps, tapes, and anchors for safe and secure installations."
            />
            <ProductCard
              imageSrc={plumbingImg}
              heading="Plumbing"
              description="CPVC pipes, taps, elbows, valves, and fittings — all sizes available for domestic, commercial, and project use."
            />
          </div>
        </div>
      </section>

      {/* Brands Header */}
      <SectionHeading title="Brands" />

      {/* Brands Carousel */}
      <BrandsCarousel images={[brand1, brand2, brand3, brand4, brand5]} />

      {/* Industries We Serve Header */}
      <SectionHeading 
        title="Industries We Serve"
        description="Reliable Supply for Every Sector's Demands"
      />

      {/* Industries Carousel */}
      <IndustriesCarousel />

      {/* Why Choose Us Header */}
      <SectionHeading 
        title="Why Choose Us"
        description="Genuine Brands. Bulk Stock. Site-Ready Delivery."
      />

      {/* Why Choose Us Carousel */}
      <ChooseUsCarousel />

      {/* Client Testimonials Header */}
      <SectionHeading 
        title="Client Testimonials"
        description="What Our Customers Say"
      />

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Contact Section Heading */}
      <SectionHeading 
        title="Tell Us What You Need"
      />

      {/* Contact Section */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-7xl px-5 md:px-[50px] overflow-x-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Contact Information */}
            <div className="flex flex-col">
              {/* Description */}
              <p 
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-exo), sans-serif',
                  fontWeight: 500,
                  fontSize: '17px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000'
                }}
              >
                We're just one call or form away. Let's get your materials moving.
              </p>

              {/* Contact Details */}
              <div className="flex flex-col gap-6">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-1">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#DC2626"/>
                  </svg>
                  <p 
                    className="text-black"
                    style={{
                      fontFamily: 'var(--font-exo), sans-serif',
                      fontWeight: 300,
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                      color: '#000000'
                    }}
                  >
                    75, Godown Street, Flower Bazaar, PARRY'S, George Town, Chennai, Tamil Nadu 600001
                  </p>
                </div>

                {/* Mobile Numbers */}
                <div className="flex items-start gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-1">
                    <path d="M17 1.01L7 1C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1.01 17 1.01ZM17 19H7V5H17V19Z" fill="#DC2626"/>
                  </svg>
                  <p 
                    className="text-black"
                    style={{
                      fontFamily: 'var(--font-exo), sans-serif',
                      fontWeight: 300,
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                      color: '#000000'
                    }}
                  >
                    +91 99626 22633 / +91 99628 19851
                  </p>
                </div>

                {/* Landline Number */}
                <div className="flex items-start gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-1">
                    <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="#DC2626"/>
                  </svg>
                  <p 
                    className="text-black"
                    style={{
                      fontFamily: 'var(--font-exo), sans-serif',
                      fontWeight: 300,
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                      color: '#000000'
                    }}
                  >
                    044-42166030
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="flex flex-col">
              <form className="flex flex-col gap-4">
                {/* Name Field */}
                <input
                  type="text"
                  placeholder="Name*"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#DC2626]"
                  style={{
                    fontFamily: 'var(--font-exo), sans-serif',
                    fontSize: '16px',
                    color: '#000000'
                  }}
                />

                {/* Phone Number Field */}
                <input
                  type="tel"
                  placeholder="Phone Number*"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#DC2626]"
                  style={{
                    fontFamily: 'var(--font-exo), sans-serif',
                    fontSize: '16px',
                    color: '#000000'
                  }}
                />

                {/* Email Field */}
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#DC2626]"
                  style={{
                    fontFamily: 'var(--font-exo), sans-serif',
                    fontSize: '16px',
                    color: '#000000'
                  }}
                />

                {/* Service Field */}
                <input
                  type="text"
                  placeholder="Service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#DC2626]"
                  style={{
                    fontFamily: 'var(--font-exo), sans-serif',
                    fontSize: '16px',
                    color: '#000000'
                  }}
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#DC2626] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                  style={{
                    fontFamily: 'var(--font-exo), sans-serif',
                    fontWeight: 600,
                    fontSize: '18px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                  }}
                >
                  Submit your details
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="mx-auto max-w-7xl px-5 md:px-[50px] overflow-x-hidden">
          <div className="text-center space-y-2 mb-4">
            <p 
              className="text-gray-800"
              style={{
                fontFamily: 'var(--font-exo), sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#000000'
              }}
            >
              ©2025 Sri Ambaajee Electricals - All rights reserved
            </p>
            <p 
              className="text-gray-800"
              style={{
                fontFamily: 'var(--font-exo), sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#000000'
              }}
            >
              Marketed By <span style={{ color: '#DC2626' }}>Profitcast</span> — Efficient growth, delivered.
            </p>
          </div>
          <div className="h-px bg-gray-300"></div>
        </div>
      </footer>
    </div>
  );
}