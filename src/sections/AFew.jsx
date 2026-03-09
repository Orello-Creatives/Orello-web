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
const AnimatedButton = ({ to, label, className }) => {
  const wrapperRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const btn = btnRef.current;

    const handleMouseMove = (e) => {
      const rect = wrapper.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * 0.5;
      const dy = (e.clientY - cy) * 0.5;
      gsap.to(btn, { x: dx, y: dy, duration: 0.4, ease: 'power2.out' });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1.1, 0.4)' });
    };

    wrapper.addEventListener('mousemove', handleMouseMove);
    wrapper.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      wrapper.removeEventListener('mousemove', handleMouseMove);
      wrapper.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={wrapperRef} style={{ display: 'inline-block', padding: '16px', margin: '-16px' }}>
      <Link to={to}>
        <button
          ref={btnRef}
          className={className}
          style={{ willChange: 'transform', display: 'block' }}
        >
          {label}
        </button>
      </Link>
    </div>
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
                      <img src={icon} alt="icon" className="w-3 h-3 sm:w-8 sm:h-8" />
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
                className="bg-[#f7af19] cursor-pointer text-black font-bold py-2 px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6 rounded-full text-xs sm:text-sm transition w-full sm:w-auto"
              />
              <AnimatedButton
                to="/casestudy-overview"
                label="See all work"
                className="bg-white cursor-pointer text-black font-bold py-2 px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6 rounded-full text-xs sm:text-sm hover:bg-zinc-200 transition w-full sm:w-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;