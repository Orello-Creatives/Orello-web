import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


import herologo1 from '../assets/logos/herologo1.svg';
import herologo2 from '../assets/logos/herologo2.svg';
import herologo3 from '../assets/logos/herologo3.svg';
import herologo4 from '../assets/logos/herologo4.svg';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const containerRef = useRef(null);
  const stickyContainerRef = useRef(null);
  const headerTextRef = useRef(null);
  const descriptionRef = useRef(null);
  
  const serviceIcons = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const textPlaceholders = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const finalTextRef = useRef(null);
  
  // Background circle refs
  const circleRefs = useRef([]);
  const transitionArcRefs = useRef([]);

  useEffect(() => {
    // Force scroll to top on mount
    window.scrollTo(0, 0);

    // Only run animations on large devices
    const isDesktop = window.innerWidth >= 1024;

    if (isDesktop) {
      const ctx = gsap.context(() => {
        // 1. Initial State Setup - Set these IMMEDIATELY
        gsap.set(finalTextRef.current, { opacity: 0, visibility: 'hidden' });
        gsap.set(".text-line", { y: 30, opacity: 0 });

        const initialIconSpacing = 180; 

        // Center all icons initially at the bottom and make them visible
        gsap.set(serviceIcons.map(r => r.current), {
          top: '65%', 
          left: '50%',
          xPercent: -50,
          yPercent: -50,
          scale: 1,
          opacity: 1,
          willChange: 'transform, opacity',
        });

        // Apply initial horizontal spread
        serviceIcons.forEach((ref, i) => {
          const offset = (i - 1.5) * initialIconSpacing; 
          gsap.set(ref.current, { x: offset });
        });

        // Animate background circles on scroll
        circleRefs.current.forEach((circle) => {
          if (circle) {
            gsap.to(circle, {
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "30% top",
                scrub: 1.5,
                anticipatePin: 1,
              },
              scale: 8,
              opacity: 0,
              ease: "none",
            });
          }
        });

        transitionArcRefs.current.forEach((arc) => {
          if (arc) {
            gsap.fromTo(
              arc,
              { 
                scale: 1, 
                opacity: 0,
              },
              {
                scrollTrigger: {
                  trigger: containerRef.current,
                  start: "top top",
                  end: "30% top",
                  scrub: 1.5,
                  anticipatePin: 1,
                },
                scale: 8,
                opacity: 0.7,
                ease: "none",
              }
            );
          }
        });

        // 2. Scroll Animation
        const masterTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=400%",
            scrub: 1.5,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
          }
        });

        // Phase 1: Header fades & Icons "Jump" up with gaps (0-1)
        masterTimeline.to([headerTextRef.current, descriptionRef.current], {
          opacity: 0,
          y: -60,
          duration: 1,
          ease: "power1.inOut"
        }, 0);

        serviceIcons.forEach((ref, i) => {
          const expandedOffset = (i - 1.5) * (initialIconSpacing + 60); 
          masterTimeline.to(ref.current, {
            top: '40%',     
            x: expandedOffset, 
            scale: 1.5,     
            duration: 1,
            ease: "back.out(1.2)",
          }, 0);
        });

        // Phase 2: Show final text layout (1-1.5)
        masterTimeline.to(finalTextRef.current, {
          opacity: 1,
          visibility: 'visible',
          duration: 0.5,
          ease: "power1.in"
        }, 1);

        // Phase 3: Icons land into text placeholders (1.5-3)
        serviceIcons.forEach((iconRef, i) => {
          
          const extraRotation = (i === 1 || i === 3) ? 90 : 0;
          masterTimeline.to(iconRef.current, {
            top: () => {
              const targetRect = textPlaceholders[i].current.getBoundingClientRect();
              const containerRect = stickyContainerRef.current.getBoundingClientRect();
              return targetRect.top - containerRect.top + (targetRect.height / 2);
            },
            left: () => {
              const targetRect = textPlaceholders[i].current.getBoundingClientRect();
              const containerRect = stickyContainerRef.current.getBoundingClientRect();
              return targetRect.left - containerRect.left + (targetRect.width / 2);
            },
            x: 0, 
            xPercent: -50,
            yPercent: -50,
            scale: 1, 
            width: () => textPlaceholders[i].current.offsetWidth,
            height: () => textPlaceholders[i].current.offsetHeight,
            rotation: 360 + (i * 90) + extraRotation,
            duration: 1.5,
            ease: "power2.inOut",
          }, 1.5 + (i * 0.08));
        });

        // Phase 4: Text lines slide in (2-3.5)
        masterTimeline.to(".text-line", {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 1,
          ease: "power2.out"
        }, 2);

      }, containerRef);

      // Refresh ScrollTrigger after a brief delay
      const refreshTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);

      return () => {
        ctx.revert();
        clearTimeout(refreshTimeout);
      };
    }
    // No animations for mobile/tablet - content displays statically
  }, []);

  return (
    <div ref={containerRef} className="bg-[#eadecf] relative">
      <div ref={stickyContainerRef} className="h-auto lg:h-screen w-full overflow-hidden relative py-12 lg:py-0">
        
        {/* Background Decorative Circles - Hidden on mobile/tablet */}
        <div className="absolute inset-0 items-end justify-center pointer-events-none z-0 overflow-hidden hidden lg:flex">
          <div
            ref={(el) => (circleRefs.current[1] = el)}
            className="absolute w-[120vw] h-[110vw] bg-[#fdf6e9] left-1/2"
            style={{ borderRadius: "50%", bottom: "-60vw", opacity: 0.6, transform: "translateX(-50%)", willChange: "transform, opacity" }}
          />
          <div
            ref={(el) => (circleRefs.current[2] = el)}
            className="absolute w-[95vw] h-[85vw] bg-[#eadecf] left-1/2"
            style={{ borderRadius: "50%", bottom: "-50vw", opacity: 0.6, transform: "translateX(-50%)", willChange: "transform, opacity" }}
          />
          <div
            ref={(el) => (circleRefs.current[3] = el)}
            className="absolute w-[70vw] h-[65vw] bg-[#fdf6e9] left-1/2"
            style={{ borderRadius: "50%", bottom: "-40vw", opacity: 0.6, transform: "translateX(-50%)", willChange: "transform, opacity" }}
          />
          <div
            ref={(el) => (circleRefs.current[4] = el)}
            className="absolute w-[45vw] h-[45vw] bg-[#eadecf] left-1/2"
            style={{ borderRadius: "50%", bottom: "-30vw", opacity: 0.6, transform: "translateX(-50%)", willChange: "transform, opacity" }}
          />

          <div
            ref={(el) => (transitionArcRefs.current[0] = el)}
            className="absolute w-[40vw] h-[40vw] bg-[#F4EDE2] left-1/2"
            style={{ borderRadius: "50%", bottom: "-40vw", opacity: 0, transform: "translateX(-50%)", willChange: "transform, opacity" }}
          />
          <div
            ref={(el) => (transitionArcRefs.current[1] = el)}
            className="absolute w-[15vw] h-[0vw] bg-[#f4ede2] left-1/2"
            style={{ borderRadius: "50%", bottom: "-40vw", opacity: 0, transform: "translateX(-50%)", willChange: "transform, opacity" }}
          />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center px-4">
          
          {/* Initial Header - Shows on mobile/tablet, hidden during animation on desktop */}
          <div ref={headerTextRef} className="static lg:absolute inset-0 flex flex-col items-center pt-8 md:pt-12 lg:pt-[15vh] text-center mb-8 lg:mb-0">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#4B433B] mb-3 sm:mb-4 md:mb-6"
                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 900 }}>
              Our Services
            </h2>
            <p ref={descriptionRef} className="text-[#402E1D] text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed px-4">
              Orello is a purpose-driven global design partner that helps impact-oriented
              <br className="hidden sm:block" />
              organisations communicate with clarity, empathy, and intention.
            </p>
          </div>

          {/* Final Text Layout - Visible on mobile/tablet, animated on desktop */}
          <div 
            ref={finalTextRef} 
            className="h-full flex items-center justify-center max-w-7xl  text-center relative z-20 opacity-100 visible lg:opacity-0 lg:invisible"
          >
            <h2 className="text-black text-xl sm:text-2xl md:text-4xl lg:text-7xl font-black leading-tight px-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
              <span className="text-line inline opacity-100 lg:opacity-0">We help brands</span>
              <span ref={textPlaceholders[0]} className="inline-flex w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 mx-1 md:mx-2 align-middle">
                <img src={herologo1} alt="" className="w-full h-full object-contain lg:hidden" />
              </span>
              <span className="text-line inline opacity-100 lg:opacity-0"> build identities and communicate clearly with </span>
              <span ref={textPlaceholders[1]} className="inline-flex w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 mx-1 md:mx-2 align-middle">
                <img src={herologo2} alt="" className="w-full h-full object-contain lg:hidden" />
              </span>
              <span className="text-line inline opacity-100 lg:opacity-0">engaging visuals,</span>
            
              <span ref={textPlaceholders[2]} className="inline-flex w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 mx-1 md:mx-2 align-middle">
                <img src={herologo3} alt="" className="w-full h-full object-contain lg:hidden" />
              </span>
              <span className="text-line inline opacity-100 lg:opacity-0">digital marketing, and intuitive</span>
             
              <span ref={textPlaceholders[3]} className="inline-flex w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 mx-1 md:mx-2 align-middle">
                <img src={herologo4} alt="" className="w-full h-full object-contain lg:hidden" />
              </span>
              <span className="text-line inline opacity-100 lg:opacity-0"> platforms.</span>
            </h2>
          </div>

          {/* Service Icons - Animated on desktop only */}
          <div className="absolute inset-0 pointer-events-none z-30 hidden lg:block">
            {[herologo1, herologo2, herologo3, herologo4].map((logo, idx) => (
              <div 
                key={idx} 
                ref={serviceIcons[idx]} 
                className="absolute w-36 h-36 md:w-48 lg:w-52"
                style={{ 
                  top: '65%', 
                  left: '50%', 
                  transform: 'translate(-50%, -50%)',
                  opacity: 0
                }}
              >
                <img src={logo} alt="" className="w-full h-full object-contain" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}