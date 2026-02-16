import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import trust1 from '../assets/logos/trust1.svg'
import trust2 from '../assets/logos/trust2.svg'
import trust3 from '../assets/logos/trust3.svg'
import trust4 from '../assets/logos/trust4.svg'
import bow from '../assets/logos/bow.svg'
import {Link} from 'react-router'

const TrustSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const cardRefs = useRef([]);
  const bannerRef = useRef(null);
  const containerRef = useRef(null);

  const cards = [
    {
      id: 1,
      number: '01',
      title: 'On-Ground Ready',
      description: 'Designs that work in the real world, multilingual, accessible, and adaptable.',
      icon: '→',
      color: 'bg-[#97D7CA]',
      iconBg: 'bg-teal-300',
      iconBgHover: 'bg-black',
      numberColor: 'text-teal-700',
      numberColorHover: 'text-black',
      logo: trust1
    },
    {
      id: 2,
      number: '02',
      title: 'Purpose & Poise',
      description: 'Visuals that do more than look good, they solve, support, and amplify impact.',
      icon: '→',
      color: 'bg-[#FF9A60]',
      iconBg: 'bg-orange-400',
      iconBgHover: 'bg-black',
      numberColor: 'text-orange-700',
      numberColorHover: 'text-black',
      logo: trust2
    },
    {
      id: 3,
      number: '03',
      title: 'In It With You',
      description: 'We work alongside your team and stay invested in getting you to your goal.',
      icon: '→',
      color: 'bg-[#FFC855]',
      iconBg: 'bg-black',
      iconBgHover: 'bg-yellow',
      numberColor: 'text-black',
      numberColorHover: 'text-black',
      featured: true,
      logo: trust3
    },
    {
      id: 4,
      number: '04',
      title: 'Strategy & Heart',
      description: 'Empathy, clarity, and alignment guide every step, from early thinking to being executed.',
      icon: '→',
      color: 'bg-[#CC98FF]',
      iconBg: 'bg-purple-400',
      iconBgHover: 'bg-black',
      numberColor: 'text-purple-700',
      numberColorHover: 'text-black',
      logo: trust4
    }
  ];

  const industries = [
    'Real estate',
    'Sustainability',
    'Fashion & Lifestyle',
    'Tourism',
    'Agritech'
  ];

  const workWithCards = [
    {
      title: 'Founders driven by impact',
      description: 'Inspire lifelong investment with positive scale, and long-term impact over just quick growth.',
      icon: bow
    },
    {
      title: 'Mission-led organisations',
      description: 'NGOs, social enterprises, and purpose-driven teams focused on meaningful outcomes.',
      icon: bow
    },
    {
      title: 'Teams working across contexts',
      description: 'Organizations navigating different audiences, cultures, and ways of working.',
      icon: bow
    },
    {
      title: 'Brands growing beyond borders',
      description: 'Teams staging identities and digital platforms for diverse and evolving audiences.',
      icon: bow
    }
  ];

  useEffect(() => {
    const banner = bannerRef.current;
    if (!banner) return;

    const totalWidth = banner.scrollWidth / 2;

    gsap.set(banner, { x: 0 });

    gsap.to(banner, {
      x: -totalWidth,
      duration: 20,
      ease: 'none',
      repeat: -1
    });
  }, []);


  useEffect(() => {
    // Only apply desktop hover effects on large screens
    if (window.innerWidth >= 1024) {
      cardRefs.current.forEach((card, index) => {
        if (card) {
          const isFeatured = index === 2;
          
          if (hoveredCard === index && !isFeatured) {
            gsap.to(card, {
              flexBasis: '450px',
              flexGrow: 0,
              flexShrink: 0,
              duration: 0.3,
              ease: 'power3.out'
            });
            cardRefs.current.forEach((otherCard, otherIndex) => {
              if (otherIndex !== index && otherCard) {
                gsap.to(otherCard, {
                  flexBasis: '200px',
                  flexGrow: 0,
                  flexShrink: 0,
                  duration: 0.3,
                  ease: 'power3.out'
                });
              }
            });
          } else if (hoveredCard !== null && hoveredCard !== 2) {
            if (index !== hoveredCard) {
              gsap.to(card, {
                flexBasis: '200px',
                flexGrow: 0,
                flexShrink: 0,
                duration: 0.5,
                ease: 'power3.out'
              });
            }
          } else {
            gsap.to(card, {
              flexBasis: isFeatured ? '450px' : '200px',
              flexGrow: 0,
              flexShrink: 0,
              duration: 0.5,
              ease: 'power3.out'
            });
          }
        }
      });
    }
  }, [hoveredCard]);

  const handleMouseEnter = (index) => {
    if (window.innerWidth >= 1024) {
      setHoveredCard(index);
    }
  };

  const handleContainerMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="relative bg-black z-20 overflow-x-hidden">
      <div className="bg-[#FDF6E9] py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-4 rounded-t-[50px] sm:rounded-t-[75px] lg:rounded-t-[100px] w-full overflow-x-hidden">
        {/* Why We are trusted Section */}
        <div className="container mb-12 sm:mb-16 lg:mb-20">
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#402E1D] font-light mb-2">Why</h2>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#402E1D]">We are trusted</h2>
          </div>

          {/* Desktop/Tablet Layout - Hidden on mobile */}
          <div 
            ref={containerRef}
            onMouseLeave={handleContainerMouseLeave}
            className="hidden md:flex gap-4 lg:gap-6 h-64 sm:h-72 lg:h-80 justify-center"
          >
            {cards.map((card, index) => (
              <div
                key={card.id}
                ref={el => cardRefs.current[index] = el}
                onMouseEnter={() => handleMouseEnter(index)}
                className={`rounded-2xl lg:rounded-3xl p-4 lg:p-6 cursor-pointer shadow-lg hover:shadow-2xl relative overflow-hidden flex-1 flex flex-col transition-colors duration-300 ${
                  hoveredCard === index ? card.color : (card.featured && hoveredCard === null ? card.color : 'bg-white')
                }`}
                style={{ minWidth: '150px' }}
              >
                <div className="mb-3 lg:mb-4">
                  <span className={`text-lg lg:text-xl font-bold transition-colors duration-300 ${
                    hoveredCard === index ? card.numberColorHover : (card.featured && hoveredCard === null ? card.numberColorHover : card.numberColor)
                  }`}>
                    {card.number}
                  </span>
                </div>
                
                {/* Logo Image - Only visible on hover or featured when no hover */}
                <div className={`absolute bottom-6 lg:bottom-8 right-6 lg:right-8 transition-opacity duration-300 pointer-events-none ${
                  hoveredCard === index ? 'opacity-100' : (card.featured && hoveredCard === null ? 'opacity-100' : 'opacity-0')
                }`}>
                  <img src={card.logo} alt={card.title} className="w-24 h-24 lg:w-32 lg:h-32 object-contain" />
                </div>

                {/* Content Section */}
                <div className={`flex-1 transition-opacity duration-300 pointer-events-none ${
                  hoveredCard === index ? 'opacity-100' : (card.featured && hoveredCard === null ? 'opacity-100' : 'opacity-0')
                }`}>
                  <h4 className="font-bold text-gray-900 mb-2 lg:mb-3 text-sm lg:text-base">{card.title}</h4>
                  <p className="text-xs lg:text-sm text-gray-900 leading-relaxed">{card.description}</p>
                </div>

                {/* Arrow Button */}
                <div
                  className={`absolute bottom-4 lg:bottom-6 left-4 lg:left-6 w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center transition-colors duration-300 pointer-events-none ${
                    hoveredCard === index
                      ? 'bg-black'
                      : card.featured
                        ? 'bg-gray-900'
                        : card.iconBg
                  }`}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`lg:w-4 lg:h-4 transition-transform duration-300 ${
                      hoveredCard === index ? 'rotate-0' : 'rotate-[-30deg]'
                    }`}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Layout - Visible only on mobile */}
          <div className="md:hidden grid grid-cols-1 gap-4">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`rounded-2xl p-6 shadow-lg relative overflow-hidden ${card.color}`}
              >
                <div className="mb-4">
                  <span className={`text-xl font-bold ${card.numberColorHover}`}>
                    {card.number}
                  </span>
                </div>
                
                {/* Logo Image - Always visible on mobile */}
                <div className="absolute bottom-6 right-6">
                  <img src={card.logo} alt={card.title} className="w-24 h-24 object-contain" />
                </div>

                {/* Content Section - Always visible on mobile */}
                <div className="flex-1 mb-12">
                  <h4 className="font-bold text-gray-900 mb-3">{card.title}</h4>
                  <p className="text-sm text-gray-900 leading-relaxed pr-20">{card.description}</p>
                </div>

                {/* Arrow Button - Always black on mobile */}
                <div className="absolute bottom-6 left-6 w-10 h-10 rounded-full bg-black flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Who We Work with Section */}
        <div className="container mb-12 sm:mb-14 lg:mb-16">
          <div className="mb-8 sm:mb-10 lg:mb-12 flex flex-col sm:flex-row items-start sm:items-end gap-4 sm:gap-6 lg:gap-10">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#402E1D] font-light mb-2">Who</h2>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#402E1D]">We Work with</h2>
            </div>
            <Link to="/careers">
              <button className="bg-black text-white px-6 py-2 cursor-pointer rounded-full font-medium  transition-colors text-sm sm:text-base">
                Join Us
              </button>
            </Link>
          </div>
        </div>

        {/* Infinite Scrolling Banner */}
        <div className="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] bg-[#FFC855] py-4 sm:py-5 lg:py-6 overflow-hidden mb-12 sm:mb-16 lg:mb-20">
          <div
            ref={bannerRef}
            className="flex items-center whitespace-nowrap"
          >
            {[...industries, ...industries, ...industries, ...industries].map(
              (industry, index) => (
                <span
                  key={index}
                  className="inline-flex items-center mr-8 sm:mr-12 lg:mr-16 text-base sm:text-lg font-medium text-gray-900 leading-none"
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full mr-3 sm:mr-4 block"></span>
                  {industry}
                </span>
              ))}
          </div>
        </div>

        {/* Bottom Cards Section */}
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {workWithCards.map((card, index) => (
              <div 
                key={index}
                className="bg-[#F4EDE2] rounded-xl sm:rounded-2xl px-6 sm:px-7 lg:px-8 pb-12 sm:pb-14 lg:pb-16 pt-8 sm:pt-10 lg:pt-12 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-15 lg:h-15 bg-yellow-400 rounded-full flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 p-2">
                  <img src={card.icon} alt={card.title} className="w-8 sm:w-9 lg:w-10 object-contain" />
                </div>

                <h4 className="font-bold text-gray-900 mb-2 sm:mb-2.5 lg:mb-3 text-base sm:text-lg">{card.title}</h4>
                <p className="text-sm text-black leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSection;