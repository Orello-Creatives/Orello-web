import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ExploreWorkSection() {
  const containerRef = useRef(null);
  const circleRefs = useRef([]);

  useEffect(() => {
    gsap.config({
      force3D: true,
      nullTargetWarn: false,
    });

    // SEMICIRCLE GSAP ANIMATION
    circleRefs.current.forEach((circle) => {
      if (!circle) return;

      gsap.to(circle, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "40% top",
          scrub: 2,
          anticipatePin: 1,
        },
        scale: 8,
        keyframes: [
          { opacity: 0.6, duration: 0.3, ease: "power2.in" },
          { opacity: 0, duration: 0.7, ease: "power2.out" },
        ],
        ease: "power2.inOut",
      });
    });

    // Content animation
    gsap.fromTo(
      ".work-content",
      { y: 60, opacity: 0 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "top 40%",
          scrub: 1,
        },
        y: 0,
        opacity: 1,
        ease: "power2.out",
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#eadecf] py-20 sm:py-28 md:py-32 lg:py-40"
    >
      {/* SEMICIRCLE BACKGROUND */}
      <div className="fixed inset-0 flex items-end justify-center pointer-events-none overflow-hidden z-0">
        <div
          ref={(el) => (circleRefs.current[0] = el)}
          className="absolute w-[120vw] h-[110vw] bg-[#fdf6e9] left-1/2"
          style={{
            borderRadius: "50%",
            bottom: "-60vw",
            opacity: 0.6,
            transform: "translateX(-50%)",
            willChange: "transform, opacity",
          }}
        />
        <div
          ref={(el) => (circleRefs.current[1] = el)}
          className="absolute w-[95vw] h-[85vw] bg-[#eadecf] left-1/2"
          style={{
            borderRadius: "50%",
            bottom: "-50vw",
            opacity: 0.6,
            transform: "translateX(-50%)",
            willChange: "transform, opacity",
          }}
        />
        <div
          ref={(el) => (circleRefs.current[2] = el)}
          className="absolute w-[70vw] h-[65vw] bg-[#fdf6e9] left-1/2"
          style={{
            borderRadius: "50%",
            bottom: "-40vw",
            opacity: 0.6,
            transform: "translateX(-50%)",
            willChange: "transform, opacity",
          }}
        />
        <div
          ref={(el) => (circleRefs.current[3] = el)}
          className="absolute w-[45vw] h-[45vw] bg-[#eadecf] left-1/2"
          style={{
            borderRadius: "50%",
            bottom: "-30vw",
            opacity: 0.6,
            transform: "translateX(-50%)",
            willChange: "transform, opacity",
          }}
        />
        <div
          ref={(el) => (circleRefs.current[4] = el)}
          className="absolute w-[30vw] h-[25vw] bg-[#fdf6e9] left-1/2"
          style={{
            borderRadius: "50%",
            bottom: "-20vw",
            opacity: 0.6,
            transform: "translateX(-50%)",
            willChange: "transform, opacity",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className=" relative z-10 ">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#402E1D] mb-6 sm:mb-8 leading-tight">
            Explore Our Work
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-black leading-relaxed">
            Orello is a purpose-driven global design partner that helps
            impact-oriented organisations communicate with clarity, empathy, and
            intention.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A0A0A]">
            Filter by
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 cursor-pointer bg-[#4b433b] text-white rounded-full text-base sm:text-lg md:text-xl font-medium hover:bg-[#3a342e] transition-colors duration-300">
              Industry
            </button>
            <button className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 cursor-pointer bg-[#F7AF19] text-[#0A0A0A] rounded-full text-base sm:text-lg md:text-xl font-medium hover:bg-[#e5a00f] transition-colors duration-300">
              Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}