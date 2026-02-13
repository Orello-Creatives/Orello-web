import { useState } from "react";
import exp2 from '../assets/images/exp2.png'
import exp3 from '../assets/images/exp3.png'
import exp4 from '../assets/images/exp4.png'
import exp5 from '../assets/images/exp5.png'
import exp6 from '../assets/images/exp6.png'





const images = {
  topLeft: exp2,      
  topRight: exp3,     
  midLeft: exp4,       
  midRight: exp5,     
  bottom: exp6,       
};

export default function PhotoGridSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      style={{ fontFamily: "sans-serif" }}
      className="bg-[#F4EDE2]  flex items-center justify-center py-16 sm:py-24 px-4"
    >
      <div className="container flex flex-col gap-3">

        {/* Row 1: Two equal square images */}
        <div className="grid grid-cols-2 gap-3">
          <div
            className="relative overflow-hidden rounded-2xl aspect-square"
            onMouseEnter={() => setHovered("topLeft")}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={images.topLeft}
              alt="Green building material"
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${
                hovered === "topLeft" ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>

          <div
            className="relative overflow-hidden rounded-2xl aspect-square"
            onMouseEnter={() => setHovered("topRight")}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={images.topRight}
              alt="Report launch and panel"
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${
                hovered === "topRight" ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        </div>

        {/* Row 2: Two equal square images */}
        <div className="grid grid-cols-2 gap-3">
          <div
            className="relative overflow-hidden rounded-2xl aspect-square"
            onMouseEnter={() => setHovered("midLeft")}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={images.midLeft}
              alt="Report on tablet"
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${
                hovered === "midLeft" ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>

          <div
            className="relative overflow-hidden rounded-2xl aspect-square"
            onMouseEnter={() => setHovered("midRight")}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={images.midRight}
              alt="Report spread right — materials"
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${
                hovered === "midRight" ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        </div>

        {/* Row 3: Full-width bottom banner image */}
        <div
          className="relative overflow-hidden rounded-2xl "
          onMouseEnter={() => setHovered("bottom")}
          onMouseLeave={() => setHovered(null)}
        >
          <img
            src={images.bottom}
            alt="Report launch group photo"
            className="w-full h-full object-cover"
          />
          <div
            className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${
              hovered === "bottom" ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>

        {/* CTA Button */}
        <div className="mt-2">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border  text-sm font-medium text-gray-700 bg-[#4B433B]  hover:border-gray-600 transition-all duration-200 shadow-sm"
          >
            <span className="text-[#F4EDE2]">View Report</span>
        
          </a>
        </div>
      </div>
    </section>
  );
}