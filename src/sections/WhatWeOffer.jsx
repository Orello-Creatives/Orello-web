import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Design',
      color: 'bg-[#CC98FF]',
      description: 'We help organisations shape how they look, sound, and communicate across touchpoints.',
      tagline: 'Our focus is clarity, consistency, and making complex ideas easier to understand.',
      items: [
        'BRANDING',
        'COMMUNICATION DESIGN',
        'DESIGN SYSTEMS',
        'UI UX',
        'MOTION GRAPHICS'
      ]
    },
    {
      id: 2,
      title: 'Build',
      color: 'bg-[#83D9CA]',
      description: 'We design and develop digital platforms that are practical, usable, and built to last. From websites to content-led platforms, we focus on how things actually function in the real world.',
      tagline: '',
      items: [
        'WEB DEVELOPMENT',
        'DYNAMIC PLATFORMS',
        'CONTENT LET BUILDS',
        'UI IMPLEMENTATION',
        'PLATFORM MAINTENANCE'
      ]
    },
    {
      id: 3,
      title: 'Grow',
      color: 'bg-[#B0DD63]',
      description: 'We support digital presence and reach through thoughtful marketing and ongoing optimisation.',
      tagline: 'The goal is visibility, relevance, and steady growth.',
      items: [
        'DIGITAL MARKETING',
        'SEO AND DISCOVERABILITY',
        'CONTENT STRATEGY',
        'PPC & CAMPAIGN SUPPORT',
        'ONGOING DIGITAL PRESENCE'
      ]
    }
  ];

  return (
    <div className="bg-black py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container">
        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            What
            <br />
            We offer
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col bg-[#1A1A1A] rounded-[20px] overflow-hidden">
              {/* Rounded Top Tab */}
              <div className={`${service.color} rounded-t-[20px] px-8 py-5 flex items-center`}>
                <h2 className="text-2xl md:text-3xl font-bold text-black tracking-tight">
                  {service.title}
                </h2>
              </div>

              {/* Card Content */}
              <div className="p-8 flex-grow flex flex-col">
                {/* Description */}
                <div className="mb-8">
                  <p className="text-white text-sm md:text-base font-heading leading-relaxed mb-3">
                    {service.description}
                  </p>
                  {service.tagline && (
                    <p className="text-white text-sm md:text-base font-heding leading-relaxed">
                      {service.tagline}
                    </p>
                  )}
                </div>

                {/* Service Items */}
                <div className="space-y-0 flex-grow">
                  {service.items.map((item, index) => (
                    <div key={index} className="border-b border-[#3A3A3A] py-4">
                      <h3 className="text-white text-sm md:text-base font-semibold font-heading tracking-wide">
                        {item}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12 md:mt-16">
          <button className="bg-[#F9F5ED] text-black px-10 cursor-pointer py-4 rounded-full text-base md:text-lg font-medium hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            See our work
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;