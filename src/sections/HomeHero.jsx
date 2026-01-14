import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CreativePartnerHero() {
  const containerRef = useRef(null);
  const circleRefs = useRef([]);
  const transitionArcRefs = useRef([]);
  const videoBoxRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".hero-text",
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      videoBoxRef.current,
      { scale: 0, rotation: 0, opacity: 0 },
      {
        scale: 1,
        rotation: 10,
        opacity: 1,
        duration: 1.2,
        delay: 0.8,
        ease: "back.out(1.4)",
      }
    );

    // Background arcs animation - First phase (0% to 40% scroll)
    circleRefs.current.forEach((circle) => {
      gsap.to(circle, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "40% top",
          scrub: 1,
        },
        scale: 8,
        keyframes: [
          { opacity: 0.6, duration: 0.3 },
          { opacity: 0, duration: 0.7 },
        ],
        ease: "power1.inOut",
      });
    });

    // Animation for transition arcs - they appear as original arcs fade (0% to 40% scroll)
    transitionArcRefs.current.forEach((arc, index) => {
      const delay = index * 0.1;
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
            scrub: 1,
          },
          scale: 8,
          opacity: 0.7,
          ease: "power1.inOut",
        }
      );
    });

    // Video movement and straightening - STARTS AFTER arcs (40% to 60% scroll)
    gsap.fromTo(videoBoxRef.current,
      {
        top: "15%",
        right: "24%",
        rotation: 10,
      },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "40% top",
          end: "60% top",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
        top: "50%",
        right: "50%",
        rotation: 0,
        ease: "none",
      }
    );

    // Video expansion - happens after movement (60% to 80% scroll)
    gsap.to(videoBoxRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "60% top",
        end: "80% top",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
      width: "70vw",
      height: "80vh",
      borderRadius: "1rem",
      right: "15vw",
      top: "10vh",
      ease: "none",
    });
     
    
    gsap.fromTo(
      ".arrow-down",
      { y: 0 },
      {
        y: 12,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }
    );

    // Animate hero text container moving up when card moves (40% to 60% scroll)
    gsap.to(".hero-container", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "40% top",
        end: "60% top",
        scrub: 1,
      },
      y: "-80vh",
      ease: "none",
    });
  }, []);

  useEffect(() => {
    const move = (e) => {
      const { clientX, clientY } = e;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;

      gsap.to(cursorRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(".layer-front", {
        x: (clientX - cx) / 20,
        y: (clientY - cy) / 20,
        rotation: -2,
        duration: 0.6,
      });

      gsap.to(".layer-middle", {
        x: (clientX - cx) / 40,
        y: (clientY - cy) / 40,
         rotation: -2,
        duration: 0.7,
      });

      gsap.to(".layer-back", {
        x: (clientX - cx) / 60,
        y: (clientY - cy) / 60,
         rotation: -2,
        duration: 0.8,
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="bg-[#eadecf] cursor-none  pb-174">
      {/* Cursor */}
      <div
        ref={cursorRef}
        className="hidden md:block fixed w-6 h-6 bg-amber-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      <div ref={containerRef} className="relative h-[200vh]">
        {/* FIXED ARCS CONTAINER */}
        <div className="fixed inset-0 flex items-end justify-center pointer-events-none z-0 overflow-hidden">
          {/* Initial Arcs - Light colored, fade out on scroll */}
          <div
            ref={(el) => (circleRefs.current[1] = el)}
            className="absolute w-[120vw] h-[110vw] bg-[#fdf6e9] left-1/2"
            style={{ borderRadius: "50%", bottom: "-60vw", opacity: 0.6, transform: "translateX(-50%)" }}
          />
          <div
            ref={(el) => (circleRefs.current[2] = el)}
            className="absolute w-[95vw] h-[85vw] bg-[#eadecf] left-1/2"
            style={{ borderRadius: "50%", bottom: "-50vw", opacity: 0.6, transform: "translateX(-50%)" }}
          />
          <div
            ref={(el) => (circleRefs.current[3] = el)}
            className="absolute w-[70vw] h-[65vw] bg-[#fdf6e9] left-1/2"
            style={{ borderRadius: "50%", bottom: "-40vw", opacity: 0.6, transform: "translateX(-50%)" }}
          />
          <div
            ref={(el) => (circleRefs.current[4] = el)}
            className="absolute w-[45vw] h-[45vw] bg-[#eadecf] left-1/2"
            style={{ borderRadius: "50%", bottom: "-30vw", opacity: 0.6, transform: "translateX(-50%)" }}
          />

          {/* New Transition Arcs - Dark colored, appear during scroll with constant gaps */}
          <div
            ref={(el) => (transitionArcRefs.current[4] = el)}
            className="absolute w-[40vw] h-[40vw] bg-[#F4EDE2] left-1/2"
            style={{ borderRadius: "50%", bottom: "-40vw", opacity: 0, transform: "translateX(-50%)" }}
          />
          <div
            ref={(el) => (transitionArcRefs.current[4] = el)}
            className="absolute w-[15vw] h-[0vw] bg-[#f4ede2] left-1/2"
            style={{ borderRadius: "50%", bottom: "-40vw", opacity: 0, transform: "translateX(-50%)" }}
          />
        </div>

        {/* FIXED TEXT CONTAINER */}
        <div className="fixed inset-0 flex items-center justify-center z-10 px-8 pointer-events-none">
          <div className="hero-container">
            <h1 className="leading-[0.9] tracking-tight text-[6.5rem] sm:text-[8rem] md:text-[10rem]">
              <div className="font-black text-[#4B433B] ml-4" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 900 }}>YOUR</div>

              <div className="relative inline-block my-2" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 900 }}>
                <div
                  className="layer-back absolute inset-0 text-[#4b433b]"
                  style={{
                    transform: "translate(16px,16px)",
                    
                  }}
                >
                  CREATIVE
                </div>

                <div
                  className="layer-middle absolute inset-0 text-[#d98127] "
                  style={{
                    transform: "translate(8px,8px)",
                    
                  }}
                >
                  CREATIVE
                </div>

                <div
                  className="layer-front hero-text relative text-[#f7af19]"
                  style={{
                    
                    textShadow: "6px 6px 18px rgba(0,0,0,0.15)",
                  }}
                >
                  CREATIVE
                </div>
              </div>

              <div className="hero-text font-black text-[#4b433b]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 900 }}>PARTNER</div>
            </h1>
          </div>

        </div>

        {/* Video Box */}
        <div
          ref={videoBoxRef}
          className="fixed w-75 h-46 bg-gray-400 rounded-lg overflow-hidden shadow-2xl z-5"
          style={{ top: "15%", right: "24%" }}
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-creative-work-in-a-film-production-studio-42677-large.mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}