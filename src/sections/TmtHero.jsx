import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import tmt from '../assets/logos/tmt.svg';

gsap.registerPlugin(ScrollTrigger);


export default function CaseStudySection() {
  const containerRef = useRef(null);
  const circleRefs = useRef([]);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.config({ force3D: true, nullTargetWarn: false });

    const mm = gsap.matchMedia();

    // Desktop animations only (min-width: 1024px)
    mm.add("(min-width: 1024px)", () => {
      const ctx = gsap.context(() => {
        circleRefs.current.forEach((circle) => {
          if (!circle) return;
          gsap.to(circle, {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "70% top",
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
            scale: 8,
            opacity: 0,
            ease: "power2.inOut",
            force3D: true,
          });
        });

        if (contentRef.current) {
          gsap.to(contentRef.current, {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "70% top",
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

      return () => ctx.revert();
    });

    const t = setTimeout(() => ScrollTrigger.refresh(), 100);

    return () => {
      clearTimeout(t);
      mm.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  // Arc configs — responsive for all screen sizes
  const arcs = [
    { w: "140vw", h: "130vw", bg: "#e8ddd0", bottom: "-70vw", wMd: "150vw", hMd: "140vw", bottomMd: "-75vw", wSm: "170vw", hSm: "160vw", bottomSm: "-85vw" },
    { w: "120vw", h: "110vw", bg: "#faf5eb", bottom: "-60vw", wMd: "130vw", hMd: "120vw", bottomMd: "-65vw", wSm: "150vw", hSm: "140vw", bottomSm: "-75vw" },
    { w: "95vw",  h: "85vw",  bg: "#e8ddd0", bottom: "-50vw", wMd: "105vw", hMd: "95vw", bottomMd: "-55vw", wSm: "120vw", hSm: "110vw", bottomSm: "-60vw" },
    { w: "70vw",  h: "65vw",  bg: "#faf5eb", bottom: "-40vw", wMd: "80vw", hMd: "75vw", bottomMd: "-45vw", wSm: "95vw", hSm: "90vw", bottomSm: "-50vw" },
    { w: "45vw",  h: "45vw",  bg: "#e8ddd0", bottom: "-30vw", wMd: "55vw", hMd: "55vw", bottomMd: "-35vw", wSm: "70vw", hSm: "70vw", bottomSm: "-40vw" },
    { w: "25vw",  h: "25vw",  bg: "#faf5eb", bottom: "-20vw", wMd: "35vw", hMd: "35vw", bottomMd: "-25vw", wSm: "45vw", hSm: "45vw", bottomSm: "-30vw" },
    { w: "12vw",  h: "12vw",  bg: "#e8ddd0", bottom: "-12vw", wMd: "18vw", hMd: "18vw", bottomMd: "-15vw", wSm: "25vw", hSm: "25vw", bottomSm: "-20vw" },
    { w: "6vw",   h: "6vw",   bg: "#faf5eb", bottom: "-6vw",  wMd: "10vw", hMd: "10vw", bottomMd: "-8vw",  wSm: "15vw", hSm: "15vw", bottomSm: "-12vw" },
  ];

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden min-h-screen flex flex-col justify-center py-6 sm:py-8 md:py-12 lg:py-14"
      style={{ 
        backgroundColor: "#faf5eb", 
        paddingTop: "clamp(40px, 8vw, 600px)" 
      }}
    >
      {/* Semicircle Arcs */}
      <div className="hidden lg:flex absolute inset-0 items-end justify-center pointer-events-none overflow-hidden">
        {arcs.map((arc, i) => (
          <div
            key={i}
            ref={(el) => (circleRefs.current[i] = el)}
            className="absolute rounded-full"
            style={{
              left: "50%",
              width: `min(${arc.w}, ${arc.wMd})`,
              height: `min(${arc.h}, ${arc.hMd})`,
              backgroundColor: arc.bg,
              bottom: arc.bottom,
              opacity: 0.6,
              transform: "translateX(-50%) translateZ(0)",
              willChange: "transform, opacity",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-[35px]"
        style={{ maxWidth: "1400px" }}
      >
        {/* Logo Row */}
        <div className="flex gap-2 sm:gap-2.5 md:gap-3 lg:gap-5 flex-wrap mb-3 sm:mb-3 md:mb-4">

          {/* coldeasy2 */}
          <LogoCard>
            <img src={tmt} alt="Logo 2" className="max-h-4 sm:max-h-5 md:max-h-6 lg:max-h-8 w-auto object-contain" />
          </LogoCard>

        </div>

        {/* Headline */}
        <h1
          className="mb-3 sm:mb-3.5 md:mb-4 lg:mb-[18px] leading-[1.3] sm:leading-[1.30] md:leading-[1.25]"
          style={{
            fontSize: "clamp(1.75rem, 5.5vw, 4rem)",
            color: "#402E1D",
            maxWidth: "1200px",
            fontFamily: "Georgia, serif",
            fontWeight: 400,
          }}
        >
          <strong className="font-black text-[#402E1D]" style={{ fontFamily: "sans-serif" }}>
           A Digital Platform to Support Access,  <br />
          </strong>{" "}
          <span className="  font-light">Awareness, and Giving</span>
        </h1>

        {/* Body */}
        <p
          className="leading-[1.6] sm:leading-[1.65] md:leading-[1.7] lg:leading-[1.82] mb-6 sm:mb-8 md:mb-10 lg:mb-16"
          style={{ 
            fontSize: "clamp(0.9rem, 2vw, 1rem)",
            color: "#0A0A0A", 
            maxWidth: "920px" 
          }}
        >
        Dr Tarannum Memorial Trust (TMT) is a charitable trust working to support healthcare access and community‑focused initiatives. The goal was to create a clear, trustworthy digital presence that reflects the organisation’s mission, while making it easier for supporters to understand their work and contribute through online donations. We worked closely with the team to design and develop a website that communicates their purpose clearly, supports donations, and simplifies backend processes for managing contributions.
        </p>

        
       
      </div>
    </div>
  );
}

function LogoCard({ children }) {
  return (
    <div
      className="bg-white border border-black/[0.07] rounded-[4px] px-2 sm:px-2.5 md:px-3 lg:px-[14px] py-1.5 sm:py-1.5 md:py-1.5 lg:py-2 flex items-center justify-center w-auto min-w-[70px] sm:min-w-[80px] md:min-w-[100px] lg:min-w-[120px] min-h-[36px] sm:min-h-[40px] md:min-h-[44px] lg:min-h-[48px]"
      style={{
        boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
      }}
    >
      {children}
    </div>
  );
}