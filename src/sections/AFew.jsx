import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import pen from '../assets/logos/pen.svg'
import star from '../assets/logos/star.svg'
import toggle from '../assets/logos/toggle.svg'
import gbm from '../assets/images/gbm.png'
import case7 from '../assets/images/case7.png'
import findtheircare from '../assets/images/findtheircare.png'
import hr7 from '../assets/images/hr7.png'
import hr5 from '../assets/images/hr5.png'
import hr2 from '../assets/images/hr2.png'
import smile from '../assets/logos/smile.svg'
import { Link } from 'react-router-dom'

// ─── Reusable Animated Button ─────────────────────────────────────────────────
const AnimatedButton = ({ to, label, className, bgColor, arrowBgColor }) => {
  const buttonRef = useRef(null);
  const textRef = useRef(null);
  const circleRightRef = useRef(null);
  const circleLeftRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const text = textRef.current;
    const circleRight = circleRightRef.current;
    const circleLeft = circleLeftRef.current;

    if (!button) return;

    const handleMouseEnter = () => {
      gsap.to(text, { x: 40, duration: 0.4, ease: 'power2.inOut' });
      gsap.to(circleRight, { scale: 0, duration: 0.4, ease: 'power2.inOut' });
      gsap.to(circleLeft, { scale: 1, duration: 0.4, ease: 'power2.inOut' });
    };

    const handleMouseLeave = () => {
      gsap.to(text, { x: 0, duration: 0.4, ease: 'power2.inOut' });
      gsap.to(circleRight, { scale: 1, duration: 0.4, ease: 'power2.inOut' });
      gsap.to(circleLeft, { scale: 0, duration: 0.4, ease: 'power2.inOut' });
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
        className={`relative overflow-hidden cursor-pointer rounded-full font-bold w-full sm:w-auto ${className}`}
        style={{ backgroundColor: bgColor, willChange: 'transform', display: 'block' }}
      >
        {/* Text */}
        <span
          ref={textRef}
          className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 text-sm md:text-base font-bold z-[2]"
        >
          {label}
        </span>

        {/* Circle right (initial) */}
        <span
          ref={circleRightRef}
          className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 text-white rounded-full flex items-center justify-center z-[2]"
          style={{ backgroundColor: resolvedArrowBg }}
        >
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>

        {/* Circle left (hover) */}
        <span
          ref={circleLeftRef}
          className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 text-white rounded-full flex items-center justify-center scale-0 z-[2]"
          style={{ backgroundColor: resolvedArrowBg }}
        >
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>

        {/* Spacer to lock width */}
        <span className="opacity-0 px-8 md:px-10 text-sm md:text-base">{label}</span>
      </button>
    </Link>
  );
};

// ─── Portfolio Header + Cards Section ────────────────────────────────────────
const PortfolioSection = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [showCursor, setShowCursor] = useState(false);
  const customCursorRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "GBM Report",
      tags: ["Climate tech", "Sustainability", "Construction"],
      image: gbm,
      hoverLogo: hr5,
      icons: [pen],
      link: "/casestudy-overview"
    },
    {
      id: 2,
      title: "FindTheirCare",
      tags: ["UK Care", "Healthcare"],
      image: findtheircare,
      hoverLogo: hr2,
      icons: [star, toggle, pen],
      link: "/casestudy-overview"
    },
    {
      id: 3,
      title: "Canvasé",
      tags: ["Climate tech", "Sustainability", "Construction"],
      image: case7,
      hoverLogo: hr7,
      icons: [star, toggle, pen],
      link: "/casestudy-overview"
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (customCursorRef.current && showCursor) {
        gsap.to(customCursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    if (showCursor) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [showCursor]);

  const handleMouseEnter = (projectId) => {
    setHoveredId(projectId);
    setShowCursor(true);
    if (customCursorRef.current) {
      gsap.fromTo(customCursorRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" }
      );
    }
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
    setShowCursor(false);
    if (customCursorRef.current) {
      gsap.to(customCursorRef.current, {
        scale: 0, opacity: 0, duration: 0.2, ease: "power2.in"
      });
    }
  };

  return (
    <div className="bg-black py-24">

      {/* Custom Cursor Bubble */}
      <div
        ref={customCursorRef}
        className="fixed pointer-events-none z-50"
        style={{ left: 0, top: 0, transform: 'translate(-50%, -50%)', opacity: 0, display: showCursor ? 'block' : 'none' }}
      >
        <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#FF7B62' }}>
          <span className="text-xs font-semibold text-white uppercase">our work</span>
        </div>
      </div>

      {/* Container wrapping everything */}
      <div className="container mx-auto px-4 sm:px-5 md:px-6 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-white font-light mb-3 sm:mb-4 md:mb-6 text-2xl sm:text-3xl md:text-5xl">
            A few Selected <span className="font-semibold">Work</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto paragraph leading-relaxed px-2 sm:px-4 text-sm sm:text-base">
            Orello is a purpose-driven global design partner that helps impact-oriented
            organizations communicate with clarity, empathy, and intention.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-16">

          {/* Project Cards */}
          {projects.map((project, index) => (
            <div key={index} className="group">
              <Link to={project.link}>
                <div
                  className="overflow-hidden rounded-2xl cursor-none sm:rounded-3xl aspect-[4/3] mb-3 sm:mb-4 bg-white relative"
                  onMouseEnter={() => handleMouseEnter(project.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={hoveredId === project.id ? project.hoverLogo : project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                </div>
              </Link>
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-white font-bold text-sm sm:text-base">{project.title}</h4>
                <div className="flex gap-1.5 sm:gap-2">
                  {project.icons.map((icon, i) => (
                    <span key={i} className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8">
                      <img src={icon} alt="icon" className="w-6 h-6 sm:w-8 sm:h-8" />
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-4 border-t border-white pt-2 sm:pt-3">
                {project.tags.map((tag, i) => (
                  <span key={i} className="paragraph text-[#ffce69] text-xs sm:text-sm">{tag}</span>
                ))}
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="bg-[#1a1a1a] rounded-2xl sm:rounded-3xl aspect-[4/3] flex flex-col justify-center px-5 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 relative overflow-hidden">
            <h3 className="text-white font-bold mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl flex items-end">
              Like what <br /> you see?
              <img src={smile} className="w-8 mr-2" alt="smile" />
            </h3>
            <p className="text-white paragraph mb-4 sm:mb-6 md:mb-8 max-w-xs sm:max-w-sm md:max-w-md text-sm sm:text-base">
              Orello is a purpose-driven global design partner that helps impact-oriented organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4">
              <AnimatedButton
                to="/contact"
                label="Lets Talk"
                bgColor="#f7af19"
                arrowBgColor="#111827"
                className="text-black py-2 sm:py-2.5 md:py-3"
              />
              <AnimatedButton
                to="/casestudy-overview"
                label="See all work"
                bgColor="white"
                arrowBgColor="#111827"
                className="text-black py-2 sm:py-2.5 md:py-3"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;