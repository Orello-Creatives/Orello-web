import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import case1 from '../assets/images/case1.png'
import case2 from '../assets/images/case2.png'
import case3 from '../assets/images/case3.png'
import case4 from '../assets/images/case4.png'
import case5 from '../assets/images/case5.png'
import case6 from '../assets/images/case6.png'
import case7 from '../assets/images/case7.png'
import case8 from '../assets/images/case8.png'
import case9 from '../assets/images/case9.png'
import case10 from '../assets/images/case10.png'
import case11 from '../assets/images/case11.png'
import case12 from '../assets/images/case12.png'
import case13 from '../assets/images/case13.png'
import case14 from '../assets/images/case14.png'
import hr1 from '../assets/images/hr1.png'
import hr2 from '../assets/images/hr2.png'
import hr3 from '../assets/images/hr3.png'
import hr4 from '../assets/images/hr4.png'
import hr5 from '../assets/images/hr5.png'
import hr6 from '../assets/images/hr6.png'
import hr7 from '../assets/images/hr7.png'
import hr8 from '../assets/images/hr8.png'
import hr9 from '../assets/images/hr9.png'
import hr11 from '../assets/images/hr11.png'
import hr12 from '../assets/images/hr12.png'
import hr13 from '../assets/images/hr13.png'
import hr14 from '../assets/images/hr14.png'
import starr from '../assets/logos/starr.svg'
import togglee from '../assets/logos/togglee.svg'
import penn from '../assets/logos/penn.svg'

