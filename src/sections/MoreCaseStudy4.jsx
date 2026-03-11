import React, { useState, useRef, useEffect } from 'react';
import case9  from '../assets/images/case9.png';
import hr9    from '../assets/images/hr9.png';
import case10 from '../assets/images/case10.png';
import starr   from '../assets/logos/starr.svg';
import togglee from '../assets/logos/togglee.svg';
import penn    from '../assets/logos/penn.svg';
import Readyto from '../components/Readyto.jsx';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const projects = [
  {
    id: 9,
    title: "Gangpur Silage",
    tags: ["Climate Tech", "Sustainability", "Dairy", "Agritech"],
    logos: [starr, penn],
    defaultImage: case9,
    hoverImage: hr9,
    link: "/gangpur-casestudy",
  },
  {
    id: 10,
    title: "G3",
    tags: ["Events"],
    logos: [starr, togglee, penn],
    defaultImage: case10,
    hoverImage: case10,
    link: "/g3-casestudy",
  },
];

export default function MoreCasestudy4() {
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