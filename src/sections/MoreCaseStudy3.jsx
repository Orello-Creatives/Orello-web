import React, { useState, useRef, useEffect } from 'react';
import case7  from '../assets/images/case7.png';
import hr7    from '../assets/images/hr7.png';
import case8  from '../assets/images/case8.png';
import hr8    from '../assets/images/hr8.png';
import starr   from '../assets/logos/starr.svg';
import togglee from '../assets/logos/togglee.svg';
import penn    from '../assets/logos/penn.svg';
import Readyto from '../components/Readyto.jsx';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const projects = [
  {
    id: 7,
    title: "Canvase",
    tags: ["Fashion", "Lifestyle", "Sustainability"],
    logos: [starr, togglee, penn],
    defaultImage: case7,
    hoverImage: hr7,
    link: "/canvase-casestudy",
  },
  {
    id: 8,
    title: "Aarkiva",
    tags: ["Real-estate"],
    logos: [starr, togglee, penn],
    defaultImage: case8,
    hoverImage: hr8,
    link: "/aarkiva-casestudy",
  },
];

// ─── Animated Arrow Button (liquid fill animation) ────────────────────────────
const AnimatedButton = ({ to, label, className, bgColor, textColor, arrowBgColor }) => {
  const buttonRef      = useRef(null);
  const textRef        = useRef(null);
  const circleRightRef = useRef(null);
  const circleLeftRef  = useRef(null);

  useEffect(() => {
    const button      = buttonRef.current;
    const text        = textRef.current;
    const circleRight = circleRightRef.current;
    const circleLeft  = circleLeftRef.current;
    if (!button) return;

    const handleMouseEnter = () => {
      gsap.to(text,        { x: 40, duration: 0.4, ease: 'power2.inOut' });
      gsap.to(circleRight, { scale: 0, duration: 0.4, ease: 'power2.inOut' });
      gsap.to(circleLeft,  { scale: 1, duration: 0.4, ease: 'power2.inOut' });
    };

    const handleMouseLeave = () => {
      gsap.to(text,        { x: 0, duration: 0.4, ease: 'power2.inOut' });
      gsap.to(circleRight, { scale: 1, duration: 0.4, ease: 'power2.inOut' });
      gsap.to(circleLeft,  { scale: 0, duration: 0.4, ease: 'power2.inOut' });
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const resolvedArrowBg = arrowBgColor || '#111827';

  return (
    <Link to={to}>
      <button
        ref={buttonRef}
        className={`relative overflow-hidden cursor-pointer py-2 sm:py-2.5 md:py-3 rounded-full font-bold w-full sm:w-auto ${className}`}
        style={{ backgroundColor: bgColor, color: textColor, willChange: 'transform', display: 'block' }}
      >
        {/* Label */}
        <span
          ref={textRef}
          className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 text-sm md:text-base font-semibold z-[2]"
        >
          {label}
        </span>

        {/* Arrow circle — right (default) */}
        <span
          ref={circleRightRef}
          className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white rounded-full flex items-center justify-center z-[2]"
          style={{ backgroundColor: resolvedArrowBg }}
        >
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>

        {/* Arrow circle — left (hover) */}
        <span
          ref={circleLeftRef}
          className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white rounded-full flex items-center justify-center scale-0 z-[2]"
          style={{ backgroundColor: resolvedArrowBg }}
        >
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>

        {/* Invisible spacer to lock button width */}
        <span className="opacity-0 px-8 md:px-10 text-sm md:text-base">{label}</span>
      </button>
    </Link>
  );
};

export default function MoreCasestudy3() {
  const [showCursor, setShowCursor] = useState(false);
  const imageRefs       = useRef({});
  const customCursorRef = useRef(null);

  useEffect(() => {
    function onMove(e) {
      if (customCursorRef.current && showCursor)
        gsap.to(customCursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.3, ease: "power2.out" });
    }
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [showCursor]);

  function onEnter(id) {
    setShowCursor(true);
    const def = imageRefs.current[`d-${id}`];
    const hov = imageRefs.current[`h-${id}`];
    if (def && hov) {
      gsap.to(def, { opacity: 0, scale: 1.05, duration: 0.6, ease: "power2.inOut" });
      gsap.fromTo(hov, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 0.6, ease: "power2.inOut" });
    }
    if (customCursorRef.current)
      gsap.fromTo(customCursorRef.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" });
  }

  function onLeave(id) {
    setShowCursor(false);
    const def = imageRefs.current[`d-${id}`];
    const hov = imageRefs.current[`h-${id}`];
    if (def && hov) {
      gsap.to(hov, { opacity: 0, scale: 1.05, duration: 0.6, ease: "power2.inOut" });
      gsap.fromTo(def, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 0.6, ease: "power2.inOut" });
    }
    if (customCursorRef.current)
      gsap.to(customCursorRef.current, { scale: 0, opacity: 0, duration: 0.2, ease: "power2.in" });
  }

  return (
    <div className="bg-[#F4EDE2] py-16 sm:py-20">

      {/* Custom cursor */}
      <div ref={customCursorRef} className="fixed pointer-events-none z-50"
        style={{ left: 0, top: 0, transform: "translate(-50%,-50%)", opacity: 0, display: showCursor ? "block" : "none" }}>
        <div className="w-20 h-20 bg-[#FF7B62] rounded-full flex items-center justify-center shadow-lg ">
          <span className="text-xs font-semibold text-white uppercase">our work</span>
        </div>
      </div>

      <div className="container">

        {/* Heading Section */}
        <div className="flex items-end ">
          <div className="mb-6 sm:mb-10 lg:mb-16">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl text-[#402E1D] font-light mb-1">More</h2>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#402E1D]">Case Studies</h2>
          </div>

          {/* ── Animated "See all work" button ── */}
          <div className="ml-4 mb-6 sm:mb-10 lg:mb-16">
            <AnimatedButton
              to="/casestudy-overview"
              label="See all work"
              bgColor="#F0A500"
              textColor="#2C1F14"
              arrowBgColor="#2C1F14"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const card = (
              <div className="group relative overflow-hidden transition-shadow duration-300">
                <div
                  className="relative h-64 sm:h-72 lg:h-80 overflow-hidden rounded-[24px] cursor-none"
                  onMouseEnter={() => onEnter(project.id)}
                  onMouseLeave={() => onLeave(project.id)}
                >
                  <img ref={(el) => (imageRefs.current[`d-${project.id}`] = el)}
                    src={project.defaultImage} alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 1 }} />
                  <img ref={(el) => (imageRefs.current[`h-${project.id}`] = el)}
                    src={project.hoverImage} alt={`${project.title} hover`}
                    className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0 }} />
                </div>

                <div className="pt-2 pb-6 bg-[#F4EDE2]">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <h3 className="text-xl font-bold text-[#4B433B]">{project.title}</h3>
                    <div className="flex gap-4 shrink-0">
                      {project.logos.map((logo, i) => (
                        <img key={i} src={logo} alt="logo" className="w-full h-full object-contain" />
                      ))}
                    </div>
                  </div>
                  <div className="w-full h-px bg-black mb-4" />
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} style={{
                        display: "inline-block", fontSize: "14px", padding: "6px 12px",
                        borderRadius: "999px", whiteSpace: "nowrap",
                        background: "transparent", color: "#374151", fontWeight: "400",
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            );

            return project.link
              ? <Link key={project.id} to={project.link}>{card}</Link>
              : <div key={project.id}>{card}</div>;
          })}
        </div>
      </div>

      <Readyto />
    </div>
  );
}