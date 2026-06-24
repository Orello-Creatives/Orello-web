import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import orello from '../assets/logos/orello.svg'
import orelloclip from '../assets/logos/orelloclip.svg'
import instagram from '../assets/logos/instagram.svg'
import linkedin from '../assets/logos/linkedin.svg'
import locatio from '../assets/logos/locatio.svg'
import mailid from '../assets/logos/mailid.svg'

const RotatingBadge = ({ size = 144 }) => {
  const ringRef = useRef(null)

  useEffect(() => {
    if (!ringRef.current) return
    const tween = gsap.to(ringRef.current, {
      rotation: 360,
      duration: 14,
      ease: 'none',
      repeat: -1,
      transformOrigin: '50% 50%',
    })
    return () => tween.kill()
  }, [])

   const cx = 50
  const cy = 50
  const r = 32

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      {/* SVG layer — black circle + rotating text ring */}
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <defs>
          <path
            id="badgeCircle"
            d={`M ${cx},${cy - r} A ${r},${r} 0 1,1 ${cx - 0.001},${cy - r}`}
          />
        </defs>

        {/* Black circle background */}
        <circle cx={cx} cy={cy} r={49} fill="#1c1c1c" />

        {/* Rotating text ring */}
         <g ref={ringRef} style={{ transformOrigin: `${cx}px ${cy}px` }}>
  <text
    fontSize="14.2"
    fontWeight="700"
    fill="#f2ece0"
    letterSpacing="0.8"
    fontFamily="'Satoshi', 'Times New Roman', serif"
  >
    <textPath href="#badgeCircle" startOffset="0%">
      Your • Creative • Partner •
    </textPath>
  </text>
</g>
      </svg>

      {/* orelloclip — centered over the SVG */}
      <img
        src={orelloclip}
        alt="Orello mark"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: size * 0.42,
          height: size * 0.42,
          objectFit: 'contain',
        }}
      />
    </div>
  )
}

