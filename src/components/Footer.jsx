import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import orello from '../assets/logos/orello.svg'
import orelloclip from '../assets/logos/orelloclip.svg'
import instagram from '../assets/logos/instagram.svg'
import linkedin from '../assets/logos/linkedin.svg'
import locatio from '../assets/logos/locatio.svg'
import mailid from '../assets/logos/mailid.svg'

const AnimatedButton = ({ to, label, className }) => {
  const wrapperRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const btn = btnRef.current;

    const handleMouseMove = (e) => {
      const rect = wrapper.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * 0.5;
      const dy = (e.clientY - cy) * 0.5;
      gsap.to(btn, { x: dx, y: dy, duration: 0.4, ease: 'power2.out' });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1.1, 0.4)' });
    };

    wrapper.addEventListener('mousemove', handleMouseMove);
    wrapper.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      wrapper.removeEventListener('mousemove', handleMouseMove);
      wrapper.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={wrapperRef} style={{ display: 'inline-block', padding: '16px', margin: '-16px' }}>
      <Link to={to}>
        <button
          ref={btnRef}
          className={className}
          style={{ willChange: 'transform', display: 'block' }}
        >
          {label}
        </button>
      </Link>
    </div>
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
            className="px-6 sm:px-8 md:px-10 py-3 cursor-pointer sm:py-4 bg-black text-white rounded-full font-bold text-sm sm:text-base hover:bg-gray-900 transition-all"
          />
          <AnimatedButton
            to="/contact"
            label="Book a meeting"
            className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#F7AF19] cursor-pointer text-black rounded-full font-bold text-sm sm:text-base hover:bg-[#e5a314] transition-all"
          />
        </div>
      </div>

      {/* 2. Transition & Footer Section */}
      <div className="relative mt-12 sm:mt-16 md:mt-20">
        
        {/* Floating Logo Badge */}
        <div className="hidden md:block absolute right-[5%] sm:right-[6%] md:right-[8%] -top-10 sm:-top-12 md:-top-16 z-30">
          <div className="relative flex items-center justify-center">
            {/* The Yellow Arc */}
            <div 
              className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-full"
              style={{
                background: 'conic-gradient(from 252deg, #F7AF19 207deg, transparent 0deg)'
              }}
            />
            {/* The Black Circle */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-black rounded-full border-2 sm:border-4 border-[#fdf7ee] flex items-center justify-center shadow-xl">
              <img src={orelloclip} alt="Orello mark" className="" />
            </div>
          </div>
        </div>

        {/* Diagonal Background Shape */}
        <div 
          className="absolute inset-0 bg-[#e7e1d5] z-10"
          style={{
            clipPath: 'polygon(0 100%, 0 45%, 100% 0, 100% 100%)',
          }}
        />

        {/* 3. Actual Footer Content */}
        <footer className="relative z-20 pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 md:px-16 rounded-t-[30px] sm:rounded-t-[40px] md:rounded-t-[80px]">
          <div className="max-w-[1400px] mx-auto">
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
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
                    { name: 'Blogs', path: '/blogs' },
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
                      href="https://www.linkedin.com/company/orello"
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