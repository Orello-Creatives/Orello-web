import g32 from "../assets/images/g32.png"

const deliverables = [
  {
    title: "Brand Identity Systems",
    description: "Logo, typography, and color palette designed to reflect G3’s ethos",
  },
  {
    title: "Landing Page",
    description: "A responsive, modern page built for credibility and clarity",
  },
  {
    title: "Event Collaterals",
    description: "Banners, and branded merchandise like t-shirts to strengthen visibility at events",
  },
  {
    title: "Content Structure",
    description: "Structured storytelling to position G3 confidently with stakeholders",
  },
];

const stats = [
  { value: "20+", label: "Brand assets developed, logo, typography, color palette, and guidelines" },
  { value: "01", label: "Responsive landing page designed and deployed" },
  { value: "03+", label: "Core visual elements standardized for long-term consistency" },
  { value: "05+", label: "Content sections structured for clarity and storytelling" },
];


export default function GreenBuildingSection() {
  return (
    <div className="w-full pt-10 bg-[#FDF6E9] font-sans">

      {/* Hero Image Placeholder */}
      <div className="container mx-auto">
        <img src={g32} className="object-cover w-full h-full" />
      
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