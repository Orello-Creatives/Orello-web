import React, { useState, useRef, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import orello from '../assets/logos/orello.svg'

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

const OrelloNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const menuItemsRef = useRef([])
  const location = useLocation()

  const navLinks = [
    { name: 'home', path: '/' },
    { name: 'about us', path: '/about' },
    { name: 'work', path: '/casestudy-overview' },
    { name: 'services', path: '/services' },
    { name: 'resources', path: '/resources' },
    { name: 'careers', path: '/careers' },
    { name: 'FAQ', path: '/faq' },
  ]

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out'
      })

      gsap.fromTo(
        menuItemsRef.current,
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.05,
          ease: 'power2.out',
          delay: 0.1
        }
      )
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in'
      })
    }
  }, [isMenuOpen])

  return (
    /* Outer wrapper: sticky, full-width, transparent — provides the top offset */
    <div className="fixed top-0 left-0 right-0 z-30 flex justify-center px-4 sm:px-6 lg:px-8 pt-4 md:pt-5">

      {/* Pill container */}
      <div
        className="w-full max-w-[1200px] rounded-full"
        style={{ backgroundColor: '#FDF6E9' }}
      >
        <div className="px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-[68px]">

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src={orello}
                  alt="Orello Logo"
                  className="h-7 sm:h-8 md:h-10 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-0">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 lg:px-5 py-2 text-sm lg:text-[15px] font-medium transition-colors capitalize hover:opacity-70 ${
                    location.pathname === link.path
                      ? 'text-[#D98127]'
                      : 'text-[#4B433B]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <AnimatedButton
                to="/contact"
                label="contact us"
                className="px-6 lg:px-7 py-2.5 cursor-pointer bg-[#3d3d3d] text-white rounded-full text-sm lg:text-[15px] font-medium hover:bg-[#2d2d2d] transition-colors"
              />
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-[#4B433B] transition-colors"
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu — drops below the pill */}
        <div
          ref={menuRef}
          className="md:hidden overflow-hidden rounded-b-3xl"
          style={{ height: 0, opacity: 0 }}
        >
          <div className="flex flex-col space-y-1 px-5 pb-5">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                ref={(el) => (menuItemsRef.current[index] = el)}
                to={link.path}
                className={`px-3 py-2.5 text-base font-medium capitalize hover:opacity-70 ${
                  location.pathname === link.path
                    ? 'text-[#D98127]'
                    : 'text-[#4B433B]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/contact"
              ref={(el) => (menuItemsRef.current[navLinks.length] = el)}
            >
              <button className="mt-2 px-6 py-3 bg-[#3d3d3d] text-white rounded-full text-base font-medium hover:bg-[#2d2d2d] transition-colors">
                contact us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrelloNavbar