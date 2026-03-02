import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import OurServices from './OurServices'

gsap.registerPlugin(ScrollTrigger)

const HomeAbout = () => {
  const bannerRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
   
    const banner = bannerRef.current
    const bannerWidth = banner.scrollWidth / 2

    gsap.to(banner, {
      x: -bannerWidth,
      duration: 40,
      ease: 'none',
      repeat: -1,
    })

   
    const words = textRef.current.querySelectorAll('.word')

    gsap.set(words, { opacity: 1, color: '#999999', y: 20 })

    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 75%',
        end: 'bottom 25%',
        scrub: 1,
      }
    })

    words.forEach((word, index) => {
      masterTimeline.to(word, {
        opacity: 1,
        color: '#000000',
        y: 0,
        duration: 0.3,
        ease: 'none'
      }, index * 0.4)
    })
  }, [])

  const industries = [
    'Real estate',
    'Sustainability',
    'Fashion & Lifestyle',
    'Travel & Tourism',
    'Agritech',
    'Healthcare',
    'Dairy',
  ]

  const textContent =
    'Orello is a purpose-driven global design partner that helps impact-oriented organisations communicate with clarity, empathy, and intention.'

  const words = textContent.split(' ')

  return (
    <section className="relative z-20 -mt-16 sm:-mt-24 md:-mt-32">
      <div className="bg-[#f9f5ed] shadow-2xl overflow-hidden rounded-t-[40px] sm:rounded-t-[60px] md:rounded-t-[100px]">
        {/* Infinite scrolling banner */}
        <div className="py-4 sm:py-5 md:py-6 overflow-hidden border-b border-gray-200 bg-[#F4EDE2] mt-8 sm:mt-12 md:mt-16">
          <div ref={bannerRef} className="flex whitespace-nowrap">
            {[...industries, ...industries, ...industries, ...industries].map(
              (industry, index) => (
                <div key={index} className="inline-flex items-center mx-2 sm:mx-3 md:mx-4">
                  <span
                    className="text-sm sm:text-base font-medium text-gray-700"
                    style={{ fontFamily: 'Satoshi, sans-serif' }}
                  >
                    {industry}
                  </span>
                  <span className="ml-2 sm:ml-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#f7af19] rounded-full"></span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Main content with text reveal */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-24 md:py-32 items-center justify-center">
          <h2
            ref={textRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold items-center justify-center"
            style={{ 
              fontFamily: 'Satoshi, sans-serif',
              lineHeight: '1.2',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.4rem',
            }}
          >
            {words.map((word, index) => (
              <span key={index} className="word inline-block">
                {word}
              </span>
            ))}
          </h2>
        </div>
      </div>
      <OurServices />
    </section>
  )
}

export default HomeAbout