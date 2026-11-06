import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router';
import starr   from '../assets/logos/starr.svg';
import togglee from '../assets/logos/togglee.svg';
import penn    from '../assets/logos/penn.svg';
import tryy from '../assets/logos/tryy.svg'
import Readyto from '../components/Readyto.jsx'
import { useCaseStudies } from '../hooks/useCaseStudies'

// Service logo SVGs stay local; case studies reference them by key
const LOGO_BY_KEY = { starr, togglee, penn, motion: tryy, videography: tryy };

// Maps a CMS case study to the local card shape; cards without a
// default image are skipped so the grid never shows empty tiles.
function toCard(doc) {
  if (!doc.cardDefaultImage) return null;
  return {
    id: `cms-${doc._id}`,
    title: doc.title,
    tags: doc.industries || [],
    logos: (doc.serviceKeys || []).map((k) => LOGO_BY_KEY[k]).filter(Boolean),
    logoKeys: doc.serviceKeys || [],
    defaultImage: doc.cardDefaultImage,
    hoverImage: doc.cardHoverImage || doc.cardDefaultImage,
    link: `/case-study/${doc.slug}`,
  };
}

function getFiltered(selIndustries, selServices, allProjects) {
  if (selIndustries.length === 0 && selServices.length === 0) return allProjects;
  return allProjects.filter((p) => {
    const indOk = selIndustries.length === 0 ||
      selIndustries.some((ind) => p.tags.some((t) => t.toLowerCase() === ind.toLowerCase()));
    const svcOk = selServices.length === 0 ||
      selServices.some((s) => p.logoKeys.includes(s));
    return indOk && svcOk;
  });
}

function isVideo(src) {
  if (!src) return false;
  if (typeof src === 'string') {
    return /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(src);
  }
  return /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(String(src));
}

function MediaElement({ src, alt, elRef, style, className }) {
  if (isVideo(src)) {
    return (
      <video
        ref={elRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className={className}
        style={style}
      />
    );
  }
  return (
    <img
      ref={elRef}
      src={src}
      alt={alt}
      className={className}
      style={style}
    />
  );
}

export default function PortfolioGrid({ selIndustries, selServices, gridRef }) {
  const industries  = Array.isArray(selIndustries) ? selIndustries : [];
  const services    = Array.isArray(selServices)   ? selServices   : [];
  const isFiltering = industries.length > 0 || services.length > 0;
  const allCaseStudies = useCaseStudies();
  const allProjects = allCaseStudies.map(toCard).filter(Boolean);
  const projects    = getFiltered(industries, services, allProjects);

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
    <div ref={gridRef} className="bg-[#F4EDE2] py-10 sm:py-16 lg:py-20">

      {/* Custom cursor - hidden on touch devices */}
      <div
        ref={customCursorRef}
        className="fixed pointer-events-none z-50 hidden md:block"
style={{ left: 0, top: 0, transform: "translate(-50%,-50%)", opacity: 0 }}
      >
        <div className="w-20 h-20 bg-[#FF7B62] rounded-full flex items-center justify-center shadow-lg">
          <span className="text-xs font-semibold text-white uppercase">our work</span>
        </div>
      </div>

      <div className="container px-3 sm:px-4">
        {projects.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 0", color: "#4b433b", fontSize: "18px", fontWeight: "500" }}>
            {isFiltering ? "No projects found for the selected filters." : "No case studies to display yet."}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project) => {
            const card = (
              <div className="group relative overflow-hidden transition-shadow duration-300">
                {/* Image container with responsive heights */}
                <div
                  className="relative overflow-hidden rounded-xl sm:rounded-[24px] cursor-none
                    h-[200px] sm:h-[260px] md:h-[320px] lg:h-[350px]"
                  onMouseEnter={() => onEnter(project.id)}
                  onMouseLeave={() => onLeave(project.id)}
                >
                  {/* Default media */}
                  <MediaElement
                    src={project.defaultImage}
                    alt={project.title}
                    elRef={(el) => (imageRefs.current[`d-${project.id}`] = el)}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ opacity: 1 }}
                  />
                  {/* Hover media */}
                  <MediaElement
                    src={project.hoverImage}
                    alt={`${project.title} hover`}
                    elRef={(el) => (imageRefs.current[`h-${project.id}`] = el)}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ opacity: 0 }}
                  />
                </div>

                {/* Card info */}
                <div className="pt-2 pb-4 sm:pb-6 bg-[#F4EDE2]">
                  <div className="flex items-center justify-between gap-4 mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-[#4B433B]">
                      {project.title}
                    </h3>
                    <div className="flex gap-3 sm:gap-4 shrink-0">
                      {project.logos.map((logo, i) => (
                        <img
                          key={i}
                          src={logo}
                          alt="logo"
                          className="h-5 sm:h-6 w-auto object-contain"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="w-full h-px bg-black mb-3 sm:mb-4" />
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => {
                      const active = isFiltering && industries.some(
                        (f) => f.toLowerCase() === tag.toLowerCase()
                      );
                      return (
                        <span
                          key={i}
                          style={{
                            display: "inline-block",
                            fontSize: "13px",
                            padding: "5px 10px",
                            borderRadius: "999px",
                            whiteSpace: "nowrap",
                            background: active ? "#F7AF19" : "transparent",
                            color:      active ? "#1a1a1a" : "#374151",
                            fontWeight: active ? "600"     : "400",
                          }}
                        >
                          {tag}
                        </span>
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

      <Readyto />
    </div>
  );
}