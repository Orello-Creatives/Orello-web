import React from "react";

export default function FAQHero() {
  return (
    <section className="relative bg-[#FCF4E9] overflow-hidden py-32 sm:py-40">
      
      {/* Background Semi-Circle Layers */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
        <div
          className="absolute w-[140vw] h-[140vw] bg-[#F4EDE2]"
          style={{
            borderRadius: "50%",
            bottom: "-90vw",
          }}
        />
        <div
          className="absolute w-[110vw] h-[110vw] bg-[#EFE6D9]"
          style={{
            borderRadius: "50%",
            bottom: "-75vw",
          }}
        />
        <div
          className="absolute w-[80vw] h-[80vw] bg-[#F7F1E7]"
          style={{
            borderRadius: "50%",
            bottom: "-60vw",
          }}
        />

         <div
          className="absolute w-[50vw] h-[50vw] bg-[#EFE6D9]"
          style={{
            borderRadius: "50%",
            bottom: "-45vw",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <h2
         className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#4B433B] mb-3 sm:mb-4 md:mb-6"
                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 900 }}
        >
          Frequently Asked Questions
        </h2>
      </div>
    </section>
  );
}
