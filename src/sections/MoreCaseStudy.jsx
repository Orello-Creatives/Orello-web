import React, { useState } from 'react';
import gbm from '../assets/images/gbm1.png';
import findtheircare from '../assets/images/findtheircare.png';
import pen from '../assets/logos/pen.svg';
import star from '../assets/logos/star.svg';
import toggle from '../assets/logos/toggle.svg';

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

        {/* CTA Banner */}
        <div className="bg-[#FFB721] container mx-auto px-6 sm:px-8 md:px-10 lg:px-14 rounded-3xl py-8 sm:py-12 md:py-16 relative overflow-hidden mt-24">

          {/* Background Circles */}
          <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-0 overflow-hidden">
            <div className="absolute w-[140vw] h-[130vw] bg-[#FFB721] left-1/2" style={{ borderRadius: "50%", bottom: "-75vw", transform: "translateX(-50%)" }} />
            <div className="absolute w-[115vw] h-[105vw] bg-[#FFC855] left-1/2" style={{ borderRadius: "50%", bottom: "-65vw", transform: "translateX(-50%)" }} />
            <div className="absolute w-[90vw] h-[85vw] bg-[#FFB721] left-1/2" style={{ borderRadius: "50%", bottom: "-55vw", transform: "translateX(-50%)" }} />
            <div className="absolute w-[65vw] h-[65vw] bg-[#FFC855] left-1/2" style={{ borderRadius: "50%", bottom: "-45vw", transform: "translateX(-50%)" }} />
            <div className="absolute w-[40vw] h-[40vw] bg-[#FFB721] left-1/2" style={{ borderRadius: "50%", bottom: "-35vw", transform: "translateX(-50%)" }} />
          </div>

          {/* CTA Text + Buttons */}
          <div className="relative z-10 md:ml-12 lg:ml-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 md:mb-4">
              Ready to make <span className="font-bold">a bigger</span>
              <br />
              <span className="font-bold">impact</span> with your work?
            </h2>

            <p className="text-sm sm:text-base font-semibold mb-6 md:mb-8 max-w-3xl">
              Join organizations we work with to build clear identities, strong
              digital platforms, and communication that actually converts.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              {/* Button 1 */}
              <button className="hover:bg-amber-200 relative overflow-hidden cursor-pointer bg-white text-black py-3 md:py-4 rounded-full font-semibold group w-full sm:w-auto">
                <span className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 transition-transform duration-400 ease-in-out sm:group-hover:translate-x-[40px] text-sm md:text-base">
                  Talk to us
                </span>
                <span className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 bg-gray-900 text-white rounded-full flex items-center justify-center transition-transform duration-400 ease-in-out sm:group-hover:scale-0">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <span className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 bg-gray-900 text-white rounded-full flex items-center justify-center scale-0 transition-transform duration-400 ease-in-out sm:group-hover:scale-100">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <span className="opacity-0 px-8 md:px-10 text-sm md:text-base">Talk to us</span>
              </button>

              {/* Button 2 */}
              <button className="relative hover:bg-amber-200 overflow-hidden cursor-pointer bg-white text-black py-3 md:py-4 rounded-full font-semibold group w-full sm:w-auto">
                <span className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 transition-transform duration-400 ease-in-out sm:group-hover:translate-x-[50px] text-sm md:text-base">
                  Know more about us
                </span>
                <span className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 bg-black text-white rounded-full flex items-center justify-center transition-transform duration-400 ease-in-out sm:group-hover:scale-0">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <span className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 bg-black text-white rounded-full flex items-center justify-center scale-0 transition-transform duration-400 ease-in-out sm:group-hover:scale-100">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <span className="opacity-0 px-10 md:px-12 text-sm md:text-base">Know more about us</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudiesSection;