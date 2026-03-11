import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import log1 from '../assets/logos/log1.svg'
import log7 from '../assets/logos/log7.svg'
import log2 from '../assets/logos/log2.svg'
import log3 from '../assets/logos/log3.svg'
import log4 from '../assets/logos/log4.svg'
import log5 from '../assets/logos/log5.svg'
import log6 from '../assets/logos/log6.svg'
import objects from '../assets/logos/objects.svg'

gsap.registerPlugin(ScrollTrigger);

export default function AboutOrello() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const logoScrollRef = useRef(null);

  useEffect(() => {
    gsap.config({
      force3D: true,
      nullTargetWarn: false,
    });

    // === INFINITE LOGO SCROLL ANIMATION ===
    if (logoScrollRef.current) {
      const logoTrack = logoScrollRef.current;
      const logoWidth = logoTrack.offsetWidth / 2;

      gsap.to(logoTrack, {
        x: -logoWidth,
        duration: 12,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % logoWidth)
        }
      });
    }

    const rafId = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(rafId);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);


  const partners = [
    { name: "Hamleys", logo: log7 },
    { name: "Hamleys", logo: log1 },
    { name: "Sangapur Village", logo: log2 },
    { name: "SCALEPOINT", logo: log3 },
    { name: "ocean", logo: log4 },
    { name: "Habitat", logo: log5 },
    { name: "COLDEASY", logo: log6 },
  ];

  return (
    <div className="bg-[#eadecf]">
      <div ref={containerRef} className="relative isolate">

        {/* Static Background Circles */}
        <div
          className="absolute inset-0 flex items-end justify-center pointer-events-none z-0 overflow-hidden"
        >
          <div
            className="absolute w-[120vw] h-[110vw] bg-[#fdf6e9] left-1/2"
            style={{
              borderRadius: "50%",
              bottom: "-60vw",
              opacity: 0.6,
              transform: "translateX(-50%)",
            }}
          />
          <div
            className="absolute w-[95vw] h-[85vw] bg-[#eadecf] left-1/2"
            style={{
              borderRadius: "50%",
              bottom: "-50vw",
              opacity: 0.6,
              transform: "translateX(-50%)",
            }}
          />
          <div
            className="absolute w-[70vw] h-[65vw] bg-[#fdf6e9] left-1/2"
            style={{
              borderRadius: "50%",
              bottom: "-40vw",
              opacity: 0.6,
              transform: "translateX(-50%)",
            }}
          />
          <div
            className="absolute w-[45vw] h-[45vw] bg-[#eadecf] left-1/2"
            style={{
              borderRadius: "50%",
              bottom: "-30vw",
              opacity: 0.6,
              transform: "translateX(-50%)",
            }}
          />
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="relative flex flex-col items-center justify-center z-10 py-8 sm:py-10 pt-30 sm:pt-24 md:pt-30"
        >
          <div className="container px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-6 sm:mb-8 md:mb-12 ">
              <h2
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl pt-6 font-black text-[#4B433B] mb-3 sm:mb-4 md:mb-6"
                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 900 }}
              >
                About Orello
              </h2>
              <p className="text-[#4B433B] text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
                Orello is a purpose-driven design and development partner for organisations creating impact
                across India, USA, Europe and UAE.
              </p>
            </div>

            {/* Illustration */}
            <div className="flex justify-center mb-6 sm:mb-8 md:mb-12">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl px-2 sm:px-4">
                <img
                  src={objects}
                  alt="Team collaboration"
                  className="w-full h-auto"
                  loading="eager"
                />
              </div>
            </div>

            {/* Partners Logo Strip */}
            <div className="mt-8 sm:mt-10 md:mt-14">
              <div className="w-full bg-[#Fffdfa] py-4 sm:py-6 md:py-8 rounded-xl overflow-hidden">
                <div className="max-w-7xl mx-auto px-2 sm:px-4">
                  <div className="relative overflow-hidden">
                    <div
                      ref={logoScrollRef}
                      className="flex items-center gap-x-6 sm:gap-x-8 md:gap-x-12"
                      style={{ willChange: 'transform' }}
                    >
                      {/* Original logos */}
                      {partners.map((partner, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-center h-6 sm:h-8 md:h-10 lg:h-14 flex-shrink-0"
                        >
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="h-full w-[90px] sm:w-[110px] md:w-[130px] object-contain opacity-80"
                            loading="lazy"
                          />
                        </div>
                      ))}
                      {/* Duplicated logos for seamless loop */}
                      {partners.map((partner, index) => (
                        <div
                          key={`duplicate-${index}`}
                          className="flex items-center justify-center h-6 sm:h-8 md:h-10 lg:h-14 flex-shrink-0"
                        >
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="h-full w-[90px] sm:w-[110px] md:w-[130px] object-contain opacity-80"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}