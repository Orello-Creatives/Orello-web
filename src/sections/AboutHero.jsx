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

  useEffect(() => {
    // Enhanced performance configuration
    gsap.config({ 
      force3D: true,
      nullTargetWarn: false
    });

    const mm = gsap.matchMedia();

    // Only apply animations on desktop (min-width: 768px)
    mm.add("(min-width: 768px)", () => {
      // Store animation contexts for proper cleanup
      const ctx = gsap.context(() => {
        // Animate circles expanding with optimized settings
        circleRefs.current.forEach((circle, index) => {
          if (circle) {
            gsap.to(circle, {
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "40% top",
                scrub: 1.5,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
              scale: 8,
              opacity: 0,
              ease: "power2.inOut",
              force3D: true,
            });
          }
        });

        // Animate transition arcs with optimized settings
        transitionArcRefs.current.forEach((arc, index) => {
          if (arc) {
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
                  scrub: 1.5,
                  anticipatePin: 1,
                  invalidateOnRefresh: true,
                },
                scale: 8,
                opacity: 0.7,
                ease: "power2.inOut",
                force3D: true,
              }
            );
          }
        });

        // Move content up while scrolling down - optimized
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
            y: "-100vh",
            ease: "none",
            force3D: true,
          });
        }
      }, containerRef);

      return () => {
        ctx.revert();
      };
    });

    // Refresh ScrollTrigger after layout is ready
    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(refreshTimeout);
      mm.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
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
      <div ref={containerRef} className="relative h-full overflow-hidden">
        {/* Background Circles - Same as Hero */}
        <div className="fixed inset-0 flex items-end justify-center pointer-events-none z-0 overflow-hidden">
          <div
            ref={(el) => (circleRefs.current[0] = el)}
            className="absolute w-[120vw] h-[110vw] bg-[#fdf6e9] left-1/2"
            style={{ 
              borderRadius: "50%", 
              bottom: "-60vw", 
              opacity: 0.6, 
              transform: "translateX(-50%) translateZ(0)", 
              willChange: "transform, opacity" 
            }}
          />
          <div
            ref={(el) => (circleRefs.current[1] = el)}
            className="absolute w-[95vw] h-[85vw] bg-[#eadecf] left-1/2"
            style={{ 
              borderRadius: "50%", 
              bottom: "-50vw", 
              opacity: 0.6, 
              transform: "translateX(-50%) translateZ(0)", 
              willChange: "transform, opacity" 
            }}
          />
          <div
            ref={(el) => (circleRefs.current[2] = el)}
            className="absolute w-[70vw] h-[65vw] bg-[#fdf6e9] left-1/2"
            style={{ 
              borderRadius: "50%", 
              bottom: "-40vw", 
              opacity: 0.6, 
              transform: "translateX(-50%) translateZ(0)", 
              willChange: "transform, opacity" 
            }}
          />
          <div
            ref={(el) => (circleRefs.current[3] = el)}
            className="absolute w-[45vw] h-[45vw] bg-[#eadecf] left-1/2"
            style={{ 
              borderRadius: "50%", 
              bottom: "-30vw", 
              opacity: 0.6, 
              transform: "translateX(-50%) translateZ(0)", 
              willChange: "transform, opacity" 
            }}
          />

          {/* Transition Arcs - Same as Hero */}
          <div
            ref={(el) => (transitionArcRefs.current[0] = el)}
            className="absolute w-[40vw] h-[40vw] bg-[#F4EDE2] left-1/2"
            style={{ 
              borderRadius: "50%", 
              bottom: "-40vw", 
              opacity: 0, 
              transform: "translateX(-50%) translateZ(0)", 
              willChange: "transform, opacity" 
            }}
          />
          <div
            ref={(el) => (transitionArcRefs.current[1] = el)}
            className="absolute w-[15vw] h-[60vw] bg-[#f4ede2] left-1/2"
            style={{ 
              borderRadius: "50%", 
              bottom: "-40vw", 
              opacity: 0, 
              transform: "translateX(-50%) translateZ(0)", 
              willChange: "transform, opacity" 
            }}
          />
        </div>

        {/* Content */}
       <div
  ref={contentRef}
  className="relative flex flex-col items-center justify-center z-10 py-10 pt-30"
>

          <div className="container">
            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#4B433B] mb-4 md:mb-6" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 900 }}>
                About Orello
              </h2>
              <p className="text-[#4B433B] text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">
                Orello is a purpose-driven design and development partner for organisations creating impact
                
                across India, USA, Europe and UAE.
              </p>
            </div>

            {/* Illustration */}
            <div className="flex justify-center mb-8 md:mb-12 ">
              <div className="relative w-full max-w-2xl px-4 ">
                <img 
                  src={objects} 
                  alt="Team collaboration"
                  className="w-full h-auto"
                  loading="eager"
                />
              </div>
            </div>

           {/* Partners Logo Strip */}
<div className="mt-10 md:mt-14">
  <div className="w-full bg-[#Fffdfa] py-6 md:py-8 rounded-xl">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-x-12">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-8 sm:h-10 md:h-12 lg:h-14"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-full w-[130px] object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
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
  );
}