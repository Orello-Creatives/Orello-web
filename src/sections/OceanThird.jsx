import { useState } from "react";
import ocean4 from '../assets/images/ocean4.png'
import ocean5 from '../assets/images/ocean5.png'
import ocean6 from '../assets/images/ocean6.png'
import ocean7 from '../assets/images/ocean7.png'
import ocean8 from '../assets/images/ocean8.png'

const images = {
  topLeft: ocean4,      
  topRight: ocean5,     
  midLeft: ocean6,       
  midRight: ocean7,     
  bottom: ocean8,       
};

export default function PhotoGridSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      style={{ fontFamily: "sans-serif" }}
      className="bg-[#F4EDE2] flex items-center justify-center py-10 sm:py-16 lg:py-24 px-3 sm:px-4"
    >
      <div className="container flex flex-col gap-2 sm:gap-3">

        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          <div
            className="relative overflow-hidden rounded-xl sm:rounded-2xl h-[220px] sm:h-[280px] md:h-[340px] lg:h-[400px]"
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
            className="relative overflow-hidden rounded-xl sm:rounded-2xl h-[220px] sm:h-[280px] md:h-[340px] lg:h-[400px]"
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

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          <div
            className="relative overflow-hidden rounded-xl sm:rounded-2xl h-[220px] sm:h-[280px] md:h-[340px] lg:h-[400px]"
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
            className="relative overflow-hidden rounded-xl sm:rounded-2xl h-[220px] sm:h-[280px] md:h-[340px] lg:h-[400px]"
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

        {/* Row 3: Full-width bottom banner */}
        <div
          className="relative overflow-hidden rounded-xl sm:rounded-2xl h-[200px] sm:h-[260px] md:h-[320px] lg:h-[380px]"
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
            href="https://www.ocean.build"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium text-gray-700 bg-[#4B433B] hover:border-gray-600 transition-all duration-200 shadow-sm"
          >
            <span className="text-[#F4EDE2]">View Site</span>
          </a>
        </div>

      </div>
    </section>
  );
}