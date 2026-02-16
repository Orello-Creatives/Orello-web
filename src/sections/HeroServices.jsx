import React, { useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';

const ServiceCard = ({ title, description, bgImage, index }) => {
  const cardRef = useRef(null);
  const revealRef = useRef(null);
  const imageRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const reveal = revealRef.current;
    const image = imageRef.current;
    const arrow = arrowRef.current;
    let isHovered = false;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let rafId = null;

    // Set initial GSAP config for smoother animations
    gsap.config({ force3D: true });
    gsap.set(reveal, { force3D: true });
    gsap.set(image, { force3D: true });

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      lastMouseX = x;
      lastMouseY = y;

      if (!isHovered) return;

      // Cancel previous animation frame
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      // Use RAF for smoother updates
      rafId = requestAnimationFrame(() => {
        const size = 200; // Square size
        const half = size / 2;

        // Calculate inset values to maintain square size
        const left = Math.max(0, Math.min(x - half, rect.width - size));
        const top = Math.max(0, Math.min(y - half, rect.height - size));
        const right = Math.max(0, rect.width - left - size);
        const bottom = Math.max(0, rect.height - top - size);

        gsap.to(reveal, {
          clipPath: `inset(${top}px ${right}px ${bottom}px ${left}px)`,
          duration: 1,
          ease: 'power2.out',
          overwrite: 'auto'
        });

        // Check if cursor square intersects with arrow
        const arrowRect = arrow.getBoundingClientRect();
        const arrowX = arrowRect.left - rect.left;
        const arrowY = arrowRect.top - rect.top;
        const arrowWidth = arrowRect.width;
        const arrowHeight = arrowRect.height;

        // Check if the square overlaps with the arrow
        const squareLeft = left;
        const squareTop = top;
        const squareRight = left + size;
        const squareBottom = top + size;

        const isOverlapping = !(
          squareRight < arrowX ||
          squareLeft > arrowX + arrowWidth ||
          squareBottom < arrowY ||
          squareTop > arrowY + arrowHeight
        );

        // Change arrow color based on overlap
        if (isOverlapping) {
          arrow.style.color = '#fff';
        } else {
          arrow.style.color = '#000';
        }

        // Parallax effect on image based on mouse position
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const moveX = (x - centerX) / 20;
        const moveY = (y - centerY) / 20;

        gsap.to(image, {
          x: moveX,
          y: moveY,
          duration: 0.9,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      });
    };

    const handleMouseEnter = (e) => {
      // Start with the square closed at current mouse position
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Update last position immediately
      lastMouseX = x;
      lastMouseY = y;
      
      const size = 200;
      const half = size / 2;
      
      // Get initial mouse position relative to card
      const initialLeft = Math.max(0, Math.min(x - half, rect.width - size));
      const initialTop = Math.max(0, Math.min(y - half, rect.height - size));
      const initialRight = Math.max(0, rect.width - initialLeft - size);
      const initialBottom = Math.max(0, rect.height - initialTop - size);
      
      // Determine which zone the cursor is in
      const cursorX = x;
      const edgeThreshold = 150; // pixels from edge to consider as "edge zone"
      
      let startClipPath;
      
      if (cursorX < edgeThreshold) {
        // Left edge - start from left edge, expand to right only
        startClipPath = `inset(${initialTop}px ${rect.width - initialLeft}px ${initialBottom}px ${initialLeft}px)`;
      } else if (cursorX > rect.width - edgeThreshold) {
        // Right edge - start from right edge, expand to left only
        const rightEdge = initialLeft + size;
        startClipPath = `inset(${initialTop}px ${initialRight}px ${initialBottom}px ${rightEdge}px)`;
      } else {
        // Middle - expand from center to both sides
        const centerLeft = initialLeft + size / 2;
        startClipPath = `inset(${initialTop}px ${rect.width - centerLeft}px ${initialBottom}px ${centerLeft}px)`;
      }
      
      // Set initial state immediately
      gsap.set(reveal, {
        clipPath: startClipPath,
        opacity: 1,
        force3D: true
      });
      
      // Use requestAnimationFrame to ensure the initial state is rendered before animating
      requestAnimationFrame(() => {
        isHovered = true;
        
        // Animate to open 
        gsap.to(reveal, {
          clipPath: `inset(${initialTop}px ${initialRight}px ${initialBottom}px ${initialLeft}px)`,
          duration: 1, // Open animation duration
          ease: 'power2.out',
          overwrite: true
        });
        
        gsap.to(image, {
          scale: 1.1,
          duration: 1,
          ease: 'power2.out',
          force3D: true,
          overwrite: true
        });
      });
    };

    const handleMouseLeave = () => {
      isHovered = false;
      
      // Cancel any pending RAF
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      
      // Get the card's bounding rect
      const rect = card.getBoundingClientRect();
      const size = 200;
      const half = size / 2;
      
      // Calculate the final position where the square should close to (last cursor position)
      const left = Math.max(0, Math.min(lastMouseX - half, rect.width - size));
      const top = Math.max(0, Math.min(lastMouseY - half, rect.height - size));
      const right = Math.max(0, rect.width - left - size);
      const bottom = Math.max(0, rect.height - top - size);
      
      // Determine which zone the cursor is in
      const cursorX = lastMouseX;
      const edgeThreshold = 150; // pixels from edge to consider as "edge zone"
      
      let endClipPath;
      
      if (cursorX < edgeThreshold) {
        // Left edge - close to left edge only
        endClipPath = `inset(${top}px ${rect.width - left}px ${bottom}px ${left}px)`;
      } else if (cursorX > rect.width - edgeThreshold) {
        // Right edge - close to right edge only
        const rightEdge = left + size;
        endClipPath = `inset(${top}px ${right}px ${bottom}px ${rightEdge}px)`;
      } else {
        // Middle - close to center from both sides
        const centerLeft = left + size / 2;
        endClipPath = `inset(${top}px ${rect.width - centerLeft}px ${bottom}px ${centerLeft}px)`;
      }
      
      // Animate to close
      gsap.to(reveal, {
        clipPath: endClipPath,
        duration: 0.6,
        ease: 'power2.inOut',
        overwrite: true,
        onComplete: () => {
          gsap.set(reveal, {
            opacity: 0,
            clipPath: 'inset(50% 50% 50% 50%)'
          });
        }
      });
      
      gsap.to(image, {
        scale: 1,
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        overwrite: true
      });
      // Reset arrow color
      arrow.style.color = '#000';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative cursor-pointer overflow-hidden group border-b border-gray-700"
    >
   
      {/* Content - Default solid text */}
      <div className="relative z-20 flex items-start justify-between p-5 py-7 sm:p-6 sm:py-8 lg:p-8 lg:py-10">
        <div className="flex-1">
          <h3 className="font-light mb-2 text-black">
            {title}
          </h3>
          <p className="paragraph text-black">
            {description}
          </p>
        </div>
        <ArrowUpRight 
          ref={arrowRef}
          className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 transition-colors duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0 ml-3 sm:ml-3.5 lg:ml-4 text-black" 
          strokeWidth={1.5}
        />
      </div>

      {/* Reveal layer with background image AND text stroke overlay combined */}
      <div
        ref={revealRef}
        className="absolute inset-0 opacity-0 pointer-events-none z-30 overflow-hidden"
        style={{
          clipPath: 'inset(50% 50% 50% 50%)'
        }}
      >
        {/* Background image with parallax */}
        <div
          ref={imageRef}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'scale(1)'
          }}
        />
        
        {/* Text stroke overlay - only visible within the clipped area */}
        <div
          className="absolute inset-0"
        >
          <div className="relative flex items-start justify-between p-5 py-7 sm:p-6 sm:py-8 lg:p-8 lg:py-10 h-full">
            <div className="flex-1">
              <h3
                className="font-light mb-2" 
                style={{
                  WebkitTextStroke: '1px #000',
                  color: 'transparent',
                  paintOrder: 'stroke fill'
                  
                }}
              >
                {title}
              </h3>
              
              <p 
                className="paragraph" 
                style={{
                  WebkitTextStroke: '1px #000',
                  color: 'transparent',
                  paintOrder: 'stroke fill',
                  fontFamily: 'Satoshi, sans-serif', 
                  fontWeight: 900
                }}
              >
                {description}
              </p>
            </div>
            <ArrowUpRight 
              className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 ml-3 sm:ml-3.5 lg:ml-4" 
              strokeWidth={1.5}
              style={{ color: '#d98127' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function heroServices() {
  const services = [
    {
      title: 'Brand Identity',
      description: 'Orello is a purpose-driven global design partner',
      bgImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80'
    },
    {
      title: 'UI/UX & Web Development',
      description: 'Orello is a purpose-driven global design partner',
      bgImage: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80'
    },
    {
      title: 'Motion Graphics',
      description: 'Orello is a purpose-driven global design partner',
      bgImage: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&q=80'
    },
    {
      title: 'Digital Marketing & SEO',
      description: 'Orello is a purpose-driven global design partner',
      bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
    }
  ];

  return (
    <div className="bg-[#F9F5ED] py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">
          {/* Left side - Header */}
          <div className="lg:col-span-5 lg:pl-8">
            <h2 className="font-light mb-6">
              Our<br />
              <span className="font-semibold">Services</span>
            </h2>
            <p className="paragraph leading-relaxed mb-8 max-w-[370px]">
              Orello is a purpose-driven global design partner that helps impact-oriented organisations communicate with clarity, empathy, and intention.
            </p>
            <button className="bg-[#F7AF19] cursor-pointer text-black px-8 py-3 rounded-full font-medium hover:bg-[#fda521] transition-colors">
              Know more
            </button>
          </div>

          {/* Right side - Service Cards */}
          <div className="lg:col-span-7">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                bgImage={service.bgImage}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}