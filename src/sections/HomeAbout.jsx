import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const HomeAbout = () => {
  const bannerRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    /* ===============================
       Infinite scrolling banner
    =============================== */
    const banner = bannerRef.current
    const bannerWidth = banner.scrollWidth / 2

    gsap.to(banner, {
      x: -bannerWidth,
      duration: 40,
      ease: 'none',
      repeat: -1,
    })

    /* ===============================
       Word-by-word fade animation
       Each word fades through 3 stages sequentially
    =============================== */
    const words = textRef.current.querySelectorAll('.word')
    const totalWords = words.length

    // Initial state - fully transparent and dark
    gsap.set(words, { opacity: 0.15, color: '#404040' })

    // Create one timeline that controls all words
    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 75%',
        end: 'bottom 25%',
        scrub: 1,
      }
    })

    // Animate each word sequentially
    words.forEach((word, index) => {
      // Each word gets 3 animation steps
      masterTimeline
        .to(word, {
          opacity: 0.4,
          color: '#505050',
          duration: 0.3,
          ease: 'none'
        }, index * 0.1)
        .to(word, {
          opacity: 0.7,
          color: '#707070',
          duration: 0.3,
          ease: 'none'
        }, index * 0.1 + 0.3)
        .to(word, {
          opacity: 1,
          color: '#1f2937',
          duration: 0.4,
          ease: 'none'
        }, index * 0.1 + 0.6)
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
    <section className="relative z-20 -mt-32">
      <div className="min-h-[700px] bg-[#f9f5ed] shadow-2xl overflow-hidden rounded-t-[100px]">
        {/* Infinite scrolling banner */}
        <div className="py-6 overflow-hidden border-b border-gray-200 bg-[#F4EDE2] mt-16">
          <div ref={bannerRef} className="flex whitespace-nowrap">
            {[...industries, ...industries, ...industries, ...industries].map(
              (industry, index) => (
                <div key={index} className="inline-flex items-center mx-4">
                  <span
                    className="text-base font-medium text-gray-700"
                    style={{ fontFamily: 'Satoshi, sans-serif' }}
                  >
                    {industry}
                  </span>
                  <span className="ml-4 w-2 h-2 bg-[#f7af19] rounded-full"></span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Main content with text reveal */}
        <div className="max-w-6xl mx-auto px-8 py-32">
          <h2
            ref={textRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900"
            style={{ 
              fontFamily: 'Satoshi, sans-serif',
              lineHeight: '1.2',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem'
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
    </section>
  )
}

export default HomeAbout