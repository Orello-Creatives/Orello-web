import React from 'react';

export default function ResourcesSection() {
  return (
    <div className="relative bg-[#eadecf] pb-24 pt-36 overflow-hidden">
      {/* Semicircle Arc Backgrounds */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none overflow-hidden">
        {[
          { size: '120vw', height: '110vw', bottom: '-60vw', color: '#fdf6e9' },
          { size: '95vw',  height: '85vw',  bottom: '-50vw', color: '#eadecf' },
          { size: '70vw',  height: '65vw',  bottom: '-40vw', color: '#fdf6e9' },
          { size: '45vw',  height: '45vw',  bottom: '-30vw', color: '#eadecf' },
          { size: '25vw',  height: '25vw',  bottom: '-20vw', color: '#fdf6e9' },
        ].map((c, i) => (
          <div
            key={i}
            className="absolute left-1/2"
            style={{
              width: c.size,
              height: c.height,
              backgroundColor: c.color,
              borderRadius: '50%',
              bottom: c.bottom,
              opacity: 0.6,
              transform: 'translateX(-50%)',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#4B433B] mb-3 sm:mb-4 md:mb-6"
          style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 900 }}
        >
          Explore our resources
        </h2>

        <p className="text-black paragraph max-w-2xl mx-auto mb-12 leading-relaxed">
          Orello is a purpose-driven global design partner that helps impact-oriented
          organisations communicate with clarity, empathy, and intention.
        </p>
      </div>
    </div>
  );
}