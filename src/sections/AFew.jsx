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
<div className="bg-[#FFB721] container mx-auto px-6 sm:px-8 md:px-10 lg:px-14 rounded-3xl py-8 sm:py-12 md:py-16 relative overflow-hidden mt-24">

  {/* Background Circles */}
  <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-0 overflow-hidden">
    <div
      className="absolute w-[140vw] h-[130vw] bg-[#FFB721] left-1/2"
      style={{
        borderRadius: "50%",
        bottom: "-75vw",
        transform: "translateX(-50%)",
      }}
    />
    <div
      className="absolute w-[115vw] h-[105vw] bg-[#FFC855] left-1/2"
      style={{
        borderRadius: "50%",
        bottom: "-65vw",
        transform: "translateX(-50%)",
      }}
    />
    <div
      className="absolute w-[90vw] h-[85vw] bg-[#FFB721] left-1/2"
      style={{
        borderRadius: "50%",
        bottom: "-55vw",
        transform: "translateX(-50%)",
      }}
    />
    <div
      className="absolute w-[65vw] h-[65vw] bg-[#FFC855] left-1/2"
      style={{
        borderRadius: "50%",
        bottom: "-45vw",
        transform: "translateX(-50%)",
      }}
    />
    <div
      className="absolute w-[40vw] h-[40vw] bg-[#FFB721] left-1/2"
      style={{
        borderRadius: "50%",
        bottom: "-35vw",
        transform: "translateX(-50%)",
      }}
    />
  </div>

  {/* CTA Text + Buttons */}
  <div className="relative z-10 md:ml-12 lg:ml-24">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-semibold mb-3 md:mb-4">
      Ready to make <span className="font-bold">a bigger</span>
      <br />
      <span className="font-bold">impact</span> with your work?
    </h2>

    <p className="text-sm sm:text-base font-semibold text-black mb-6 md:mb-8 max-w-3xl">
      Join organizations we work with to build clear identities, strong
      digital platforms, and communication that actually converts.
    </p>

    <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
      {/* BUTTON 1 */}
      <button className="hover:bg-amber-200 relative overflow-hidden cursor-pointer bg-white text-black py-3 md:py-4 rounded-full font-semibold group w-full sm:w-auto">
        <span className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 transition-transform duration-400 ease-in-out sm:group-hover:translate-x-[40px] text-sm md:text-base">
          Talk to us
        </span>

        <span className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 bg-gray-900 text-white rounded-full flex items-center justify-center transition-transform duration-400 ease-in-out sm:group-hover:scale-0">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>

        <span className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 bg-gray-900 text-white rounded-full flex items-center justify-center scale-0 transition-transform duration-400 ease-in-out sm:group-hover:scale-100">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>

        <span className="opacity-0 px-8 md:px-10 text-sm md:text-base">Talk to us</span>
      </button>

      {/* BUTTON 2 */}
      <button className="relative hover:bg-amber-200 overflow-hidden cursor-pointer bg-white text-black py-3 md:py-4 rounded-full font-semibold group w-full sm:w-auto">
        <span className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 transition-transform duration-400 ease-in-out sm:group-hover:translate-x-[50px] text-sm md:text-base">
          Know more about us
        </span>

        <span className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 bg-black text-white rounded-full flex items-center justify-center transition-transform duration-400 ease-in-out sm:group-hover:scale-0">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>

        <span className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 bg-black text-white rounded-full flex items-center justify-center scale-0 transition-transform duration-400 ease-in-out sm:group-hover:scale-100">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>

        <span className="opacity-0 px-10 md:px-12 text-sm md:text-base">
          Know more about us
        </span>
      </button>
    </div>
  </div>
</div>
    </section>
  );
};

export default AFewSelected;