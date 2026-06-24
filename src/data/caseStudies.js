// Local case-study data — extracted verbatim from the 14 hardcoded
// case-study section components (src/sections/*Hero/*Second/*Third/*Fourth,
// WhatWeDelivered*). Shape is normalised so a single dynamic template can
// eventually render every study. NOT yet wired to a route or the backend.
//
// Per-study shape:
// {
//   slug, title,                      // title = short name shown on the listing card
//   titleHighlight, subtitle,         // hero headline: bold part + light part
//   description,                      // hero body paragraph
//   clientLogos: [importedSvg],       // hero logo row (GBM has 4, the rest have 1)
//   industries: [string],             // listing filter tags  (from CaseStudySecond ALL_PROJECTS)
//   serviceKeys: [string],            // starr|togglee|penn|motion (logo filter keys)
//   card: { defaultImage, hoverImage },  // listing-grid card media
//   heroImage,                        // wide image atop the "What We Delivered" block
//   deliverables: [{ title, description }],           // 4 per study
//   metrics:      [{ value, label }],                 // 4 per study
//   gallery: { layout, items: [{ src, type }], cta }, // photo grid + optional CTA button
//   review: { quote, name, role, avatar } | null,     // testimonial (8 of 14 have one)
// }

/* ───────────────── Listing-card media (from CaseStudySecond ALL_PROJECTS) ───────────────── */
import case1 from '../assets/images/case1.png';
import case2 from '../assets/images/case2.png';
import case3 from '../assets/images/case3.png';
import case4 from '../assets/images/case4.png';
import case6 from '../assets/images/case6.png';
import case7 from '../assets/images/case7.png';
import case8 from '../assets/images/case8.png';
import case9 from '../assets/images/case9.png';
import case10 from '../assets/images/case10.png';
import case11 from '../assets/images/case11.png';
import case12 from '../assets/images/case12.png';
import case13 from '../assets/images/case13.png';
import case14 from '../assets/images/case14.png';
import hr2 from '../assets/images/hr2.png';
import hr3 from '../assets/images/hr3.png';
import hr4 from '../assets/images/hr4.png';
import hr5 from '../assets/images/hr5.png';
import hr6 from '../assets/images/hr6.png';
import hr7 from '../assets/images/hr7.png';
import hr8 from '../assets/images/hr8.png';
import hr9 from '../assets/images/hr9.png';
import hr11 from '../assets/images/hr11.png';
import hr12 from '../assets/images/hr12.png';
import hr13 from '../assets/images/hr13.png';
import hr14 from '../assets/images/hr14.png';
import gehover from '../assets/images/gehover.png';

/* ───────────────── Client logos (hero) + testimonial avatars ───────────────── */
import clogo1 from '../assets/logos/clogo1.svg';
import clogo2 from '../assets/logos/clogo2.svg';
import clogo3 from '../assets/logos/clogo3.svg';
import clogo4 from '../assets/logos/clogo4.svg';
import find1Logo from '../assets/logos/find1.svg';
import explg from '../assets/logos/explg.svg';
import coldeasy2 from '../assets/logos/coldeasy2.svg';
import oceanLogo from '../assets/logos/ocean2.svg';
import canvaLogo from '../assets/logos/canva.svg';
import aarLogo from '../assets/logos/aar.svg';
import gangpurLogo from '../assets/logos/gangpur.svg';
import g31 from '../assets/logos/g31.svg';
import scale1 from '../assets/logos/scale1.svg';
import yaykwa1 from '../assets/logos/yaykwa1.svg';
import tmtLogo from '../assets/logos/tmt.svg';
import roshini2 from '../assets/logos/roshini2.svg';
import vishal2 from '../assets/logos/vishal2.svg';
import sanam2 from '../assets/logos/sanam2.svg';
import alex2 from '../assets/logos/alex2.svg';
import canvaseAvatar from '../assets/logos/c.svg';
import bimal2 from '../assets/logos/bimal2.svg';
import yog2 from '../assets/logos/yog2.svg';
import yaykwa2 from '../assets/logos/yaykwa2.svg';

/* ───────────────── Hero / delivered banner images ───────────────── */
import gbmimg from '../assets/images/gbmimg.png';
import find2 from '../assets/images/find2.png';
import exp1 from '../assets/images/exp1.png';
import cold from '../assets/images/cold.png';
import seema from '../assets/images/seema.png';
import ocean3 from '../assets/images/ocean3.png';
import canvase2 from '../assets/images/canvase2.png';
import aar1 from '../assets/images/aar1.png';
import gangpurmap from '../assets/images/gangpurmap.png';
import g32 from '../assets/images/g32.png';
import scale2 from '../assets/images/scale2.png';
import yaykwa3 from '../assets/images/yaykwa3.png';
import tmt1 from '../assets/images/tmt1.png';

