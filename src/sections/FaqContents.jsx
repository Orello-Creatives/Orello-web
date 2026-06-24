import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useCmsContent } from '../hooks/useCmsContent';

const FALLBACK_FAQS = [
    {
      id: 0,
      question: "What does Orello do?",
      answer: "Orello is a founder‑led, global design and development partner. We help organisations build clear brand identities, communicate effectively, and develop digital platforms that support meaningful work."
    },
    {
      id: 1,
      question: "What services does Orello offer?",
      answer: "Orello offers branding, communication design, motion graphics, UI/UX design, website and platform development, and digital marketing support. Our work brings design and development together to create clear and functional digital experiences."
    },
    {
      id: 2,
      question: "Who does Orello work with?",
      answer: "We work with impact‑driven organisations, including NGOs, social enterprises, sustainability‑focused companies, ethical brands, and mission‑led teams. We also collaborate with organisations that value clarity, purpose, and thoughtful digital execution."

    },
    {
      id: 3,
      question: "Is Orello a design agency or a development agency?",
      answer: "Orello is both. We combine design and development under one roof, ensuring that what is designed is also built properly and works well in real‑world use."
    },
    {
      id: 4,
      question: "Does Orello only work with impact-driven organisations?",
      answer: "Impact‑driven work is a strong focus for us, but we are not limited to one sector. We work best with organisations that care about clear communication, thoughtful design, and strong digital platforms."

    },
    {
      id: 5,
      question: "Does Orello work with global clients?",
      answer: "Yes. Orello works with clients across different regions and time zones, supporting organisations that operate across countries, cultures, and diverse audiences."
    },
    {
      id: 6,
      question: "Does Orello operate remotely?",
      answer: "Yes. Orello is a remote‑first team. We collaborate with clients and partners globally using flexible and well‑structured ways of working."
    },
    {
      id: 7,
      question: "What industries has Orello worked with?",
      answer: "Orello has worked with non‑profits and NGOs, sustainability and climate organisations, ethical fashion brands, social enterprises, education and research initiatives, healthcare and wellbeing projects, arts and culture organisations, and mission‑led startups."
    },
    {
      id: 8,
      question: "What makes Orello different from other design studios?",
      answer: "Orello focuses on clarity, collaboration, and long‑term value. We work closely with our clients as partners, combining design and development to build digital work that is usable, consistent, and built to last."
    },
    {
      id: 9,
      question: "Can Orello handle projects end to end?",
      answer: "Yes. Orello supports projects from early thinking and strategy through design, development, content, and ongoing digital support, depending on the needs of the organisation."
    },
    {
      id: 10,
      question: "How do projects usually start with Orello?",
      answer: "Projects typically begin with a conversation to understand context, goals, and challenges. From there, we define scope, timelines, and the most effective way to collaborate."
    },
    {
      id: 11,
      question: "How long does Orello stay involved after launch?",
      answer: "We often continue working with clients beyond launch, supporting updates, improvements, and evolving needs as organisations grow."
    },
    {
      id: 12,
      question: "Does Orello offer ongoing support or maintenance?",
      answer: "Yes. Depending on the project, Orello provides ongoing support, updates, and maintenance to ensure digital platforms remain relevant and effective over time."
    },
    {
      id: 13,
      question: "Is Orello founder-led?",
      answer: "Yes. Orello is a founder‑led studio, which means we stay closely involved in our work and partnerships from start to finish."
    },
    {
      id: 14,
      question: "What is it like to work with Orello?",
      answer: "Orello has worked with organisations across India, the Middle East, Europe, Australia, and other regions globally. We regularly collaborate with teams operating across different countries, time zones, and cultural contexts, supporting work that needs to function across regions."
    },
    {
      id: 15,
      question: "How can I contact Orello?",
      answer: "You can contact Orello by emailing us at hello@orello.io. You can also reach us through the contact numbers listed on our website."
    }
];

const FAQAccordion = () => {
  const [expandedCard, setExpandedCard] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const cmsFaqs = useCmsContent('/faqs', null);
  const faqData = cmsFaqs
    ? cmsFaqs.map((f, idx) => ({ id: idx, question: f.question, answer: f.answer }))
    : FALLBACK_FAQS;

  const handleCardClick = (faqId) => {
    setExpandedCard(expandedCard === faqId ? null : faqId);
  };

  return (
    <div className="bg-[#F4EDE2] py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="space-y-4 sm:space-y-6">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className={`bg-[#FDF6E9] rounded-2xl transition-all duration-500 ease-in-out ${
                expandedCard === faq.id ? 'shadow-lg' : 'shadow-sm'
              }`}
              onMouseEnter={() => setHoveredCard(faq.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Header - Always Visible */}
              <div
                className="flex items-center justify-between p-6 sm:p-8 cursor-pointer"
                onClick={() => handleCardClick(faq.id)}
              >
                <div className="flex-1 text-[#0A0A0A]">
                  <h4 className="text-[20px] font-semibold text-black pr-4">
                    {faq.question}
                  </h4>
                </div>
                
                <button
                  className={`flex-shrink-0 ml-4 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                    expandedCard === faq.id
                      ? 'bg-black'
                      : hoveredCard === faq.id
                      ? 'bg-black'
                      : 'bg-[#E6B74D]'
                  }`}
                >
                  <ArrowUpRight
                    className={`w-6 h-6 sm:w-7 sm:h-7 transition-all duration-300 ${
                      expandedCard === faq.id || hoveredCard === faq.id
                        ? 'text-white rotate-[60deg]'
                        : 'text-black'
                    }`}
                  />
                </button>
              </div>

              {/* Expanded Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedCard === faq.id ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {faq.answer && (
                  <div className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8">
                    <div className="border-t border-gray-300 pt-4 sm:pt-6 md:pt-8">
                      <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-800">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;