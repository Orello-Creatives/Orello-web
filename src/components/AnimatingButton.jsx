import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

export default function AnimatedArrowButton({ 
  text, 
  className = "", 
  onClick,
  bgColor = "white",
  textColor = "black",
  arrowBgColor = "gray-900"
}) {
  const liquidRef = useRef(null)
  const buttonRef = useRef(null)
  const textRef = useRef(null)
  const circleRightRef = useRef(null)
  const circleLeftRef = useRef(null)

  useEffect(() => {
    const button = buttonRef.current
    const liquid = liquidRef.current
    const text = textRef.current
    const circleRight = circleRightRef.current
    const circleLeft = circleLeftRef.current

    if (!button || !liquid) return

    const handleMouseEnter = () => {
      // Liquid animation
      gsap.to(liquid, {
        clipPath: 'circle(150% at 100% 150%)',
        duration: 0.8,
        ease: 'power2.out'
      })

      // Text slide
      gsap.to(text, {
        x: 40,
        duration: 0.4,
        ease: 'power2.inOut'
      })

      // Circle animations
      gsap.to(circleRight, {
        scale: 0,
        duration: 0.4,
        ease: 'power2.inOut'
      })

      gsap.to(circleLeft, {
        scale: 1,
        duration: 0.4,
        ease: 'power2.inOut'
      })
    }

    const handleMouseLeave = () => {
      // Liquid animation
      gsap.to(liquid, {
        clipPath: 'circle(0% at 100% 100%)',
        duration: 0.8,
        ease: 'power2.in'
      })

      // Text slide back
      gsap.to(text, {
        x: 0,
        duration: 0.4,
        ease: 'power2.inOut'
      })

      // Circle animations
      gsap.to(circleRight, {
        scale: 1,
        duration: 0.4,
        ease: 'power2.inOut'
      })

      gsap.to(circleLeft, {
        scale: 0,
        duration: 0.4,
        ease: 'power2.inOut'
      })
    }

    button.addEventListener('mouseenter', handleMouseEnter)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <button 
      ref={buttonRef}
      onClick={onClick}
      className={`relative overflow-hidden cursor-pointer bg-${bgColor} text-${textColor} py-3 md:py-4 rounded-full font-semibold w-full sm:w-auto ${className}`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {/* Liquid background */}
      <div 
        ref={liquidRef}
        className="absolute inset-0 bg-gradient-to-tl from-[#EFBE5C] via-[#F2B05C] to-[#F1A659] pointer-events-none z-[1]"
        style={{ clipPath: 'circle(0% at 100% 100%)' }}
      />

      {/* Text */}
      <span
        ref={textRef}
        className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 text-sm md:text-base z-[2]"
      >
        {text}
      </span>

      {/* Circle (initial, right) */}
      <span
        ref={circleRightRef}
        className={`absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 bg-${arrowBgColor} text-white rounded-full flex items-center justify-center z-[2]`}
        style={{ backgroundColor: arrowBgColor === 'gray-900' ? '#111827' : arrowBgColor }}
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-4 md:h-4">
          <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>

      {/* Circle (reappears at text start) */}
      <span
        ref={circleLeftRef}
        className={`absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 bg-${arrowBgColor} text-white rounded-full flex items-center justify-center scale-0 z-[2]`}
        style={{ backgroundColor: arrowBgColor === 'gray-900' ? '#111827' : arrowBgColor }}
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-4 md:h-4">
          <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>

      {/* Spacer (locks width) */}
      <span className="opacity-0 px-8 md:px-10 text-sm md:text-base">{text}</span>
    </button>
  )
}