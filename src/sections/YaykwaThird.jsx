import { useState } from "react";
import yaykwa4 from '../assets/images/yaykwa4.png'
import yaykwa5 from '../assets/images/yaykwa5.png'
import yaykwa6 from '../assets/images/yaykwa6.png'
import yaykwa7 from '../assets/images/yaykwa7.png'
import yaykwa8 from '../assets/images/yaykwa8.png'

const images = {
  topLeft: yaykwa4,      
  topRight: yaykwa5,     
  midLeft: yaykwa6,       
  midRight: yaykwa7,     
  bottom: yaykwa8,       
};

export default function PhotoGridSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      style={{ fontFamily: "sans-serif" }}
      className="bg-[#F4EDE2] flex items-center justify-center py-10 sm:py-16 lg:py-24 px-3 sm:px-4"
    >
      <div className="container flex flex-col gap-2 sm:gap-3">

        {/* Row 1: Two equal images - stacked on mobile, side by side on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 h-auto sm:h-[300px] md:h-[350px] lg:h-[400px]">
          <div
            className="relative overflow-hidden rounded-xl sm:rounded-2xl h-[220px] sm:h-full"
            onMouseEnter={() => setHovered("topLeft")}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={images.topLeft}
              alt="Green building material"
              className={`w-full h-full object-cover transition-transform duration-300 ease-in-out ${hovered === "topLeft" ? "scale-110" : "scale-100"}`}
            />
            <div
              className={`absolute inset-0 transition-opacity duration-300 ${
                hovered === "topLeft" ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>

          <div
            className="relative overflow-hidden rounded-xl sm:rounded-2xl h-[220px] sm:h-full"
            onMouseEnter={() => setHovered("topRight")}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={images.topRight}
              alt="Report launch and panel"
              className={`w-full h-full object-cover transition-transform duration-300 ease-in-out ${hovered === "topRight" ? "scale-110" : "scale-100"}`}
            />
            <div
              className={`absolute inset-0 transition-opacity duration-300 ${
                hovered === "topRight" ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        </div>

        {/* Row 2: Two equal images - stacked on mobile, side by side on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 h-auto sm:h-[300px] md:h-[350px] lg:h-[400px]">
          <div
            className="relative overflow-hidden rounded-xl sm:rounded-2xl h-[220px] sm:h-full"
            onMouseEnter={() => setHovered("midLeft")}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={images.midLeft}
              alt="Report on tablet"
              className={`w-full h-full object-cover transition-transform duration-300 ease-in-out ${hovered === "midLeft" ? "scale-110" : "scale-100"}`}
            />
            <div
              className={`absolute inset-0 transition-opacity duration-300 ${
                hovered === "midLeft" ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>

          <div
            className="relative overflow-hidden rounded-xl sm:rounded-2xl h-[220px] sm:h-full"
            onMouseEnter={() => setHovered("midRight")}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={images.midRight}
              alt="Report spread right — materials"
              className={`w-full h-full object-cover transition-transform duration-300 ease-in-out ${hovered === "midRight" ? "scale-110" : "scale-100"}`}
            />
            <div
              className={`absolute inset-0 transition-opacity duration-300 ${
                hovered === "midRight" ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        </div>

        {/* Row 3: Full-width bottom banner image */}
        <div
          className="relative overflow-hidden rounded-xl sm:rounded-2xl h-[200px] sm:h-[250px] md:h-[300px] lg:h-auto"
          onMouseEnter={() => setHovered("bottom")}
          onMouseLeave={() => setHovered(null)}
        >
          <img
            src={images.bottom}
            alt="Report launch group photo"
            className={`w-full h-full object-cover transition-transform duration-300 ease-in-out ${hovered === "bottom" ? "scale-110" : "scale-100"}`}
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
           target="_blank"
    rel="noopener noreferrer"
            href="https://www.yaykwa.com/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium text-gray-700 bg-[#4B433B] hover:border-gray-600 transition-all duration-200 shadow-sm"
          >
            <span className="text-[#F4EDE2]">View Site</span>
          </a>
        </div>
      </div>
    </section>
  );
}