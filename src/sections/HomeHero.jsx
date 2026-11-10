import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from '../components/Navbar'
gsap.registerPlugin(ScrollTrigger);
import video from '../assets/videos/orello-hero.mp4'


export default function CreativePartnerHero() {
  const containerRef = useRef(null);
  const circleRefs = useRef([]);
  const transitionArcRefs = useRef([]);
  const videoBoxRef = useRef(null);
  const cursorRef = useRef(null);


  useEffect(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    gsap.killTweensOf(videoBoxRef.current);
    gsap.set(videoBoxRef.current, { clearProps: "all" });

    gsap.config({ 
      force3D: true,
      nullTargetWarn: false
    });

    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    const targetRotation = isMobile ? 4 : 10;

    const mm = gsap.matchMedia();

    mm.add("(max-width: 767px)", () => {
      gsap.set(videoBoxRef.current, {
        top: "52%",
        left: "50%",
        right: "auto",
        xPercent: -50,
        yPercent: 0,
        rotation: 4,
        width: "88vw",
        height: "50vw",
        borderRadius: "0.5rem",
        scale: 1,
      });

      gsap.from(videoBoxRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });

    /* ========== TABLET INITIAL STATE ========== */
    mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
      gsap.set(videoBoxRef.current, {
        top: "26%",
        right: "14%",
        left: "auto",
        xPercent: 0,
        yPercent: 0,
        rotation: 10,
        width: "240px",
        height: "150px",
        borderRadius: "0.75rem",
        scale: 1,
      });
    });

    /* ========== DESKTOP INITIAL STATE ========== */
    mm.add("(min-width: 1024px)", () => {
      gsap.set(videoBoxRef.current, {
        top: "21%",
        right: "24%",
        left: "auto",
        xPercent: 0,
        yPercent: 0,
        rotation: 10,
        width: "300px",
        height: "184px",
        borderRadius: "1rem",
        scale: 1,
      });
    });

    gsap.set(".hero-container", {
      y: 0
    });

    const tl = gsap.timeline();

    tl.fromTo(
      ".hero-text",
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.4,
        stagger: 0.18,
        ease: "power4.out",
      }
    );

    gsap.set(videoBoxRef.current, { scale: 0, opacity: 0 });
    gsap.to(videoBoxRef.current, {
      scale: 1,
      rotation: targetRotation,
      opacity: 1,
      duration: 1.4,
      delay: 0.8,
      ease: "elastic.out(1, 0.6)",
    });

    circleRefs.current.forEach((circle) => {
      if (circle) {
        gsap.to(circle, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "40% top",
            scrub: 2,
            anticipatePin: 1,
          },
          scale: 8,
          keyframes: [
            { opacity: 0.6, duration: 0.3, ease: "power2.in" },
            { opacity: 0, duration: 0.7, ease: "power2.out" },
          ],
          ease: "power2.inOut",
        });
      }
    });

    transitionArcRefs.current.forEach((arc) => {
      if (arc) {
        gsap.fromTo(
          arc,
          { 
            scale: 1, 
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "40% top",
              scrub: 2,
              anticipatePin: 1,
            },
            scale: 8,
            opacity: 0.7,
            ease: "power2.inOut",
          }
        );
      }
    });

    // Video box: moves to center and grows to fill the complete screen as the
    // user scrolls, then HOLDS at fullscreen (no tween touches it again) until
    // the exit fade below, so the video is always fully on screen before the
    // page is allowed to move on to the next section.
    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "22% top",
        end: "52% top",
        scrub: 1.5,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    })
    .to(videoBoxRef.current, {
      top: "50%",
      left: "50%",
      right: "auto",
      xPercent: -50,
      yPercent: -50,
      rotation: 0,
      ease: "power2.inOut",
      duration: 0.4,
    })
    .to(videoBoxRef.current, {
      width: "100vw",
      height: "100vh",
      borderRadius: "0px",
      ease: "power2.inOut",
      duration: 0.6,
    }, "-=0.1");

    gsap.fromTo(
      ".arrow-down",
      { y: 0 },
      {
        y: 12,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      }
    );

    // Hero text clears out of the way before the video takes over the screen.
    gsap.to(".hero-container", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "15% top",
        end: "32% top",
        scrub: 1.5,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
      y: "-120vh",
      opacity: 0,
      ease: "power2.inOut",
    });

    // The video sits fullscreen, untouched, from 52% to 85% of the scroll
    // range (a long hold) before this final fade clears it so the next
    // section can take over cleanly.
    gsap.to(videoBoxRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "85% top",
        end: "100% top",
        scrub: 1.5,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
      opacity: 0,
      ease: "power2.inOut",
    });

    window.scrollTo(0, 0);
    
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const move = (e) => {
      const { clientX, clientY } = e;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;

      gsap.to(cursorRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.4,
        ease: "power3.out",
      });

      gsap.to(".layer-front", {
        x: (clientX - cx) / 20,
        y: (clientY - cy) / 20,
        rotation: -2,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.to(".layer-middle", {
        x: (clientX - cx) / 40,
        y: (clientY - cy) / 40,
        rotation: -2,
        duration: 0.9,
        ease: "power2.out",
      });

      gsap.to(".layer-back", {
        x: (clientX - cx) / 80,
        y: (clientY - cy) / 80,
        rotation: -2,
        duration: 1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="bg-[#eadecf] cursor-none pb-0 lg:pb-50">
      <div
        ref={cursorRef}
        className="hidden md:block fixed w-6 h-6 bg-amber-500 rounded-full pointer-events-none mix-blend-difference"
        style={{ transform: "translate(-50%, -50%)", willChange: "transform" }}
      />
      <Navbar />
      <div ref={containerRef} className="relative h-[350vh]">
        <div className="fixed inset-0 flex items-end justify-center pointer-events-none z-0 overflow-hidden">
          <div
            ref={(el) => (circleRefs.current[1] = el)}
            className="absolute w-[120vw] h-[110vw] bg-[#fdf6e9] left-1/2"
            style={{ borderRadius: "50%", bottom: "-60vw", opacity: 0.6, transform: "translateX(-50%)", willChange: "transform, opacity" }}
          />
          <div
            ref={(el) => (circleRefs.current[2] = el)}
            className="absolute w-[95vw] h-[85vw] bg-[#eadecf] left-1/2"
            style={{ borderRadius: "50%", bottom: "-50vw", opacity: 0.6, transform: "translateX(-50%)", willChange: "transform, opacity" }}
          />
          <div
            ref={(el) => (circleRefs.current[3] = el)}
            className="absolute w-[70vw] h-[65vw] bg-[#fdf6e9] left-1/2"
            style={{ borderRadius: "50%", bottom: "-40vw", opacity: 0.6, transform: "translateX(-50%)", willChange: "transform, opacity" }}
          />
          <div
            ref={(el) => (circleRefs.current[4] = el)}
            className="absolute w-[45vw] h-[45vw] bg-[#eadecf] left-1/2"
            style={{ borderRadius: "50%", bottom: "-30vw", opacity: 0.6, transform: "translateX(-50%)", willChange: "transform, opacity" }}
          />

          <div
            ref={(el) => (transitionArcRefs.current[0] = el)}
            className="absolute w-[40vw] h-[40vw] bg-[#F4EDE2] left-1/2"
            style={{ borderRadius: "50%", bottom: "-40vw", opacity: 0, transform: "translateX(-50%)", willChange: "transform, opacity" }}
          />
          <div
            ref={(el) => (transitionArcRefs.current[1] = el)}
            className="absolute w-[15vw] h-[0vw] bg-[#f4ede2] left-1/2"
            style={{ borderRadius: "50%", bottom: "-40vw", opacity: 0, transform: "translateX(-50%)", willChange: "transform, opacity" }}
          />
        </div>

        {/* Hero text */}
        <div className="fixed inset-0 flex items-start sm:items-start lg:items-center justify-center z-10 px-4 sm:px-6 md:px-8 pointer-events-none pt-48 xs:pt-56 sm:pt-64 md:pt-80 lg:pt-20 pb-5 overflow-hidden">
          <div className="hero-container" style={{ willChange: "transform" }}>
            <h1 className="leading-[0.9] tracking-tight text-[3.8rem] xs:text-[4.4rem] sm:text-[4.5rem] md:text-[6.5rem] lg:text-[10rem]">
              <div className="font-black text-[#4B433B] ml-2 sm:ml-3 md:ml-4" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 900 }}>YOUR</div>

              <div className="relative inline-block my-1 sm:my-1.5 md:my-2" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 900 }}>
                <div
                  className="layer-back absolute inset-0 text-[#4b433b]"
                  style={{
                    transform: "translate(8px,8px) sm:translate(12px,12px) md:translate(20px,20px)",
                    willChange: "transform"
                  }}
                >
                  CREATIVE
                </div>

                <div
                  className="layer-middle absolute inset-0 text-[#d98127]"
                  style={{
                    transform: "translate(4px,4px) sm:translate(6px,6px) md:translate(8px,8px)",
                    willChange: "transform"
                  }}
                >
                  CREATIVE
                </div>

                <div
                  className="layer-front hero-text relative text-[#f7af19]"
                  style={{
                    textShadow: "3px 3px 10px rgba(0,0,0,0.15), 6px 6px 18px rgba(0,0,0,0.15)",
                    willChange: "transform"
                  }}
                >
                  CREATIVE
                </div>
              </div>

              <div className="hero-text font-black text-[#4b433b]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 900 }}>PARTNER</div>
            </h1>
          </div>
        </div>

        {/* Video box — object-cover restored, no bg-black */}
        <div
          ref={videoBoxRef}
          className="fixed rounded-lg overflow-hidden shadow-2xl z-5"
          style={{ top: "58%", right: "24%", width: "300px", height: "184px", willChange: "transform, width, height" }}
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}