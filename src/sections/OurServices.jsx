import React, { useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import {Link} from 'react-router'
import digital from '../assets/images/digital.png'
import motion from '../assets/images/motion.png'
import branding from '../assets/images/branding.png'
import uiuxx from '../assets/images/uiuxx.png'

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

      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        const size = 200;
        const half = size / 2;

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

        const arrowRect = arrow.getBoundingClientRect();
        const arrowX = arrowRect.left - rect.left;
        const arrowY = arrowRect.top - rect.top;
        const arrowWidth = arrowRect.width;
        const arrowHeight = arrowRect.height;

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

        if (isOverlapping) {
          arrow.style.color = '#fff';
        } else {
          arrow.style.color = '#000';
        }

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
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      lastMouseX = x;
      lastMouseY = y;
      
      const size = 200;
      const half = size / 2;
      
      const initialLeft = Math.max(0, Math.min(x - half, rect.width - size));
      const initialTop = Math.max(0, Math.min(y - half, rect.height - size));
      const initialRight = Math.max(0, rect.width - initialLeft - size);
      const initialBottom = Math.max(0, rect.height - initialTop - size);
      
      const cursorX = x;
      const edgeThreshold = 150;
      
      let startClipPath;
      
      if (cursorX < edgeThreshold) {
        startClipPath = `inset(${initialTop}px ${rect.width - initialLeft}px ${initialBottom}px ${initialLeft}px)`;
      } else if (cursorX > rect.width - edgeThreshold) {
        const rightEdge = initialLeft + size;
        startClipPath = `inset(${initialTop}px ${initialRight}px ${initialBottom}px ${rightEdge}px)`;
      } else {
        const centerLeft = initialLeft + size / 2;
        startClipPath = `inset(${initialTop}px ${rect.width - centerLeft}px ${initialBottom}px ${centerLeft}px)`;
      }
      
      gsap.set(reveal, {
        clipPath: startClipPath,
        opacity: 1,
        force3D: true
      });
      
      requestAnimationFrame(() => {
        isHovered = true;
        
        gsap.to(reveal, {
          clipPath: `inset(${initialTop}px ${initialRight}px ${initialBottom}px ${initialLeft}px)`,
          duration: 1,
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
      
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      
      const rect = card.getBoundingClientRect();
      const size = 200;
      const half = size / 2;
      
      const left = Math.max(0, Math.min(lastMouseX - half, rect.width - size));
      const top = Math.max(0, Math.min(lastMouseY - half, rect.height - size));
      const right = Math.max(0, rect.width - left - size);
      const bottom = Math.max(0, rect.height - top - size);
      
      const cursorX = lastMouseX;
      const edgeThreshold = 150;
      
      let endClipPath;
      
      if (cursorX < edgeThreshold) {
        endClipPath = `inset(${top}px ${rect.width - left}px ${bottom}px ${left}px)`;
      } else if (cursorX > rect.width - edgeThreshold) {
        const rightEdge = left + size;
        endClipPath = `inset(${top}px ${right}px ${bottom}px ${rightEdge}px)`;
      } else {
        const centerLeft = left + size / 2;
        endClipPath = `inset(${top}px ${rect.width - centerLeft}px ${bottom}px ${centerLeft}px)`;
      }
      
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
      arrow.style.color = '#000';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
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
      <div className="relative z-20 flex items-start justify-between p-5 py-7 sm:p-6 sm:py-8 lg:p-8 lg:py-10">
        <div className="flex-1">
          <h3 className="font-light mb-2 text-black">{title}</h3>
          <p className="paragraph text-black">{description}</p>
        </div>
        <ArrowUpRight 
          ref={arrowRef}
          className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 transition-colors duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0 ml-3 sm:ml-3.5 lg:ml-4 text-black" 
          strokeWidth={1.5}
        />
      </div>

      <div
        ref={revealRef}
        className="absolute inset-0 opacity-0 pointer-events-none z-30 overflow-hidden"
        style={{ clipPath: 'inset(50% 50% 50% 50%)' }}
      >
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
        <div className="absolute inset-0">
          <div className="relative flex items-start justify-between p-5 py-7 sm:p-6 sm:py-8 lg:p-8 lg:py-10 h-full">
            <div className="flex-1">
              <h3
                className="font-light mb-2" 
                style={{ WebkitTextStroke: '1px #000', color: 'transparent', paintOrder: 'stroke fill' }}
              >
                {title}
              </h3>
              <p 
                className="paragraph" 
                style={{ WebkitTextStroke: '1px #000', color: 'transparent', paintOrder: 'stroke fill', fontFamily: 'Satoshi, sans-serif', fontWeight: 900 }}
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

// ─── Know More Button (arrow slide animation) ──────────────────────────────────
const KnowMoreButton = () => {
  const buttonRef = useRef(null);
  const textRef = useRef(null);
  const circleRightRef = useRef(null);
  const circleLeftRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const text = textRef.current;
    const circleRight = circleRightRef.current;
    const circleLeft = circleLeftRef.current;

    if (!button) return;

    const handleMouseEnter = () => {
      gsap.to(button, { backgroundColor: '#F7AF19', duration: 0.3, ease: 'power2.out' });
      gsap.to(text, { x: 40, duration: 0.4, ease: 'power2.inOut' });
      gsap.to(circleRight, { scale: 0, duration: 0.4, ease: 'power2.inOut' });
      gsap.to(circleLeft, { scale: 1, duration: 0.4, ease: 'power2.inOut' });
    };

    const handleMouseLeave = () => {
      gsap.to(button, { backgroundColor: '#F7AF19', duration: 0.3, ease: 'power2.in' });
      gsap.to(text, { x: 0, duration: 0.4, ease: 'power2.inOut' });
      gsap.to(circleRight, { scale: 1, duration: 0.4, ease: 'power2.inOut' });
      gsap.to(circleLeft, { scale: 0, duration: 0.4, ease: 'power2.inOut' });
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <Link to="/services">
      <button
        ref={buttonRef}
        className="relative overflow-hidden cursor-pointer rounded-full shadow-lg flex items-center pl-6 pr-2 py-2"
        style={{ backgroundColor: '#F7AF19', color: 'black', willChange: 'transform' }}
      >
        {/* Circle left (hover) - hidden by default */}
        <span
          ref={circleLeftRef}
          className="absolute left-2 w-9 h-9 text-white rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#111827', transform: 'scale(0)' }}
        >
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>

        {/* Text */}
        <span
          ref={textRef}
          className="text-base md:text-lg font-medium whitespace-nowrap mr-4"
        >
          Know more
        </span>

        {/* Circle right (initial) */}
        <span
          ref={circleRightRef}
          className="w-9 h-9 flex-shrink-0 text-white rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#111827' }}
        >
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
    </Link>
  );
};

export default function OurServices() {
  const services = [
    {
      title: 'Brand Identity',
      description: 'Orello is a purpose-driven global design partner',
      bgImage: branding
        },
    {
      title: 'UI/UX & Web Development',
      description: 'Orello is a purpose-driven global design partner',
      bgImage: uiuxx
    },
    {
      title: 'Motion Graphics',
      description: 'Orello is a purpose-driven global design partner',
      bgImage: motion
    },
    {
      title: 'Digital Marketing & SEO',
      description: 'Orello is a purpose-driven global design partner',
      bgImage: digital
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
            <KnowMoreButton />
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