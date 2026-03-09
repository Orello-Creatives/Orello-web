import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ResourcesSection() {
  const containerRef = useRef(null);
  const circleRefs = useRef([]);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.config({
      force3D: true,
      nullTargetWarn: false,
    });

    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      const ctx = gsap.context(() => {
        circleRefs.current.forEach((circle) => {
          if (!circle) return;

          gsap.to(circle, {
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top top',
              end: '40% top',
              scrub: 1.5,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
            scale: 8,
            opacity: 0,
            ease: 'power2.inOut',
            force3D: true,
          });
        });

        if (contentRef.current) {
          gsap.to(contentRef.current, {
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top top',
              end: '40% top',
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
            y: '-100vh',
            ease: 'none',
            force3D: true,
          });
        }
      }, containerRef);

      return () => ctx.revert();
    });

    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(refreshTimeout);
      mm.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative bg-[#eadecf] py-42 overflow-hidden">
      {/* Semicircle Arc Backgrounds */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none overflow-hidden">
        <div
          ref={(el) => (circleRefs.current[0] = el)}
          className="absolute w-[120vw] h-[110vw] bg-[#fdf6e9] left-1/2"
          style={{
            borderRadius: '50%',
            bottom: '-60vw',
            opacity: 0.6,
            transform: 'translateX(-50%) translateZ(0)',
            willChange: 'transform, opacity',
          }}
        />
        <div
          ref={(el) => (circleRefs.current[1] = el)}
          className="absolute w-[95vw] h-[85vw] bg-[#eadecf] left-1/2"
          style={{
            borderRadius: '50%',
            bottom: '-50vw',
            opacity: 0.6,
            transform: 'translateX(-50%) translateZ(0)',
            willChange: 'transform, opacity',
          }}
        />
        <div
          ref={(el) => (circleRefs.current[2] = el)}
          className="absolute w-[70vw] h-[65vw] bg-[#fdf6e9] left-1/2"
          style={{
            borderRadius: '50%',
            bottom: '-40vw',
            opacity: 0.6,
            transform: 'translateX(-50%) translateZ(0)',
            willChange: 'transform, opacity',
          }}
        />
        <div
          ref={(el) => (circleRefs.current[3] = el)}
          className="absolute w-[45vw] h-[45vw] bg-[#eadecf] left-1/2"
          style={{
            borderRadius: '50%',
            bottom: '-30vw',
            opacity: 0.6,
            transform: 'translateX(-50%) translateZ(0)',
            willChange: 'transform, opacity',
          }}
        />
        <div
          ref={(el) => (circleRefs.current[4] = el)}
          className="absolute w-[25vw] h-[25vw] bg-[#fdf6e9] left-1/2"
          style={{
            borderRadius: '50%',
            bottom: '-20vw',
            opacity: 0.6,
            transform: 'translateX(-50%) translateZ(0)',
            willChange: 'transform, opacity',
          }}
        />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <h2
          className="font-black text-[#402E1D] mb-6"
          style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 900 }}
        >
          Explore our resources
        </h2>

        <p className="text-black paragraph max-w-2xl mx-auto mb-12 leading-relaxed">
          Orello is a purpose-driven global design partner that helps impact-oriented
          organisations communicate with clarity, empathy, and intention.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => {
              const el = document.getElementById('blogs');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-12 py-4 bg-[#4B433B] text-white cursor-pointer rounded-full text-lg font-semibold hover:bg-[#3a342e] transition-colors duration-300 min-w-[160px]"
          >
            Blogs
          </button>
          <button className="px-12 py-4 bg-[#f7af19] text-[#4B433B] cursor-pointer rounded-full text-lg font-semibold hover:bg-[#e5a015] transition-colors duration-300 min-w-[160px]">
            Articles
          </button>
        </div>
      </div>
    </div>
  );
}