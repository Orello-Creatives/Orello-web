import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import your assets
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial State Setup
      gsap.set(finalTextRef.current, { opacity: 0, visibility: 'hidden' });
      gsap.set(".text-line", { y: 30, opacity: 0 });

      const initialIconSpacing = 180; 

      // Center all icons initially at the bottom
      gsap.set(serviceIcons.map(r => r.current), {
        top: '65%', 
        left: '50%',
        xPercent: -50,
        yPercent: -50,
        scale: 1,
      });

      // Apply initial horizontal spread
      serviceIcons.forEach((ref, i) => {
        const offset = (i - 1.5) * initialIconSpacing; 
        gsap.set(ref.current, { x: offset });
      });

      // 2. Scroll Animation
      const masterTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=350%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      // Phase 1: Header fades & Icons "Jump" up with gaps
      masterTimeline.to([headerTextRef.current, descriptionRef.current], {
        opacity: 0,
        y: -60,
        duration: 0.4,
        ease: "power2.inOut"
      }, 0);

      serviceIcons.forEach((ref, i) => {
        const expandedOffset = (i - 1.5) * (initialIconSpacing + 60); 
        masterTimeline.to(ref.current, {
          top: '40%',     
          x: expandedOffset, 
          scale: 1.5,     
          duration: 0.4,
          ease: "power2.out",
        }, 0);
      });

      // Phase 2: Show final text layout
      masterTimeline.to(finalTextRef.current, {
        opacity: 1,
        visibility: 'visible',
        duration: 0.2,
      }, 0.3);

      // Phase 3: Icons land into text placeholders
      serviceIcons.forEach((iconRef, i) => {
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
          rotation: 360 + (i * 90),
          duration: 0.8,
          ease: "power3.inOut",
        }, 0.4 + (i * 0.05));
      });

      // Phase 4: Text lines slide in
      masterTimeline.to(".text-line", {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out"
      }, 0.5);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#eadecf] relative">
      <div ref={stickyContainerRef} className="h-screen w-full overflow-hidden relative">
        
        {/* Background Decorative Circles using only #fdf6e9 and #eadecf */}
        <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-0 overflow-hidden">
          <div className="absolute w-[140vw] h-[130vw] bg-[#fdf6e9] opacity-40 left-1/2" style={{ borderRadius: "50%", bottom: "-75vw", transform: "translateX(-50%)" }} />
          <div className="absolute w-[115vw] h-[105vw] bg-[#eadecf] left-1/2" style={{ borderRadius: "50%", bottom: "-65vw", transform: "translateX(-50%)" }} />
          <div className="absolute w-[90vw] h-[85vw] bg-[#fdf6e9] left-1/2" style={{ borderRadius: "50%", bottom: "-55vw", transform: "translateX(-50%)" }} />
          <div className="absolute w-[65vw] h-[65vw] bg-[#eadecf] left-1/2" style={{ borderRadius: "50%", bottom: "-45vw", transform: "translateX(-50%)" }} />
          <div className="absolute w-[40vw] h-[40vw] bg-[#fdf6e9] left-1/2" style={{ borderRadius: "50%", bottom: "-35vw", transform: "translateX(-50%)" }} />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center px-4">
          
          {/* Initial Header */}
          <div ref={headerTextRef} className="absolute inset-0 flex flex-col items-center pt-[15vh] text-center">
            <h2 className="text-[#402E1D] text-5xl sm:text-6xl lg:text-7xl font-black mb-6 font-mona">
              Our Services
            </h2>
            <p ref={descriptionRef} className="text-[#402E1D] text-base sm:text-xl max-w-3xl leading-relaxed">
              Orello is a purpose-driven global design partner that helps impact-oriented
              <br className="hidden sm:block" />
              organisations communicate with clarity, empathy, and intention.
            </p>
          </div>

          {/* Final Text Layout */}
          <div ref={finalTextRef} className="h-full flex items-center justify-center max-w-6xl mx-auto text-center relative z-20">
            <h2 className="text-black text-3xl sm:text-5xl lg:text-7xl font-black leading-tight" style={{ fontFamily: 'Satoshi, sans-serif' }}>
              <span className="text-line inline">We help brands </span>
              <span ref={textPlaceholders[0]} className="inline-flex w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-2 align-middle" />
              <span className="text-line inline">build identities and</span>
              <br />
              <span className="text-line inline">communicate clearly with </span>
              <span ref={textPlaceholders[1]} className="inline-flex w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-2 align-middle" />
              <span className="text-line inline">engaging visuals,</span>
              <br />
              <span ref={textPlaceholders[2]} className="inline-flex w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-2 align-middle" />
              <span className="text-line inline">digital marketing, and</span>
              <br />
              <span ref={textPlaceholders[3]} className="inline-flex w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-2 align-middle" />
              <span className="text-line inline">intuitive platforms.</span>
            </h2>
          </div>

          {/* Service Icons */}
          <div className="absolute inset-0 pointer-events-none z-30">
            {[herologo1, herologo2, herologo3, herologo4].map((logo, idx) => (
              <div key={idx} ref={serviceIcons[idx]} className="absolute w-36 h-36 md:w-48 lg:w-52">
                <img src={logo} alt="" className="w-full h-full object-contain" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}