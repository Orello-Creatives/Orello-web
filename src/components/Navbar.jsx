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

    // Only apply magnetic effect on non-touch devices
    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    if (isTouchDevice) return;

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
  const overlayRef = useRef(null)
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

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) setIsMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out'
      })

      gsap.fromTo(
        menuItemsRef.current.filter(Boolean),
        { opacity: 0, y: -12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.045,
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
    <>
      {/* Backdrop overlay for mobile — closes menu when tapping outside */}
      {isMenuOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-20 bg-black/10 backdrop-blur-[2px] md:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Outer wrapper */}
      <div className="fixed top-0 left-0 right-0 z-30 flex justify-center px-3 sm:px-5 lg:px-8 pt-3 sm:pt-4 md:pt-5">

        {/* Pill container */}
        <div
          className="w-full max-w-[1200px] rounded-[28px] shadow-sm"
          style={{ backgroundColor: '#FDF6E9' }}
        >
          <div className="px-4 sm:px-5 lg:px-8">
            <div className="flex items-center justify-between h-14 sm:h-16 md:h-[68px]">

              {/* Logo */}
              <div className="flex-shrink-0">
                <Link to="/" aria-label="Orello home">
                  <img
                    src={orello}
                    alt="Orello Logo"
                    className="h-6 sm:h-7 md:h-9 w-auto"
                  />
                </Link>
              </div>

              {/* Desktop Nav — hidden below md */}
              <nav className="hidden md:flex items-center" aria-label="Main navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3 lg:px-4 xl:px-5 py-2 text-sm lg:text-[15px] font-medium transition-opacity capitalize hover:opacity-60 ${
                      location.pathname === link.path
                        ? 'text-[#D98127]'
                        : 'text-[#4B433B]'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Desktop CTA — hidden below md */}
              <div className="hidden md:block">
                <AnimatedButton
                  to="/contact"
                  label="contact us"
                  className="px-5 lg:px-7 py-2.5 cursor-pointer bg-[#3d3d3d] text-white rounded-full text-sm lg:text-[15px] font-medium hover:bg-[#2d2d2d] transition-colors whitespace-nowrap"
                />
              </div>

              {/* Mobile right side: CTA + Hamburger */}
              <div className="flex md:hidden items-center gap-2 sm:gap-3">
                {/* Small "contact" pill visible on sm+ but hidden on xs */}
                <Link
                  to="/contact"
                  className="hidden sm:inline-flex items-center px-4 py-2 bg-[#3d3d3d] text-white rounded-full text-sm font-medium hover:bg-[#2d2d2d] transition-colors"
                >
                  contact us
                </Link>

                {/* Hamburger toggle */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 -mr-1 text-[#4B433B] transition-colors rounded-full hover:bg-black/5 active:bg-black/10"
                  aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                  aria-expanded={isMenuOpen}
                >
                  {isMenuOpen ? <X size={20} strokeWidth={2.2} /> : <Menu size={20} strokeWidth={2.2} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu — drops inside the pill */}
          <div
            ref={menuRef}
            className="md:hidden overflow-hidden"
            style={{ height: 0, opacity: 0 }}
            aria-hidden={!isMenuOpen}
          >
            {/* Divider */}
            <div className="mx-4 sm:mx-5 border-t border-[#E8DECE]" />

            <nav
              className="flex flex-col px-4 sm:px-5 pb-4 pt-2"
              aria-label="Mobile navigation"
            >
              {/* Nav links in a 2-col grid on sm, single col on xs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    ref={(el) => (menuItemsRef.current[index] = el)}
                    to={link.path}
                    className={`flex items-center px-2 py-3 text-[15px] font-medium capitalize border-b border-[#E8DECE]/60 last:border-b-0 sm:last:border-b transition-opacity hover:opacity-60 ${
                      location.pathname === link.path
                        ? 'text-[#D98127]'
                        : 'text-[#4B433B]'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {/* Active dot indicator */}
                    {location.pathname === link.path && (
                      <span className="mr-2 w-1.5 h-1.5 rounded-full bg-[#D98127] flex-shrink-0" />
                    )}
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* CTA — full width on xs, auto on sm */}
              <div
                ref={(el) => (menuItemsRef.current[navLinks.length] = el)}
                className="mt-4"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex sm:inline-flex justify-center items-center px-6 py-3 bg-[#3d3d3d] text-white rounded-full text-[15px] font-medium hover:bg-[#2d2d2d] transition-colors"
                >
                  contact us
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrelloNavbar