import React, { useEffect, useRef } from 'react';
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
import smile from '../assets/logos/smile.svg'

gsap.registerPlugin(ScrollTrigger);

const AFewSelected = () => {
  const sectionRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);
  const row4Ref = useRef(null);
  const row5Ref = useRef(null);

  const projects = [
    {
      id: 1,
      title: "GBM Report",
      tags: ["Climate tech", "Sustainability", "Construction"],
      image: gbm,
      hoverLogo: gbm1,
      icons: [pen, pen, pen]
    },
    {
      id: 2,
      title: "FindTheirCare",
      tags: ["UK Care", "Healthcare"],
      image: findtheircare,
      hoverLogo: null,
      icons: [star, toggle, pen]
    },
    {
      id: 3,
      title: "GBM Report",
      tags: ["Climate tech", "Sustainability", "Construction"],
      image: gbm1,
      hoverLogo: gbm1,
      icons: [pen, pen, pen]
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

  useEffect(() => {
    const rows = [row1Ref, row2Ref, row3Ref, row4Ref, row5Ref];

    rows.forEach((rowRef, index) => {
      if (rowRef.current) {
        const direction = index % 2 === 0 ? -1 : 1; // Alternate direction
        
        // Responsive movement amount
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
            scrub: 2, // Smooth scrubbing effect - same for all rows
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
    <section className="relative z-20 bg-[#0e1010] text-white py-16 sm:py-18 md:py-24 overflow-hidden">
      
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
            <div key={index} className="group">
              <div className="overflow-hidden rounded-2xl cursor-pointer sm:rounded-3xl aspect-[4/3] mb-3 sm:mb-4 bg-white relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full  object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                {/* White background appears on hover - add your logo here */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.hoverLogo && (
                    <img 
                      src={project.hoverLogo} 
                      alt={`${project.title} logo`}
                      className="max-w-[70%] max-h-[70%] object-contain"
                    />
                  )}
                </div>
              </div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-sm sm:text-base">{project.title}</h4>
                <div className="flex gap-1.5 sm:gap-1.8">
                  {project.icons.map((icon, i) => (
                    <span key={i} className=" flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8">
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

          {/* CTA Card */}
          <div className="bg-[#1a1a1a] rounded-2xl sm:rounded-3xl aspect-[4/3] flex flex-col justify-center px-5 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 relative overflow-hidden">
            <h3 className="font-bold mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl flex items-end ">
  Like what <br /> you see?
  <img src={smile} className="w-8 mr-2" />
</h3>
            <p className="text-white paragraph mb-4 sm:mb-6 md:mb-8 max-w-xs sm:max-w-sm md:max-w-md text-sm sm:text-base">
              Orello is a purpose-driven global design partner that helps impact-oriented organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4">
              <button className="bg-[#f7af19] text-black font-bold py-2 px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6 rounded-full text-xs sm:text-sm transition w-full sm:w-auto">
                Lets Talk
              </button>
              <button className="bg-white text-black font-bold py-2 px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6 rounded-full text-xs sm:text-sm hover:bg-zinc-200 transition w-full sm:w-auto">
                See all work
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for scroll */}
      <div className="py-12 sm:py-16 md:py-24"></div>

      {/* Trusted Section */}
      <section ref={sectionRef} className="pb-12 sm:pb-16 md:pb-24 px-3 sm:px-5 overflow-hidden relative z-10">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16 md:mb-25 relative z-30">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-tight px-4">
            <span className="font-semibold">Trusted</span> by leading Organisations
          </h2>
        </div>

        {/* Logo Rows */}
        <div className="space-y-8 sm:space-y-12 md:space-y-16 relative z-20">
          {logoRows.map((logos, rowIndex) => (
            <div
              key={rowIndex}
              ref={rowRefs[rowIndex]}
              className="flex gap-8 sm:gap-12 md:gap-16 items-center"
              style={{
                transform: rowIndex % 2 === 0 ? 'translateX(0)' : window.innerWidth < 768 ? 'translateX(-200px)' : window.innerWidth < 1024 ? 'translateX(-300px)' : 'translateX(-400px)'
              }}
            >
              {logos.map((logo, logoIndex) => (
                <div
                  key={logoIndex}
                  className="flex-shrink-0 w-28 h-14 sm:w-36 sm:h-16 md:w-44 md:h-20 flex items-center justify-center transition-opacity duration-300 hover:opacity-100 cursor-pointer will-change-transform"
                >
                  <img 
                    src={logo} 
                    alt={`Logo ${logoIndex + 1}`}
                    className="max-w-full max-h-full object-contain opacity-100"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default AFewSelected;