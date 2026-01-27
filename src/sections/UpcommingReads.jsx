import React from 'react';
import blog1 from '../assets/images/blog1.png'
import blog2 from '../assets/images/blog2.png'
import blog3 from '../assets/images/blog3.png'
export default function UpcomingReads() {
  const blogCards = [
    {
      id: 1,
      image: blog1,
      title: 'Why Logos are for Screenshots, not Billboard'
    },
    {
      id: 2,
      image: blog2,
      title: 'Why Logos are for Screenshots, not Billboard'
    },
    {
      id: 3,
      image: blog3,
      title: 'Why Logos are for Screenshots, not Billboard'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4EDE2] font-sans py-12 sm:py-16 lg:py-20">
      <div className="container">
        {/* Section Title */}
        <h1 className="font-bold text-[#402E1D] mb-8 sm:mb-12 lg:mb-16">
          Upcoming reads
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {blogCards.map((card) => (
            <div 
              key={card.id}
              className="group cursor-pointer transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Card Container */}
              <div className="overflow-hidden duration-300">
                {/* Image Container */}
                <div className={`${card.bgColor} aspect-[4/3] relative overflow-hidden`}>
                  <img 
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card Content */}
                <div className="py-2 sm:py-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#402E1D] mb-4 leading-tight">
                    {card.title}
                  </h3>
                  
                  {/* Read More Link */}
                  <a 
                    href="#"
                    className="inline-flex items-center gap-2 text-[#D98127] hover:text-[#A0522D] font-medium text-sm sm:text-base transition-colors duration-200"
                  >
                    Read more
                    <svg 
                      className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17 8l4 4m0 0l-4 4m4-4H3" 
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}