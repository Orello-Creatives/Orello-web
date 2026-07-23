import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import starr from '../assets/logos/starr.svg';
import togglee from '../assets/logos/togglee.svg';
import penn from '../assets/logos/penn.svg';
import tryy from '../assets/logos/tryy.svg';
import { useCmsContent } from '../hooks/useCmsContent';
import { CASE_STUDIES } from '../data/caseStudies';

// Service logo SVGs stay local; case studies reference them by key
const LOGO_BY_KEY = { starr, togglee, penn, motion: tryy };

// Map a CMS case study to the card shape (cards without a default image are
// skipped so the grid never shows empty tiles).
const toCard = (doc) => {
  if (!doc.cardDefaultImage) return null;
  return {
    id: `cms-${doc._id}`,
    slug: doc.slug,
    title: doc.title,
    tags: doc.industries || [],
    logos: (doc.serviceKeys || []).map((k) => LOGO_BY_KEY[k]).filter(Boolean),
    defaultImage: doc.cardDefaultImage,
    hoverImage: doc.cardHoverImage || doc.cardDefaultImage,
    link: `/case-study/${doc.slug}`,
  };
};

// Local fallback until CMS data arrives, mirroring the other sections.
const FALLBACK = CASE_STUDIES.map((cs) => ({
  id: `local-${cs.slug}`,
  slug: cs.slug,
  title: cs.title,
  tags: cs.industries || [],
  logos: (cs.serviceKeys || []).map((k) => LOGO_BY_KEY[k]).filter(Boolean),
  defaultImage: cs.card?.defaultImage,
  hoverImage: cs.card?.hoverImage || cs.card?.defaultImage,
  link: `/case-study/${cs.slug}`,
}));

// "More Case Studies" — shows a few OTHER case studies at the bottom of a
// case-study page (CMS-first, excludes the current slug). Restores the old
// per-page MoreCaseStudy sections as one data-driven block.
export default function MoreCaseStudies({ currentSlug }) {
  const [showCursor, setShowCursor] = useState(false);
  const imageRefs = useRef({});
  const cursorRef = useRef(null);

  const cmsDocs = useCmsContent('/case-studies', null);
  const all = cmsDocs ? cmsDocs.map(toCard).filter(Boolean) : FALLBACK;
  const projects = all.filter((p) => p.slug !== currentSlug).slice(0, 3);

  useEffect(() => {
    const onMove = (e) => {
      if (cursorRef.current && showCursor)
        gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.3, ease: 'power2.out' });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [showCursor]);

  if (projects.length === 0) return null;

  const onEnter = (id) => {
    setShowCursor(true);
    const def = imageRefs.current[`d-${id}`];
    const hov = imageRefs.current[`h-${id}`];
    if (def && hov) {
      gsap.to(def, { opacity: 0, scale: 1.05, duration: 0.6, ease: 'power2.inOut' });
      gsap.fromTo(hov, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.inOut' });
    }
    if (cursorRef.current)
      gsap.fromTo(cursorRef.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });
  };

  const onLeave = (id) => {
    setShowCursor(false);
    const def = imageRefs.current[`d-${id}`];
    const hov = imageRefs.current[`h-${id}`];
    if (def && hov) {
      gsap.to(hov, { opacity: 0, scale: 1.05, duration: 0.6, ease: 'power2.inOut' });
      gsap.fromTo(def, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.inOut' });
    }
    if (cursorRef.current)
      gsap.to(cursorRef.current, { scale: 0, opacity: 0, duration: 0.2, ease: 'power2.in' });
  };

  return (
    <div className="bg-[#F4EDE2] pt-16 sm:pt-20">
      {/* Custom cursor — hidden on touch devices */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-50 hidden md:block"
        style={{ left: 0, top: 0, transform: 'translate(-50%,-50%)', opacity: 0 }}
      >
        <div className="w-20 h-20 bg-[#FF7B62] rounded-full flex items-center justify-center shadow-lg">
          <span className="text-xs font-semibold text-white uppercase">our work</span>
        </div>
      </div>

      <div className="container">
        <div className="flex items-end justify-between gap-4 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl text-[#402E1D] font-light leading-tight">
            More<br />
            <span className="font-bold">Case Studies</span>
          </h2>
          <Link
            to="/casestudy-overview"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f7af19] text-[#0A0A0A] text-sm font-semibold hover:bg-[#d98127] transition-colors duration-200"
          >
            See all work
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project) => (
            <Link to={project.link} key={project.id} className="group">
              <div
                className="relative overflow-hidden rounded-xl sm:rounded-[24px] cursor-none aspect-[4/3] mb-3 sm:mb-4"
                onMouseEnter={() => onEnter(project.id)}
                onMouseLeave={() => onLeave(project.id)}
              >
                <img
                  ref={(el) => (imageRefs.current[`d-${project.id}`] = el)}
                  src={project.defaultImage}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ opacity: 1 }}
                />
                <img
                  ref={(el) => (imageRefs.current[`h-${project.id}`] = el)}
                  src={project.hoverImage}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ opacity: 0 }}
                />
              </div>

              <div className="pb-2">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-[#4B433B]">{project.title}</h3>
                  <div className="flex gap-3 shrink-0">
                    {project.logos.map((logo, i) => (
                      <img key={i} src={logo} alt="" className="h-5 sm:h-6 w-auto object-contain" />
                    ))}
                  </div>
                </div>
                <div className="w-full h-px bg-black mb-3" />
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[13px] px-2.5 py-1 rounded-full text-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
