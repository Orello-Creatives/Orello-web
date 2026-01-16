import React, { useState, useRef, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { gsap } from 'gsap'
import orello from '../assets/logos/orello.svg'

const OrelloNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const menuItemsRef = useRef([])

  const navLinks = ['home', 'about us', 'work', 'services', 'resources']

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
    <nav className="w-full fixed z-30 bg-transparent">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">

          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={orello}
              alt="Orello Logo"
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.split(' ').join('-')}`}
                className="px-4 lg:px-6 py-2 text-[#4B433B] text-sm lg:text-base font-medium transition-colors capitalize hover:opacity-70"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button className="px-6 lg:px-8 py-2.5 lg:py-3 bg-[#4B433B] text-white rounded-full text-sm lg:text-base font-medium hover:bg-[#2d2d2d] transition-colors">
              contact us
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-black transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className="md:hidden overflow-hidden"
          style={{ height: 0, opacity: 0 }}
        >
          <div className="flex flex-col space-y-3 pb-6">
            {navLinks.map((link, index) => (
              <a
                key={link}
                ref={(el) => (menuItemsRef.current[index] = el)}
                href={`#${link.split(' ').join('-')}`}
                className="px-4 py-2 text-black text-base font-medium capitalize hover:opacity-70"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </a>
            ))}

            <button
              ref={(el) => (menuItemsRef.current[navLinks.length] = el)}
              className="mx-4 mt-2 px-6 py-4 bg-[#3d3d3d] text-white rounded-full text-base font-medium hover:bg-[#2d2d2d] transition-colors"
            >
              contact us
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default OrelloNavbar
