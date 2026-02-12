import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clogo1 from '../assets/logos/clogo1.svg';
import clogo2 from '../assets/logos/clogo2.svg';
import clogo3 from '../assets/logos/clogo3.svg';
import clogo4 from '../assets/logos/clogo4.svg';

gsap.registerPlugin(ScrollTrigger);


export default function CaseStudySection() {
  const containerRef = useRef(null);
  const circleRefs = useRef([]);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.config({ force3D: true, nullTargetWarn: false });

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        circleRefs.current.forEach((circle) => {
          if (!circle) return;
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

  // Arc configs — widths/heights/bottoms are vw-based, kept as inline styles
  const arcs = [
    { w: "120vw", h: "110vw", bg: "#e8ddd0", bottom: "-60vw" },
    { w: "95vw",  h: "85vw",  bg: "#faf5eb", bottom: "-50vw" },
    { w: "70vw",  h: "65vw",  bg: "#e8ddd0", bottom: "-40vw" },
    { w: "45vw",  h: "45vw",  bg: "#faf5eb", bottom: "-30vw" },
    { w: "25vw",  h: "25vw",  bg: "#e8ddd0", bottom: "-20vw" },
  ];

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden h-screen flex flex-col justify-center py-8 md:py-14"
      style={{ backgroundColor: "#faf5eb", paddingTop: "clamp(56px, 10vw, 86px)" }}
    >
      {/* Semicircle Arcs */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none overflow-hidden">
        {arcs.map((arc, i) => (
          <div
            key={i}
            ref={(el) => (circleRefs.current[i] = el)}
            className="absolute rounded-full"
            style={{
              left: "50%",
              width: arc.w,
              height: arc.h,
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
        className="relative z-10 mx-auto w-full px-5 sm:px-8 md:px-[60px]"
        style={{ maxWidth: "1100px" }}
      >
        {/* Logo Row */}
        <div className="flex gap-2.5 sm:gap-3 md:gap-5 flex-wrap mb-3 sm:mb-3 md:mb-4">

          {/* clogo1 */}
          <LogoCard>
            <img src={clogo1} alt="Logo 1" className="max-h-5 sm:max-h-6 md:max-h-8 w-auto object-contain" />
          </LogoCard>

          {/* clogo2 */}
          <LogoCard>
            <img src={clogo2} alt="Logo 2" className="max-h-5 sm:max-h-6 md:max-h-8 w-auto object-contain" />
          </LogoCard>

          {/* clogo3 */}
          <LogoCard>
            <img src={clogo3} alt="Logo 3" className="max-h-5 sm:max-h-6 md:max-h-8 w-auto object-contain" />
          </LogoCard>

          {/* clogo4 */}
          <LogoCard>
            <img src={clogo4} alt="Logo 4" className="max-h-5 sm:max-h-6 md:max-h-8 w-auto object-contain" />
          </LogoCard>

        </div>

        {/* Headline */}
        <h1
          className="mb-3 sm:mb-4 md:mb-[18px] leading-[1.38]"
          style={{
            fontSize: "clamp(1.9rem, 4vw, 3rem)",
            color: "#402E1D",
            maxWidth: "860px",
            fontFamily: "Georgia, serif",
            fontWeight: 400,
          }}
        >
          <strong className="font-black text-[#402E1D]" style={{ fontFamily: " sans-serif" }}>
            Green Building Materials:
          </strong>{" "}
          <span>Collaterals that Convened a Movement</span>
        </h1>

        {/* Body */}
        <p
          className="text-14px leading-[1.65] sm:leading-[1.7] md:leading-[1.82] mb-8 sm:mb-10 md:mb-16"
          style={{ color: "#0A0A0A", maxWidth: "920px" }}
        >
          For Villgro's Green Building Materials (GBM) event, we developed reports, decks, and
          event collaterals that helped innovators, investors, and policymakers come together to
          push sustainable construction forward. Clear design turned complex ideas into actionable
          conversations and sector-wide alignment.
        </p>

        
       
      </div>
    </div>
  );
}

function LogoCard({ children }) {
  return (
    <div
      className="bg-white border border-black/[0.07] rounded-[4px] px-2.5 sm:px-3 md:px-[14px] py-1.5 sm:py-1.5 md:py-2 flex items-center justify-center w-auto min-w-[80px] md:min-w-[120px] min-h-[40px] md:min-h-[48px]"
      style={{
        boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
      }}
    >
      {children}
    </div>
  );
}