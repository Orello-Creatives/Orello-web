import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import orello from '../assets/logos/orello.svg'
import orelloclip from '../assets/logos/orelloclip.svg'
import instagram from '../assets/logos/instagram.svg'
import linkedin from '../assets/logos/linkedin.svg'
import locatio from '../assets/logos/locatio.svg'
import mailid from '../assets/logos/mailid.svg'

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
  gsap.to(button, { backgroundColor: '#f7af19', duration: 0.3, ease: 'power2.out' });
  gsap.to(text, { color: '#000000', x: 40, duration: 0.4, ease: 'power2.inOut' });
  gsap.to(circleRight, { scale: 0, duration: 0.4, ease: 'power2.inOut' });
  gsap.to(circleLeft, { scale: 1, duration: 0.4, ease: 'power2.inOut' });
};

const handleMouseLeave = () => {
  gsap.to(button, { backgroundColor: bgColor, duration: 0.3, ease: 'power2.in' });
  gsap.to(text, { color: textColor, x: 0, duration: 0.4, ease: 'power2.inOut' });
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
          className="text-sm sm:text-base font-bold whitespace-nowrap mr-4"
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

const Footer = () => {
  return (
    <div className="bg-[#fdf7ee] flex flex-col relative w-full overflow-hidden relative z-20">
      
      {/* 1. Hero / CTA Section */}
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 pt-8 sm:pt-12 text-center">
        <p className="text-xs sm:text-sm font-semibold text-black mb-3 sm:mb-4">
          Kickstart your brand's journey
        </p>

        <h2 className="font-bold text-black mb-6 sm:mb-10 max-w-4xl text-2xl sm:text-3xl md:text-4xl lg:text-6xl tracking-tight px-2">
          Free Hosting for a Year on Us!
        </h2>

        <div className="flex gap-3 sm:gap-4 flex-wrap justify-center">
          <AnimatedButton
            to="/contact"
            label="Contact Us"
            bgColor="#000000"
            textColor="white"
            arrowBgColor="#333333"
          />
        </div>
      </div>

      {/* 2. Transition & Footer Section */}
      <div className="relative mt-12 sm:mt-16 md:mt-20">
        
        {/* Floating Logo Badge */}
        <div className="hidden md:block absolute right-[5%] sm:right-[6%] md:right-[8%] -top-10 sm:-top-12 md:-top-16 z-30">
          <div className="relative flex items-center justify-center">
            <div 
              className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-full"
              style={{
                background: 'conic-gradient(from 252deg, #F7AF19 207deg, transparent 0deg)'
              }}
            />
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-black rounded-full border-2 sm:border-4 border-[#fdf7ee] flex items-center justify-center shadow-xl">
              <img src={orelloclip} alt="Orello mark" className="" />
            </div>
          </div>
        </div>

        {/* Diagonal Background Shape — desktop only */}
        <div 
          className="hidden md:block absolute inset-0 bg-[#e7e1d5] z-10"
          style={{
            clipPath: 'polygon(0 100%, 0 45%, 100% 0, 100% 100%)',
          }}
        />

        {/* 3. Actual Footer Content */}
        <footer className="relative z-20 pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 md:px-16 rounded-t-[30px] sm:rounded-t-[40px] md:rounded-t-[80px]">
          <div className="max-w-[1400px] mx-auto">

            {/* ── MOBILE LAYOUT (< md) ── */}
            <div className="flex flex-col items-center text-center gap-6 md:hidden">

              {/* Large logo */}
              <Link to="/">
                <img src={orello} alt="Orello Logo" className="w-48" />
              </Link>

              {/* Nav pills */}
              <nav className="flex flex-wrap justify-center gap-2">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Case Studies', path: '/casestudy-overview' },
                  { name: 'Blogs', path: '/resources' },
                  { name: 'Careers', path: '/careers' },
                  { name: 'Contact Us', path: '/contact' }
                ].map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="px-5 py-2 bg-white rounded-full text-black text-sm font-bold shadow-sm hover:bg-gray-50 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Social icons row */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/orello.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#F9F5ED] rounded-xl flex items-center justify-center hover:bg-[#F7AF19] transition-colors"
                >
                  <img src={instagram} alt="Instagram" className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/orello"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#F9F5ED] rounded-xl flex items-center justify-center hover:bg-[#F7AF19] transition-colors"
                >
                  <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
                </a>
                <a
                  href="https://www.google.com/search?q=Orello+Creatives+Pvt+Ltd+Bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#F9F5ED] rounded-xl flex items-center justify-center hover:bg-[#F7AF19] transition-colors"
                >
                  <img src={locatio} alt="Location" className="w-5 h-5" />
                </a>
                <a
                  href="mailto:hello@orello.io"
                  className="w-10 h-10 bg-[#F9F5ED] rounded-xl flex items-center justify-center hover:bg-[#F7AF19] transition-colors"
                >
                  <img src={mailid} alt="Email" className="w-5 h-5" />
                </a>
              </div>

              {/* Contact details */}
              <div className="flex flex-col gap-1 text-sm text-black">
                <a href="mailto:hello@orello.io" className="hover:underline">hello@orello.io</a>
                <a href="tel:+916361234567" className="hover:underline">+91 63612 34567</a>
                <p className="text-xs text-gray-600 mt-1">
                  Bengaluru, Karnataka, India
                </p>
              </div>

              {/* Divider */}
              <div className="w-full border-t border-black/10" />

              {/* Copyright */}
              <p className="text-xs text-gray-500 pb-2">
                © {new Date().getFullYear()} Orello
              </p>
            </div>

            {/* ── DESKTOP LAYOUT (≥ md) ── */}
            <div className="hidden md:flex flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
              {/* Logo Area */}
              <div className="w-full md:w-auto flex justify-start">
                <Link to="/">
                  <img src={orello} alt="Orello Logo" className="w-32 sm:w-36 md:w-42" />
                </Link>
              </div>

              {/* Navigation & Socials Column */}
              <div className="flex flex-col items-start md:items-end gap-4 sm:gap-6 w-full md:w-auto">
                
                {/* Nav Links */}
                <nav className="flex flex-wrap justify-start md:justify-end gap-2 sm:gap-3 w-full">
                  {[
                    { name: 'Home', path: '/' },
                    { name: 'Case Studies', path: '/casestudy-overview' },
                    { name: 'Blogs', path: '/resources' },
                    { name: 'Careers', path: '/careers' },
                    { name: 'Contact Us', path: '/contact' }
                  ].map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="px-4 sm:px-6 py-2 sm:py-2.5 bg-white rounded-lg text-black text-xs sm:text-sm font-bold shadow-sm hover:bg-gray-50 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Social Icons */}
                <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto">
                  <span className="text-black font-black text-xs uppercase tracking-widest">
                    Socials
                  </span>
                  <div className="flex gap-2">
                    <a
                      href="https://www.instagram.com/orello.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 sm:w-10 sm:h-10 bg-[#F9F5ED] rounded-xl flex items-center justify-center hover:bg-[#F7AF19] transition-colors"
                    >
                      <img src={instagram} alt="Instagram" className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/orello-creatives/?originalSubdomain=in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 sm:w-10 sm:h-10 bg-[#F9F5ED] rounded-xl flex items-center justify-center hover:bg-[#F7AF19] transition-colors"
                    >
                      <img src={linkedin} alt="LinkedIn" className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a
                      href="https://www.google.com/search?q=Orello+Creatives+Pvt+Ltd+Bengaluru"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 sm:w-10 sm:h-10 bg-[#F9F5ED] rounded-xl flex items-center justify-center hover:bg-[#F7AF19] transition-colors"
                    >
                      <img src={locatio} alt="Location" className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a
                      href="mailto:hello@orello.io"
                      className="w-9 h-9 sm:w-10 sm:h-10 bg-[#F9F5ED] rounded-xl flex items-center justify-center hover:bg-[#F7AF19] transition-colors"
                    >
                      <img src={mailid} alt="Email" className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer