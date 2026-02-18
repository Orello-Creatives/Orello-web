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

    // Wait for layout to settle before measuring
    const initBanner = () => {
      const totalWidth = banner.scrollWidth / 4; // divided by 4 because we repeat x4

      gsap.killTweensOf(banner);
      gsap.set(banner, { x: 0 });

      gsap.to(banner, {
        x: -totalWidth,
        duration: 20,
        ease: 'none',
        repeat: -1
      });
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initBanner, 100);
    return () => clearTimeout(timer);
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
      <div className="bg-[#FDF6E9] py-10 sm:py-14 lg:py-24 px-4 sm:px-6 lg:px-4 rounded-t-[40px] sm:rounded-t-[60px] lg:rounded-t-[100px] w-full overflow-x-hidden">

        {/* ── Why We Are Trusted ── */}
        <div className="container mx-auto mb-10 sm:mb-14 lg:mb-20">
          <div className="mb-6 sm:mb-10 lg:mb-16">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl text-[#402E1D] font-light mb-1">Why</h2>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-[#402E1D]">We are trusted</h2>
          </div>

          {/* Desktop / Tablet (md+) Layout */}
          <div
            ref={containerRef}
            onMouseLeave={handleContainerMouseLeave}
            className="hidden md:flex gap-3 lg:gap-6 h-60 sm:h-68 lg:h-80 justify-center"
          >
            {cards.map((card, index) => (
              <div
                key={card.id}
                ref={el => cardRefs.current[index] = el}
                onMouseEnter={() => handleMouseEnter(index)}
                className={`rounded-2xl lg:rounded-3xl p-4 lg:p-6 cursor-pointer shadow-lg hover:shadow-2xl relative overflow-hidden flex-1 flex flex-col transition-colors duration-300 ${
                  hoveredCard === index
                    ? card.color
                    : card.featured && hoveredCard === null
                    ? card.color
                    : 'bg-white'
                }`}
                style={{ minWidth: '120px' }}
              >
                <div className="mb-2 lg:mb-4">
                  <span className={`text-base lg:text-xl font-bold transition-colors duration-300 ${
                    hoveredCard === index
                      ? card.numberColorHover
                      : card.featured && hoveredCard === null
                      ? card.numberColorHover
                      : card.numberColor
                  }`}>
                    {card.number}
                  </span>
                </div>

                {/* Logo — visible on hover or featured */}
                <div className={`absolute bottom-5 lg:bottom-8 right-4 lg:right-8 transition-opacity duration-300 pointer-events-none ${
                  hoveredCard === index
                    ? 'opacity-100'
                    : card.featured && hoveredCard === null
                    ? 'opacity-100'
                    : 'opacity-0'
                }`}>
                  <img src={card.logo} alt={card.title} className="w-16 h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 object-contain" />
                </div>

                {/* Text content — visible on hover or featured */}
                <div className={`flex-1 transition-opacity duration-300 pointer-events-none ${
                  hoveredCard === index
                    ? 'opacity-100'
                    : card.featured && hoveredCard === null
                    ? 'opacity-100'
                    : 'opacity-0'
                }`}>
                  <h4 className="font-bold text-gray-900 mb-1 lg:mb-3 text-xs md:text-sm lg:text-base">{card.title}</h4>
                  <p className="text-xs lg:text-sm text-gray-900 leading-relaxed">{card.description}</p>
                </div>

                {/* Arrow button */}
                <div className={`absolute bottom-3 lg:bottom-6 left-3 lg:left-6 w-7 h-7 lg:w-10 lg:h-10 rounded-full flex items-center justify-center transition-colors duration-300 pointer-events-none ${
                  hoveredCard === index
                    ? 'bg-black'
                    : card.featured
                    ? 'bg-gray-900'
                    : card.iconBg
                }`}>
                  <svg
                    width="12"
                    height="12"
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

          {/* Mobile Layout (< md) — 2-column grid */}
          <div className="md:hidden grid grid-cols-2 gap-3 sm:gap-4">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`rounded-2xl p-4 shadow-md relative overflow-hidden ${card.color}`}
                style={{ minHeight: '180px' }}
              >
                <span className={`text-base font-bold ${card.numberColorHover}`}>
                  {card.number}
                </span>

                {/* Logo */}
                <div className="absolute bottom-4 right-3">
                  <img src={card.logo} alt={card.title} className="w-14 h-14 object-contain" />
                </div>

                {/* Text */}
                <div className="mt-2 mb-10 pr-14">
                  <h4 className="font-bold text-gray-900 mb-1 text-xs leading-tight">{card.title}</h4>
                  <p className="text-[11px] text-gray-900 leading-relaxed">{card.description}</p>
                </div>

                {/* Arrow button */}
                <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-black flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Who We Work With ── */}
        <div className="container mx-auto mb-8 sm:mb-12 lg:mb-16">
          <div className="mb-6 sm:mb-10 lg:mb-12 flex flex-col sm:flex-row items-start sm:items-end gap-3 sm:gap-6 lg:gap-10">
            <div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl text-[#402E1D] font-light mb-1">Who</h2>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-[#402E1D]">We Work with</h2>
            </div>
            <Link to="/careers">
              <button className="bg-black text-white px-5 py-2 cursor-pointer rounded-full font-medium transition-colors text-sm sm:text-base">
                Join Us
              </button>
            </Link>
          </div>
        </div>

        {/* ── Infinite Scrolling Banner ── */}
        <div className="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] bg-[#FFC855] py-3 sm:py-4 lg:py-6 overflow-hidden mb-10 sm:mb-14 lg:mb-20">
          <div
            ref={bannerRef}
            className="flex items-center whitespace-nowrap"
          >
            {[...industries, ...industries, ...industries, ...industries].map(
              (industry, index) => (
                <span
                  key={index}
                  className="inline-flex items-center mr-6 sm:mr-10 lg:mr-16 text-sm sm:text-base lg:text-lg font-medium text-gray-900 leading-none"
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full mr-2 sm:mr-3 lg:mr-4 block flex-shrink-0"></span>
                  {industry}
                </span>
              )
            )}
          </div>
        </div>

        {/* ── Bottom Cards ── */}
        <div className="container mx-auto">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {workWithCards.map((card, index) => (
              <div
                key={index}
                className="bg-[#F4EDE2] rounded-xl sm:rounded-2xl px-5 sm:px-6 lg:px-8 pb-10 sm:pb-12 lg:pb-16 pt-7 sm:pt-9 lg:pt-12 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-yellow-400 rounded-full flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 p-2">
                  <img src={card.icon} alt={card.title} className="w-6 sm:w-7 lg:w-9 object-contain" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base lg:text-lg">{card.title}</h4>
                <p className="text-xs sm:text-sm text-black leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TrustSection;