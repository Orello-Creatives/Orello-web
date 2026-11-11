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
    _id: "static-gbm",
    slug: "gbm",
    title: "GBM Report",
    titleHighlight: "Green Building Materials:",
    subtitle: "Collaterals that Convened a Movement",
    description: "For Villgro's Green Building Materials (GBM) event, we developed reports, decks, and event collaterals that helped innovators, investors, and policymakers come together to push sustainable construction forward. Clear design turned complex ideas into actionable conversations and sector-wide alignment.",
    industries: [
      "Climate Tech",
      "Sustainability",
      "Construction"
    ],
    serviceKeys: [
      "penn"
    ],
    cardDefaultImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/2c4d6fc964eaf66a.png",
    cardHoverImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/9d47d446b89974fa.png",
    clientLogos: [
      "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1f5d8e388026fef4.svg",
      "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/77ed41ee2cee024c.svg",
      "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1261a7a7b0b64d33.svg",
      "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/c4be22457c54d994.svg"
    ],
    heroMedia: {
      url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/4247919aff6d81e3.png",
      type: "image"
    },
    galleryLayout: "asymmetric",
    gallery: [
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/992ea61c2f04f6bc.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/d6ce3d8d1075b52c.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/d11a81bfdaab6e2d.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/164e40edb272f74b.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/ecf667601bfa8ee8.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/9bd52167287fad18.png",
        type: "image"
      }
    ],
    galleryCta: {
      label: "View Report",
      href: "https://villgro.org/storage/2025/07/GBM-Market-Study-Report-2025.pdf"
    },
    deliverables: [
      {
        title: "GBM Report",
        description: "Easy-to-read, visually engaging materials in multiple Indian languages"
      },
      {
        title: "Stakeholder Deck",
        description: "Visual presentations tailored for investors, policymakers, and partners"
      },
      {
        title: "Event Brochure",
        description: "An engaging guide to the program, enterprises, and opportunities."
      },
      {
        title: "Communication Tools",
        description: "Clear storytelling to highlight opportunities in sustainable construction"
      }
    ],
    metrics: [
      {
        value: "300+",
        label: "Stakeholders engaged through event materials"
      },
      {
        value: "50+",
        label: "Green enterprises united on one sector-wide platform"
      },
      {
        value: "10+",
        label: "Investor and policymaker groups aligned to back the sector"
      },
      {
        value: "01",
        label: "Unified platform advancing sustainable construction"
      }
    ],
    review: {
      quote: "Orello Creatives designed impactful, visually stunning collateral for Villgro’s GBM event. From Reports to brochures to standees, every item was crafted with detail and attention. The team’s design expertise helped us leave a lasting impression on our audience and incredible experience!",
      authorName: "Roshini Muthukumar",
      authorRole: "Manager-Ecosystem Development, Villgro",
      authorImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/a6999a085288528e.svg"
    },
    published: true,
    featuredOnHome: true,
    homeOrder: 1,
    order: 0,
    cardMediaType: "image"
  },
  {
    _id: "static-techdhaara",
    slug: "techdhaara",
    title: "TechDhaara",
    titleHighlight: "TechDhaara:",
    subtitle: "Transforming Complex Technology into Clear Communication",
    description: "TechDhaara is a technology consulting company focused on helping businesses navigate digital transformation through innovative technology solutions. As the company expanded its offerings, it required a modern brand presence that reflected its expertise while communicating complex services with clarity. Orello partnered with TechDhaara to create a cohesive digital ecosystem that strengthened credibility across every customer touchpoint.",
    industries: [
      "Climate Tech",
      "Sustainability",
      "Social Organisation",
      "AI"
    ],
    serviceKeys: [
      "starr",
      "togglee"
    ],
    cardDefaultImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1784787565815-7c37f186.png",
    cardHoverImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1784787566020-3fbd0dc4.png",
    clientLogos: [
      "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1784874763273-c16b0aed.png"
    ],
    heroMedia: {
      url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1784871065317-980fb7ec.png",
      type: "image"
    },
    galleryLayout: "grid",
    gallery: [
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1784788577025-c11e66af.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1784788549140-b7da9e07.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1784788534907-4c98896e.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1784788752839-dae10d93.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1784788515282-f83b14d8.png",
        type: "image"
      }
    ],
    galleryCta: {
      label: "techadhaara.com",
      href: "https://innovationguild.onrender.com/"
    },
    deliverables: [
      {
        title: "Brand Identity Support",
        description: "Established a consistent visual language that reflected TechDhaara's innovation-driven approach across digital and print communication."
      },
      {
        title: "Product UI/UX Design",
        description: "Designed intuitive user experiences across the platform, ensuring seamless interactions for administrators, field users, and multiple user roles."
      },
      {
        title: "Multi-User Dashboard System",
        description: "Designed a comprehensive dashboard ecosystem tailored for different user roles, enabling efficient management, monitoring, and data-driven decision making."
      },
      {
        title: "Multilingual Experience",
        description: "Built a user experience that supports multiple languages, making the platform accessible to diverse user groups across regions without compromising usability."
      },
      {
        title: "Data Visualization & Analytics",
        description: "Designed real-time analytics dashboards with interactive graphs and reporting tools, allowing administrators to monitor activities, track progress, and gain actionable insights at a glance."
      }
    ],
    metrics: [
      {
        value: "05",
        label: "User roles unified into one seamless platform"
      },
      {
        value: "100+",
        label: "Data points turned into real-time, actionable insights"
      },
      {
        value: "20+",
        label: "Dashboards giving admins one view for data-driven decisions"
      },
      {
        value: "26",
        label: "Languages — one platform, accessible across every region"
      }
    ],
    review: {
      quote: "Orello went beyond design—they helped us shape the foundation of TechDhaara. From\nnaming and brand identity to developing a multi-user platform, every decision was\nbacked by research and a deep understanding of our goals. Their ability to combine\nstrategy with execution made them an invaluable partner.",
      authorName: "Asmita Moon",
      authorRole: "Founder & CEO, TechDhaara",
      authorImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1784788719266-79186fe2.png"
    },
    published: true,
    featuredOnHome: false,
    homeOrder: 2,
    order: 1
  },
  {
    _id: "static-findtheircare",
    slug: "findtheircare",
    title: "FindTheirCare",
    titleHighlight: "Designing a Guided,",
    subtitle: "AI‑Driven Platform for Navigating UK Care Services",
    description: "Orello partnered with FindTheir Care across research, brand identity, and product design to shape a guided, conversational experience — combining a warm, trustworthy brand presence with an AI‑driven search and dashboard system for families, care providers, and administrators.",
    industries: [
      "Health",
      "AI"
    ],
    serviceKeys: [
      "starr",
      "togglee",
      "penn"
    ],
    cardDefaultImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/7f02e0b745a4d6b9.png",
    cardHoverImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/ef351a665d3d7f55.png",
    clientLogos: [
      "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/99edf2908d6ca611.svg"
    ],
    heroMedia: {
      url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/d4e4574835e51ba5.png",
      type: "image"
    },
    galleryLayout: "grid",
    gallery: [
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/6f2ba91c5789a417.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/7cc335fd67cd8519.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/4bcf355096fd914f.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/39a695850b2bb746.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/c413f1ac0543ec01.png",
        type: "image"
      }
    ],
    galleryCta: {
      label: "",
      href: ""
    },
    deliverables: [
      {
        title: "Research & Strategic Direction",
        description: "Market, user, and competitor research to define platform positioning, UX direction, and brand foundations."
      },
      {
        title: "Brand Identity System",
        description: "A complete identity including logo, typography, color palette, tone of voice, and brand guidelines."
      },
      {
        title: "AI Driven Platform Design",
        description: "Design of a guided, conversational search experience to help families understand care types, compare options, and discover suitable providers."
      },
      {
        title: "UX & Dashboard Flows",
        description: "Structured user journeys and dashboards for families, care providers, and platform administrators."
      }
    ],
    metrics: [
      {
        value: "08+",
        label: "Core care categories structured into guided discovery flows"
      },
      {
        value: "03",
        label: "User roles supported through dedicated platform dashboards"
      },
      {
        value: "100%",
        label: "Consistent brand and experience across product and communications"
      },
      {
        value: "24/7",
        label: "Access to care search, education, and provider discovery"
      }
    ],
    review: {
      quote: "",
      authorName: "",
      authorRole: "",
      authorImage: ""
    },
    published: true,
    featuredOnHome: true,
    homeOrder: 0,
    order: 2,
    cardMediaType: "image"
  },
  {
    _id: "static-launchera",
    slug: "launchera",
    title: "Launchera",
    titleHighlight: "Building a High-Performance Digital Platform",
    subtitle: " for Modern Real Estate",
    description: "Launchera is a real estate marketing platform focused on connecting buyers with premium residential developments across India. As the business expanded, it required a brand and digital ecosystem capable of supporting multiple developers, high-converting landing pages, and a scalable marketing infrastructure. Orello partnered with Launchera to create a unified digital experience that combines strategy, design, and performance.",
    industries: [
      "Construction",
      "Real-estate"
    ],
    serviceKeys: [
      "starr",
      "togglee",
      "penn"
    ],
    cardDefaultImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1785824465072-06d4e6f6.png",
    cardHoverImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1785824879456-d75cb83c.png",
    clientLogos: [
      "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1785841945883-e93a520c.jpg",
      "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1785841480100-122a4c18.svg",
      "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1785841589904-e2b373ef.png"
    ],
    heroMedia: {
      url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1785825583494-834a3c34.jpg",
      type: "image"
    },
    galleryLayout: "asymmetric",
    gallery: [
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1785841046260-c1fcc6af.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1785841204222-604b43b4.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1785841194659-e00aa42d.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1785841217187-88c4472a.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1785841237047-e27dcade.png",
        type: "image"
      }
    ],
    galleryCta: {
      label: "Launchera.in",
      href: "https://www.launchera.in/"
    },
    deliverables: [
      {
        title: "Brand Identity",
        description: "Developed a modern brand identity that established a strong and credible market presence."
      },
      {
        title: "Website & Landing Pages",
        description: "Designed a high-converting website and campaign landing pages focused on generating enquiries."
      },
      {
        title: "SEO & Content Strategy",
        description: "Optimized the platform with search-focused content and on-page SEO to improve visibility."
      },
      {
        title: "Conversion-Driven UX",
        description: "Created intuitive user journeys that guided visitors from discovery to enquiry."
      }
    ],
    metrics: [
      {
        value: "75+",
        label: "On-page SEO enhancements built for lasting organic visibility"
      },
      {
        value: "50+",
        label: "Keywords targeted to reach serious property buyers"
      },
      {
        value: "100+",
        label: "Metadata elements optimized to strengthen search visibility"
      },
      {
        value: "05+",
        label: "Pages built to turn visitors into enquiries"
      }
    ],
    review: {
      quote: "Orello brought clarity, creativity, and strategic thinking to every stage of our project.\nTheir team took the time to understand our vision and translated it into a strong digital\npresence that truly reflects our brand. From website design to marketing\ncommunication, every deliverable was thoughtfully executed with attention to detail.\nThey have been a dependable creative partner, and I look forward to working with them\nas Launchera continues to grow.",
      authorName: "Kundan Mishra",
      authorRole: "Founder, Launchera",
      authorImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1785841848612-20863836.png"
    },
    published: true,
    order: 3
  },
  {
    _id: "static-exp",
    slug: "exp",
    title: "EO Exploration",
    titleHighlight: "Entrepreneurs' Organization: Exploration",
    subtitle: "– Peru Edition",
    description: "Entrepreneurs' Organization (EO), a global network of visionary founders and leaders, partnered with us to bring their flagship event - Exploration: Peru Edition - to life. From crafting a distinctive event logo to designing a vibrant landing page and motion graphics, we helped EO capture the spirit of adventure, connection, and cultural immersion that defines Exploration.",
    industries: [
      "Events",
      "Travel"
    ],
    serviceKeys: [
      "starr",
      "motion",
      "togglee",
      "penn"
    ],
    cardDefaultImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/176f077265965974.png",
    cardHoverImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/3915e2ddc2091934.png",
    clientLogos: [
      "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/674a01b983a983a4.svg"
    ],
    heroMedia: {
      url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/8aa2fc3ae9f7e678.png",
      type: "image"
    },
    galleryLayout: "grid",
    gallery: [
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/0e87be7b35e1972b.mp4",
        type: "video"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/8800c9d1ef6cf7d0.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/6eba44f1bc00d092.mp4",
        type: "video"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/14a60ec685809cdc.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/a31a2841866ee7b1.png",
        type: "image"
      }
    ],
    galleryCta: {
      label: "View Site",
      href: "https://eonetwork.org/?scLang=en"
    },
    deliverables: [
      {
        title: "Event Logo Design",
        description: "Dynamic identity for Exploration: Peru Edition blending travel and EO's global ethos"
      },
      {
        title: "Landing Page",
        description: "Created the event Landing page showcasing experience, itinerary, and registration"
      },
      {
        title: "Motion Graphics",
        description: "Animated social posts boosting EO's event marketing and anticipation"
      },
      {
        title: "Event Emailers",
        description: "Designed for outreach and engagement with EO's global community"
      }
    ],
    metrics: [
      {
        value: "300+",
        label: "Global entrepreneurs engaged through the event's digital presence"
      },
      {
        value: "08+",
        label: "Countries represented under EO's global community umbrella"
      },
      {
        value: "5x",
        label: "Higher event visibility through a cohesive visual identity across platforms"
      },
      {
        value: "20+",
        label: "Motion graphics and digital assets created to amplify event reach across social media and web"
      }
    ],
    review: {
      quote: "",
      authorName: "",
      authorRole: "",
      authorImage: ""
    },
    published: true,
    order: 4,
    cardMediaType: "image"
  },
  {
    _id: "static-coldeasy",
    slug: "coldeasy",
    title: "Coldeasy",
    titleHighlight: "coldeasy:",
    subtitle: "Rebranding a coldstorage pioneer",
    description: "Originally known as Temperate, the company needed a new identity to reflect its vision of making cold storage accessible and efficient. We rebranded them as Coldeasy — a name and identity built on simplicity, innovation, and impact. The rebrand was supported with a new website and collaterals that positioned Coldeasy as a trusted partner for both farmers and large-scale supply chains.",
    industries: [
      "Climate Tech",
      "Sustainability",
      "Agritech"
    ],
    serviceKeys: [
      "starr",
      "motion",
      "togglee",
      "penn"
    ],
    cardDefaultImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/2f88678df448e24c.png",
    cardHoverImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/c80945b606e30888.png",
    clientLogos: [
      "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/50feccc80d0bb6b0.svg"
    ],
    heroMedia: {
      url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/e396b65436855ff6.png",
      type: "image"
    },
    galleryLayout: "grid",
    gallery: [
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/b7780eb9d7932a23.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/cc7775257e8f3f13.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/42175f54ac798711.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/a4ebbeae8df8c9d2.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/a6b66887e3e95621.png",
        type: "image"
      }
    ],
    galleryCta: {
      label: "View Site",
      href: "https://www.coldeasy.in/"
    },
    deliverables: [
      {
        title: "Rebrand & Identity",
        description: "Transitioned Temperate into Coldeasy with a new logo and visual system with a presentation deck"
      },
      {
        title: "Website Curation",
        description: "Redesigned www.coldeasy.in to showcase products and drive inquiries"
      },
      {
        title: "Product Flyers",
        description: "Clear one-pagers for multiple cold storage solutions"
      },
      {
        title: "Event Collaterals",
        description: "Banners, standees, and marketing materials for outreach and engagement"
      }
    ],
    metrics: [
      {
        value: "100%",
        label: "Successful transition from Temperate to Coldeasy"
      },
      {
        value: "05+",
        label: "Cold storage product lines reintroduced under the new identity"
      },
      {
        value: "3,000+",
        label: "Event visitors engaged through banners, flyers, and standees"
      },
      {
        value: "03+",
        label: "Core touchpoints unified under one consistent brand experience"
      }
    ],
    review: {
      quote: "Orello helped us revamp our brand identity with a clear understanding of both our needs and vision. From the logo and cohesive identity to the complete website build — design, development, and content — everything was handled end to end with care and precision. They also redesigned our collaterals, including flyers, standees, and social media templates, all delivered at a consistently high quality. The process was smooth, collaborative, and well‑managed, with great attention to detail and patience through every iteration. We would highly recommend Orello as a dependable, full‑service design partner.",
      authorName: "Vishal Singhal",
      authorRole: "Founder, Coldeasy",
      authorImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/f508fe7665e78c6e.svg"
    },
    published: true,
    order: 5,
    cardMediaType: "image"
  },
  {
    _id: "static-villgro",
    slug: "villgro",
    title: "Villgro",
    titleHighlight: "Empowering Social Enterpreneurs with",
    subtitle: "Multilingual communication",
    description: "Villgro, one of India's leading social enterprise incubators, partnered with us to create communication tools that help their incubated enterprises connect with grassroots communities. Through multilingual flyers and motion graphics videos, we simplified complex innovations into engaging, accessible formats that built trust and drove adoption.",
    industries: [
      "Climate Tech",
      "Sustainability",
      "Agritech"
    ],
    serviceKeys: [
      "motion",
      "penn"
    ],
    cardDefaultImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/5e1e6f820613093f.mp4",
    cardHoverImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/9d47d446b89974fa.png",
    clientLogos: [
      "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1f5d8e388026fef4.svg"
    ],
    heroMedia: {
      url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/552bb91c430b4e00.png",
      type: "image"
    },
    galleryLayout: "asymmetric",
    gallery: [
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/afa03f543f68adf6.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/256d9d8a89b99370.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/041aa998e75440ea.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/5e1e6f820613093f.mp4",
        type: "video"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/722bc2e483e79553.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/0eee699c66d81eb9.png",
        type: "image"
      }
    ],
    galleryCta: {
      label: "",
      href: ""
    },
    deliverables: [
      {
        title: "Multilingual Flyers",
        description: "Easy-to-read visually engaging materials in multiple Indian languages"
      },
      {
        title: "Motion Graphic Videos",
        description: "Animated explainers simplifying technical solutions into relatable stories"
      },
      {
        title: "Localized Content",
        description: "Region-specific collaterals ensuring cultural resonance and clarity"
      },
      {
        title: "Enterprise Specific Assets",
        description: "Unique materials designed for startups across Villgro's portfolio"
      }
    ],
    metrics: [
      {
        value: "20+",
        label: "Enterprises supported with tailored communication tools"
      },
      {
        value: "08+",
        label: "Enterprises supported with tailored communication tools"
      },
      {
        value: "10,000+",
        label: "Enterprises supported with tailored communication tools"
      },
      {
        value: "20+",
        label: "Enterprises supported with tailored communication tools"
      }
    ],
    review: {
      quote: "Our experience with Orello Creatives has been outstanding! They  consistently manage Villgro’s marketing collateral with creativity and  professionalism. Haamid and Razeena’s designs capture our brand’s  essence beautifully every time. Highly recommend their services for  anyone in need of fresh, high-quality materials!",
      authorName: "Sanam Jain",
      authorRole: "Manager, Climate Action, Villgro Innovations",
      authorImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/4857c0e07bf902d7.svg"
    },
    published: true,
    order: 6,
    cardMediaType: "video"
  },
  {
    _id: "static-ocean",
    slug: "ocean",
    title: "Ocean",
    titleHighlight: "Building Ocean's",
    subtitle: "First Impression for Stakeholders",
    description: "Ocean needed a digital presence in time for a high-stakes stakeholder event. The goal was to create a website that not only introduced the company and its vision but also conveyed credibility to investors and partners at first glance. Working closely with the founder, we designed and developed www.ocean.build as a clear, professional, and event-ready platform.",
    industries: [
      "Climate Tech",
      "Sustainability",
      "Construction",
      "Agritech"
    ],
    serviceKeys: [
      "togglee"
    ],
    cardDefaultImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/21acc0a1a16350ee.png",
    cardHoverImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/3c8571044f34521d.png",
    clientLogos: [
      "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/41112a1409319a8d.svg"
    ],
    heroMedia: {
      url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/dd9ecd417a564f19.png",
      type: "image"
    },
    galleryLayout: "grid",
    gallery: [
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/5407ee59f9d30502.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1b36f7054ebea869.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/d7023b1c2629f994.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/b9f523a17ca56422.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/0c7cac8911dd8944.png",
        type: "image"
      }
    ],
    galleryCta: {
      label: "View Site",
      href: "https://www.ocean.build"
    },
    deliverables: [
      {
        title: "Website Curation",
        description: "Built www.ocean.build as an event-ready, professional digital presence"
      },
      {
        title: "Content Structuring",
        description: "Organized Ocean's vision, technology, and impact into clear, stakeholder-friendly messaging"
      },
      {
        title: "Design Systems",
        description: "Clean layouts and visuals aligned with Ocean's positioning"
      },
      {
        title: "Event Readiness",
        description: "Delivered on a tight deadline to ensure the website supported founder presentations"
      }
    ],
    metrics: [
      {
        value: "100%",
        label: "Website launch support for the stakeholder event"
      },
      {
        value: "03",
        label: "Core sections crafted – vision, technology, and impact – to tell Ocean's story clearly"
      },
      {
        value: "05+",
        label: "Stakeholder groups engaged with a credible first impression"
      },
      {
        value: "2x",
        label: "Increase in confidence and clarity for founder presentations backed by the website"
      }
    ],
    review: {
      quote: "Orello Creatives transformed Ocean’s website on WordPress, bringing our vision to life with a sleek, polished design. Orello’s team was attentive to our needs and delivered on a tight deadline. Their professionalism and quality work exceeded our expectations, highly recommended for anyone seeking reliable web development that combines aesthetics with functionality!",
      authorName: "Alexa  Bednarz",
      authorRole: "Founder & CEO, Ocean",
      authorImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/17ac01a5c984b646.svg"
    },
    published: true,
    order: 7,
    cardMediaType: "image"
  },
  {
    _id: "static-coastaiin",
    slug: "coastaiin",
    title: "CoastaIin",
    titleHighlight: "Coastalin: Driving Digital Growth ",
    subtitle: "for a Modern Destination Management Company",
    description: "Coastalin is a destination management company specializing in curated travel experiences across India. As the brand expanded its offerings, it required a modern digital presence that could inspire travellers, improve search visibility, and convert visitors into enquiries. Orello partnered with Coastalin to build a scalable website supported by SEO, content strategy, and digital marketing.",
    industries: [
      "Travel"
    ],
    serviceKeys: [
      "penn",
      "togglee"
    ],
    cardDefaultImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1785843234048-8ceceb68.png",
    cardHoverImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1785843371652-b3d2f068.jpg",
    clientLogos: [
      "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1785843672221-97e932a4.jpg"
    ],
    heroMedia: {
      url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1785843509933-2eb94ca4.jpg",
      type: "image"
    },
    galleryLayout: "asymmetric",
    gallery: [
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1785843207565-38df9a06.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1785843527949-e96e765b.jpg",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1785843533200-1259c9b5.jpg",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1785843538056-7228bdde.jpg",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1785843570050-25edd16a.jpg",
        type: "image"
      }
    ],
    galleryCta: {
      label: "",
      href: ""
    },
    deliverables: [
      {
        title: "Website Design & Development",
        description: "Designed a modern, responsive website focused on usability, destination discovery, and enquiry generation."
      },
      {
        title: "SEO Strategy",
        description: "Implemented keyword research, technical SEO, and on-page optimization to improve search visibility."
      },
      {
        title: "Content & Digital Marketing",
        description: "Created search-focused content and digital campaigns to strengthen the brand's online presence."
      },
      {
        title: "Social Media Support",
        description: "Designed engaging social media content to maintain a consistent and compelling digital identity."
      }
    ],
    metrics: [
      {
        value: "150+",
        label: "Keywords targeted to grow organic search visibility"
      },
      {
        value: "25+",
        label: "Pages optimized to turn search traffic into enquiries"
      },
      {
        value: "10+",
        label: "Destination experiences showcased to inspire bookings"
      },
      {
        value: "01",
        label: "Scalable Travel Platform"
      }
    ],
    review: {
      quote: "",
      authorName: "",
      authorRole: "",
      authorImage: ""
    },
    published: true,
    order: 8
  },
  {
    _id: "static-canvase",
    slug: "canvase",
    title: "Canvase",
    titleHighlight: "Canvasé:",
    subtitle: "Defining a Contemporary Lifestyle Brand",
    description: "Canvasé, an Ireland-based fashion and lifestyle brand, approached us at its inception to shape a brand that seamlessly blends functional, ready-to-wear fashion with bold artistic expression. From naming the brand to building a distinctive identity and a digital presence, we laid the foundation for Canvasé to enter the market with confidence and clarity.",
    industries: [
      "Fashion",
      "Lifestyle",
      "Sustainability"
    ],
    serviceKeys: [
      "starr",
      "motion",
      "togglee",
      "penn"
    ],
    cardDefaultImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/a53b835fdcc03e05.png",
    cardHoverImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/2ce640a8f7f4ad33.png",
    clientLogos: [
      "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/410c882c0f568f83.svg"
    ],
    heroMedia: {
      url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/5025b3f28ab663c2.png",
      type: "image"
    },
    galleryLayout: "grid",
    gallery: [
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/309218ca6cca58a3.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/ff3b73fcbcdccd69.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/ea523a5fa44ec94e.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/3152c94dae299a82.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/57d940b85794bf80.png",
        type: "image"
      }
    ],
    galleryCta: {
      label: "View Site",
      href: "https://canvaseshop.com/"
    },
    deliverables: [
      {
        title: "Brand Naming",
        description: "Created Canvasé, a name that captures creativity, individuality, and international sophistication"
      },
      {
        title: "Identity Systems",
        description: "Logo, emblem, and visual language blending artistic expression with timeless elegance"
      },
      {
        title: "Visual Assets",
        description: "50+ applications including patterns, social media templates, and packaging concepts"
      },
      {
        title: "Website Curation",
        description: "www.canvaseshop.com designed to build anticipation and introduce the brand globally"
      }
    ],
    metrics: [
      {
        value: "5x",
        label: "Stronger brand recall achieved through a distinctive, globally resonant name"
      },
      {
        value: "50+",
        label: "Brand assets unified into one confident, market-ready identity"
      },
      {
        value: "5+",
        label: "Core brand pillars defined, anchoring Canvasé's positioning in fashion and lifestyle"
      },
      {
        value: "3x",
        label: "Digital anticipation built with Coming Soon website and launch collaterals"
      }
    ],
    review: {
      quote: "Working with Orello was such an intuitive experience. They understood my vision for Canvasé and built a brand identity that feels authentic, modern, and scalable. From design details to the bigger picture, everything was thoughtfully crafted. I truly felt supported throughout the journey, and the outcome reflects exactly what I had hoped for",
      authorName: "Harshitha",
      authorRole: "Founder & CEO, Canvasé",
      authorImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/5a68aa4328aed018.svg"
    },
    published: true,
    featuredOnHome: true,
    order: 9,
    cardMediaType: "image"
  },
  {
    _id: "static-aarkiva",
    slug: "aarkiva",
    title: "Aarkiva",
    titleHighlight: "Building a refined identity for",
    subtitle: "a modern real estate brand",
    description: "Aarkiva is a real estate brand focused on developing thoughtfully designed residential spaces rooted in trust, quality, and long‑term value. As the organisation prepared to introduce its first residential project, Prathva, there was a need for a clear and consistent brand presence that could communicate credibility, architectural intent, and project vision across both digital and physical touchpoints. We partnered with Aarkiva to shape a cohesive brand system and digital foundation - supporting everything from identity development and website design to project marketing materials and everyday business collaterals.",
    industries: [
      "Real-estate"
    ],
    serviceKeys: [
      "starr",
      "togglee",
      "penn"
    ],
    cardDefaultImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/ca34159e1a1e6da8.png",
    cardHoverImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/ce5fa50d2545f3dd.png",
    clientLogos: [
      "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/f954472104da98d0.svg"
    ],
    heroMedia: {
      url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/b0538c6c493e0cbe.png",
      type: "image"
    },
    galleryLayout: "grid",
    gallery: [
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/ea8e2fd6caf76d8f.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/8c7d192e4ab2e153.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/95a79778aaa44cf0.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/630215ab971c779d.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/87e154154016cecf.png",
        type: "image"
      }
    ],
    galleryCta: {
      label: "View Site",
      href: "https://www.aarkiva.com"
    },
    deliverables: [
      {
        title: "Brand Identity System",
        description: "Developed a complete visual identity including logo, typography, color palette, and brand guidelines."
      },
      {
        title: "Project Catalogue",
        description: "Created a structured, design-led catalogue to present the first residential project with clarity and visual impact."
      },
      {
        title: "Website Design & Development",
        description: "Designed and built the Aarkiva website to reflect the brand's architectural language and project positioning."
      },
      {
        title: "Brand Collaterals",
        description: "Designed business cards and letterheads to maintain consistency across official communications."
      }
    ],
    metrics: [
      {
        value: "04+",
        label: "Core brand assets unified to signal credibility from day one"
      },
      {
        value: "06+",
        label: "Marketing and communication formats aligned to brand guidelines"
      },
      {
        value: "03",
        label: "Key stakeholder touchpoints supported through the website and catalogue"
      },
      {
        value: "100%",
        label: "Consistent brand expression across identity, web, and sales materials"
      }
    ],
    review: {
      quote: "",
      authorName: "",
      authorRole: "",
      authorImage: ""
    },
    published: true,
    order: 10,
    cardMediaType: "image"
  },
  {
    _id: "static-gangpur",
    slug: "gangpur",
    title: "Gangpur Silage",
    titleHighlight: "Gangpur Silage: Building Trust Through",
    subtitle: "Farmer-Centric Design",
    description: "To address fodder shortages and build trust in silage as a solution, Gangpur partnered with us to create a refreshed identity and a suite of farmer-facing communication tools. By simplifying technical concepts into accessible visuals, the collaterals helped farmers see silage as practical, credible, and directly linked to healthier cows and better incomes.",
    industries: [
      "Dairy",
      "Agritech",
      "Sustainability"
    ],
    serviceKeys: [
      "starr",
      "penn"
    ],
    cardDefaultImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/573284c120e07c6d.png",
    cardHoverImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/12316b6a9f54ca70.png",
    clientLogos: [
      "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/3c8758b73c8b5c67.svg"
    ],
    heroMedia: {
      url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/5ba767ee8b0605d1.png",
      type: "image"
    },
    galleryLayout: "grid",
    gallery: [
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/3f82fe6b10bda6d4.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/852795524fa6333a.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/0f83b76ba43d4225.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/78098d24fa6bbd5b.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/eecffea57323757e.png",
        type: "image"
      }
    ],
    galleryCta: {
      label: "",
      href: ""
    },
    deliverables: [
      {
        title: "Brand Refresh",
        description: "A modern yet farmer-friendly logo and visual language signaling credibility and trust"
      },
      {
        title: "Origami Flyer",
        description: "A compact, engaging tool for on-ground farmer conversations"
      },
      {
        title: "Sales Flipchart",
        description: "Step-by-step visuals and calculators to explain silage feeding practices"
      },
      {
        title: "Comprehensive Booklet",
        description: "Clear, illustrative content breaking down nutrition, storage, and economic benefits"
      }
    ],
    metrics: [
      {
        value: "10000+",
        label: "Farmers reached across Central and Eastern India"
      },
      {
        value: "150+",
        label: "Village-level entrepreneurs equipped with sales tools"
      },
      {
        value: "3x",
        label: "Increase in farmer awareness of silage benefits"
      },
      {
        value: "01",
        label: "Unified farmer-first identity positioned Gangpur as a credible social enterprise"
      }
    ],
    review: {
      quote: "Working with Orello has been a turning point for Gangpur Silage. They understood our mission to make silage accessible for farmers and translated it into designs that actually work on the ground. From our brand identity to farmer-facing collaterals like flipcharts and booklets, everything was made simple, practical, and effective. Their team didn’t feel like an outside agency — they felt like part of our own, committed to helping us grow and reach more farmers with clarity and trust.",
      authorName: "Bimal Lakra",
      authorRole: "Founder/CEO, Gangpur Ventures",
      authorImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/98cacd52f0351bce.svg"
    },
    published: true,
    order: 11,
    cardMediaType: "image"
  },
  {
    _id: "static-g3",
    slug: "g3",
    title: "G3",
    titleHighlight: "G3: Building a Clear,",
    subtitle: "Credible Digital Presence",
    description: "G3, a platform aiming to deliver \"PHBB\" content or operations via its web interface, engaged us to refine its digital presence and make its online portal more user-friendly, credible, and visually compelling. We redesigned their website, streamlined user flows, and created design assets to increase clarity, engagement, and trust among its target audience.",
    industries: [
      "Events",
      "Social Organisation"
    ],
    serviceKeys: [
      "starr",
      "motion",
      "togglee",
      "penn"
    ],
    cardDefaultImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/980d26f4e4236566.png",
    cardHoverImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/0ff9912d8f64999d.png",
    clientLogos: [
      "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/98296e1ee76b65c3.svg"
    ],
    heroMedia: {
      url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/6ced51f26e193550.png",
      type: "image"
    },
    galleryLayout: "grid",
    gallery: [
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/e59a2d9a9a522f99.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/136dd80d12b6ce85.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/a550fa7a189609fc.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/30f9fd1433fb29fc.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/6f3eb329e69af414.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/7518cd7e2179ac2b.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/3295f25ca009464b.png",
        type: "image"
      }
    ],
    galleryCta: {
      label: "View Site",
      href: "https://g3-phbb.onrender.com/"
    },
    deliverables: [
      {
        title: "Brand Identity Systems",
        description: "Logo, typography, and color palette designed to reflect G3's ethos"
      },
      {
        title: "Landing Page",
        description: "A responsive, modern page built for credibility and clarity"
      },
      {
        title: "Event Collaterals",
        description: "Banners, and branded merchandise like t-shirts to strengthen visibility at events"
      },
      {
        title: "Content Structure",
        description: "Structured storytelling to position G3 confidently with stakeholders"
      }
    ],
    metrics: [
      {
        value: "20+",
        label: "Brand assets unified into one credible, trustworthy identity"
      },
      {
        value: "01",
        label: "Landing page built to earn stakeholder trust at first glance"
      },
      {
        value: "03+",
        label: "Core visual elements standardized for long-term consistency"
      },
      {
        value: "05+",
        label: "Content sections structured for clarity and storytelling"
      }
    ],
    review: {
      quote: "",
      authorName: "",
      authorRole: "",
      authorImage: ""
    },
    published: true,
    order: 12,
    cardMediaType: "image"
  },
  {
    _id: "static-scalepoint",
    slug: "scalepoint",
    title: "Scalepoint",
    titleHighlight: "Scalepoint: A Unified Identity",
    subtitle: "for Modern Living & Working",
    description: "To position Scalepoint as the first point of contact for professionals navigating new opportunities, we built a refreshed brand identity, a modern digital presence, and a comprehensive design system. By combining hospitality with functionality, the brand now speaks with clarity, consistency, and aspiration, helping global talent experience comfort and productivity from the moment they arrive.",
    industries: [
      "Corporate"
    ],
    serviceKeys: [
      "starr",
      "togglee",
      "penn"
    ],
    cardDefaultImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/871533f3bb54921b.png",
    cardHoverImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/7e82ffe5393b1b78.png",
    clientLogos: [
      "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/c17cd43abf9e8627.svg"
    ],
    heroMedia: {
      url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/587ada7511238d06.png",
      type: "image"
    },
    galleryLayout: "grid",
    gallery: [
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/e8f1345b314c1594.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/cfdcf195ccdf2e08.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/ae5333dc8dc6b0f8.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/9d1e425deaef5bdb.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/b3c5994eb79e0992.png",
        type: "image"
      }
    ],
    galleryCta: {
      label: "View Site",
      href: "https://www.scalepoint.in"
    },
    deliverables: [
      {
        title: "Refreshed Brand Identity",
        description: "Inspired by communication, space, location, and growth"
      },
      {
        title: "Visual Assets",
        description: "Business cards, corporate stationery, ID cards, swags, billboards, and more"
      },
      {
        title: "Website Design & Development",
        description: "A clean, functional, and conversion-ready platform"
      },
      {
        title: "Enterprise Specific Assets",
        description: "An investor and client-facing presentation aligning Scalepoint's vision, offerings, and premium positioning"
      }
    ],
    metrics: [
      {
        value: "500+",
        label: "Professionals engaged through Scalepoint's refreshed digital and offline presence"
      },
      {
        value: "150+",
        label: "Brand touchpoints unified across print, digital, and physical space"
      },
      {
        value: "07+",
        label: "Countries served, supporting expats and global clients with seamless experiences"
      },
      {
        value: "05+",
        label: "Active cities in India with an expanding footprint"
      }
    ],
    review: {
      quote: "",
      authorName: "",
      authorRole: "",
      authorImage: ""
    },
    published: true,
    order: 13,
    cardMediaType: "image"
  },
  {
    _id: "static-yog",
    slug: "yog",
    title: "Letsyogwithshai",
    titleHighlight: "",
    subtitle: "",
    description: "",
    industries: [
      "Health",
      "Lifestyle"
    ],
    serviceKeys: [
      "togglee"
    ],
    cardDefaultImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/c69d31e95506cd56.png",
    cardHoverImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/683bb00a1708999c.png",
    clientLogos: [],
    heroMedia: {
      url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/101c205ad14ca44d.png",
      type: "image"
    },
    galleryLayout: "grid",
    gallery: [
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/c95f89f6532b1fa9.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1edba5a4df9af3e4.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/49e6e5c86483eb50.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/456e23e1684da7e1.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/bf3d0b24be37c4e5.png",
        type: "image"
      }
    ],
    galleryCta: {
      label: "View Site",
      href: "https://letsyogwithshai.com/"
    },
    deliverables: [
      {
        title: "Website Revamp",
        description: "A refreshed, responsive site designed to reflect Shai's teaching style and global audience"
      },
      {
        title: "Booking & Payment",
        description: "Streamlined flows supporting multiple geographies, currencies, and platforms"
      },
      {
        title: "User-Centred Design",
        description: "Focused on clarity, simplicity, and ease of navigation for a worldwide audience"
      },
      {
        title: "Custom Micro Platform",
        description: "A Linktree-style hub integrated with both her website & Instagram for quick access to classes and resources"
      }
    ],
    metrics: [
      {
        value: "100%",
        label: "Modern, intuitive experience delivered for a worldwide audience"
      },
      {
        value: "02",
        label: "Integrated booking and payment flows for both local and international clients"
      },
      {
        value: "50%",
        label: "Faster client onboarding with simplified scheduling and payment journeys"
      },
      {
        value: "01",
        label: "Unified custom micro-platform created and embedded for Instagram and website users"
      }
    ],
    review: {
      quote: "Orello Creatives transformed my online presence into something seamless and professional. The new website booking system and integrated platform makes it so much easier for my students across the world to connect with me",
      authorName: "Shailee Raja",
      authorRole: "Founder, Letsyogwithshai",
      authorImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/4d0c881784251dc0.svg"
    },
    published: true,
    order: 14,
    cardMediaType: "image"
  },
  {
    _id: "static-yaykwa",
    slug: "yaykwa",
    title: "Yaykwa",
    titleHighlight: "Establishing a Clear Brand and Digital Presence",
    subtitle: "for a Mining Organisation",
    description: "Yaykwa is a Kerala‑based mining company specialising in dredging, mining, and trading of minerals, with a core focus on silica. As the organisation evolved, there was a need for a clearer brand identity and a digital presence that could communicate credibility, responsibility, and operational clarity to a wide range of stakeholders. We worked closely with the Yaykwa team to support them through market research, brand identity development, and the design and development of their website and content — creating a unified brand and digital foundation aligned with their values and industry context.",
    industries: [
      "Construction",
      "Mining",
      "Sustainability"
    ],
    serviceKeys: [
      "starr",
      "togglee",
      "penn"
    ],
    cardDefaultImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/5232554cf8824dc2.png",
    cardHoverImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/d1dc460d64ff1d21.png",
    clientLogos: [
      "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/a3cf193447380e10.svg"
    ],
    heroMedia: {
      url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/65b310ce60b16df9.png",
      type: "image"
    },
    galleryLayout: "grid",
    gallery: [
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/c2a6e5643922e0f5.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/0453f251f9232ec0.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/eb63d2e1ed78662b.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/a0c63a4c22e25c33.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/7f7eade8fbada294.png",
        type: "image"
      }
    ],
    galleryCta: {
      label: "View Site",
      href: "https://www.yaykwa.com/"
    },
    deliverables: [
      {
        title: "Market Research",
        description: "Research to understand the industry, stakeholders, and positioning needs."
      },
      {
        title: "Brand Identity",
        description: "A clear and professional identity system that reflects trust, responsibility, and long-term thinking."
      },
      {
        title: "Website Design & Development",
        description: "A structured, easy-to-navigate website designed to clearly communicate operations, values, and credibility."
      },
      {
        title: "Content Development",
        description: "Clear, consistent content to support transparency and understanding across audiences."
      }
    ],
    metrics: [
      {
        value: "04",
        label: "Key stakeholder groups addressed through structured content"
      },
      {
        value: "06+",
        label: "Core sections built to earn trust at a glance"
      },
      {
        value: "03",
        label: "Core focus areas structured clearly across brand, content, and web"
      },
      {
        value: "100%",
        label: "Consistent communication across identity, website, and content"
      }
    ],
    review: {
      quote: "Orello helped us revamp our brand identity with a clear understanding of both our needs and vision. From the logo and cohesive identity to the complete website build — design, development, and content — everything was handled end to end with care and precision.They also redesigned our collaterals, including flyers, standees, and social media templates, all delivered at a consistently high quality. The process was smooth, collaborative, and well‑managed, with great attention to detail and patience through every iteration. We would highly recommend Orello as a dependable, full‑service design partner.",
      authorName: "Khaleel Pathummathada",
      authorRole: "Founder, Yaykwa",
      authorImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/18b52994e0fd2cc6.svg"
    },
    published: true,
    order: 15,
    cardMediaType: "image"
  },
  {
    _id: "static-tmt",
    slug: "tmt",
    title: "Dr. Tarannum Memorial Trust",
    titleHighlight: "A Digital Platform to Support Access,",
    subtitle: "Awareness, and Giving",
    description: "Dr Tarannum Memorial Trust (TMT) is a charitable trust working to support healthcare access and community‑focused initiatives. The goal was to create a clear, trustworthy digital presence that reflects the organisation's mission, while making it easier for supporters to understand their work and contribute through online donations. We worked closely with the team to design and develop a website that communicates their purpose clearly, supports donations, and simplifies backend processes for managing contributions.",
    industries: [
      "NGO"
    ],
    serviceKeys: [
      "penn",
      "togglee"
    ],
    cardDefaultImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/705fbcb7506f6991.png",
    cardHoverImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/463eb980299eeb14.png",
    clientLogos: [
      "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/79728e56dfdf920f.svg"
    ],
    heroMedia: {
      url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/0989301ddba72b3f.png",
      type: "image"
    },
    galleryLayout: "grid",
    gallery: [
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/d71163df64e651e5.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/3e6d588af3dcde29.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/3c11f228572ff944.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/a72f7eb82fa2e814.png",
        type: "image"
      },
      {
        url: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/99d99a5eca488dee.png",
        type: "image"
      }
    ],
    galleryCta: {
      label: "View Site",
      href: "https://tarannum-memorialtrust.org/"
    },
    deliverables: [
      {
        title: "Website Design & Development",
        description: "A clear, accessible website that presents the trust's mission, work, and impact."
      },
      {
        title: "Donation Integration",
        description: "Razorpay integration to enable secure, seamless online donations."
      },
      {
        title: "Backend & Tracking",
        description: "A simple backend setup to track all donations in one consolidated sheet."
      },
      {
        title: "Content Structure",
        description: "Clear content organisation to make information easy to understand and navigate."
      }
    ],
    metrics: [
      {
        value: "100%",
        label: "Online donations enabled through a secure payment flow"
      },
      {
        value: "0",
        label: "Manual tracking, with all donations recorded digitally"
      },
      {
        value: "24/7",
        label: "Platform access for donors and supporters at any time"
      },
      {
        value: "365",
        label: "Days of availability for information, awareness, and giving"
      }
    ],
    review: {
      quote: "",
      authorName: "",
      authorRole: "",
      authorImage: ""
    },
    published: true,
    order: 16,
    cardMediaType: "image"
  },
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
      { url: "/case-studies/rudra/gallery-kannada.mp4", type: "video" },
      { url: "/case-studies/rudra/gallery-multilingual.mp4", type: "video" },
      { url: "/case-studies/rudra/gallery-prep.mp4", type: "video" },
      { url: "/case-studies/rudra/gallery-drying.mp4", type: "video" },
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
      { value: "5", label: "Regional languages reached with one consistent product story" },
      { value: "~2 min", label: "High-Quality Video, Per Language" },
      { value: "1 Week", label: "Nationwide, multilingual campaign ready to launch" },
      { value: "4", label: "Formats working together as one unified campaign" },
    ],
    review: null,
    published: true,
    featuredOnHome: false,
    order: 99,
  },
  {
    _id: "static-kissan-dharambir",
    slug: "kissan-dharambir",
    title: "Kissan Dharambir",
    titleHighlight: "Kissan Dharambir:",
    subtitle: "Taking MultiPro to Farmers in Their Own Language",
    description:
      "Kissan Dharambir's MultiPro machine, under GreenHub LLP's Gram Sootra brand, helps smallholder farmers pulp, juice, and process their own produce instead of selling it raw. Orello built the brand's multilingual video campaign and product catalogue, carrying the same message across five regional languages so farmers anywhere in India could see the machine explained in their own tongue.",
    industries: ["Agritech", "FMCG"],
    serviceKeys: ["motion", "penn"],
    cardDefaultImage: "/case-studies/kissan-dharambir/card-default.jpg",
    cardHoverImage: "/case-studies/kissan-dharambir/card-hover.mp4",
    clientLogos: [],
    heroMedia: { url: "/case-studies/kissan-dharambir/hero-loop.mp4", type: "video" },
    galleryLayout: "grid",
    gallery: [
      { url: "/case-studies/kissan-dharambir/gallery-farmer.mp4", type: "video" },
      { url: "/case-studies/kissan-dharambir/catalogue-english-mockup.jpg", type: "image" },
      { url: "/case-studies/kissan-dharambir/catalogue-assamese-mockup.jpg", type: "image" },
      { url: "/case-studies/kissan-dharambir/gallery-tamil.mp4", type: "video", fit: "contain" },
      { url: "/case-studies/kissan-dharambir/gallery-gujarati.mp4", type: "video", fit: "contain" },
      { url: "/case-studies/kissan-dharambir/gallery-product.mp4", type: "video" },
      { url: "/case-studies/kissan-dharambir/gallery-selling.mp4", type: "video" },
    ],
    galleryCta: null,
    deliverables: [
      {
        title: "Multilingual Video Campaign",
        description:
          "An animated explainer video produced in five regional languages (Hindi, Gujarati, Kannada, Tamil, Telugu) walking farmers through the MultiPro machine and how it helps them earn more from their produce.",
      },
      {
        title: "Product Catalogue Design",
        description:
          "A two-page MultiPro product catalogue covering specs, pricing tiers, and a customer testimonial, localised into English and regional languages for distribution alongside the videos.",
      },
      {
        title: "Motion Graphics",
        description:
          "Animated product shots, spec call-outs, and on-screen text treatments carried consistently across every language version.",
      },
    ],
    metrics: [
      { value: "5", label: "Regional languages — one explainer, understood nationwide" },
      { value: "2", label: "Catalogue languages supporting on-ground distribution" },
      { value: "600+", label: "MultiPro Machines Installed" },
      { value: "5000+", label: "Livelihoods Supported" },
    ],
    review: null,
    published: true,
    featuredOnHome: false,
    order: 100,
  },
  {
    _id: "static-truva",
    slug: "truva",
    title: "Truva",
    titleHighlight: "Truva:",
    subtitle: "Selling Homes Without the Endless Calls",
    description:
      "Truva is a proptech platform, built by alumni of IIT and Stanford, that helps homeowners sell with real transaction data instead of guesswork, and gets listings sold in an average of 44 days. Orello edits Truva's Meta ads campaign: a brand explainer that reframes the pain of selling a home, and property-specific reels like the Godrej Park Retreat walkthrough that convert that trust into booked viewings.",
    industries: ["PropTech", "Real Estate"],
    serviceKeys: ["motion"],
    cardDefaultImage: "/case-studies/truva/card-default.jpg",
    cardHoverImage: "/case-studies/truva/card-hover.mp4",
    clientLogos: ["/case-studies/truva/logo.png"],
    heroMedia: { url: "/case-studies/truva/hero-skyline.mp4", type: "video" },
    galleryLayout: "portrait",
    gallery: [
      { url: "/case-studies/truva/gallery-aerial.mp4", type: "video", fit: "contain", aspect: "4 / 5" },
      { url: "/case-studies/truva/gallery-intro.mp4", type: "video", fit: "contain", aspect: "4 / 5" },
      { url: "/case-studies/truva/gallery-painpoint.mp4", type: "video", fit: "contain" },
      { url: "/case-studies/truva/gallery-app.mp4", type: "video", fit: "contain" },
      { url: "/case-studies/truva/gallery-stat.mp4", type: "video", fit: "contain" },
    ],
    galleryCta: null,
    deliverables: [
      {
        title: "Brand Explainer Edit (9:16)",
        description:
          "A vertical Meta ads edit walking a seller from the pain of endless calls and uncertain pricing to Truva's data-backed valuation, loan and registration support, and 44-day average selling time.",
      },
      {
        title: "Property Reel Edit (4:5)",
        description:
          "A listing-specific walkthrough edit for Godrej Park Retreat, built from on-ground footage into a fast-paced reel with location, amenities, and move-in-ready call-outs.",
      },
      {
        title: "Motion Graphics & Captioning",
        description:
          "On-brand animated captions, stat call-outs, and app-screen overlays carried consistently across every edit.",
      },
    ],
    metrics: [
      { value: "2 Hrs", label: "Average Turnaround Time" },
      { value: "7+", label: "Videos Delivered Per Day" },
      { value: "50+", label: "Videos Delivered This Month" },
      { value: "10+", label: "AI-Generated Concepts" },
    ],
    review: null,
    published: true,
    featuredOnHome: false,
    order: 101,
  },
  {
    _id: "static-agrostudio",
    slug: "agrostudio",
    title: "AgroStudio",
    titleHighlight: "AgroStudio:",
    subtitle: "Explaining affordable farm tech in the farmer's own language",
    description:
      "AgroStudio builds affordable, battery-powered farm equipment, including a multipurpose sprayer that weighs just 5.5-6.5kg against a traditional 20kg tank, cutting liquid use and labour for small and mid-scale farmers across Maharashtra. Orello produced a regional-language motion graphic explainer that breaks the product down for the audience that actually buys it: farmers, FPOs, and dealers who think in Marathi, not spec sheets.",
    industries: ["AgriTech", "Agriculture"],
    serviceKeys: ["motion", "penn"],
    cardDefaultImage: "/case-studies/agrostudio/card.jpg",
    cardHoverImage: "/case-studies/agrostudio/card-hover-logo.mp4",
    clientLogos: [],
    heroMedia: { url: "/case-studies/agrostudio/explainer.mp4", type: "video" },
    galleryLayout: "bento",
    gallery: [
      { url: "/case-studies/agrostudio/explainer.mp4", type: "video", fit: "contain", size: "wide" },
      { url: "/case-studies/agrostudio/flyer-mockup.jpg", type: "image", size: "lg" },
      { url: "/case-studies/agrostudio/flyer-holder.jpg", type: "image", size: "sm" },
    ],
    galleryCta: null,
    deliverables: [
      {
        title: "Marathi Motion Graphic Explainer",
        description:
          "A character-led animated explainer walking Maharashtra's farmers through the battery sprayer's weight, running cost, and ease of use, in the language they actually speak.",
      },
      {
        title: "Script & Storyboard",
        description:
          "Simplified farmer-first messaging built around the product's real specs: lighter weight, lower liquid use, and reduced labour cost.",
      },
      {
        title: "Marathi Print Flyer",
        description:
          "A print-ready Marathi flyer covering the sprayer's weight, versatility, and cost savings, for on-ground dealer and FPO distribution.",
      },
    ],
    metrics: [
      { value: "Marathi", label: "Explainer voiced in the farmer's own language" },
      { value: "1:57", label: "Full explainer runtime" },
    ],
    review: null,
    published: false,
    featuredOnHome: false,
    order: 102,
  },
  {
    _id: "static-oscillo",
    slug: "oscillo",
    title: "Oscillo",
    titleHighlight: "Oscillo:",
    subtitle: "Two farm machines, one Kannada story each",
    description:
      "Oscillo makes battery and solar-powered farm machines, including the electric paddy weeder and the Rake King, built to cut manual labour and promote SRI transplanting methods. Orello produced Kannada-language motion graphic explainers for both products, showing them at work in the field so farmers can see exactly what they're buying before a dealer ever shows up.",
    industries: ["AgriTech", "Agriculture"],
    serviceKeys: ["motion", "penn"],
    cardDefaultImage: "/case-studies/oscillo/card.jpg",
    cardHoverImage: "/case-studies/oscillo/card-hover-logo.mp4",
    clientLogos: [],
    heroMedia: { url: "/case-studies/oscillo/paddyweeder-explainer.mp4", type: "video" },
    galleryLayout: "bento",
    gallery: [
      { url: "/case-studies/oscillo/paddyweeder-explainer.mp4", type: "video", fit: "contain", size: "wide" },
      { url: "/case-studies/oscillo/flyer-mockup.jpg", type: "image", size: "lg" },
      { url: "/case-studies/oscillo/rakeking-explainer.mp4", type: "video", fit: "contain", size: "wide" },
    ],
    galleryCta: null,
    deliverables: [
      {
        title: "Electric Paddy Weeder Explainer (Kannada)",
        description:
          "An animated walkthrough of the paddy weeder's build, battery life, and field coverage, built for the Kannada-speaking farmer audience.",
      },
      {
        title: "Rake King Explainer (Kannada)",
        description:
          "A matching explainer for Oscillo's second product, keeping the same visual language so the two machines read as one product family.",
      },
      {
        title: "Print Flyers",
        description:
          "Print-ready flyers for the Rake King and electric paddy weeder, covering specs, testimonials, and dealer contact details.",
      },
    ],
    metrics: [
      { value: "2", label: "Kannada explainers, one per machine" },
      { value: "4:43", label: "Combined explainer runtime" },
    ],
    review: null,
    published: true,
    featuredOnHome: false,
    order: 103,
  },
  {
    _id: "static-sapthkrishi",
    slug: "sapthkrishi",
    title: "Sapthkrishi",
    titleHighlight: "Sapthkrishi:",
    subtitle: "Making cold storage make sense to the farmer who needs it",
    description:
      "Sapthkrishi's Sabjikothi is a portable, chemical-free cooling unit that extends the shelf life of fruits, vegetables, and flowers by up to 30 days, built for farmers and street vendors who lose income to spoilage. Orello produced a Hindi-language motion graphic explainer that walks through how it works and what it saves, in the market language of the people who'd actually carry it home.",
    industries: ["AgriTech", "Agriculture"],
    serviceKeys: ["motion", "penn"],
    cardDefaultImage: "/case-studies/sapthkrishi/card.jpg",
    cardHoverImage: "/case-studies/sapthkrishi/card-hover-logo.mp4",
    clientLogos: [],
    heroMedia: { url: "/case-studies/sapthkrishi/explainer.mp4", type: "video" },
    galleryLayout: "bento",
    gallery: [
      { url: "/case-studies/sapthkrishi/explainer.mp4", type: "video", fit: "contain", size: "wide" },
      { url: "/case-studies/sapthkrishi/flyer-mockup.jpg", type: "image", size: "lg" },
      { url: "/case-studies/sapthkrishi/gallery-extra.jpg", type: "image", fit: "contain", size: "wide" },
    ],
    galleryCta: null,
    deliverables: [
      {
        title: "Hindi Motion Graphic Explainer",
        description:
          "An animated explainer covering Sabjikothi's chemical-free, portable design and its shelf-life benefit, built for farmers and street vendors across the Hindi belt.",
      },
      {
        title: "Print Flyers",
        description:
          "Farmer- and street-vendor-facing print flyers covering Sabjikothi's chemical-free storage, portability, and shelf-life benefits.",
      },
    ],
    metrics: [
      { value: "Hindi", label: "Explainer voiced in the farmer's own language" },
      { value: "1:39", label: "Full explainer runtime" },
    ],
    review: null,
    published: true,
    featuredOnHome: false,
    order: 104,
  },
  {
    _id: "static-sema",
    slug: "sema",
    title: "SEMA",
    titleHighlight: "SEMA:",
    subtitle: "A six-machine mini rice mill, explained in Tamil",
    description:
      "SEMA (Small-Scale Efficient Machinery for Agriculture) builds a solar-powered, six-machine integrated mini rice mill aimed at Tamil Nadu's FPOs, SHGs, and small farmers who need to process paddy without a full industrial setup. Orello produced a Tamil-language motion graphic explainer that breaks the six-stage process down visually, so a farmer can follow the machine's value without reading a single spec sheet.",
    industries: ["AgriTech", "Agriculture"],
    serviceKeys: ["motion", "penn"],
    cardDefaultImage: "/case-studies/sema/card.jpg",
    cardHoverImage: "/case-studies/sema/card-hover-logo.mp4",
    clientLogos: [],
    heroMedia: { url: "/case-studies/sema/explainer.mp4", type: "video" },
    galleryLayout: "bento",
    gallery: [
      { url: "/case-studies/sema/explainer.mp4", type: "video", fit: "contain", size: "wide" },
      { url: "/case-studies/sema/flyer-mockup.jpg", type: "image", size: "wide", fit: "contain" },
    ],
    galleryCta: null,
    deliverables: [
      {
        title: "Tamil Motion Graphic Explainer",
        description:
          "An animated walkthrough of the mini rice mill's six integrated machines and solar-powered operation, aimed at Tamil Nadu's FPOs, SHGs, and small farmers.",
      },
      {
        title: "Print Flyers",
        description:
          "Print-ready flyers covering the mini mill's specs, milling package, and financing options, in English and regional languages.",
      },
    ],
    metrics: [
      { value: "Tamil", label: "Explainer voiced in the farmer's own language" },
      { value: "2:30", label: "Full explainer runtime" },
    ],
    review: null,
    published: true,
    featuredOnHome: false,
    order: 105,
  },
  {
    _id: "static-villgro-ebike-event",
    slug: "villgro-ebike-event",
    title: "Villgro E-Bike Event",
    titleHighlight: "Villgro:",
    subtitle: "Covering a policymaker workshop on rural e-bike delivery",
    description:
      "Villgro's Charging Rural Deliveries workshop brought policymakers together to look at e-bikes as a cleaner option for rural e-commerce delivery agents. Orello produced an edited recap video of the sessions plus standees and digital displays for the venue, alongside Orello's ongoing flyer and motion graphics work for Villgro's incubated enterprises.",
    industries: ["Climate Tech", "Sustainability", "Agritech"],
    serviceKeys: ["motion", "penn"],
    cardDefaultImage: "/case-studies/villgro-ebike-event/card.jpg",
    cardHoverImage: "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/9d47d446b89974fa.png",
    clientLogos: [
      "https://orello-cms.sfo3.cdn.digitaloceanspaces.com/cms/case-studies/1f5d8e388026fef4.svg",
    ],
    heroMedia: { url: "/case-studies/villgro-ebike-event/ebike-event-video.mp4", type: "video" },
    galleryLayout: "grid",
    gallery: [
      { url: "/case-studies/villgro-ebike-event/ebike-event-video.mp4", type: "video" },
      { url: "/case-studies/villgro-ebike-event/event-01.jpg", type: "image", fit: "contain" },
      { url: "/case-studies/villgro-ebike-event/event-02.jpg", type: "image" },
      { url: "/case-studies/villgro-ebike-event/event-03.jpg", type: "image" },
      { url: "/case-studies/villgro-ebike-event/event-04.jpg", type: "image" },
      { url: "/case-studies/villgro-ebike-event/event-05.jpg", type: "image" },
      { url: "/case-studies/villgro-ebike-event/event-06.jpg", type: "image" },
    ],
    galleryCta: null,
    deliverables: [
      {
        title: "E-Bike Event Video",
        description:
          "An edited recap video from Villgro's Charging Rural Deliveries policymaker workshop on e-bikes for rural e-commerce delivery agents",
      },
      {
        title: "Event Collaterals",
        description:
          "Standees, digital displays, and print materials designed for the policymaker workshop venue",
      },
    ],
    metrics: [
      { value: "10+", label: "Social initiatives supported with Villgro" },
      { value: "20+", label: "Videos delivered for Villgro" },
      { value: "150+", label: "Creatives delivered for Villgro" },
      { value: "09+", label: "Verticals worked across with Villgro" },
    ],
    review: null,
    published: true,
    featuredOnHome: false,
    order: 106,
  },
];
