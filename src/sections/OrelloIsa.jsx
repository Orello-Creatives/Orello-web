import React, { useLayoutEffect, useRef, useState } from 'react';

const OrelloHero = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const [wordElements, setWordElements] = useState([]);
  const rafRef = useRef(null);

  useLayoutEffect(() => {
    if (textRef.current) {
      const text = textRef.current.textContent;
      const words = text.split(' ');
      setWordElements(words);
    }
  }, []);

  useLayoutEffect(() => {
    if (wordElements.length === 0) return;

    const checkMobile = () => window.innerWidth < 1024;

    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        if (!containerRef.current || !sectionRef.current) return;

        const section = sectionRef.current;
        const words = section.querySelectorAll('.word');

        // On mobile/tablet: static layout, all words visible, no pinning at all
        if (checkMobile()) {
          section.style.position = 'relative';
          section.style.top = '';
          section.style.bottom = '';
          section.style.left = '';
          section.style.width = '';
          section.style.zIndex = '';
          words.forEach((word) => {
            word.style.opacity = 1;
          });
          return;
        }

        // Desktop scroll animation
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const sectionHeight = section.offsetHeight;
        const scrollDistance = container.offsetHeight - sectionHeight;
        const scrollProgress = Math.max(0, Math.min(1, -rect.top / scrollDistance));

        if (rect.top >= 0) {
          section.style.position = 'relative';
          section.style.top = '0';
          section.style.bottom = 'auto';
          section.style.left = '0';
          section.style.width = '';
          section.style.zIndex = '';
          words.forEach((word) => { word.style.opacity = 0.2; });

        } else if (rect.top < 0 && rect.bottom > sectionHeight) {
          section.style.position = 'fixed';
          section.style.top = '0';
          section.style.bottom = 'auto';
          section.style.left = '0';
          section.style.width = '100%';
          section.style.zIndex = '10';
          words.forEach((word, index) => {
            const wordProgress = (scrollProgress * words.length - index) * 1.5;
            word.style.opacity = Math.max(0.2, Math.min(1, wordProgress));
          });

        } else {
          section.style.position = 'fixed';
          section.style.top = 'auto';
          section.style.bottom = '0';
          section.style.left = '0';
          section.style.width = '100%';
          section.style.zIndex = '1';
          words.forEach((word) => { word.style.opacity = 1; });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [wordElements]);

  return (
    <>
      <div
        ref={containerRef}
        className="relative lg:h-[200vh]"
      >
        <section
          ref={sectionRef}
          className="bg-black py-10 sm:py-16 md:py-20 lg:py-24 flex flex-col items-center justify-center w-full"
          style={{ willChange: 'transform' }}
        >
          {/* Main Heading */}
          <div className="container px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-12 lg:mb-16">
            <h2
              ref={textRef}
              className="text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-extrabold leading-snug sm:leading-tight mb-6 sm:mb-8"
            >
              {wordElements.length > 0 ? (
                wordElements.map((word, index) => (
                  <span
                    key={index}
                    className="word inline-block mr-1.5 sm:mr-2 mb-1.5 sm:mb-2"
                    style={{
                      opacity: typeof window !== 'undefined' && window.innerWidth < 1024 ? 1 : 0.2,
                      willChange: 'opacity',
                      transition: 'opacity 0.1s ease-out'
                    }}
                  >
                    {word}
                  </span>
                ))
              ) : (
                <>
                  Orello is a founder-led, global design and development partner helping impact-oriented organisations build clear identities, communications and building digital platforms.
                </>
              )}
            </h2>
          </div>

          {/* Stats Cards — 2 col on mobile, 4 col on lg */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            {/* Card 1 - Teal */}
            <div className="bg-[#a8e6e3] rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col justify-between min-h-[160px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[240px]">
              <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#2d6a65] mb-3 sm:mb-4">
                700+
              </div>
              <p className="text-xs sm:text-base md:text-lg font-medium text-black leading-relaxed">
                Creative assets designed for real-world use
              </p>
            </div>

            {/* Card 2 - Orange */}
            <div className="bg-[#f4a261] rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col justify-between min-h-[160px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[240px]">
              <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#b85a1f] mb-3 sm:mb-4">
                04+
              </div>
              <p className="text-xs sm:text-base md:text-lg font-medium text-black leading-relaxed">
                Countries where our work has reached audiences
              </p>
            </div>

            {/* Card 3 - Yellow */}
            <div className="bg-[#f4d35e] rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col justify-between min-h-[160px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[240px]">
              <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#b89a2d] mb-3 sm:mb-4">
                25+
              </div>
              <p className="text-xs sm:text-base md:text-lg font-medium text-black leading-relaxed">
                Impact-first brands partnered with <br className="hidden lg:block" />Orello
              </p>
            </div>

            {/* Card 4 - Purple */}
            <div className="bg-[#c59af4] rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col justify-between min-h-[160px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[240px]">
              <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#7d3dc7] mb-3 sm:mb-4">
                50+
              </div>
              <p className="text-xs sm:text-base md:text-lg font-medium text-black leading-relaxed">
                Campaigns delivered across digital and ground channels
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OrelloHero;