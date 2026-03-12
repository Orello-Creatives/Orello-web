import { useState } from "react";
import vimg1 from '../assets/images/vimg1.png'
import vimg2 from '../assets/images/vimg2.png'
import vimg3 from '../assets/images/vimg3.png'
import vimg4 from '../assets/images/vimg4.png'
import vimg5 from '../assets/images/vimg5.png'
import vimg6 from '../assets/images/vimg6.png'

const images = {
  topLeft: vimg1,
  topRight: vimg2,
  midLeft: vimg3,
  midRight: vimg4,
  innerLeft: vimg4,
  innerRight: vimg5,
  bottom: vimg6,
};

export default function PhotoGridSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      style={{ fontFamily: "sans-serif" }}
      className="bg-[#F4EDE2] flex items-center justify-center py-10 sm:py-16 lg:py-24 "
    >
      <div className="container flex flex-col gap-2 sm:gap-3">

        {/* Row 1–2 Combined: Two stacked squares on left, one tall image on right */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3">

          {/* Left column: two stacked images */}
          <div className="flex flex-col gap-2 sm:gap-3">
            {/* Top Left */}
            <div
              className="relative overflow-hidden rounded-xl sm:rounded-2xl h-[140px] sm:h-[180px] md:h-[220px] lg:h-[360px]"
              onMouseEnter={() => setHovered("topLeft")}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={images.topLeft}
                alt="Green building material"
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 transition-opacity duration-300 ${
                  hovered === "topLeft" ? "opacity-0" : "opacity-100"
                }`}
              />
            </div>

            {/* Mid Left */}
            <div
              className="relative overflow-hidden rounded-xl sm:rounded-2xl h-[140px] sm:h-[180px] md:h-[220px] lg:h-[400px]"
              onMouseEnter={() => setHovered("midLeft")}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={images.midLeft}
                alt="Report on tablet"
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 transition-opacity duration-300 ${
                  hovered === "midLeft" ? "opacity-0" : "opacity-100"
                }`}
              />
            </div>
          </div>

          {/* Right column: one tall portrait image */}
          <div
            className="relative overflow-hidden rounded-xl sm:rounded-2xl h-[288px] sm:h-[368px] md:h-[448px] lg:h-[768px]"
            onMouseEnter={() => setHovered("topRight")}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={images.topRight}
              alt="Report launch and panel"
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 transition-opacity duration-300 ${
                hovered === "topRight" ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        </div>

        {/* Row 3: Two equal columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          <div
            className="relative overflow-hidden rounded-xl sm:rounded-2xl h-[220px] sm:h-[200px] md:h-[240px] lg:h-[380px]"
            onMouseEnter={() => setHovered("innerLeft")}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={images.innerLeft}
              alt="Report spread left"
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${
                hovered === "innerLeft" ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>

          <div
            className="relative overflow-hidden rounded-xl sm:rounded-2xl h-[220px] sm:h-[200px] md:h-[240px] lg:h-[380px]"
            onMouseEnter={() => setHovered("innerRight")}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={images.innerRight}
              alt="Report spread right — materials"
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${
                hovered === "innerRight" ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        </div>

        {/* Row 4: Full-width bottom banner */}
        <div
          className="relative overflow-hidden rounded-xl sm:rounded-2xl h-[200px] sm:h-[260px] md:h-[320px] lg:h-[480px]"
          onMouseEnter={() => setHovered("bottom")}
          onMouseLeave={() => setHovered(null)}
        >
          <img
            src={images.bottom}
            alt="Report launch group photo"
            className="w-full h-full object-cover"
          />
          <div
            className={`absolute inset-0 transition-opacity duration-300 ${
              hovered === "bottom" ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>

      </div>
    </section>
  );
}