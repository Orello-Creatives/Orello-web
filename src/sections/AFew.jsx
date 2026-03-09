import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import orellobig from '../assets/logos/orellobig.svg'
import pen from '../assets/logos/pen.svg'
import toggle from '../assets/logos/toggle.svg'
import star from '../assets/logos/star.svg'
import gbm from '../assets/images/gbm.png'
import gbm1 from '../assets/images/gbm1.png'
import findtheircare from '../assets/images/findtheircare.png'
import row1logo1 from '../assets/logos/row1logo1.svg'
import row1logo2 from '../assets/logos/row1logo2.svg'
import row1logo3 from '../assets/logos/row1logo3.svg'
import row1logo4 from '../assets/logos/row1logo4.svg'
import row1logo5 from '../assets/logos/row1logo5.svg'
import row2logo1 from '../assets/logos/row2logo1.svg'
import row2logo2 from '../assets/logos/row2logo2.svg'
import row2logo3 from '../assets/logos/row2logo3.svg'
import row2logo4 from '../assets/logos/row2logo4.svg'
import row2logo5 from '../assets/logos/row2logo5.svg'
import row3logo1 from '../assets/logos/row3logo1.svg'
import row3logo2 from '../assets/logos/row3logo2.svg'
import row3logo3 from '../assets/logos/row3logo3.svg'
import row3logo4 from '../assets/logos/row3logo4.svg'
import row3logo5 from '../assets/logos/row3logo5.svg'
import row4logo1 from '../assets/logos/row4logo1.svg'
import row4logo2 from '../assets/logos/row4logo2.svg'
import row4logo3 from '../assets/logos/row4logo3.svg'
import row4logo4 from '../assets/logos/row4logo4.svg'
import row4logo5 from '../assets/logos/row4logo5.svg'
import row5logo1 from '../assets/logos/row5logo1.svg'
import row5logo2 from '../assets/logos/row5logo2.svg'
import row5logo3 from '../assets/logos/row5logo3.svg'
import row5logo4 from '../assets/logos/row5logo4.svg'
import row5logo5 from '../assets/logos/row5logo5.svg'
import { Link } from 'react-router'


gsap.registerPlugin(ScrollTrigger);

const AFewSelected = () => {
  const sectionRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);
  const row4Ref = useRef(null);
  const row5Ref = useRef(null);

  const [hoveredId, setHoveredId] = useState(null);
  const [showCursor, setShowCursor] = useState(false);
  const customCursorRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "GBM Report",
      tags: ["Climate tech", "Sustainability", "Construction"],
      image: gbm,
      icons: [pen, pen, pen],
      link: "/gbm-casestudy"
    },
    {
      id: 2,
      title: "FindTheirCare",
      tags: ["UK Care", "Healthcare"],
      image: findtheircare,
      icons: [star, toggle, pen],
      link: "/findtheircare-casestudy"
    },
    {
      id: 3,
      title: "GBM Report",
      tags: ["Climate tech", "Sustainability", "Construction"],
      image: gbm1,
      icons: [pen, pen, pen],
      link: "/gbm-casestudy"
    }
  ];

  // Logo data with actual imported logos - duplicated to fill the space
  const logoRows = [
    [row1logo1, row1logo2, row1logo3, row1logo4, row1logo5, row1logo1, row1logo2, row1logo3, row1logo4, row1logo5, row1logo1, row1logo2, row1logo3, row1logo4, row1logo5, row1logo1],
    [row2logo1, row2logo2, row2logo3, row2logo4, row2logo5, row2logo1, row2logo2, row2logo3, row2logo4, row2logo5, row2logo1, row2logo2, row2logo3, row2logo4, row2logo5, row2logo1],
    [row3logo1, row3logo2, row3logo3, row3logo4, row3logo5, row3logo1, row3logo2, row3logo3, row3logo4, row3logo5, row3logo1, row3logo2, row3logo3, row3logo4, row3logo5, row3logo1],
    [row4logo1, row4logo2, row4logo3, row4logo4, row4logo5, row4logo1, row4logo2, row4logo3, row4logo4, row4logo5, row4logo1, row4logo2, row4logo3, row4logo4, row4logo5, row4logo1],
    [row5logo1, row5logo2, row5logo3, row5logo4, row5logo5, row5logo1, row5logo2, row5logo3, row5logo4, row5logo5, row5logo1, row5logo2, row5logo3, row5logo4, row5logo5, row5logo1],
  ];

  // Track mouse position for custom cursor
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
        scale: 0,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in"
      });
    }
  };

  useEffect(() => {
    const rows = [row1Ref, row2Ref, row3Ref, row4Ref, row5Ref];

    rows.forEach((rowRef, index) => {
      if (rowRef.current) {
        const direction = index % 2 === 0 ? -1 : 1;
        
        const isMobile = window.innerWidth < 768;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
        const moveAmount = direction * (isMobile ? 200 : isTablet ? 300 : 400);

        gsap.to(rowRef.current, {
          x: moveAmount,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2,
            invalidateOnRefresh: true,
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const rowRefs = [row1Ref, row2Ref, row3Ref, row4Ref, row5Ref];

  return (
    <section ref={sectionRef} className="relative z-20 bg-[#0e1010] text-white py-16 sm:py-18 md:py-24 overflow-hidden">

      {/* Custom Cursor Bubble */}
      <div
        ref={customCursorRef}
        className="fixed pointer-events-none z-50"
        style={{
          left: 0,
          top: 0,
          transform: 'translate(-50%, -50%)',
          opacity: 0,
          display: showCursor ? 'block' : 'none'
        }}
      >
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
          style={{ backgroundColor: '#FF7B62' }}
        >
          <span className="text-xs font-semibold text-white uppercase">our work</span>
        </div>
      </div>
      
      {/* Background Large Logo/Shape Decor */}
      <div className="absolute inset-0 pointer-events-none flex items-start justify-center">
        <img 
          src={orellobig} 
          alt="Orello Logo Background" 
          className="opacity-100 w-full h-auto object-contain"
        />
      </div>

      <div className="relative z-10 container px-4 sm:px-5 md:px-6 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-light mb-3 sm:mb-4 md:mb-6 text-2xl sm:text-3xl md:text-5xl">
            A few Selected <span className="font-semibold">Work</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto paragraph leading-relaxed px-2 sm:px-4 text-sm sm:text-base">
            Orello is a purpose-driven global design partner that helps impact-oriented 
            organizations communicate with clarity, empathy, and intention.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-15">
          {projects.map((project, index) => (
            <div key={index}>
              <Link to={project.link}>
                <div
                  className="overflow-hidden rounded-2xl cursor-none sm:rounded-3xl aspect-[4/3] mb-3 sm:mb-4 bg-white"
                  onMouseEnter={() => handleMouseEnter(project.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-sm sm:text-base">{project.title}</h4>
                <div className="flex gap-1.5 sm:gap-1.8">
                  {project.icons.map((icon, i) => (
                    <span key={i} className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8">
                      <img src={icon} alt="icon" className="w-3 h-3 sm:w-8 sm:h-8" />
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-4 border-t border-white pt-2 sm:pt-3">
                {project.tags.map((tag, i) => (
                  <span key={i} className="paragraph text-[#ffce69] text-xs sm:text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AFewSelected;