import React, { useLayoutEffect, useRef, useState } from 'react';

const OrelloHero = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const [wordElements, setWordElements] = useState([]);
  const rafRef = useRef(null);

  useLayoutEffect(() => {
    // Split text into words
    if (textRef.current) {
      const text = textRef.current.textContent;
      const words = text.split(' ');
      setWordElements(words);
    }
  }, []);

  useLayoutEffect(() => {
    if (wordElements.length === 0) return;

    // Check if device is mobile/tablet (below 1024px)
    const isMobileOrTablet = window.innerWidth < 1024;

    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        if (!containerRef.current || !sectionRef.current) return;
        
        const container = containerRef.current;
        const section = sectionRef.current;
        const rect = container.getBoundingClientRect();
        const sectionHeight = section.offsetHeight;
        
        // Total scroll distance available
        const scrollDistance = container.offsetHeight - sectionHeight;
        
        // Calculate scroll progress (0 to 1) based on how far into the container we've scrolled
        const scrollProgress = Math.max(0, Math.min(1, -rect.top / scrollDistance));
        
        const words = section.querySelectorAll('.word');
        
        // Skip animation on mobile/tablet - just show all words fully visible
        if (isMobileOrTablet) {
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
        
        // SCROLLING DOWN: Section enters from top
        if (rect.top >= 0) {
          // Before the section - not pinned yet, relative positioning
          section.style.position = 'relative';
          section.style.top = '0';
          section.style.bottom = 'auto';
          section.style.left = '0';
          section.style.width = '';
          section.style.zIndex = '';
          
          // All words dimmed
          words.forEach((word) => {
            word.style.opacity = 0.2;
          });
        } 
        // PINNED STATE: While text is animating
        else if (rect.top < 0 && rect.bottom > sectionHeight) {
          // Section is pinned to top
          section.style.position = 'fixed';
          section.style.top = '0';
          section.style.bottom = 'auto';
          section.style.left = '0';
          section.style.width = '100%';
          section.style.zIndex = '10';
          
          // Animate each word based on scroll progress
          words.forEach((word, index) => {
            const wordProgress = (scrollProgress * words.length - index) * 1.5;
            const opacity = Math.max(0.2, Math.min(1, wordProgress));
            word.style.opacity = opacity;
          });
        } 
        // SCROLLED PAST: Animation complete, section sticks to bottom
        else {
          // Section sticks to bottom of viewport - allows next section to scroll over
          section.style.position = 'fixed';
          section.style.top = 'auto';
          section.style.bottom = '0';
          section.style.left = '0';
          section.style.width = '100%';
          section.style.zIndex = '1';
          
          // All words fully visible
          words.forEach((word) => {
            word.style.opacity = 1;
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Initial call

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [wordElements]);

  return (
    <>
      {/* Container that creates the scroll space */}
      <div 
        ref={containerRef}
        className="relative"
        style={{ height: '200vh' }}
      >
        {/* The actual section that gets pinned */}
        <section 
          ref={sectionRef}
          className="bg-black py-24 px-6 flex flex-col items-center justify-center w-full"
          style={{ willChange: 'transform' }}
        >
          {/* Main Heading */}
          <div className="container text-center mb-16">
            <h2 
              ref={textRef}
              className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-8"
            >
              {wordElements.length > 0 ? (
                wordElements.map((word, index) => (
                  <span 
                    key={index} 
                    className="word inline-block mr-2 mb-2"
                    style={{ opacity: 0.2, willChange: 'opacity', transition: 'opacity 0.1s ease-out' }}
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

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto w-full">
            {/* Card 1 - Teal */}
            <div className="bg-[#a8e6e3] rounded-3xl p-8 flex flex-col justify-between min-h-[240px]">
              <div className="text-6xl md:text-7xl font-bold text-[#2d6a65] mb-4">
                700+
              </div>
              <p className="text-base md:text-lg font-medium text-black leading-relaxed">
                Creative assets designed for real-world use
              </p>
            </div>

            {/* Card 2 - Orange */}
            <div className="bg-[#f4a261] rounded-3xl p-8 flex flex-col justify-between min-h-[240px]">
              <div className="text-6xl md:text-7xl font-bold text-[#b85a1f] mb-4">
                04+
              </div>
              <p className="text-base md:text-lg font-medium text-black leading-relaxed">
                Countries where our work has reached audiences
              </p>
            </div>

            {/* Card 3 - Yellow */}
            <div className="bg-[#f4d35e] rounded-3xl p-8 flex flex-col justify-between min-h-[240px]">
              <div className="text-6xl md:text-7xl font-bold text-[#b89a2d] mb-4">
                25+
              </div>
              <p className="text-base md:text-lg font-medium text-black leading-relaxed">
                Impact-first brands partnered with <br className="hidden lg:block" />Orello
              </p>
            </div>

            {/* Card 4 - Purple */}
            <div className="bg-[#c59af4] rounded-3xl p-8 flex flex-col justify-between min-h-[240px]">
              <div className="text-6xl md:text-7xl font-bold text-[#7d3dc7] mb-4">
                50+
              </div>
              <p className="text-base md:text-lg font-medium text-black leading-relaxed">
                Campaigns delivered across digital and ground channels
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Demo: Next Section that scrolls over */}
     
    </>
  );
};

export default OrelloHero;