/* ───────────────── Gallery media ───────────────── */
import gbm2 from '../assets/images/gbm2.png';
import gbm3 from '../assets/images/gbm3.png';
import gbm4 from '../assets/images/gbm4.png';
import gbm5 from '../assets/images/gbm5.png';
import gbm6 from '../assets/images/gbm6.png';
import gbm7 from '../assets/images/gbm7.png';
import find3 from '../assets/images/find3.png';
import find4 from '../assets/images/find4.png';
import find5 from '../assets/images/find5.png';
import find6 from '../assets/images/find6.png';
import find7 from '../assets/images/find7.png';
import exp2 from '../assets/videos/exp2.mp4';
import exp3 from '../assets/images/exp3.png';
import exp4 from '../assets/videos/exp4.mp4';
import exp5 from '../assets/images/exp5.png';
import exp6 from '../assets/images/exp6.png';
import cold1 from '../assets/images/cold1.png';
import cold2 from '../assets/images/cold2.png';
import cold3 from '../assets/images/cold3.png';
import cold4 from '../assets/images/cold4.png';
import cold5 from '../assets/images/cold5.png';
import vimg1 from '../assets/images/vimg1.png';
import vimg2 from '../assets/images/vimg2.png';
import vimg3 from '../assets/videos/vimg3.mp4';
import vimg4 from '../assets/images/vimg4.png';
import vimg5 from '../assets/images/vimg5.png';
import vimg6 from '../assets/images/vimg6.png';
import ocean4 from '../assets/images/ocean4.png';
import ocean5 from '../assets/images/ocean5.png';
import ocean6 from '../assets/images/ocean6.png';
import ocean7 from '../assets/images/ocean7.png';
import ocean8 from '../assets/images/ocean8.png';
import canva3 from '../assets/images/canva3.png';
import canva4 from '../assets/images/canva4.png';
import canva5 from '../assets/images/canva5.png';
import canva6 from '../assets/images/canva6.png';
import canvase7 from '../assets/images/canvase7.png';
import aar2 from '../assets/images/aar2.png';
import aar3 from '../assets/images/aar3.png';
import aar4 from '../assets/images/aar4.png';
import aar5 from '../assets/images/aar5.png';
import aar6 from '../assets/images/aar6.png';
import gang1 from '../assets/images/gang1.png';
import gang2 from '../assets/images/gang2.png';
import gang3 from '../assets/images/gang3.png';
import gang4 from '../assets/images/gang4.png';
import gang5 from '../assets/images/gang5.png';
import g33 from '../assets/images/g33.png';
import g34 from '../assets/images/g34.png';
import g35 from '../assets/images/g35.png';
import g36 from '../assets/images/g36.png';
import g37 from '../assets/images/g37.png';
import g38 from '../assets/images/g38.png';
import g39 from '../assets/images/g39.png';
import scale3 from '../assets/images/scale3.png';
import scale4 from '../assets/images/scale4.png';
import scale5 from '../assets/images/scale5.png';
import scale6 from '../assets/images/scale6.png';
import scale7 from '../assets/images/scale7.png';
import yog3 from '../assets/images/yog3.png';
import yog4 from '../assets/images/yog4.png';
import yog5 from '../assets/images/yog5.png';
import yog6 from '../assets/images/yog6.png';
import yog7 from '../assets/images/yog7.png';
import yog8 from '../assets/images/yog8.png';
import yaykwa4 from '../assets/images/yaykwa4.png';
import yaykwa5 from '../assets/images/yaykwa5.png';
import yaykwa6 from '../assets/images/yaykwa6.png';
import yaykwa7 from '../assets/images/yaykwa7.png';
import yaykwa8 from '../assets/images/yaykwa8.png';
import tmt2 from '../assets/images/tmt2.png';
import tmt3 from '../assets/images/tmt3.png';
import tmt4 from '../assets/images/tmt4.png';
import tmt5 from '../assets/images/tmt5.png';
import tmt6 from '../assets/images/tmt6.png';

const img = (src) => ({ src, type: 'image' });
const vid = (src) => ({ src, type: 'video' });

