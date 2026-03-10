import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router'
import gsap from 'gsap';

const AnimatedButton = ({ to, label, bgColor, textColor, arrowBgColor }) => {
  const buttonRef = useRef(null);
  const textRef = useRef(null);
  const circleRightRef = useRef(null);
  const circleLeftRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const text = textRef.current;
    const circleRight = circleRightRef.current;
    const circleLeft = circleLeftRef.current;

    if (!button) return;

    const handleMouseEnter = () => {
      gsap.to(button, { backgroundColor: '#FFCE69', duration: 0.3, ease: 'power2.out' });
      gsap.to(text, { x: 40, duration: 0.4, ease: 'power2.inOut' });
      gsap.to(circleRight, { scale: 0, duration: 0.4, ease: 'power2.inOut' });
      gsap.to(circleLeft, { scale: 1, duration: 0.4, ease: 'power2.inOut' });
    };

    const handleMouseLeave = () => {
      gsap.to(button, { backgroundColor: bgColor, duration: 0.3, ease: 'power2.in' });
      gsap.to(text, { x: 0, duration: 0.4, ease: 'power2.inOut' });
      gsap.to(circleRight, { scale: 1, duration: 0.4, ease: 'power2.inOut' });
      gsap.to(circleLeft, { scale: 0, duration: 0.4, ease: 'power2.inOut' });
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <Link to={to}>
      <button
        ref={buttonRef}
        className="relative overflow-hidden cursor-pointer rounded-full shadow-lg flex items-center pl-6 pr-2 py-2"
        style={{ backgroundColor: bgColor, color: textColor, willChange: 'transform' }}
      >
        {/* Circle left (hover) - hidden by default */}
        <span
          ref={circleLeftRef}
          className="absolute left-2 w-9 h-9 text-white rounded-full flex items-center justify-center"
          style={{ backgroundColor: arrowBgColor || '#111827', transform: 'scale(0)' }}
        >
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>

        {/* Text */}
        <span
          ref={textRef}
          className="text-base md:text-lg font-medium whitespace-nowrap mr-4"
        >
          {label}
        </span>

        {/* Circle right (initial) */}
        <span
          ref={circleRightRef}
          className="w-9 h-9 flex-shrink-0 text-white rounded-full flex items-center justify-center"
          style={{ backgroundColor: arrowBgColor || '#111827' }}
        >
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
    </Link>
  );
};

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
      description: 'We support digital presence and reach through thoughtful marketing and ongoing optimisation.The goal is visibility, relevance, and steady growth.',
      tagline: '',
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
            What
            <br /><span className="font-semibold">
            We offer
            </span>
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
          <AnimatedButton
            to="/casestudy-overview"
            label="See our work"
            bgColor="#F9F5ED"
            textColor="black"
            arrowBgColor="#111827"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;