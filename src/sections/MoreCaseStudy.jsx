import React, { useState } from 'react';
import gbm from '../assets/images/gbm1.png';
import findtheircare from '../assets/images/findtheircare.png';
import pen from '../assets/logos/pen.svg';
import star from '../assets/logos/star.svg';
import toggle from '../assets/logos/toggle.svg';
import Readyto from '../components/Readyto';

const PenIcon = () => <img src={pen} alt="Pen Icon" className="w-full h-full" />;
const StarIcon = () => <img src={star} alt="Star Icon" className="w-full h-full" />;
const ToggleIcon = () => <img src={toggle} alt="Toggle Icon" className="w-full h-full" />;

const projects = [
  {
    id: 1,
    title: "GBM Report",
    tags: ["Climate tech", "Sustainability", "Construction"],
    image: gbm,
    icons: [
      { Component: PenIcon, bg: "bg-emerald-100", color: "text-emerald-700" }
    ]
  },
  {
    id: 2,
    title: "FindTheirCare",
    tags: ["UK Care", "Healthcare"],
    image: findtheircare,
    icons: [
      { Component: StarIcon, bg: "bg-purple-100", color: "text-purple-600" },
      { Component: ToggleIcon, bg: "bg-teal-100", color: "text-teal-600" },
      { Component: PenIcon, bg: "bg-emerald-100", color: "text-emerald-700" },
    ]
  }
];

const CaseStudiesSection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="bg-[#f5f0e8] py-16 sm:py-20 md:py-24 overflow-hidden font-sans">
      <div className="container mx-auto px-5 sm:px-6 md:px-10 max-w-5xl">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8 sm:mb-10 md:mb-12">
          <div>
            <p className="text-gray-800 text-2xl sm:text-3xl md:text-4xl font-light leading-tight">More</p>
            <p className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">Case Studies</p>
          </div>
          <button className="ml-2 bg-[#FFB721] text-black font-semibold text-sm px-5 py-2 rounded-full hover:bg-amber-400 transition-colors duration-200 whitespace-nowrap">
            See all work
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-14">
          {projects.map((project) => {
            const isHovered = hoveredId === project.id;

            return (
              <div
                key={project.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image card */}
                <div className="overflow-hidden rounded-2xl sm:rounded-3xl aspect-[4/3] mb-4 bg-white relative shadow-sm">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-opacity `}
                  />
                </div>

                {/* Title + Icons row */}
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">{project.title}</h4>
                  <div className="flex gap-1.5">
                    {project.icons.map((icon, i) => {
                      const { Component, bg, color } = icon;
                      return (
                        <span
                          key={i}
                          className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full ${bg} ${color} p-1.5`}
                        >
                          <Component />
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Tags row */}
                <div className="flex flex-wrap gap-3 sm:gap-5 border-t border-gray-300 pt-2.5">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-gray-500 text-xs sm:text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

       <Readyto />
      </div>
    </section>
  );
};

export default CaseStudiesSection;