import { useState } from "react";
import comma from '../assets/logos/comma.svg'
import roshini from '../assets/logos/roshni.svg'
const testimonials = [
  {
    id: 1,
    quote:
      "Orello Creatives designed impactful, visually stunning collateral for Villgro's GBM event. From Reports to brochures to standees, every item was crafted with detail and attention. The team's design expertise helped us leave a lasting impression on our audience and incredible experience!",
    name: "Roshini Muthukumar",
    role: "Manager Ecosystem Development",
    avatar: roshini, 
  },
  
];

export default function TestimonialSection() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section
      style={{ fontFamily: " sans-serif" }}
      className="bg-[#F9F5ED] py-16 sm:py-24 px-4"
    >
      {/* Heading */}
      <h2 className="text-center text-4xl md:text-5xl text-[#1a1a1a] mb-10 tracking-tight leading-tight">
        We love a <strong className="font-bold">happy client</strong>
      </h2>

      {/* Card */}
      <div className="container bg-white rounded-2xl shadow-sm">
        {/* Quote mark */}
        <div className="px-6 sm:px-12 md:px-16 lg:px-24 py-8 sm:py-12 md:py-16">
        <div className="mb-6">
         <img src={comma} alt="Quote" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"></img>
        </div>

        {/* Quote text */}
        <p className="text-[#0E1010] text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-6xl">
          {current.quote}
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex-shrink-0">
            <img
              src={current.avatar}
              alt={current.name}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover rounded-full"
              onError={(e) => {
                // Fallback initials avatar if image missing
                e.target.style.display = "none";
                e.target.parentNode.classList.add("initials-fallback");
              }}
            />
          </div>
          <div>
            <p className="font-semibold text-[#1a1a1a] text-sm sm:text-base leading-tight">
              {current.name}
            </p>
            <p className="text-[#C47D1E] text-xs sm:text-sm mt-0.5 font-medium">
              {current.role}
            </p>
          </div>
        </div>
</div>
        
      </div>

      <style>{`
        .initials-fallback {
          display: flex !important;
          align-items: center;
          justify-content: center;
          background: #e8dcc8;
          color: #C47D1E;
          font-weight: 700;
          font-size: 1.1rem;
        }
      `}</style>
    </section>
  );
}