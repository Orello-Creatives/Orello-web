import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProcessSection = () => {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cardsContainer = cardsContainerRef.current;
    const overlay = overlayRef.current;
    const cards = cardsContainer.querySelectorAll('.process-card');

    // Create the scroll-triggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=3000',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Set initial states - first two cards visible
    gsap.set(overlay, { width: '33%' });
    gsap.set(cards, { opacity: 1 });
    cards.forEach((card, index) => {
      if (index >= 2) {
        gsap.set(card, { x: 100, opacity: 0 });
      }
    });

    // Animate the yellow overlay expanding
    tl.to(overlay, {
      width: '100%',
      ease: 'none',
      duration: 1,
    });

    // Animate remaining cards to slide in
    cards.forEach((card, index) => {
      if (index >= 2) {
        tl.to(
          card,
          {
            x: 0,
            opacity: 1,
            ease: 'power2.out',
            duration: 0.3,
          },
          index * 0.15 - 0.1
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const processSteps = [
    {
      number: '01',
      title: 'Audit & Align',
      description:
        'We begin by understanding your organization, context, audience, and goals. This helps us align early and work as an extension of your team.',
    },
    {
      number: '02',
      title: 'Define Direction',
      description:
        'We clarify positioning, priorities, and direction, ensuring every decision is grounded in purpose and real needs.',
    },
    {
      number: '03',
      title: 'Design with Intent',
      description:
        'We design identities, communication, and experiences with clarity and usability in mind, across brand and digital touchpoints.',
    },
    {
      number: '04',
      title: 'Build & Implement',
      description:
        'We develop digital platforms and assets that are practical, scalable, and ready for real-world use.',
    },
    {
      number: '05',
      title: 'Refine & Evolve',
      description:
        'We review, refine, and adapt based on feedback and performance, supporting your work as it grows and changes.',
    },
  ];

  return (
    <div className=" bg-[#F9F5ED]">
   {/* Process Section */}
      <section ref={sectionRef} className="relative h-screen overflow-hidden bg-[#f5f3ed]">
        <div className="container mx-auto px-8 py-16 h-full">
          <h2 className="text-6xl font-bold mb-16 leading-tight">
            Our
            <br />
            Process
          </h2>

          {/* Cards Container */}
          <div ref={cardsContainerRef} className="relative flex gap-0 items-stretch">
            {/* Yellow Overlay with Semi-Circle */}
            <div
              ref={overlayRef}
              className="absolute top-0 left-0 h-full bg-[#FFCE69] z-0"
              style={{ 
                width: '0%',
                borderTopRightRadius: '9999px',
                borderBottomRightRadius: '9999px'
              }}
            ></div>

            {/* Process Cards */}
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`process-card relative flex-shrink-0 border border-[#D98127] p-8 ${
                  index === 0 
                    ? 'w-[280px]' 
                    : index === 1 
                    ? 'w-[230px]' 
                    : 'w-[250px]'
                } h-[300px] flex flex-col justify-start bg-transparent`}
                style={{
                  opacity: 1,
                  transform: 'translateX(0)',
                }}
              >
                <div className="relative z-10">
                  <div className="text-5xl font-bold mb-6 text-[#D98127]">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessSection;