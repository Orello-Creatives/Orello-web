import React, { useEffect, useRef, useState } from 'react'
import coldeasy from '../assets/logos/coldeasy.svg'
import ocean from '../assets/logos/ocean.svg'
import villgro from '../assets/logos/villgro.svg'
import vishal from '../assets/logos/vishal.svg'
import alex from '../assets/logos/alex.svg'
import sanam from '../assets/logos/sanam.svg'
import harshita from '../assets/logos/harshita.svg'
import roshni from '../assets/logos/roshni.svg'
import khaleel from '../assets/logos/khaleel.svg'
import shaili from '../assets/logos/shaili.svg'
import bimal from '../assets/logos/bimal.svg'
import Readyto from '../components/Readyto'

export default function TestimonialsSection() {
  const scrollContainerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const rafRef = useRef(null)
  const positionRef = useRef(0)
  const isHoveredRef = useRef(false)

  const testimonials = [
    {
      logoIcon: coldeasy,
      text:
        "Orello helped us revamp our brand identity with a clear understanding of both our needs and vision. From the logo and cohesive identity to the complete website build, design, development, and content, everything was handled end to end with care and precision.\n\nThey also redesigned our collaterals, including flyers, standees, and social media templates, all delivered at a consistently high quality. The process was smooth, collaborative, and well-managed, with great attention to detail and patience through every iteration. We would highly recommend Orello as a dependable, full-service design partner.",
      avatar: vishal,
      name: 'Vishal Singhal',
      title: 'Founder, Coldeasy',
    },
    {
      logo: ocean,
      text:
        "Orello Creatives transformed Ocean's website on WordPress, bringing our vision to life with a sleek, polished design. Orello's team was attentive to our needs and delivered on a tight deadline. Their professionalism and quality work exceeded our expectations.",
      avatar: alex,
      name: 'Alexa Bednarz',
      title: 'Founder, Ocean',
    },
    {
      logo: villgro,
      text:
        "Our experience with Orello Creatives has been outstanding! They consistently manage Villgro's marketing collateral with creativity and professionalism.",
      avatar: sanam,
      name: 'Sanam Jain',
      title: 'Manager Ecosystem Development',
    },
    {
      logoIcon: coldeasy,
      text:
        "Orello Creatives designed impactful, visually stunning collateral for Villgro's GBM event. From Reports to brochures to standees, every item was crafted with detail and attention. The team's design expertise helped us leave a lasting impression on our audience and incredible experience!",
      avatar: roshni,
      name: 'Roshini Muthukumar ',
      title: 'Manager Ecosystem Development',
    },
    {
      logo: ocean,
      text:
        "Working with Orello was such an intuitive experience. They understood my vision for Canvasé and built a brand identity that feels authentic, modern, and scalable. From design details to the bigger picture, everything was thoughtfully crafted. I truly felt supported throughout the journey, and the outcome reflects exactly what I had hoped for",
      avatar: harshita,
      name: 'Harshitha',
      title: 'Founder & CEO, Canvasé',
    },
    {
      logo: villgro,
      text:
        "Working with Orello has been a turning point for Gangpur Silage. They understood our mission to make silage accessible for farmers and translated it into designs that actually work on the ground. From our brand identity to farmer-facing collaterals like flipcharts and booklets, everything was made simple, practical, and effective. Their team didn't feel like an outside agency — they felt like part of our own, committed to helping us grow and reach more farmers with clarity and trust.",
      avatar: bimal,
      name: 'Bimal Lakra',
      title: 'Founder/CEO, Gangpur Ventures',
    },
    {
      logo: ocean,
      text:
        "Orello helped us revamp our brand identity with a clear understanding of both our needs and vision. From the logo and cohesive identity to the complete website build — design, development, and content — everything was handled end to end with care and precision. They also redesigned our collaterals, including flyers, standees, and social media templates, all delivered at a consistently high quality. The process was smooth, collaborative, and well‑managed, with great attention to detail and patience through every iteration. We would highly recommend Orello as a dependable, full‑service design partner.",
      avatar: khaleel,
      name: 'Khaleel Pathummathada',
      title: 'Founder, Yaykwa',
    },
    {
      logo: villgro,
      text:
        "Orello Creatives transformed my online presence into something seamless and professional. The new website booking system and integrated platform makes it so much easier for my students across the world to connect with me",
      avatar: shaili,
      name: 'Shailee Raja',
      title: 'Founder, Letsyogwithshai',
    },
  ]

  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ]

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const firstCard = container.querySelector('.testimonial-card')
    if (!firstCard) return

    const computedStyle = window.getComputedStyle(container)
    const gap = parseInt(computedStyle.gap) || 24
    const cardWidth = firstCard.offsetWidth + gap
    const totalWidth = cardWidth * testimonials.length

    const NORMAL_SPEED = 1.5
    const HOVER_SPEED = 0.3

    const animate = () => {
      const speed = isHoveredRef.current ? HOVER_SPEED : NORMAL_SPEED
      positionRef.current -= speed
      if (Math.abs(positionRef.current) >= totalWidth) positionRef.current = 0
      container.style.transform = `translateX(${positionRef.current}px)`

      const currentIndex = Math.floor(Math.abs(positionRef.current) / cardWidth) % testimonials.length
      setActiveIndex(currentIndex)

      rafRef.current = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      positionRef.current = 0
      animate()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', handleResize)
    }
  }, [testimonials.length])

  const handleRadioClick = (index) => {
    const container = scrollContainerRef.current
    if (!container) return

    const firstCard = container.querySelector('.testimonial-card')
    if (!firstCard) return

    const computedStyle = window.getComputedStyle(container)
    const gap = parseInt(computedStyle.gap) || 24
    const cardWidth = firstCard.offsetWidth + gap

    positionRef.current = -(cardWidth * index)
    setActiveIndex(index)
  }

  return (
    <div className="bg-[#fcf4e9] py-10 sm:py-12 md:py-16 lg:py-24 overflow-hidden relative z-50">
      <div className="container px-4 sm:px-6 md:px-8 mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-center mb-8 md:mb-12 lg:mb-16">
          Heres what our <span className="font-semibold">clients</span>
          <br />
          <span className="font-semibold">have to say</span>
        </h2>
      </div>

      {/* Testimonials */}
      <div className="relative mb-6 sm:mb-8 md:mb-10 overflow-hidden">
        <div ref={scrollContainerRef} className="flex gap-3 sm:gap-4 md:gap-6">
          {duplicatedTestimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card bg-[#fffcf7] rounded-2xl p-4 sm:p-6 md:p-8 w-[240px] sm:w-[300px] md:w-[360px] lg:w-[400px] flex-shrink-0 shadow-sm flex flex-col"
              onMouseEnter={() => { isHoveredRef.current = true }}
              onMouseLeave={() => { isHoveredRef.current = false }}
            >
              {(t.logoIcon || t.logo) && (
                <img
                  src={t.logoIcon || t.logo}
                  alt="logo"
                  className="h-5 sm:h-6 md:h-8 mb-3 sm:mb-4 md:mb-6 self-start"
                />
              )}

              <p className="text-[12px] sm:text-[13px] md:text-[15px] lg:text-[16px] leading-relaxed mb-4 sm:mb-6 md:mb-8 whitespace-pre-line flex-grow">
                {t.text}
              </p>

              <div className="flex items-center gap-2 sm:gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h4 className="font-semibold text-sm sm:text-base md:text-lg leading-tight">{t.name}</h4>
                  <p className="text-xs sm:text-sm md:text-base text-[#D98127] leading-tight">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Radio Buttons */}
      <div className="flex justify-center items-center gap-2 sm:gap-3 mb-10 sm:mb-12 md:mb-16 lg:mb-20">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleRadioClick(index)}
            className={`rounded-full transition-all duration-300 ${
              activeIndex === index
                ? 'w-6 h-3 bg-[#D98127]'
                : 'w-3 h-3 bg-[#D98127] opacity-30'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <Readyto />
    </div>
  )
}