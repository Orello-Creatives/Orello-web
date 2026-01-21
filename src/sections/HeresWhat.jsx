import React, { useEffect, useRef } from 'react'
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

export default function TestimonialsSection() {
  const scrollContainerRef = useRef(null)

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
        "Orello Creatives designed impactful, visually stunning collateral for Villgro’s GBM event. From Reports to brochures to standees, every item was crafted with detail and attention. The team’s design expertise helped us leave a lasting impression on our audience and incredible experience!",
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
        "Working with Orello has been a turning point for Gangpur Silage. They understood our mission to make silage accessible for farmers and translated it into designs that actually work on the ground. From our brand identity to farmer-facing collaterals like flipcharts and booklets, everything was made simple, practical, and effective. Their team didn’t feel like an outside agency — they felt like part of our own, committed to helping us grow and reach more farmers with clarity and trust.",
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

    // Get the actual card width including gap
    const computedStyle = window.getComputedStyle(container)
    const gap = parseInt(computedStyle.gap) || 24
    const cardWidth = firstCard.offsetWidth + gap
    const totalWidth = cardWidth * testimonials.length

    let position = 0
    let raf

    const animate = () => {
      position -= 0.5
      if (Math.abs(position) >= totalWidth) position = 0
      container.style.transform = `translateX(${position}px)`
      raf = requestAnimationFrame(animate)
    }

    animate()
    
    // Recalculate on window resize
    const handleResize = () => {
      if (raf) cancelAnimationFrame(raf)
      position = 0
      animate()
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', handleResize)
    }
  }, [testimonials.length])

  return (
    <div className="bg-[#fcf4e9] py-12 md:py-16 lg:py-24 overflow-hidden relative z-20">
      <div className="container px-4 sm:px-6 md:px-8 mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-center mb-8 md:mb-12 lg:mb-16">
          Heres what our <span className="font-semibold">clients</span>
          <br />
          <span className="font-semibold">have to say</span>
        </h2>
      </div>

      {/* Testimonials */}
      <div className="relative mb-12 md:mb-16 lg:mb-20 overflow-hidden">
        <div ref={scrollContainerRef} className="flex gap-4 md:gap-6">
          {duplicatedTestimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card bg-[#fffcf7] rounded-2xl p-6 md:p-8 w-[280px] sm:w-[320px] md:w-[400px] flex-shrink-0 shadow-sm flex flex-col"
            >
              {(t.logoIcon || t.logo) && (
               <img
  src={t.logoIcon || t.logo}
  alt="logo"
  className="h-6 md:h-8 mb-4 md:mb-6 self-start"
/>
              )}

              <p className="text-[14px] md:text-[16px] leading-relaxed mb-6 md:mb-8 whitespace-pre-line flex-grow">
                {t.text}
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-base md:text-lg">{t.name}</h4>
                  <p className="text-sm md:text-base text-[#D98127]">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#FFB721] container mx-auto px-6 sm:px-8 md:px-10 lg:px-14 rounded-3xl py-8 sm:py-12 md:py-16 relative overflow-hidden mt-24">

  {/* Background Circles – SAME STYLE AS YOURS */}
  <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-0 overflow-hidden">
    <div
      className="absolute w-[140vw] h-[130vw] bg-[#FFB721] left-1/2"
      style={{
        borderRadius: "50%",
        bottom: "-75vw",
        transform: "translateX(-50%)",
      }}
    />
    <div
      className="absolute w-[115vw] h-[105vw] bg-[#FFC855] left-1/2"
      style={{
        borderRadius: "50%",
        bottom: "-65vw",
       
        transform: "translateX(-50%)",
      }}
    />
    <div
      className="absolute w-[90vw] h-[85vw] bg-[#FFB721] left-1/2"
      style={{
        borderRadius: "50%",
        bottom: "-55vw",
     
        transform: "translateX(-50%)",
      }}
    />
    <div
      className="absolute w-[65vw] h-[65vw] bg-[#FFC855] left-1/2"
      style={{
        borderRadius: "50%",
        bottom: "-45vw",
        transform: "translateX(-50%)",
      }}
    />
    <div
      className="absolute w-[40vw] h-[40vw] bg-[#FFB721] left-1/2"
      style={{
        borderRadius: "50%",
        bottom: "-35vw",
     
        transform: "translateX(-50%)",
      }}
    />
  </div>

  {/* CTA Text + Buttons (UNCHANGED) */}
  <div className="relative z-10 md:ml-12 lg:ml-24">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 md:mb-4">
      Ready to make <span className="font-bold">a bigger</span>
      <br />
      <span className="font-bold">impact</span> with your work?
    </h2>

    <p className="text-sm sm:text-base font-semibold mb-6 md:mb-8 max-w-3xl">
      Join organizations we work with to build clear identities, strong
      digital platforms, and communication that actually converts.
    </p>

    <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
      {/* BUTTON 1 */}
      <button className="hover:bg-amber-200 relative overflow-hidden cursor-pointer bg-white text-black py-3 md:py-4 rounded-full font-semibold group w-full sm:w-auto">
        <span className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 transition-transform duration-400 ease-in-out sm:group-hover:translate-x-[40px] text-sm md:text-base">
          Talk to us
        </span>

        <span className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 bg-gray-900 text-white rounded-full flex items-center justify-center transition-transform duration-400 ease-in-out sm:group-hover:scale-0">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>

        <span className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 bg-gray-900 text-white rounded-full flex items-center justify-center scale-0 transition-transform duration-400 ease-in-out sm:group-hover:scale-100">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>

        <span className="opacity-0 px-8 md:px-10 text-sm md:text-base">Talk to us</span>
      </button>

      {/* BUTTON 2 */}
      <button className="relative hover:bg-amber-200 overflow-hidden cursor-pointer bg-white text-black py-3 md:py-4 rounded-full font-semibold group w-full sm:w-auto">
        <span className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 transition-transform duration-400 ease-in-out sm:group-hover:translate-x-[50px] text-sm md:text-base">
          Know more about us
        </span>

        <span className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 bg-black text-white rounded-full flex items-center justify-center transition-transform duration-400 ease-in-out sm:group-hover:scale-0">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>

        <span className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 bg-black text-white rounded-full flex items-center justify-center scale-0 transition-transform duration-400 ease-in-out sm:group-hover:scale-100">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>

        <span className="opacity-0 px-10 md:px-12 text-sm md:text-base">
          Know more about us
        </span>
      </button>
    </div>
  </div>
</div>
    </div>
  )
}