import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { SERVICES } from './CaseStudyOverview';

import case1  from '../assets/images/case1.png';
import case2  from '../assets/images/case2.png';
import case3  from '../assets/images/case3.png';
import case4  from '../assets/images/case4.png';
import case5  from '../assets/images/case5.png';
import case6  from '../assets/images/case6.png';
import case7  from '../assets/images/case7.png';
import case8  from '../assets/images/case8.png';
import case9  from '../assets/images/case9.png';
import case10 from '../assets/images/case10.png';
import case11 from '../assets/images/case11.png';
import case12 from '../assets/images/case12.png';
import case13 from '../assets/images/case13.png';
import case14 from '../assets/images/case14.png';
import hr2  from '../assets/images/hr2.png';
import hr3  from '../assets/images/hr3.png';
import hr4  from '../assets/images/hr4.png';
import hr5  from '../assets/images/hr5.png';
import hr6  from '../assets/images/hr6.png';
import hr7  from '../assets/images/hr7.png';
import hr8  from '../assets/images/hr8.png';
import hr9  from '../assets/images/hr9.png';
import hr11 from '../assets/images/hr11.png';
import hr12 from '../assets/images/hr12.png';
import hr13 from '../assets/images/hr13.png';
import hr14 from '../assets/images/hr14.png';
import starr   from '../assets/logos/starr.svg';
import togglee from '../assets/logos/togglee.svg';
import penn    from '../assets/logos/penn.svg';

// Tags must match INDUSTRIES in CaseStudyOverview exactly (case-insensitive compare)
// logoKeys must match SERVICES[*].logoKey in CaseStudyOverview exactly
const ALL_PROJECTS = [
  {
    id: 1,  title: "GBM Report",
    tags: ["Climate Tech", "Sustainability", "Construction"],
    logoKeys: ["penn"],
    logos: [penn],
    defaultImage: case1,  hoverImage: hr5,
    link: "/gbm-casestudy",
  },
  {
    id: 2,  title: "FindTheirCare",
    tags: ["Health"],
    logoKeys: ["starr", "togglee", "penn"],
    logos: [starr, togglee, penn],
    defaultImage: case2,  hoverImage: hr2,
    link: "/findtheircare-casestudy",
  },
  {
    id: 3,  title: "EO Exploration",
    tags: ["Events", "Social Organisation"],
    logoKeys: ["starr", "togglee", "penn"],
    logos: [starr, togglee, penn],
    defaultImage: case3,  hoverImage: hr3,
    link: "/exp-casestudy",
  },
  {
    id: 4,  title: "Coldeasy",
    tags: ["Sustainability", "Construction", "Climate Tech"],
    logoKeys: ["starr", "togglee", "penn"],
    logos: [starr, togglee, penn],
    defaultImage: case4,  hoverImage: hr4,
    link: "/coldeasy-casestudy",
  },
  {
    id: 5,  title: "Villgro",
    tags: ["Climate Tech", "Sustainability"],
    logoKeys: ["penn"],
    logos: [penn],
    defaultImage: case5,  hoverImage: hr5,
    link: "/villgro-casestudy",
  },
  {
    id: 6,  title: "Ocean",
    tags: ["Construction", "Sustainability"],
    logoKeys: ["togglee"],
    logos: [togglee],
    defaultImage: case6,  hoverImage: hr6,
    link: "/ocean-casestudy",
  },
  {
    id: 7,  title: "Canvase",
    tags: ["Climate Tech", "Sustainability", "Construction"],
    logoKeys: ["starr", "togglee", "penn"],
    logos: [starr, togglee, penn],
    defaultImage: case7,  hoverImage: hr7,
    link: "/canvase-casestudy",
  },
  {
    id: 8,  title: "Aarkiva",
    tags: ["Real-estate"],
    logoKeys: ["starr", "togglee", "penn"],
    logos: [starr, togglee, penn],
    defaultImage: case8,  hoverImage: hr8,
    link: "/aarkiva-casestudy",
  },
  {
    id: 9,  title: "Gangpur Silage",
    tags: ["Climate Tech", "Sustainability", "Dairy", "Agritech"],
    logoKeys: ["starr", "penn"],
    logos: [starr, penn],
    defaultImage: case9,  hoverImage: hr9,
    link: "/gangpur-casestudy",
  },
  {
    id: 10, title: "G3",
    tags: ["Events"],
    logoKeys: ["starr", "togglee", "penn"],
    logos: [starr, togglee, penn],
    defaultImage: case10, hoverImage: case10,
    link: "/g3-casestudy",
  },
  {
    id: 11, title: "Scalepoint",
    tags: ["Climate Tech", "Sustainability", "Construction"],
    logoKeys: ["starr", "togglee", "penn"],
    logos: [starr, togglee, penn],
    defaultImage: case11, hoverImage: hr11,
    link: "/scalepoint-casestudy",
  },
  {
    id: 12, title: "Letsyogwithshai",
    tags: ["Health", "Lifestyle"],
    logoKeys: ["togglee"],
    logos: [togglee],
    defaultImage: case12, hoverImage: hr12,
    link: "/yog-casestudy",
  },
  {
    id: 13, title: "Yaykwa",
    tags: ["Climate Tech", "Sustainability", "Construction"],
    logoKeys: ["starr", "togglee", "penn"],
    logos: [starr, togglee, penn],
    defaultImage: case13, hoverImage: hr13,
    link: "/yaykwa-casestudy",
  },
  {
    id: 14, title: "TMT",
    tags: ["Climate Tech", "Sustainability", "Construction"],
    logoKeys: ["penn", "togglee"],
    logos: [penn, togglee],
    defaultImage: case14, hoverImage: hr14,
    link: "/tmt-casestudy",
  },
];

