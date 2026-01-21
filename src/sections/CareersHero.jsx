import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function JoinTeamSection() {
  const containerRef = useRef(null);
  const circleRefs = useRef([]);

  useEffect(() => {
    gsap.config({
      force3D: true,
      nullTargetWarn: false,
    });

    // === SAME SEMICIRCLE GSAP AS HERO ===
    circleRefs.current.forEach((circle) => {
      if (!circle) return;

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
    });

    // Content animation (unchanged)
    gsap.fromTo(
      ".team-content",
      { y: 60, opacity: 0 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "top 40%",
          scrub: 1,
        },
        y: 0,
        opacity: 1,
        ease: "power2.out",
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const benefits = [
    {
      icon: "💼",
      title: "Real-world work",
      description:
        "You’ll work on projects connected to real organisations and real communities, supporting work that has meaning beyond deliverables.",
    },
    {
      icon: "🌍",
      title: "Completely remote",
      description:
        "Work from wherever you’re based. We’re fully remote, with flexibility built into how we collaborate, communicate, and structure our time.",
    },
    {
      icon: "🤝",
      title: "Thoughtful collaborations",
      description:
        "You’ll work closely with designers, developers, and strategists, sharing context and shaping work together rather than working in silos.",
    },
    {
      icon: "✋",
      title: "Hands on experience",
      description:
        "You’ll be involved across projects from early thinking to final delivery, gaining practical experience and a deeper understanding of how work comes together.",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#eadecf] py-20 sm:py-28 md:py-32 lg:py-40"
    >
      {/* SEMICIRCLE BACKGROUND (HERO STYLE) */}
      <div className="fixed inset-0 flex items-end justify-center pointer-events-none overflow-hidden z-0">
        <div
          ref={(el) => (circleRefs.current[0] = el)}
          className="absolute w-[120vw] h-[110vw] bg-[#fdf6e9] left-1/2"
          style={{
            borderRadius: "50%",
            bottom: "-60vw",
            opacity: 0.6,
            transform: "translateX(-50%)",
            willChange: "transform, opacity",
          }}
        />
        <div
          ref={(el) => (circleRefs.current[1] = el)}
          className="absolute w-[95vw] h-[85vw] bg-[#eadecf] left-1/2"
          style={{
            borderRadius: "50%",
            bottom: "-50vw",
            opacity: 0.6,
            transform: "translateX(-50%)",
            willChange: "transform, opacity",
          }}
        />
        <div
          ref={(el) => (circleRefs.current[2] = el)}
          className="absolute w-[70vw] h-[65vw] bg-[#fdf6e9] left-1/2"
          style={{
            borderRadius: "50%",
            bottom: "-40vw",
            opacity: 0.6,
            transform: "translateX(-50%)",
            willChange: "transform, opacity",
          }}
        />
        <div
          ref={(el) => (circleRefs.current[3] = el)}
          className="absolute w-[45vw] h-[45vw] bg-[#eadecf] left-1/2"
          style={{
            borderRadius: "50%",
            bottom: "-30vw",
            opacity: 0.6,
            transform: "translateX(-50%)",
            willChange: "transform, opacity",
          }}
        />
        <div
          ref={(el) => (circleRefs.current[4] = el)}
          className="absolute w-[30vw] h-[30vw] bg-[#fdf6e9] left-1/2"
          style={{
            borderRadius: "50%",
            bottom: "-20vw",
            opacity: 0.6,
            transform: "translateX(-50%)",
            willChange: "transform, opacity",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="team-content relative z-10 container">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2
            className=" font-extrabold text-[#402E1D] mb-4 sm:mb-6"
          >
            Join Our Team
          </h2>
          <p className="paragraph text-[#4b433b] max-w-3xl mx-auto">
            Join a team that values thoughtful thinking, careful execution, and collaboration, while working on projects that aim to make a real difference.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {benefits.map((benefit, index) => (
            <div
  key={index}
  className="bg-[#F4EDE2] backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
>
  {/* Yellow circle */}
  <div className="w-10 h-10 rounded-full bg-[#F7AF19] mb-4"></div>

  <h4 className="font-bold text-[#0A0A0A] mb-3">
    {benefit.title}
  </h4>

  <p className="text-md text-[#4b433b]">
    {benefit.description}
  </p>
</div>

          ))}
        </div>
      </div>
    </section>
  );
}