// ── Animated CTA Button ────────────────────────────────────────────────────────
const AnimatedButton = ({ to, label, bgColor, textColor, arrowBgColor }) => {
  const buttonRef = useRef(null)
  const textRef = useRef(null)
  const circleRightRef = useRef(null)
  const circleLeftRef = useRef(null)

  useEffect(() => {
    const button = buttonRef.current
    const text = textRef.current
    const circleRight = circleRightRef.current
    const circleLeft = circleLeftRef.current
    if (!button) return

    const handleMouseEnter = () => {
      gsap.to(button, { backgroundColor: '#f7af19', duration: 0.3, ease: 'power2.out' })
      gsap.to(text, { color: '#000000', x: 40, duration: 0.4, ease: 'power2.inOut' })
      gsap.to(circleRight, { scale: 0, duration: 0.4, ease: 'power2.inOut' })
      gsap.to(circleLeft, { scale: 1, duration: 0.4, ease: 'power2.inOut' })
    }
    const handleMouseLeave = () => {
      gsap.to(button, { backgroundColor: bgColor, duration: 0.3, ease: 'power2.in' })
      gsap.to(text, { color: textColor, x: 0, duration: 0.4, ease: 'power2.inOut' })
      gsap.to(circleRight, { scale: 1, duration: 0.4, ease: 'power2.inOut' })
      gsap.to(circleLeft, { scale: 0, duration: 0.4, ease: 'power2.inOut' })
    }

    button.addEventListener('mouseenter', handleMouseEnter)
    button.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <Link to={to}>
      <button
        ref={buttonRef}
        className="relative overflow-hidden cursor-pointer rounded-full shadow-lg flex items-center pl-6 pr-2 py-2"
        style={{ backgroundColor: bgColor, color: textColor, willChange: 'transform' }}
      >
        <span
          ref={circleLeftRef}
          className="absolute left-2 w-9 h-9 text-white rounded-full flex items-center justify-center"
          style={{ backgroundColor: arrowBgColor || '#111827', transform: 'scale(0)' }}
        >
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <span ref={textRef} className="text-sm sm:text-base font-bold whitespace-nowrap mr-4">
          {label}
        </span>
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
  )
}

// ── Footer ─────────────────────────────────────────────────────────────────────
const Footer = () => {
  return (
    <div className="bg-[#fdf7ee]  flex flex-col relative w-full overflow-hidden z-20">

      {/* 1. Hero / CTA Section */}
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 pt-8 sm:pt-22 text-center">
        <p className="text-xs sm:text-sm font-medium text-paragraph text-black mb-3 sm:mb-0">
          Kickstart your brand's journey
        </p>
        <h2 className="font-bold text-black font-body mb-6 sm:mb-10 max-w-4xl text-2xl sm:text-3xl md:text-4xl lg:text-6xl tracking-tight px-2">
          Free Hosting for a Year on Us!
        </h2>
       
      </div>

      {/* 2. Transition & Footer Section */}
      <div className="relative mt-20 sm:mt-16 md:mt-10">

        {/* ── Floating Rotating Badge (visible on all screen sizes) ── */}
        <div className="absolute right-[5%] sm:right-[6%] md:right-[8%] -top-8 sm:-top-12 md:-top-16 z-30">
          <div className="relative flex items-center justify-center">
            {/* Conic ring accent — mobile only (adjust 'from' and spread degrees here independently) */}
            <div
              className="block sm:hidden absolute w-28 h-28 rounded-full"
              style={{ background: 'conic-gradient(from 226deg, #F7AF19 215deg, transparent 0deg)' }}
            />
            {/* Conic ring accent — sm and above (desktop degrees) */}
            <div
              className="hidden sm:block absolute sm:w-24 sm:h-24 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full"
              style={{ background: 'conic-gradient(from 252deg, #F7AF19 205deg, transparent 0deg)' }}
            />
            {/* Badge with orelloclip at center */}
            <div className="relative border-4 border-[#fdf7ee] rounded-full shadow-xl">
              <div className="block sm:hidden">
                <RotatingBadge size={90} />
              </div>
              <div className="hidden sm:block">
                <RotatingBadge size={128} />
              </div>
            </div>
          </div>
        </div>

        {/* Diagonal Background Shape — visible on all screen sizes */}
        <div
          className="absolute inset-0 bg-[#e7e1d5] z-10"
          style={{ clipPath: 'polygon(0 100%, 0 45%, 100% 0, 100% 100%)' }}
        />

        {/* 3. Footer Content */}
        <footer className="relative z-20 pt-32 sm:pt-24 md:pt-32 pb-16 sm:pb-12 px-4 sm:px-6 md:px-16 rounded-t-[30px] sm:rounded-t-[40px] md:rounded-t-[80px]">
          <div className="max-w-[1400px] mx-auto">

            {/* ── MOBILE LAYOUT ── */}
            <div className="flex flex-col items-center text-center gap-6 md:hidden">
              <Link to="/"><img src={orello} alt="Orello Logo" className="w-36 md:w-48" /></Link>
              <nav className="flex flex-wrap justify-center gap-2">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Case Studies', path: '/casestudy-overview' },
                  { name: 'Blogs', path: '/resources' },
                  { name: 'Careers', path: '/careers' },
                  { name: 'Contact Us', path: '/contact' }
                ].map((item) => (
                  <Link key={item.name} to={item.path} className="px-5 py-2 bg-white rounded-full text-black text-sm font-bold shadow-sm hover:bg-gray-50 transition-colors">
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-3">
                <a href="https://www.instagram.com/orello.io" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#F9F5ED] rounded-xl flex items-center justify-center hover:bg-[#F7AF19] transition-colors">
                  <img src={instagram} alt="Instagram" className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/orello-creatives/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#F9F5ED] rounded-xl flex items-center justify-center hover:bg-[#F7AF19] transition-colors">
                  <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
                </a>
                <a href="https://www.google.com/search?q=Orello+Creatives+Pvt+Ltd+Bengaluru" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#F9F5ED] rounded-xl flex items-center justify-center hover:bg-[#F7AF19] transition-colors">
                  <img src={locatio} alt="Location" className="w-5 h-5" />
                </a>
                <a href="mailto:hello@orello.io" className="w-10 h-10 bg-[#F9F5ED] rounded-xl flex items-center justify-center hover:bg-[#F7AF19] transition-colors">
                  <img src={mailid} alt="Email" className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* ── DESKTOP LAYOUT ── */}
            <div className="hidden md:flex flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
              <div className="w-full md:w-auto flex justify-start">
                <Link to="/"><img src={orello} alt="Orello Logo" className="w-32 sm:w-36 md:w-42" /></Link>
              </div>
              <div className="flex flex-col items-start md:items-end gap-4 sm:gap-6 w-full md:w-auto">
                <nav className="flex flex-wrap justify-start md:justify-end gap-2 sm:gap-3 w-full">
                  {[
                    { name: 'Home', path: '/' },
                    { name: 'Case Studies', path: '/casestudy-overview' },
                    { name: 'Blogs', path: '/resources' },
                    { name: 'Careers', path: '/careers' },
                    { name: 'Contact Us', path: '/contact' }
                  ].map((item) => (
                    <Link key={item.name} to={item.path} className="px-4 sm:px-6 py-2 sm:py-2.5 bg-white rounded-lg text-black text-xs sm:text-sm font-bold shadow-sm hover:bg-gray-50 transition-colors">
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto">
                  <span className="text-black font-black text-xs uppercase tracking-widest">Socials</span>
                  <div className="flex gap-2">
                    <a href="https://www.instagram.com/orello.io" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-[#F9F5ED] rounded-xl flex items-center justify-center hover:bg-[#F7AF19] transition-colors">
                      <img src={instagram} alt="Instagram" className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a href="https://www.linkedin.com/company/orello-creatives/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-[#F9F5ED] rounded-xl flex items-center justify-center hover:bg-[#F7AF19] transition-colors">
                      <img src={linkedin} alt="LinkedIn" className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a href="https://www.google.com/search?q=Orello+Creatives+Pvt+Ltd+Bengaluru" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-[#F9F5ED] rounded-xl flex items-center justify-center hover:bg-[#F7AF19] transition-colors">
                      <img src={locatio} alt="Location" className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a href="mailto:hello@orello.io" className="w-9 h-9 sm:w-10 sm:h-10 bg-[#F9F5ED] rounded-xl flex items-center justify-center hover:bg-[#F7AF19] transition-colors">
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