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
  const circleRefs = useRef([]);
  const transitionArcRefs = useRef([]);
  const contentRef = useRef(null);
  const logoScrollRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    gsap.config({
      force3D: true,
      nullTargetWarn: false,
    });

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {

        // Make background fixed only on desktop
        if (bgRef.current) {
          gsap.set(bgRef.current, { position: 'fixed' });
        }

        // === HERO STYLE CIRCLE ANIMATION ===
        circleRefs.current.forEach((circle) => {
          if (!circle) return;

          gsap.to(circle, {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "40% top",
              scrub: 2,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
            scale: 8,
            keyframes: [
              { opacity: 0.6, duration: 0.3, ease: "power2.in" },
              { opacity: 0, duration: 0.7, ease: "power2.out" },
            ],
            ease: "power2.inOut",
            force3D: true,
          });
        });

        // === HERO STYLE TRANSITION ARCS — 8 arcs, hidden at start, appear on scroll ===
        transitionArcRefs.current.forEach((arc) => {
          if (!arc) return;

          gsap.fromTo(
            arc,
            {
              scale: 1,
              opacity: 0,
              force3D: true,
            },
            {
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "40% top",
                scrub: 2,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
              scale: 8,
              opacity: 0.7,
              ease: "power2.inOut",
              force3D: true,
            }
          );
        });

        if (contentRef.current) {
          gsap.to(contentRef.current, {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "40% top",
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
            y: "-10vh",
            ease: "none",
            force3D: true,
          });
        }

      }, containerRef);

      return () => {
        if (bgRef.current) {
          gsap.set(bgRef.current, { position: 'absolute' });
        }
        ctx.revert();
      };
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

    setTimeout(() => ScrollTrigger.refresh(), 100);

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const partners = [
    { name: "Hamleys",          logo: log7 },
    { name: "Hamleys",          logo: log1 },
    { name: "Sangapur Village", logo: log2 },
    { name: "SCALEPOINT",       logo: log3 },
    { name: "ocean",            logo: log4 },
    { name: "Habitat",          logo: log5 },
    { name: "COLDEASY",         logo: log6 },
  ];

  return (
    <div className="bg-[#eadecf]">
      <div ref={containerRef} className="relative overflow-hidden isolate">

        {/* Background — absolute on mobile, GSAP switches to fixed on desktop */}
        <div
          ref={bgRef}
          className="absolute inset-0 flex items-end justify-center pointer-events-none z-0 overflow-hidden"
          style={{ backgroundColor: '#eadecf', willChange: 'transform' }}
        >

          {/* ── BACKGROUND CIRCLES (visible at start, fade out on scroll) ── */}
          <div
            ref={(el) => (circleRefs.current[0] = el)}
            className="absolute w-[120vw] h-[110vw] bg-[#fdf6e9] left-1/2"
            style={{ borderRadius: "50%", bottom: "-60vw", opacity: 0.6, transform: "translateX(-50%) translateZ(0)", willChange: "transform, opacity" }}
          />
          <div
            ref={(el) => (circleRefs.current[1] = el)}
            className="absolute w-[95vw] h-[85vw] bg-[#eadecf] left-1/2"
            style={{ borderRadius: "50%", bottom: "-50vw", opacity: 0.6, transform: "translateX(-50%) translateZ(0)", willChange: "transform, opacity" }}
          />
          <div
            ref={(el) => (circleRefs.current[2] = el)}
            className="absolute w-[70vw] h-[65vw] bg-[#fdf6e9] left-1/2"
            style={{ borderRadius: "50%", bottom: "-40vw", opacity: 0.6, transform: "translateX(-50%) translateZ(0)", willChange: "transform, opacity" }}
          />
          <div
            ref={(el) => (circleRefs.current[3] = el)}
            className="absolute w-[45vw] h-[45vw] bg-[#eadecf] left-1/2"
            style={{ borderRadius: "50%", bottom: "-30vw", opacity: 0.6, transform: "translateX(-50%) translateZ(0)", willChange: "transform, opacity" }}
          />

          {/* ── TRANSITION ARCS — 8 arcs, opacity 0 at start, scale+fade IN on scroll ── */}

          {/* Arc 1 — largest, widest */}
          <div
            ref={(el) => (transitionArcRefs.current[0] = el)}
            className="absolute bg-[#f4ede2] left-1/2"
            style={{
              width: "140vw", height: "130vw",
              borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
              bottom: "-70vw", opacity: 0,
              transform: "translateX(-50%) translateZ(0)",
              willChange: "transform, opacity"
            }}
          />
          {/* Arc 2 */}
          <div
            ref={(el) => (transitionArcRefs.current[1] = el)}
            className="absolute bg-[#fdf6e9] left-1/2"
            style={{
              width: "120vw", height: "110vw",
              borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
              bottom: "-60vw", opacity: 0,
              transform: "translateX(-50%) translateZ(0)",
              willChange: "transform, opacity"
            }}
          />
          {/* Arc 3 */}
          <div
            ref={(el) => (transitionArcRefs.current[2] = el)}
            className="absolute bg-[#ede4d6] left-1/2"
            style={{
              width: "100vw", height: "90vw",
              borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
              bottom: "-50vw", opacity: 0,
              transform: "translateX(-50%) translateZ(0)",
              willChange: "transform, opacity"
            }}
          />
          {/* Arc 4 */}
          <div
            ref={(el) => (transitionArcRefs.current[3] = el)}
            className="absolute bg-[#fdf6e9] left-1/2"
            style={{
              width: "80vw", height: "72vw",
              borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
              bottom: "-40vw", opacity: 0,
              transform: "translateX(-50%) translateZ(0)",
              willChange: "transform, opacity"
            }}
          />
          {/* Arc 5 */}
          <div
            ref={(el) => (transitionArcRefs.current[4] = el)}
            className="absolute bg-[#e8ddd0] left-1/2"
            style={{
              width: "62vw", height: "56vw",
              borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
              bottom: "-32vw", opacity: 0,
              transform: "translateX(-50%) translateZ(0)",
              willChange: "transform, opacity"
            }}
          />
          {/* Arc 6 */}
          <div
            ref={(el) => (transitionArcRefs.current[5] = el)}
            className="absolute bg-[#fdf6e9] left-1/2"
            style={{
              width: "45vw", height: "42vw",
              borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
              bottom: "-24vw", opacity: 0,
              transform: "translateX(-50%) translateZ(0)",
              willChange: "transform, opacity"
            }}
          />
          {/* Arc 7 */}
          <div
            ref={(el) => (transitionArcRefs.current[6] = el)}
            className="absolute bg-[#ede4d6] left-1/2"
            style={{
              width: "30vw", height: "28vw",
              borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
              bottom: "-16vw", opacity: 0,
              transform: "translateX(-50%) translateZ(0)",
              willChange: "transform, opacity"
            }}
          />
          {/* Arc 8 — smallest, innermost */}
          <div
            ref={(el) => (transitionArcRefs.current[7] = el)}
            className="absolute bg-[#fdf6e9] left-1/2"
            style={{
              width: "16vw", height: "15vw",
              borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
              bottom: "-9vw", opacity: 0,
              transform: "translateX(-50%) translateZ(0)",
              willChange: "transform, opacity"
            }}
          />

        </div>

        {/* ── Content ── */}
        <div
          ref={contentRef}
          className="relative flex flex-col items-center justify-center z-10 py-8 sm:py-10 pt-16 sm:pt-24 md:pt-30"
        >
          <div className="container px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#4B433B] mb-3 sm:mb-4 md:mb-6"
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
              <div className="w-full bg-[#f0e9dc] py-4 sm:py-6 md:py-8 rounded-xl overflow-hidden">
                <div className="max-w-7xl mx-auto px-2 sm:px-4">
                  <div className="relative overflow-hidden">
                    <div
                      ref={logoScrollRef}
                      className="flex items-center gap-x-6 sm:gap-x-8 md:gap-x-12"
                      style={{ willChange: 'transform' }}
                    >
                      {partners.map((partner, index) => (
                        <div key={index} className="flex items-center justify-center h-6 sm:h-8 md:h-10 lg:h-14 flex-shrink-0">
                          <img src={partner.logo} alt={partner.name} className="h-full w-[90px] sm:w-[110px] md:w-[130px] object-contain opacity-80" loading="lazy" />
                        </div>
                      ))}
                      {partners.map((partner, index) => (
                        <div key={`dup-${index}`} className="flex items-center justify-center h-6 sm:h-8 md:h-10 lg:h-14 flex-shrink-0">
                          <img src={partner.logo} alt={partner.name} className="h-full w-[90px] sm:w-[110px] md:w-[130px] object-contain opacity-80" loading="lazy" />
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