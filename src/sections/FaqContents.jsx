import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useCmsContent } from '../hooks/useCmsContent';

const FAQAccordion = () => {
  const [expandedCard, setExpandedCard] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const cmsFaqs = useCmsContent('/faqs', null);
  const faqData = cmsFaqs
    ? cmsFaqs.map((f, idx) => ({ id: idx, question: f.question, answer: f.answer }))
    : [];

  const handleCardClick = (faqId) => {
    setExpandedCard(expandedCard === faqId ? null : faqId);
  };

  if (faqData.length === 0) return null;

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