function getFiltered(selIndustries, selServices) {
  if (selIndustries.length === 0 && selServices.length === 0) return ALL_PROJECTS;
  return ALL_PROJECTS.filter((p) => {
    const indOk = selIndustries.length === 0 ||
      selIndustries.some((ind) => p.tags.some((t) => t.toLowerCase() === ind.toLowerCase()));
    const svcOk = selServices.length === 0 ||
      selServices.some((s) => p.logoKeys.includes(s));
    return indOk && svcOk;
  });
}

export default function PortfolioGrid({ selIndustries, selServices, gridRef }) {
  // Always derive fresh — no local copy, no stale state
  const industries = Array.isArray(selIndustries) ? selIndustries : [];
  const services   = Array.isArray(selServices)   ? selServices   : [];
  const isFiltering = industries.length > 0 || services.length > 0;
  const projects    = getFiltered(industries, services);

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
    <div ref={gridRef} className="bg-[#F4EDE2] py-16 sm:py-20">

      {/* Custom cursor */}
      <div ref={customCursorRef} className="fixed pointer-events-none z-50"
        style={{ left: 0, top: 0, transform: "translate(-50%,-50%)", opacity: 0, display: showCursor ? "block" : "none" }}>
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200">
          <span className="text-xs font-semibold text-gray-800 uppercase">our work</span>
        </div>
      </div>

      <div className="container">
        {isFiltering && projects.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 0", color: "#4b433b", fontSize: "18px", fontWeight: "500" }}>
            No projects found for the selected filters.
          </div>
        )}

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
                    {project.tags.map((tag, i) => {
                      const active = isFiltering && industries.some(
                        (f) => f.toLowerCase() === tag.toLowerCase()
                      );
                      return (
                        <span key={i} style={{
                          display: "inline-block", fontSize: "14px", padding: "6px 12px",
                          borderRadius: "999px", whiteSpace: "nowrap",
                          background: active ? "#F7AF19" : "transparent",
                          color:      active ? "#1a1a1a" : "#374151",
                          fontWeight: active ? "600"     : "400",
                        }}>{tag}</span>
                      );
                    })}
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

      {/* CTA Banner */}
      <div className="bg-[#FFB721] container mx-auto px-6 sm:px-8 md:px-10 lg:px-14 rounded-3xl py-8 sm:py-12 md:py-16 relative overflow-hidden mt-24">
        <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-0 overflow-hidden">
          {[
            { w: "140vw", h: "130vw", bg: "#FFB721", b: "-75vw" },
            { w: "115vw", h: "105vw", bg: "#FFC855", b: "-65vw" },
            { w: "90vw",  h: "85vw",  bg: "#FFB721", b: "-55vw" },
            { w: "65vw",  h: "65vw",  bg: "#FFC855", b: "-45vw" },
            { w: "40vw",  h: "40vw",  bg: "#FFB721", b: "-35vw" },
          ].map((c, i) => (
            <div key={i} className="absolute left-1/2"
              style={{ width: c.w, height: c.h, background: c.bg, borderRadius: "50%", bottom: c.b, transform: "translateX(-50%)" }} />
          ))}
        </div>
        <div className="relative z-10 md:ml-12 lg:ml-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 md:mb-4">
            Ready to make <span className="font-bold">a bigger</span><br />
            <span className="font-bold">impact</span> with your work?
          </h2>
          <p className="text-sm sm:text-base font-semibold mb-6 md:mb-8 max-w-3xl">
            Join organizations we work with to build clear identities, strong digital platforms,
            and communication that actually converts.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Link to="/contact" className="hover:bg-amber-200 relative overflow-hidden cursor-pointer bg-white text-black py-3 md:py-4 rounded-full font-semibold group w-full sm:w-auto">
              <span className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 transition-transform duration-400 ease-in-out sm:group-hover:translate-x-[40px] text-sm md:text-base">Talk to us</span>
              <span className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 bg-gray-900 text-white rounded-full flex items-center justify-center transition-transform duration-400 ease-in-out sm:group-hover:scale-0">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 bg-gray-900 text-white rounded-full flex items-center justify-center scale-0 transition-transform duration-400 ease-in-out sm:group-hover:scale-100">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span className="opacity-0 px-8 md:px-10 text-sm md:text-base">Talk to us</span>
            </Link>
            <Link to="/about" className="relative hover:bg-amber-200 overflow-hidden cursor-pointer bg-white text-black py-3 md:py-4 rounded-full font-semibold group w-full sm:w-auto">
              <span className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 transition-transform duration-400 ease-in-out sm:group-hover:translate-x-[50px] text-sm md:text-base">Know more about us</span>
              <span className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 bg-black text-white rounded-full flex items-center justify-center transition-transform duration-400 ease-in-out sm:group-hover:scale-0">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 bg-black text-white rounded-full flex items-center justify-center scale-0 transition-transform duration-400 ease-in-out sm:group-hover:scale-100">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span className="opacity-0 px-10 md:px-12 text-sm md:text-base">Know more about us</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}