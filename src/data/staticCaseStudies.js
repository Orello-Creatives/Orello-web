// Case studies shipped directly in the codebase instead of the CMS.
// Used as a fallback/addition while the CMS admin login is down, or for
// any case study you'd rather not manage through the admin panel.
//
// Each entry uses the exact same shape as a CMS case-study document, so it
// flows through the same normalize()/render pipeline as CMS content
// (see DynamicCaseStudyPage.jsx, CaseStudySecond.jsx, MoreCaseStudies.jsx).
// Media lives in /public/case-studies/<slug>/ and is referenced by path.

export const STATIC_CASE_STUDIES = [
  {
    _id: "static-rudra-solar-energy",
    slug: "rudra-solar-energy",
    title: "Rudra Solar Energy",
    titleHighlight: "Rudra Solar Energy:",
    subtitle: "Bringing Solar Innovation to Every Farm",
    description:
      "Rudra Solar Energy builds high-efficiency, hybrid solar dryers that help farmers and food businesses across India process and preserve produce sustainably. Orello partnered with the brand to tell that story: a product flyer built for clarity, and a multilingual video campaign that takes the technology straight to the people who use it.",
    industries: ["Agritech", "Sustainability"],
    serviceKeys: ["motion", "penn"],
    cardDefaultImage: "/case-studies/rudra/card-default.png",
    cardHoverImage: "/case-studies/rudra/card-hover-logo.mp4",
    clientLogos: ["/case-studies/rudra/logo.png"],
    heroMedia: { url: "/case-studies/rudra/hero-loop.mp4", type: "video" },
    galleryLayout: "grid",
    gallery: [
      { url: "/case-studies/rudra/gallery-rooftop.mp4", type: "video" },
      { url: "/case-studies/rudra/gallery-prep.mp4", type: "video" },
      { url: "/case-studies/rudra/gallery-drying.mp4", type: "video" },
      { url: "/case-studies/rudra/gallery-kannada.mp4", type: "video", fit: "contain" },
      { url: "/case-studies/rudra/gallery-multilingual.mp4", type: "video", fit: "contain" },
    ],
    galleryCta: null,
    deliverables: [
      {
        title: "Brand Flyer Design",
        description:
          "A bold, high-impact product flyer communicating Rudra Solar Energy's features, product range, and certifications clearly.",
      },
      {
        title: "Multilingual Video Campaign",
        description:
          "Product demonstration videos produced and edited in multiple regional languages to reach farmers and food businesses nationwide.",
      },
      {
        title: "Motion Graphics",
        description:
          "Animated overlays and graphics highlighting product USPs, technical specs, and calls-to-action throughout the videos.",
      },
      {
        title: "On-Ground Photography Curation",
        description:
          "Selected and refined real installation and product imagery for use across the flyer and digital assets.",
      },
    ],
    metrics: [
      { value: "5", label: "Regional Language Videos" },
      { value: "~2 min", label: "High-Quality Video, Per Language" },
      { value: "1 Week", label: "All 5 Languages Delivered" },
      { value: "4", label: "Deliverables: Flyer, Video, Motion & Photography" },
    ],
    review: null,
    published: true,
    featuredOnHome: false,
    order: 99,
  },
];
