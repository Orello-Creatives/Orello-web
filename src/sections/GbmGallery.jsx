import { useState } from "react";
import gbm2 from '../assets/images/gbm2.png'
import gbm3 from '../assets/images/gbm3.png'
import gbm4 from '../assets/images/gbm4.png'
import gbm5 from '../assets/images/gbm5.png'
import gbm6 from '../assets/images/gbm6.png'
import gbm7 from '../assets/images/gbm7.png'
import gbm8 from '../assets/images/gbm8.png'


const images = {
  topLeft: gbm7,      
  topRight: gbm5,     
  midLeft: gbm6,       
  midRight: gbm5,     
  innerLeft: gbm3,   
  innerRight: gbm4,   
  bottom: gbm2,       
};

export default function PhotoGridSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      style={{ fontFamily: "sans-serif" }}
      className="bg-[#F4EDE2]  flex items-center justify-center py-16 sm:py-24 px-4"
    >
      <div className="container flex flex-col gap-3">

        {/* Row 1–2 Combined: Two stacked squares on left, one tall image on right */}
        <div className="grid grid-cols-2 gap-3">
          {/* Left column: two stacked square images */}
          <div className="flex flex-col gap-3">
            {/* Top Left */}
            <div
              className="relative overflow-hidden rounded-2xl aspect-square"
              onMouseEnter={() => setHovered("topLeft")}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={images.topLeft}
                alt="Green building material"
                className={`w-full h-full object-cover transition-transform duration-300 ease-in-out ${hovered === "topLeft" ? "scale-110" : "scale-100"}`}
              />
              <div
                className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${
                  hovered === "topLeft" ? "opacity-0" : "opacity-100"
                }`}
              />
            </div>

            {/* Mid Left (stacked below top left) */}
            <div
              className="relative overflow-hidden rounded-2xl aspect-square"
              onMouseEnter={() => setHovered("midLeft")}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={images.midLeft}
                alt="Report on tablet"
                className={`w-full h-full object-cover transition-transform duration-300 ease-in-out ${hovered === "midLeft" ? "scale-110" : "scale-100"}`}
              />
              <div
                className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${
                  hovered === "midLeft" ? "opacity-0" : "opacity-100"
                }`}
              />
            </div>
          </div>

          {/* Right column: one tall portrait image spanning full height */}
          <div
            className="relative overflow-hidden rounded-2xl"
            onMouseEnter={() => setHovered("topRight")}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={images.topRight}
              alt="Report launch and panel"
              className={`w-full h-full object-cover transition-transform duration-300 ease-in-out ${hovered === "topRight" ? "scale-110" : "scale-100"}`}
            />
            <div
              className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${
                hovered === "topRight" ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        </div>

        {/* Row 3: Two equal columns (open report pages) */}
        <div className="grid grid-cols-2 gap-3">
          <div
            className="relative overflow-hidden rounded-2xl aspect-[4/3] "
            onMouseEnter={() => setHovered("innerLeft")}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={images.innerLeft}
              alt="Report spread left"
              className={`w-full h-full object-cover transition-transform duration-300 ease-in-out ${hovered === "innerLeft" ? "scale-110" : "scale-100"}`}
            />
            <div
              className={`absolute inset-0 bg-black/10 "
              }`}
            />
          </div>

          <div
            className="relative overflow-hidden rounded-2xl aspect-[4/3] "
            onMouseEnter={() => setHovered("innerRight")}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={images.innerRight}
              alt="Report spread right — materials"
              className={`w-full h-full object-cover transition-transform duration-300 ease-in-out ${hovered === "innerRight" ? "scale-110" : "scale-100"}`}
            />
            <div
              className={`absolute inset-0 bg-black/10 "
              }`}
            />
          </div>
        </div>

        {/* Row 4: Full-width bottom banner image */}
        <div
          className="relative overflow-hidden rounded-2xl "
          onMouseEnter={() => setHovered("bottom")}
          onMouseLeave={() => setHovered(null)}
        >
          <img
            src={images.bottom}
            alt="Report launch group photo"
            className={`w-full h-full object-contain transition-transform duration-300 ease-in-out ${hovered === "bottom" ? "scale-110" : "scale-100"}`}
          />
          
        </div>

        {/* CTA Button */}
        <div className="mt-2">
          <a
            href="https://villgro.org/storage/2025/07/GBM-Market-Study-Report-2025.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border  text-sm font-medium text-gray-700 bg-[#4B433B]  hover:border-gray-600 transition-all duration-200 shadow-sm"
          >
            <span className="text-[#F4EDE2]">View Report</span>
        
          </a>
        </div>
      </div>
    </section>
  );
}