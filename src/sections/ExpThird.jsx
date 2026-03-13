import { useState } from "react";
import exp2 from '../assets/videos/exp2.mp4'
import exp3 from '../assets/images/exp3.png'
import exp4 from '../assets/videos/exp4.mp4'
import exp5 from '../assets/images/exp5.png'
import exp6 from '../assets/images/exp6.png'

const media = {
  topLeft: { src: exp2, type: "video" },
  topRight: { src: exp3, type: "image" },
  midLeft: { src: exp4, type: "video" },
  midRight: { src: exp5, type: "image" },
  bottom: { src: exp6, type: "image" },
};

function MediaItem({ id, src, type, alt, hovered, onMouseEnter, onMouseLeave, className = "" }) {
  const isHovered = hovered === id;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {type === "video" ? (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className={`w-full h-full object-cover transition-transform duration-300 ease-in-out ${isHovered ? "scale-110" : "scale-100"}`}
        />
      ) : (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-transform duration-300 ease-in-out ${isHovered ? "scale-110" : "scale-100"}`}
        />
      )}
      <div
        className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
}

export default function PhotoGridSection() {
  const [hovered, setHovered] = useState(null);

  const hover = (id) => setHovered(id);
  const unhover = () => setHovered(null);

  return (
    <section
      style={{ fontFamily: "sans-serif" }}
      className="bg-[#F4EDE2] flex items-center justify-center py-16 sm:py-24 px-4"
    >
      <div className="container flex flex-col gap-3">

        {/* Row 1 */}
        <div className="grid grid-cols-2 gap-3">
          <MediaItem id="topLeft" {...media.topLeft} alt="Green building material"
            className="aspect-square" hovered={hovered}
            onMouseEnter={() => hover("topLeft")} onMouseLeave={unhover} />
          <MediaItem id="topRight" {...media.topRight} alt="Report launch and panel"
            className="aspect-square" hovered={hovered}
            onMouseEnter={() => hover("topRight")} onMouseLeave={unhover} />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 gap-3">
          <MediaItem id="midLeft" {...media.midLeft} alt="Report on tablet"
            className="aspect-square" hovered={hovered}
            onMouseEnter={() => hover("midLeft")} onMouseLeave={unhover} />
          <MediaItem id="midRight" {...media.midRight} alt="Report spread right — materials"
            className="aspect-square" hovered={hovered}
            onMouseEnter={() => hover("midRight")} onMouseLeave={unhover} />
        </div>

        {/* Row 3: Full-width bottom */}
        <MediaItem id="bottom" {...media.bottom} alt="Report launch group photo"
          hovered={hovered}
          onMouseEnter={() => hover("bottom")} onMouseLeave={unhover} />

        {/* CTA Button */}
        <div className="mt-2">
          <a
            href="https://eonetwork.org/?scLang=en"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium text-gray-700 bg-[#4B433B] hover:border-gray-600 transition-all duration-200 shadow-sm"
          >
            <span className="text-[#F4EDE2]">View Site</span>
          </a>
        </div>
      </div>
    </section>
  );
}