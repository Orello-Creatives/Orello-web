import yog3 from "../assets/images/yog3.png"

const deliverables = [
  {
    title: "Website Revamp",
    description: "A refreshed, responsive site designed to reflect Shai's teaching style and global audience",
  },
  {
    title: "Booking & Payment",
    description: "Streamlined flows supporting multiple geographies, currencies, and platforms",
  },
  {
    title: "User-Centred Design",
    description: "Focused on clarity, simplicity, and ease of navigation for a worldwide audience",
  },
  {
    title: "Custom Micro Platform",
    description: "A Linktree-style hub integrated with both her website & Instagram for quick access to classes and resources",
  },
];

const stats = [
  { value: "100%", label: "Website redesigned with a modern and intuitive experience" },
  { value: "02", label: "Integrated booking and payment flows for both local and international clients" },
  { value: "50%", label: "Faster client onboarding with simplified scheduling and payment journeys" },
  { value: "01", label: "Unified custom micro-platform created and embedded for Instagram and website users" },
];


export default function GreenBuildingSection() {
  return (
    <div className="w-full pt-10 bg-[#FDF6E9] font-sans">

      {/* Hero Image Placeholder */}
      <div className="container mx-auto">
        <img src={yog3} className="object-cover w-full h-full" />

        {/* What We Delivered */}
        <div className="w-full py-16 flex flex-col md:flex-row gap-12">

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
      <div className="w-full bg-[#F9F5ED] py-10 px-8">
        <div className="container grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col px-6 py-4
                ${i % 2 !== 0 ? "border-l border-[#574636]" : ""}
                ${i >= 2 ? "border-t border-[#574636] md:border-t-0" : ""}
                md:border-t-0
                ${i !== 0 ? "md:border-l border-[#574636]" : ""}
              `}
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