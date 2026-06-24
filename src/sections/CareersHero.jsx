import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import join1 from '../assets/logos/join1.svg'
import join2 from '../assets/logos/join2.svg'
import join3 from '../assets/logos/join3.svg'
import join4 from '../assets/logos/join4.svg'

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: join1,
    title: "Real-world work",
    description:
      "You'll work on projects connected to real organisations and real communities, supporting work that has meaning beyond deliverables.",
  },
  {
    icon: join2,
    title: "Completely remote",
    description:
      "Work from wherever you're based. We're fully remote, with flexibility built into how we collaborate, communicate, and structure our time.",
  },
  {
    icon: join3,
    title: "Thoughtful collaborations",
    description:
      "You'll work closely with designers, developers, and strategists, sharing context and shaping work together rather than working in silos.",
  },
  {
    icon: join4,
    title: "Hands on experience",
    description:
      "You'll be involved across projects from early thinking to final delivery, gaining practical experience and a deeper understanding of how work comes together.",
  },
];

export default function JoinTeamSection() {
  const containerRef = useRef(null);

  useEffect(() => {
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

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#eadecf] py-20 sm:py-28 md:py-32 lg:py-40"
    >
      {/* STATIC SEMICIRCLE BACKGROUND */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute w-[120vw] h-[110vw] bg-[#fdf6e9] left-1/2"
          style={{ borderRadius: "50%", bottom: "-60vw", opacity: 0.6, transform: "translateX(-50%)" }}
        />
        <div
          className="absolute w-[95vw] h-[85vw] bg-[#eadecf] left-1/2"
          style={{ borderRadius: "50%", bottom: "-50vw", opacity: 0.6, transform: "translateX(-50%)" }}
        />
        <div
          className="absolute w-[70vw] h-[65vw] bg-[#fdf6e9] left-1/2"
          style={{ borderRadius: "50%", bottom: "-40vw", opacity: 0.6, transform: "translateX(-50%)" }}
        />
        <div
          className="absolute w-[45vw] h-[45vw] bg-[#eadecf] left-1/2"
          style={{ borderRadius: "50%", bottom: "-30vw", opacity: 0.6, transform: "translateX(-50%)" }}
        />
      </div>

      {/* CONTENT */}
      <div className="team-content relative z-10 container">
        <div className="text-center mb-12 mt-16 sm:mt-0 sm:mb-16 lg:mb-20">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#4B433B] mb-3 sm:mb-4 md:mb-6"
            style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 900 }}
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
              <div className="w-10 h-10 rounded-full bg-[#F7AF19] mb-4 flex items-center justify-center">
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  className="w-6 h-6 object-contain"
                />
              </div>
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