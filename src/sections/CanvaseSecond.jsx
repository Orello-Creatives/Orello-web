import canvase2 from "../assets/images/canvase2.png"

const deliverables = [
  {
    title: "Brand Naming",
    description: "Created “Canvasé,” a name that captures creativity, individuality, and international sophistication",
  },
  {
    title: "Identity Systems",
    description: "Logo, emblem, and visual language blending artistic expression with timeless elegance",
  },
  {
    title: "Visual Assets",
    description: "50+ applications including patterns, social media templates, and packaging concepts",
  },
  {
    title: "Website Curation",
    description: "www.canvaseshop.com designed to build anticipation and introduce the brand globally",
  },
];

const stats = [
  { value: "5x", label: "Stronger brand recall achieved through a distinctive, globally resonant name" },
  { value: "50+", label: "Brand assets designed across logo, emblem, typography, and visual language" },
  { value: "5+", label: "Core brand pillars defined, anchoring Canvasé’s positioning in fashion and lifestyle" },
  { value: "3x", label: "Digital anticipation built with “Coming Soon” website and launch collaterals" },
];

export default function GreenBuildingSection() {
  return (
    <div className="w-full pt-10 bg-[#FDF6E9] font-sans">

      {/* Hero Image Placeholder */}
      <div className="container mx-auto">
        <img src={canvase2} className="object-cover w-full h-full" />
      
      {/* What We Delivered */}
      <div className="w-full py-16  flex flex-col md:flex-row gap-12">

        {/* Left — Heading */}
        <div className="md:w-1/4 flex-shrink-0">
          <h2 className="text-4xl font-normal leading-snug text-gray-900">
            What<br />
            <span className="font-bold">We delivered</span>
          </h2>
        </div>

        {/* Right — 2x2 Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {deliverables.map((item, i) => (
            <div key={i} className="pl-4 border-l-4 border-[#D98127]">
              <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-900">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
</div>
      {/* Stats Bar */}
      <div className="w-full bg-[#F9F5ED]  py-10 px-8">
        <div className="container grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col px-6 py-2 ${i !== 0 ? "border-l border-[#574636]" : ""}`}
            >
              <span className="text-4xl font-bold text-[#D98127] leading-none mb-1">
                {stat.value}
              </span>
              <span className="text-sm text-black max-w-[170px]">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}