export default function PortfolioGrid() {
  const [hoveredId, setHoveredId] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);
  const imageRefs = useRef({});
  const customCursorRef = useRef(null);

  // Replace these placeholder images with your actual project images
  const projects = [
    {
      id: 1,
      title: "GBM Report ",
      tags: ["Climate tech", "Sustainability", "Construction"],
      defaultImage: case1,
      hoverImage: hr1,
      iconColor: "emerald",
      logos: [penn]
    },
    {
      id: 2,
      title: "FindTheirCare",
      tags: ["UK Care", "Healthcare"],
      defaultImage: case2,
      hoverImage: hr2,
      iconColor: "purple",
      logos: [starr, togglee, penn]
    },
    {
      id: 3,
      title: "EO Exploration",
      tags: ["Events", "Social Organisations"],
      defaultImage: case3,
      hoverImage: hr3,
      iconColor: "purple",
      logos: [starr, togglee, penn]
    },
    {
      id: 4,
      title: "Coldeasy",
      tags: ["Sustainability", "Coldstorage", "Impact"],
      defaultImage: case4,
      hoverImage: hr4,
      iconColor: "purple",
      logos: [starr, togglee, penn]
    },
    {
      id: 5,
      title: "Villgro",
      tags: ["Climate tech", "Sustainability", "Impact"],
      defaultImage: case5,
      hoverImage: hr5,
      iconColor: "emerald",
      logos: [penn]
    },
    {
      id: 6,
      title: "Ocean",
      tags: ["Construction", "Sustainability"],
      defaultImage: case6,
      hoverImage: hr6,
      iconColor: "teal",
      logos: [togglee]
    },
    {
      id: 7,
      title: "Canvase",
      tags: ["Climate tech", "Sustainability", "Construction"],
      defaultImage: case7,
      hoverImage: hr7,
      iconColor: "purple",
      logos: [starr, togglee, penn]
    },
    {
      id: 8,
      title: "Aarkiva",
      tags: ["Realestate"],
      defaultImage: case8,
      hoverImage: hr8,
      iconColor: "purple",
      logos: [starr, togglee, penn]
    },
    {
      id: 9,
      title: "Gangpur Silage",
      tags: ["climate tech", "Sustainability", "Diary", "Agriculture"],
      defaultImage: case9,
      hoverImage:hr9,
      iconColor: "purple",
      logos: [starr, penn]
    },
    {
      id: 10,
      title: "G3",
      tags: ["Events"],
      defaultImage: case10,
      hoverImage: case10,
      iconColor: "purple",
      logos: [starr, togglee, penn]
    },
    {
      id: 11,
      title: "Scalepoint",
      tags: ["climate tech", "Sustainability", "Construction"],
      defaultImage: case11,
      hoverImage: hr11,
      iconColor: "purple",
      logos: [starr, togglee, penn]
    },
    {
      id: 12,
      title: "Letsyogwithshai",
      tags: ["Healthcare", "Lifestyle"],
      defaultImage: case12,
      hoverImage: hr12,
      iconColor: "teal",
      logos: [togglee]
    },
    {
      id: 13,
      title: "Yaykwa",
      tags: ["Climate tech", "Sustainability", "Construction"],
      defaultImage: case13,
      hoverImage: hr13,
      iconColor: "purple",
      logos: [starr, togglee, penn]
    },
    {
      id: 14,
      title: "TMT",
      tags: ["Climate tech", "Sustainability", "Construction"],
      defaultImage:case14,
      hoverImage: hr14,
      iconColor: "teal",
      logos: [penn, togglee]
    }
  ];

  const iconColorMap = {
    emerald: 'bg-emerald-400',
    purple: 'bg-purple-400',
    teal: 'bg-teal-400'
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
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
    
    const defaultImg = imageRefs.current[`default-${projectId}`];
    const hoverImg = imageRefs.current[`hover-${projectId}`];

    if (defaultImg && hoverImg) {
      // Animate default image out
      gsap.to(defaultImg, {
        opacity: 0,
        scale: 1.05,
        duration: 0.6,
        ease: "power2.inOut"
      });

      // Animate hover image in
      gsap.fromTo(hoverImg, 
        {
          opacity: 0,
          scale: 1.1
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power2.inOut"
        }
      );
    }

    // Animate custom cursor in
    if (customCursorRef.current) {
      gsap.fromTo(customCursorRef.current,
        {
          scale: 0,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "back.out(1.7)"
        }
      );
    }
  };

  const handleMouseLeave = (projectId) => {
    setHoveredId(null);
    setShowCursor(false);
    
    const defaultImg = imageRefs.current[`default-${projectId}`];
    const hoverImg = imageRefs.current[`hover-${projectId}`];

    if (defaultImg && hoverImg) {
      // Animate hover image out
      gsap.to(hoverImg, {
        opacity: 0,
        scale: 1.05,
        duration: 0.6,
        ease: "power2.inOut"
      });

      // Animate default image in
      gsap.fromTo(defaultImg,
        {
          opacity: 0,
          scale: 1.1
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power2.inOut"
        }
      );
    }

    // Animate custom cursor out
    if (customCursorRef.current) {
      gsap.to(customCursorRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in"
      });
    }
  };

  return (
    <div className="bg-[#F4EDE2] py-16 sm:py-20">
      {/* Custom Cursor */}
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
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200">
          <span className="text-xs font-semibold text-gray-800 uppercase">our work</span>
        </div>
      </div>

      <div className="container">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden transition-shadow duration-300 cursor-none"
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={() => handleMouseLeave(project.id)}
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden rounded-[24px]">
                {/* Default Image */}
                <img
                  ref={(el) => (imageRefs.current[`default-${project.id}`] = el)}
                  src={project.defaultImage}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ opacity: 1 }}
                />
                
                {/* Hover Image */}
                <img
                  ref={(el) => (imageRefs.current[`hover-${project.id}`] = el)}
                  src={project.hoverImage}
                  alt={`${project.title} hover`}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ opacity: 0 }}
                />
              </div>

              {/* Content Section */}
              <div className="pt-2 pb-6 bg-[#F4EDE2]">
                {/* Title, Logo Circles, and Action Button */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold text-[#4B433B]">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-3">
                    {/* Logo Circles */}
                    <div className="flex gap-4 shrink-0">
                      {project.logos.map((logo, index) => (
                       
                          <img 
                            key={index}
                            src={logo} 
                            alt="logo" 
                            className="w-full h-full object-contain"
                          />
                       
                      ))}
                    </div>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="w-full h-px bg-black mb-4"></div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block text-sm text-gray-700  px-3 py-1.5 rounded-full whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}