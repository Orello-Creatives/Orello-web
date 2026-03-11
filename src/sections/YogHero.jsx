import { useRef } from "react";
import yaykwa1 from '../assets/logos/yaykwa1.svg';

export default function CaseStudySection() {
  const containerRef = useRef(null);

  const arcs = [
    { w: "140vw", h: "130vw", bg: "#e8ddd0", bottom: "-70vw" },
    { w: "120vw", h: "110vw", bg: "#faf5eb", bottom: "-60vw" },
    { w: "95vw",  h: "85vw",  bg: "#e8ddd0", bottom: "-50vw" },
    { w: "70vw",  h: "65vw",  bg: "#faf5eb", bottom: "-40vw" },
    { w: "45vw",  h: "45vw",  bg: "#e8ddd0", bottom: "-30vw" },
    { w: "25vw",  h: "25vw",  bg: "#faf5eb", bottom: "-20vw" },
    { w: "12vw",  h: "12vw",  bg: "#e8ddd0", bottom: "-12vw" },
    { w: "6vw",   h: "6vw",   bg: "#faf5eb", bottom: "-6vw"  },
  ];

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden lg:min-h-screen flex flex-col justify-center py-6 sm:py-8 md:py-12 lg:py-14"
      style={{ backgroundColor: "#faf5eb", paddingTop: "clamp(150px, 8vw, 600px)" }}
    >
      {/* Semicircle Arcs */}
      <div className="hidden lg:flex absolute inset-0 items-end justify-center pointer-events-none overflow-hidden">
        {arcs.map((arc, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: "50%",
              width: arc.w,
              height: arc.h,
              backgroundColor: arc.bg,
              bottom: arc.bottom,
              opacity: 0.6,
              transform: "translateX(-50%)",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div
        className="relative z-10 mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-[35px]"
        style={{ maxWidth: "1400px" }}
      >
        {/* Logo Row */}
        <div className="flex gap-2 sm:gap-2.5 md:gap-3 lg:gap-5 flex-wrap mb-3 sm:mb-3 md:mb-4">
          <LogoCard>
            <img src={yaykwa1} alt="Logo 1" className="max-h-4 sm:max-h-5 md:max-h-6 lg:max-h-8 w-auto object-contain" />
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
          <strong className="font-light text-[#402E1D]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 900 }}>
            Establishing a Clear Brand and Digital Presence
          </strong>{" "}
          <span className="font-black">for a Mining Organisation</span>
        </h1>

        {/* Body */}
        <p
          className="leading-[1.6] sm:leading-[1.65] md:leading-[1.7] lg:leading-[1.82] mb-6 sm:mb-8 md:mb-10 lg:mb-16"
          style={{ fontSize: "clamp(0.9rem, 2vw, 1rem)", color: "#0A0A0A", maxWidth: "920px" }}
        >
          Yaykwa is a Kerala‑based mining company specialising in dredging, mining, and trading of minerals, with a core focus on silica. As the organisation evolved, there was a need for a clearer brand identity and a digital presence that could communicate credibility, responsibility, and operational clarity to a wide range of stakeholders. We worked closely with the Yaykwa team to support them through market research, brand identity development, and the design and development of their website and content — creating a unified brand and digital foundation aligned with their values and industry context.
        </p>
      </div>
    </div>
  );
}

function LogoCard({ children }) {
  return (
    <div
      className="bg-white border border-black/[0.07] rounded-[4px] px-2 sm:px-2.5 md:px-3 lg:px-[14px] py-1.5 sm:py-1.5 md:py-1.5 lg:py-2 flex items-center justify-center w-auto min-w-[70px] sm:min-w-[80px] md:min-w-[100px] lg:min-w-[120px] min-h-[36px] sm:min-h-[40px] md:min-h-[44px] lg:min-h-[48px]"
      style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
    >
      {children}
    </div>
  );
}