export const CASE_STUDIES = [
  {
    slug: 'gbm',
    title: 'GBM Report',
    titleHighlight: 'Green Building Materials:',
    subtitle: 'Collaterals that Convened a Movement',
    description:
      "For Villgro's Green Building Materials (GBM) event, we developed reports, decks, and event collaterals that helped innovators, investors, and policymakers come together to push sustainable construction forward. Clear design turned complex ideas into actionable conversations and sector-wide alignment.",
    clientLogos: [clogo1, clogo2, clogo3, clogo4],
    industries: ['Climate Tech', 'Sustainability', 'Construction'],
    serviceKeys: ['penn'],
    card: { defaultImage: case1, hoverImage: hr5 },
    heroImage: gbmimg,
    deliverables: [
      { title: 'GBM Report', description: 'Easy-to-read, visually engaging materials in multiple Indian languages' },
      { title: 'Stakeholder Deck', description: 'Visual presentations tailored for investors, policymakers, and partners' },
      { title: 'Event Brochure', description: 'An engaging guide to the program, enterprises, and opportunities.' },
      { title: 'Communication Tools', description: 'Clear storytelling to highlight opportunities in sustainable construction' },
    ],
    metrics: [
      { value: '300+', label: 'Stakeholders engaged through event materials' },
      { value: '50+', label: 'Green enterprises represenated' },
      { value: '10+', label: 'Investor and policymaker groups involved' },
      { value: '01', label: 'Unified platform advancing sustainable construction' },
    ],
    gallery: {
      layout: 'asymmetric', // 2 stacked left + tall right, then 2 inner, then full banner
      items: [img(gbm7), img(gbm6), img(gbm5), img(gbm3), img(gbm4), img(gbm2)],
      cta: { label: 'View Report', href: 'https://villgro.org/storage/2025/07/GBM-Market-Study-Report-2025.pdf' },
    },
    review: {
      quote:
        "Orello Creatives designed impactful, visually stunning collateral for Villgro’s GBM event. From Reports to brochures to standees, every item was crafted with detail and attention. The team’s design expertise helped us leave a lasting impression on our audience and incredible experience!",
      name: 'Roshini Muthukumar',
      role: 'Manager-Ecosystem Development, Villgro',
      avatar: roshini2,
    },
  },

  {
    slug: 'findtheircare',
    title: 'FindTheirCare',
    titleHighlight: 'Designing a Guided,',
    subtitle: 'AI‑Driven Platform for Navigating UK Care Services',
    description:
      'Orello partnered with FindTheir Care across research, brand identity, and product design to shape a guided, conversational experience — combining a warm, trustworthy brand presence with an AI‑driven search and dashboard system for families, care providers, and administrators.',
    clientLogos: [find1Logo],
    industries: ['Health', 'AI'],
    serviceKeys: ['starr', 'togglee', 'penn'],
    card: { defaultImage: case2, hoverImage: hr2 },
    heroImage: find2,
    deliverables: [
      { title: 'Research & Strategic Direction', description: 'Market, user, and competitor research to define platform positioning, UX direction, and brand foundations.' },
      { title: 'Brand Identity System', description: 'A complete identity including logo, typography, color palette, tone of voice, and brand guidelines.' },
      { title: 'AI Driven Platform Design', description: 'Design of a guided, conversational search experience to help families understand care types, compare options, and discover suitable providers.' },
      { title: 'UX & Dashboard Flows', description: 'Structured user journeys and dashboards for families, care providers, and platform administrators.' },
    ],
    metrics: [
      { value: '08+', label: 'Core care categories structured into guided discovery flows' },
      { value: '03', label: 'User roles supported through dedicated platform dashboards' },
      { value: '100%', label: 'Consistent brand and experience across product and communications' },
      { value: '24/7', label: 'Access to care search, education, and provider discovery' },
    ],
    gallery: {
      layout: 'grid', // 2×2 + full banner
      items: [img(find3), img(find4), img(find5), img(find6), img(find7)],
      cta: null,
    },
    review: null,
  },

  {
    slug: 'exp',
    title: 'EO Exploration',
    titleHighlight: "Entrepreneurs' Organization: Exploration",
    subtitle: '– Peru Edition',
    description:
      "Entrepreneurs' Organization (EO), a global network of visionary founders and leaders, partnered with us to bring their flagship event - Exploration: Peru Edition - to life. From crafting a distinctive event logo to designing a vibrant landing page and motion graphics, we helped EO capture the spirit of adventure, connection, and cultural immersion that defines Exploration.",
    clientLogos: [explg],
    industries: ['Events', 'Travel'],
    serviceKeys: ['starr', 'motion', 'togglee', 'penn'],
    card: { defaultImage: case3, hoverImage: hr3 },
    heroImage: exp1,
    deliverables: [
      { title: 'Event Logo Design', description: "Dynamic identity for Exploration: Peru Edition blending travel and EO's global ethos" },
      { title: 'Landing Page', description: 'Created the event Landing page showcasing experience, itinerary, and registration' },
      { title: 'Motion Graphics', description: "Animated social posts boosting EO's event marketing and anticipation" },
      { title: 'Event Emailers', description: "Designed for outreach and engagement with EO's global community" },
    ],
    metrics: [
      { value: '300+', label: "Global entrepreneurs engaged through the event's digital presence" },
      { value: '08+', label: "Countries represented under EO's global community umbrella" },
      { value: '5x', label: 'Higher event visibility through a cohesive visual identity across platforms' },
      { value: '20+', label: 'Motion graphics and digital assets created to amplify event reach across social media and web' },
    ],
    gallery: {
      layout: 'grid', // 2×2 + full banner, mixes video + image
      items: [vid(exp2), img(exp3), vid(exp4), img(exp5), img(exp6)],
      cta: { label: 'View Site', href: 'https://eonetwork.org/?scLang=en' },
    },
    review: null,
  },

  {
    slug: 'coldeasy',
    title: 'Coldeasy',
    titleHighlight: 'coldeasy:',
    subtitle: 'Rebranding a coldstorage pioneer',
    description:
      'Originally known as Temperate, the company needed a new identity to reflect its vision of making cold storage accessible and efficient. We rebranded them as Coldeasy — a name and identity built on simplicity, innovation, and impact. The rebrand was supported with a new website and collaterals that positioned Coldeasy as a trusted partner for both farmers and large-scale supply chains.',
    clientLogos: [coldeasy2],
    industries: ['Climate Tech', 'Sustainability', 'Agritech'],
    serviceKeys: ['starr', 'motion', 'togglee', 'penn'],
    card: { defaultImage: case4, hoverImage: hr4 },
    heroImage: cold,
    deliverables: [
      { title: 'Rebrand & Identity', description: 'Transitioned Temperate into Coldeasy with a new logo and visual system with a presentation deck' },
      { title: 'Website Curation', description: 'Redesigned www.coldeasy.in to showcase products and drive inquiries' },
      { title: 'Product Flyers', description: 'Clear one-pagers for multiple cold storage solutions' },
      { title: 'Event Collaterals', description: 'Banners, standees, and marketing materials for outreach and engagement' },
    ],
    metrics: [
      { value: '100%', label: 'Successful transition from Temperate to Coldeasy' },
      { value: '05+', label: 'Cold storage product lines reintroduced under the new identity' },
      { value: '3,000+', label: 'Event visitors engaged through banners, flyers, and standees' },
      { value: '03+', label: 'Core digital touchpoints built — website, product flyers, and event collaterals' },
    ],
    gallery: {
      layout: 'grid',
      items: [img(cold1), img(cold2), img(cold3), img(cold4), img(cold5)],
      cta: { label: 'View Site', href: 'https://www.coldeasy.in/' },
    },
    review: {
      quote:
        'Orello helped us revamp our brand identity with a clear understanding of both our needs and vision. From the logo and cohesive identity to the complete website build — design, development, and content — everything was handled end to end with care and precision. They also redesigned our collaterals, including flyers, standees, and social media templates, all delivered at a consistently high quality. The process was smooth, collaborative, and well‑managed, with great attention to detail and patience through every iteration. We would highly recommend Orello as a dependable, full‑service design partner.',
      name: 'Vishal Singhal',
      role: 'Founder, Coldeasy',
      avatar: vishal2,
    },
  },

  {
    slug: 'villgro',
    title: 'Villgro',
    titleHighlight: 'Empowering Social Enterpreneurs with',
    subtitle: 'Multilingual communication',
    description:
      "Villgro, one of India's leading social enterprise incubators, partnered with us to create communication tools that help their incubated enterprises connect with grassroots communities. Through multilingual flyers and motion graphics videos, we simplified complex innovations into engaging, accessible formats that built trust and drove adoption.",
    clientLogos: [clogo1],
    industries: ['Climate Tech', 'Sustainability', 'Agritech'],
    serviceKeys: ['motion', 'penn'],
    card: { defaultImage: vimg3, hoverImage: hr5 },
    heroImage: seema,
    deliverables: [
      { title: 'Multilingual Flyers', description: 'Easy-to-read visually engaging materials in multiple Indian languages' },
      { title: 'Motion Graphic Videos', description: 'Animated explainers simplifying technical solutions into relatable stories' },
      { title: 'Localized Content', description: 'Region-specific collaterals ensuring cultural resonance and clarity' },
      { title: 'Enterprise Specific Assets', description: "Unique materials designed for startups across Villgro's portfolio" },
    ],
    metrics: [
      { value: '20+', label: 'Enterprises supported with tailored communication tools' },
      { value: '08+', label: 'Enterprises supported with tailored communication tools' },
      { value: '10,000+', label: 'Enterprises supported with tailored communication tools' },
      { value: '20+', label: 'Enterprises supported with tailored communication tools' },
    ],
    gallery: {
      layout: 'asymmetric', // 2 stacked left + tall right, then a video + image row, then full banner
      items: [img(vimg1), img(vimg4), img(vimg2), vid(vimg3), img(vimg5), img(vimg6)],
      cta: null,
    },
    review: {
      quote:
        'Our experience with Orello Creatives has been outstanding! They  consistently manage Villgro’s marketing collateral with creativity and  professionalism. Haamid and Razeena’s designs capture our brand’s  essence beautifully every time. Highly recommend their services for  anyone in need of fresh, high-quality materials!',
      name: 'Sanam Jain',
      role: 'Manager, Climate Action, Villgro Innovations',
      avatar: sanam2,
    },
  },

  {
    slug: 'ocean',
    title: 'Ocean',
    titleHighlight: "Building Ocean's",
    subtitle: 'First Impression for Stakeholders',
    description:
      'Ocean needed a digital presence in time for a high-stakes stakeholder event. The goal was to create a website that not only introduced the company and its vision but also conveyed credibility to investors and partners at first glance. Working closely with the founder, we designed and developed www.ocean.build as a clear, professional, and event-ready platform.',
    clientLogos: [oceanLogo],
    industries: ['Climate Tech', 'Sustainability', 'Construction', 'Agritech'],
    serviceKeys: ['togglee'],
    card: { defaultImage: case6, hoverImage: hr6 },
    heroImage: ocean3,
    deliverables: [
      { title: 'Website Curation', description: 'Built www.ocean.build as an event-ready, professional digital presence' },
      { title: 'Content Structuring', description: "Organized Ocean's vision, technology, and impact into clear, stakeholder-friendly messaging" },
      { title: 'Design Systems', description: "Clean layouts and visuals aligned with Ocean's positioning" },
      { title: 'Event Readiness', description: 'Delivered on a tight deadline to ensure the website supported founder presentations' },
    ],
    metrics: [
      { value: '100%', label: 'Website launch support for the stakeholder event' },
      { value: '03', label: "Core sections crafted – vision, technology, and impact – to tell Ocean's story clearly" },
      { value: '05+', label: 'Stakeholder groups engaged with a credible first impression' },
      { value: '2x', label: 'Increase in confidence and clarity for founder presentations backed by the website' },
    ],
    gallery: {
      layout: 'grid',
      items: [img(ocean4), img(ocean5), img(ocean6), img(ocean7), img(ocean8)],
      cta: { label: 'View Site', href: 'https://www.ocean.build' },
    },
    review: {
      quote:
        'Orello Creatives transformed Ocean’s website on WordPress, bringing our vision to life with a sleek, polished design. Orello’s team was attentive to our needs and delivered on a tight deadline. Their professionalism and quality work exceeded our expectations, highly recommended for anyone seeking reliable web development that combines aesthetics with functionality!',
      name: 'Alexa  Bednarz',
      role: 'Founder & CEO, Ocean',
      avatar: alex2,
    },
  },

  {
    slug: 'canvase',
    title: 'Canvase',
    titleHighlight: 'Canvasé:',
    subtitle: 'Defining a Contemporary Lifestyle Brand',
    description:
      'Canvasé, an Ireland-based fashion and lifestyle brand, approached us at its inception to shape a brand that seamlessly blends functional, ready-to-wear fashion with bold artistic expression. From naming the brand to building a distinctive identity and a digital presence, we laid the foundation for Canvasé to enter the market with confidence and clarity.',
    clientLogos: [canvaLogo],
    industries: ['Fashion', 'Lifestyle', 'Sustainability'],
    serviceKeys: ['starr', 'motion', 'togglee', 'penn'],
    card: { defaultImage: case7, hoverImage: hr7 },
    heroImage: canvase2,
    deliverables: [
      { title: 'Brand Naming', description: 'Created Canvasé, a name that captures creativity, individuality, and international sophistication' },
      { title: 'Identity Systems', description: 'Logo, emblem, and visual language blending artistic expression with timeless elegance' },
      { title: 'Visual Assets', description: '50+ applications including patterns, social media templates, and packaging concepts' },
      { title: 'Website Curation', description: 'www.canvaseshop.com designed to build anticipation and introduce the brand globally' },
    ],
    metrics: [
      { value: '5x', label: 'Stronger brand recall achieved through a distinctive, globally resonant name' },
      { value: '50+', label: 'Brand assets designed across logo, emblem, typography, and visual language' },
      { value: '5+', label: "Core brand pillars defined, anchoring Canvasé's positioning in fashion and lifestyle" },
      { value: '3x', label: 'Digital anticipation built with Coming Soon website and launch collaterals' },
    ],
    gallery: {
      layout: 'grid',
      items: [img(canvase7), img(canva3), img(canva4), img(canva5), img(canva6)],
      cta: { label: 'View Site', href: 'https://canvaseshop.com/' },
    },
    review: {
      quote:
        'Working with Orello was such an intuitive experience. They understood my vision for Canvasé and built a brand identity that feels authentic, modern, and scalable. From design details to the bigger picture, everything was thoughtfully crafted. I truly felt supported throughout the journey, and the outcome reflects exactly what I had hoped for',
      name: 'Harshitha',
      role: 'Founder & CEO, Canvasé',
      avatar: canvaseAvatar,
    },
  },

  {
    slug: 'aarkiva',
    title: 'Aarkiva',
    titleHighlight: 'Building a refined identity for',
    subtitle: 'a modern real estate brand',
    description:
      'Aarkiva is a real estate brand focused on developing thoughtfully designed residential spaces rooted in trust, quality, and long‑term value. As the organisation prepared to introduce its first residential project, Prathva, there was a need for a clear and consistent brand presence that could communicate credibility, architectural intent, and project vision across both digital and physical touchpoints. We partnered with Aarkiva to shape a cohesive brand system and digital foundation - supporting everything from identity development and website design to project marketing materials and everyday business collaterals.',
    clientLogos: [aarLogo],
    industries: ['Real-estate'],
    serviceKeys: ['starr', 'togglee', 'penn'],
    card: { defaultImage: case8, hoverImage: hr8 },
    heroImage: aar1,
    deliverables: [
      { title: 'Brand Identity System', description: 'Developed a complete visual identity including logo, typography, color palette, and brand guidelines.' },
      { title: 'Project Catalogue', description: 'Created a structured, design-led catalogue to present the first residential project with clarity and visual impact.' },
      { title: 'Website Design & Development', description: "Designed and built the Aarkiva website to reflect the brand's architectural language and project positioning." },
      { title: 'Brand Collaterals', description: 'Designed business cards and letterheads to maintain consistency across official communications.' },
    ],
    metrics: [
      { value: '04+', label: 'Core brand assets created for digital and print use' },
      { value: '06+', label: 'Marketing and communication formats aligned to brand guidelines' },
      { value: '03', label: 'Key stakeholder touchpoints supported through the website and catalogue' },
      { value: '100%', label: 'Consistent brand expression across identity, web, and sales materials' },
    ],
    gallery: {
      layout: 'grid',
      items: [img(aar2), img(aar3), img(aar4), img(aar5), img(aar6)],
      cta: { label: 'View Site', href: 'https://www.aarkiva.com' },
    },
    review: null,
  },

  {
    slug: 'gangpur',
    title: 'Gangpur Silage',
    titleHighlight: 'Gangpur Silage: Building Trust Through',
    subtitle: 'Farmer-Centric Design',
    description:
      'To address fodder shortages and build trust in silage as a solution, Gangpur partnered with us to create a refreshed identity and a suite of farmer-facing communication tools. By simplifying technical concepts into accessible visuals, the collaterals helped farmers see silage as practical, credible, and directly linked to healthier cows and better incomes.',
    clientLogos: [gangpurLogo],
    industries: ['Dairy', 'Agritech', 'Sustainability'],
    serviceKeys: ['starr', 'penn'],
    card: { defaultImage: case9, hoverImage: hr9 },
    heroImage: gangpurmap,
    deliverables: [
      { title: 'Brand Refresh', description: 'A modern yet farmer-friendly logo and visual language signaling credibility and trust' },
      { title: 'Origami Flyer', description: 'A compact, engaging tool for on-ground farmer conversations' },
      { title: 'Sales Flipchart', description: 'Step-by-step visuals and calculators to explain silage feeding practices' },
      { title: 'Comprehensive Booklet', description: 'Clear, illustrative content breaking down nutrition, storage, and economic benefits' },
    ],
    metrics: [
      { value: '10000+', label: 'Farmers reached across Central and Eastern India' },
      { value: '150+', label: 'Village-level entrepreneurs equipped with sales tools' },
      { value: '3x', label: 'Increase in farmer awareness of silage benefits' },
      { value: '01', label: 'Unified farmer-first identity positioned Gangpur as a credible social enterprise' },
    ],
    gallery: {
      layout: 'grid',
      items: [img(gang1), img(gang2), img(gang3), img(gang4), img(gang5)],
      cta: null,
    },
    review: {
      quote:
        'Working with Orello has been a turning point for Gangpur Silage. They understood our mission to make silage accessible for farmers and translated it into designs that actually work on the ground. From our brand identity to farmer-facing collaterals like flipcharts and booklets, everything was made simple, practical, and effective. Their team didn’t feel like an outside agency — they felt like part of our own, committed to helping us grow and reach more farmers with clarity and trust.',
      name: 'Bimal Lakra',
      role: 'Founder/CEO, Gangpur Ventures',
      avatar: bimal2,
    },
  },

  {
    slug: 'g3',
    title: 'G3',
    titleHighlight: 'G3: Building a Clear,',
    subtitle: 'Credible Digital Presence',
    description:
      'G3, a platform aiming to deliver "PHBB" content or operations via its web interface, engaged us to refine its digital presence and make its online portal more user-friendly, credible, and visually compelling. We redesigned their website, streamlined user flows, and created design assets to increase clarity, engagement, and trust among its target audience.',
    clientLogos: [g31],
    industries: ['Events', 'Social Organisation'],
    serviceKeys: ['starr', 'motion', 'togglee', 'penn'],
    card: { defaultImage: case10, hoverImage: gehover },
    heroImage: g32,
    deliverables: [
      { title: 'Brand Identity Systems', description: "Logo, typography, and color palette designed to reflect G3's ethos" },
      { title: 'Landing Page', description: 'A responsive, modern page built for credibility and clarity' },
      { title: 'Event Collaterals', description: 'Banners, and branded merchandise like t-shirts to strengthen visibility at events' },
      { title: 'Content Structure', description: 'Structured storytelling to position G3 confidently with stakeholders' },
    ],
    metrics: [
      { value: '20+', label: 'Brand assets developed, logo, typography, color palette, and guidelines' },
      { value: '01', label: 'Responsive landing page designed and deployed' },
      { value: '03+', label: 'Core visual elements standardized for long-term consistency' },
      { value: '05+', label: 'Content sections structured for clarity and storytelling' },
    ],
    gallery: {
      layout: 'grid', // 7 images → 3 rows of 2 + full-width banner
      items: [img(g33), img(g34), img(g35), img(g36), img(g37), img(g38), img(g39)],
      cta: { label: 'View Site', href: 'https://g3-phbb.onrender.com/' },
    },
    review: null,
  },

  {
    slug: 'scalepoint',
    title: 'Scalepoint',
    titleHighlight: 'Scalepoint: A Unified Identity',
    subtitle: 'for Modern Living & Working',
    description:
      'To position Scalepoint as the first point of contact for professionals navigating new opportunities, we built a refreshed brand identity, a modern digital presence, and a comprehensive design system. By combining hospitality with functionality, the brand now speaks with clarity, consistency, and aspiration, helping global talent experience comfort and productivity from the moment they arrive.',
    clientLogos: [scale1],
    industries: ['Corporate'],
    serviceKeys: ['starr', 'togglee', 'penn'],
    card: { defaultImage: case11, hoverImage: hr11 },
    heroImage: scale2,
    deliverables: [
      { title: 'Refreshed Brand Identity', description: 'Inspired by communication, space, location, and growth' },
      { title: 'Visual Assets', description: 'Business cards, corporate stationery, ID cards, swags, billboards, and more' },
      { title: 'Website Design & Development', description: 'A clean, functional, and conversion-ready platform' },
      { title: 'Enterprise Specific Assets', description: "An investor and client-facing presentation aligning Scalepoint's vision, offerings, and premium positioning" },
    ],
    metrics: [
      { value: '500+', label: "Professionals engaged through Scalepoint's refreshed digital and offline presence" },
      { value: '150+', label: 'Brand applications rolled out across print, digital, and space branding' },
      { value: '07+', label: 'Countries served, supporting expats and global clients with seamless experiences' },
      { value: '05+', label: 'Active cities in India with an expanding footprint' },
    ],
    gallery: {
      layout: 'grid',
      items: [img(scale3), img(scale4), img(scale5), img(scale6), img(scale7)],
      cta: { label: 'View Site', href: 'https://www.scalepoint.in' },
    },
    review: null,
  },

  {
    slug: 'yog',
    title: 'Letsyogwithshai',
    // FIXME: YogHero.jsx is currently a copy of YaykwaHero.jsx — the live page
    // shows Yaykwa's mining hero (wrong logo, title, and description). The
    // correct hero copy/logo for the yoga studio is unknown, so these fields
    // are left blank pending the real content. The rest (deliverables, metrics,
    // gallery, review) are the genuine Letsyogwithshai data.
    titleHighlight: '',
    subtitle: '',
    description: '',
    clientLogos: [],
    industries: ['Health', 'Lifestyle'],
    serviceKeys: ['togglee'],
    card: { defaultImage: case12, hoverImage: hr12 },
    heroImage: yog3,
    deliverables: [
      { title: 'Website Revamp', description: "A refreshed, responsive site designed to reflect Shai's teaching style and global audience" },
      { title: 'Booking & Payment', description: 'Streamlined flows supporting multiple geographies, currencies, and platforms' },
      { title: 'User-Centred Design', description: 'Focused on clarity, simplicity, and ease of navigation for a worldwide audience' },
      { title: 'Custom Micro Platform', description: 'A Linktree-style hub integrated with both her website & Instagram for quick access to classes and resources' },
    ],
    metrics: [
      { value: '100%', label: 'Website redesigned with a modern and intuitive experience' },
      { value: '02', label: 'Integrated booking and payment flows for both local and international clients' },
      { value: '50%', label: 'Faster client onboarding with simplified scheduling and payment journeys' },
      { value: '01', label: 'Unified custom micro-platform created and embedded for Instagram and website users' },
    ],
    gallery: {
      layout: 'grid',
      items: [img(yog4), img(yog5), img(yog6), img(yog7), img(yog8)],
      cta: { label: 'View Site', href: 'https://letsyogwithshai.com/' },
    },
    review: {
      quote:
        'Orello Creatives transformed my online presence into something seamless and professional. The new website booking system and integrated platform makes it so much easier for my students across the world to connect with me',
      name: 'Shailee Raja',
      role: 'Founder, Letsyogwithshai',
      avatar: yog2,
    },
  },

  {
    slug: 'yaykwa',
    title: 'Yaykwa',
    titleHighlight: 'Establishing a Clear Brand and Digital Presence',
    subtitle: 'for a Mining Organisation',
    description:
      'Yaykwa is a Kerala‑based mining company specialising in dredging, mining, and trading of minerals, with a core focus on silica. As the organisation evolved, there was a need for a clearer brand identity and a digital presence that could communicate credibility, responsibility, and operational clarity to a wide range of stakeholders. We worked closely with the Yaykwa team to support them through market research, brand identity development, and the design and development of their website and content — creating a unified brand and digital foundation aligned with their values and industry context.',
    clientLogos: [yaykwa1],
    industries: ['Construction', 'Mining', 'Sustainability'],
    serviceKeys: ['starr', 'togglee', 'penn'],
    card: { defaultImage: case13, hoverImage: hr13 },
    heroImage: yaykwa3,
    deliverables: [
      { title: 'Market Research', description: 'Research to understand the industry, stakeholders, and positioning needs.' },
      { title: 'Brand Identity', description: 'A clear and professional identity system that reflects trust, responsibility, and long-term thinking.' },
      { title: 'Website Design & Development', description: 'A structured, easy-to-navigate website designed to clearly communicate operations, values, and credibility.' },
      { title: 'Content Development', description: 'Clear, consistent content to support transparency and understanding across audiences.' },
    ],
    metrics: [
      { value: '04', label: 'Key stakeholder groups addressed through structured content' },
      { value: '06+', label: 'Core sections clearly outlining operations, values, and approach' },
      { value: '03', label: 'Core focus areas structured clearly across brand, content, and web' },
      { value: '100%', label: 'Consistent communication across identity, website, and content' },
    ],
    gallery: {
      layout: 'grid',
      items: [img(yaykwa4), img(yaykwa5), img(yaykwa6), img(yaykwa7), img(yaykwa8)],
      cta: { label: 'View Site', href: 'https://www.yaykwa.com/' },
    },
    review: {
      quote:
        'Orello helped us revamp our brand identity with a clear understanding of both our needs and vision. From the logo and cohesive identity to the complete website build — design, development, and content — everything was handled end to end with care and precision.They also redesigned our collaterals, including flyers, standees, and social media templates, all delivered at a consistently high quality. The process was smooth, collaborative, and well‑managed, with great attention to detail and patience through every iteration. We would highly recommend Orello as a dependable, full‑service design partner.',
      name: 'Khaleel Pathummathada',
      role: 'Founder, Yaykwa',
      avatar: yaykwa2,
    },
  },

  {
    slug: 'tmt',
    title: 'Dr. Tarannum Memorial Trust',
    titleHighlight: 'A Digital Platform to Support Access,',
    subtitle: 'Awareness, and Giving',
    description:
      "Dr Tarannum Memorial Trust (TMT) is a charitable trust working to support healthcare access and community‑focused initiatives. The goal was to create a clear, trustworthy digital presence that reflects the organisation's mission, while making it easier for supporters to understand their work and contribute through online donations. We worked closely with the team to design and develop a website that communicates their purpose clearly, supports donations, and simplifies backend processes for managing contributions.",
    clientLogos: [tmtLogo],
    industries: ['NGO'],
    serviceKeys: ['penn', 'togglee'],
    card: { defaultImage: case14, hoverImage: hr14 },
    heroImage: tmt1,
    deliverables: [
      { title: 'Website Design & Development', description: "A clear, accessible website that presents the trust's mission, work, and impact." },
      { title: 'Donation Integration', description: 'Razorpay integration to enable secure, seamless online donations.' },
      { title: 'Backend & Tracking', description: 'A simple backend setup to track all donations in one consolidated sheet.' },
      { title: 'Content Structure', description: 'Clear content organisation to make information easy to understand and navigate.' },
    ],
    metrics: [
      { value: '100%', label: 'Online donations enabled through a secure payment flow' },
      { value: '0', label: 'Manual tracking, with all donations recorded digitally' },
      { value: '24/7', label: 'Platform access for donors and supporters at any time' },
      { value: '365', label: 'Days of availability for information, awareness, and giving' },
    ],
    gallery: {
      layout: 'grid',
      items: [img(tmt2), img(tmt3), img(tmt4), img(tmt5), img(tmt6)],
      cta: { label: 'View Site', href: 'https://tarannum-memorialtrust.org/' },
    },
    review: null,
  },
];

export const getCaseStudyBySlug = (slug) => CASE_STUDIES.find((c) => c.slug === slug);
