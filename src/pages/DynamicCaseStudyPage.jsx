import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Readyto from '../components/Readyto.jsx';
import comma from '../assets/logos/comma.svg';
import { getCaseStudyBySlug } from '../data/caseStudies';
import CaseStudyGallery, { Media } from '../components/CaseStudyGallery.jsx';
import MoreCaseStudies from '../sections/MoreCaseStudies.jsx';

const BASE = 'https://letsyogwithshai-backend.onrender.com';

// Normalise either a CMS document or a local data-file record into one
// view-model with gallery items as { src, type }.
function normalize(cs) {
  if (!cs) return null;
  const isLocal = cs.gallery && !Array.isArray(cs.gallery); // local: gallery is { layout, items, cta }

  if (isLocal) {
    return {
      title: cs.title,
      titleHighlight: cs.titleHighlight,
      subtitle: cs.subtitle,
      description: cs.description,
      clientLogos: cs.clientLogos || [],
      heroMedia: cs.heroImage ? { src: cs.heroImage, type: 'image' } : null,
      deliverables: cs.deliverables || [],
      metrics: cs.metrics || [],
      gallery: {
        layout: cs.gallery.layout || 'grid',
        items: cs.gallery.items || [],
        cta: cs.gallery.cta && cs.gallery.cta.href ? cs.gallery.cta : null,
      },
      review: cs.review && cs.review.quote
        ? { quote: cs.review.quote, authorName: cs.review.name, authorRole: cs.review.role, authorImage: cs.review.avatar }
        : null,
    };
  }

  // CMS document shape
  return {
    title: cs.title,
    titleHighlight: cs.titleHighlight,
    subtitle: cs.subtitle,
    description: cs.description,
    clientLogos: cs.clientLogos || [],
    heroMedia: cs.heroMedia && cs.heroMedia.url ? { src: cs.heroMedia.url, type: cs.heroMedia.type } : null,
    deliverables: cs.deliverables || [],
    metrics: cs.metrics || [],
    gallery: {
      layout: cs.galleryLayout || 'grid',
      items: (cs.gallery || []).filter((g) => g.url).map((g) => ({ src: g.url, type: g.type })),
      cta: cs.galleryCta && cs.galleryCta.href ? cs.galleryCta : null,
    },
    review: cs.review && cs.review.quote ? cs.review : null,
  };
}

// Hero: arc background + client-logo row + headline + description
function CaseHero({ cs }) {
  const arcs = [
    { w: '140vw', h: '130vw', bg: '#e8ddd0', bottom: '-70vw' },
    { w: '120vw', h: '110vw', bg: '#faf5eb', bottom: '-60vw' },
    { w: '95vw', h: '85vw', bg: '#e8ddd0', bottom: '-50vw' },
    { w: '70vw', h: '65vw', bg: '#faf5eb', bottom: '-40vw' },
    { w: '45vw', h: '45vw', bg: '#e8ddd0', bottom: '-30vw' },
    { w: '25vw', h: '25vw', bg: '#faf5eb', bottom: '-20vw' },
    { w: '12vw', h: '12vw', bg: '#e8ddd0', bottom: '-12vw' },
    { w: '6vw', h: '6vw', bg: '#faf5eb', bottom: '-6vw' },
  ];
  const logos = (cs.clientLogos || []).filter(Boolean);

  return (
    <div
      className="relative overflow-hidden flex flex-col justify-end pt-6 sm:pt-8 md:pt-12 lg:pt-14"
      style={{ backgroundColor: '#faf5eb', paddingTop: 'clamp(150px, 8vw, 600px)' }}
    >
      <div className="hidden lg:flex absolute inset-0 items-end justify-center pointer-events-none overflow-hidden">
        {arcs.map((arc, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: '50%',
              width: arc.w,
              height: arc.h,
              backgroundColor: arc.bg,
              bottom: arc.bottom,
              opacity: 0.6,
              transform: 'translateX(-50%)',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-[35px]" style={{ maxWidth: '1400px' }}>
        {logos.length > 0 && (
          <div className="flex gap-2 sm:gap-2.5 md:gap-3 lg:gap-5 flex-wrap mb-3 sm:mb-3 md:mb-4">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="bg-white border border-black/[0.07] rounded-[4px] px-2 sm:px-2.5 md:px-3 lg:px-[14px] py-1.5 lg:py-2 flex items-center justify-center w-auto min-w-[70px] sm:min-w-[80px] md:min-w-[100px] lg:min-w-[120px] min-h-[36px] sm:min-h-[40px] md:min-h-[44px] lg:min-h-[48px]"
                style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}
              >
                <img src={logo} alt={`Logo ${i + 1}`} className="max-h-4 sm:max-h-5 md:max-h-6 lg:max-h-8 w-auto object-contain" />
              </div>
            ))}
          </div>
        )}

        <h1
          className="mb-3 sm:mb-3.5 md:mb-4 lg:mb-[18px] leading-[1.3] sm:leading-[1.30] md:leading-[1.25]"
          style={{ fontSize: 'clamp(1.75rem, 5.5vw, 4rem)', color: '#402E1D', maxWidth: '1200px', fontWeight: 400 }}
        >
          {cs.titleHighlight && (
            <>
              <strong className="font-black text-[#402E1D]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 900 }}>
                {cs.titleHighlight}
              </strong>{' '}
            </>
          )}
          <span className="font-light" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
            {cs.titleHighlight ? cs.subtitle || cs.title : cs.title}
          </span>
        </h1>

        {cs.description && (
          <p
            className="leading-[1.6] sm:leading-[1.65] md:leading-[1.7] lg:leading-[1.82] mb-6 sm:mb-8 md:mb-10 lg:mb-16"
            style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)', color: '#0A0A0A', maxWidth: '920px' }}
          >
            {cs.description}
          </p>
        )}
      </div>
    </div>
  );
}

// "What we delivered": hero media, deliverables grid, metrics stats bar
function Delivered({ cs }) {
  const hasDeliverables = (cs.deliverables || []).length > 0;
  const hasMetrics = (cs.metrics || []).length > 0;
  if (!cs.heroMedia && !hasDeliverables && !hasMetrics) return null;

  return (
    <div className="w-full pt-10 bg-[#FDF6E9] font-sans">
      <div className="container mx-auto">
        {cs.heroMedia && <Media item={cs.heroMedia} className="object-cover w-full h-full" />}

        {hasDeliverables && (
          <div className="w-full py-16 flex flex-col md:flex-row gap-12">
            <div className="md:w-1/4 shrink-0">
              <h2 className="text-4xl font-normal leading-snug text-gray-900">
                What<br />
                <span className="font-bold">We delivered</span>
              </h2>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {cs.deliverables.map((item, i) => (
                <div key={i} className="pl-4 border-l-4 border-[#D98127]">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-900">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {hasMetrics && (
        <div className="w-full bg-[#F9F5ED] py-10 px-8">
          <div className="container grid grid-cols-2 md:grid-cols-4">
            {cs.metrics.map((stat, i) => (
              <div
                key={i}
                className={`flex flex-col px-6 py-4
                  ${i % 2 !== 0 ? 'border-l border-[#574636]' : ''}
                  ${i >= 2 ? 'border-t border-[#574636] md:border-t-0' : ''}
                  md:border-t-0
                  ${i !== 0 ? 'md:border-l border-[#574636]' : ''}
                `}
              >
                <span className="text-4xl font-bold text-[#D98127] leading-none mb-1">{stat.value}</span>
                <span className="text-sm text-black max-w-[170px]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


// Client testimonial card
function Review({ review }) {
  if (!review?.quote) return null;
  return (
    <section className="bg-[#F9F5ED] py-16 sm:py-24 px-4">
      <h2 className="text-center text-4xl md:text-5xl text-[#1a1a1a] mb-10 tracking-tight leading-tight">
        We love a <strong className="font-bold">happy client</strong>
      </h2>
      <div className="container bg-white rounded-2xl shadow-sm">
        <div className="px-6 sm:px-12 md:px-16 lg:px-24 py-8 sm:py-12 md:py-16">
          <div className="mb-6">
            <img src={comma} alt="Quote" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          </div>
          <p className="text-[#0E1010] text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-6xl">
            {review.quote}
          </p>
          <div className="flex items-center gap-3 sm:gap-4">
            {review.authorImage && (
              <div className="shrink-0">
                <img src={review.authorImage} alt={review.authorName} className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover rounded-full" />
              </div>
            )}
            <div>
              <p className="font-semibold text-[#1a1a1a] text-sm sm:text-base leading-tight">{review.authorName}</p>
              <p className="text-[#C47D1E] text-xs sm:text-sm mt-0.5 font-medium">{review.authorRole}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function DynamicCaseStudyPage() {
  const { slug } = useParams();
  const fallback = getCaseStudyBySlug(slug);

  const { data: cmsDoc, isError } = useQuery({
    queryKey: ['cms', `/case-studies/${slug}`],
    queryFn: () =>
      fetch(`${BASE}/api/cms/case-studies/${slug}`).then((res) => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      }),
    enabled: Boolean(BASE),
    retry: false,
  });

  const cs = normalize(cmsDoc || fallback);
  const status = cs ? 'ready' : BASE && !isError ? 'loading' : 'error';

  return (
    <div>
      <Navbar />
      {status === 'loading' && <div className="min-h-screen bg-[#FDF6E9]" />}

      {status === 'error' && (
        <div className="min-h-screen bg-[#FDF6E9] pt-40 pb-24">
          <div className="container">
            <h1 className="font-bold text-gray-900 mb-4">Case study not found</h1>
            <p className="paragraph text-gray-800 mb-6">This case study may have been moved or unpublished.</p>
            <Link to="/casestudy-overview" className="text-[#d98127] font-semibold underline">
              Browse all work
            </Link>
          </div>
        </div>
      )}

      {status === 'ready' && cs && (
        <>
          <CaseHero cs={cs} />
          <Delivered cs={cs} />
          <CaseStudyGallery layout={cs.gallery.layout} items={cs.gallery.items} cta={cs.gallery.cta} />
          <Review review={cs.review} />
          <MoreCaseStudies currentSlug={slug} />
          {/* CTA card straddles two sections: cream (#F4EDE2) behind its top
              half, footer colour (#fdf7ee) behind its bottom half. The bottom
              padding matches Readyto's top margin so the card is centered and
              the hard 50% gradient split lands on the card's midline. */}
          <div className="bg-linear-to-b from-[#F4EDE2] from-50% to-[#fdf7ee] to-50% overflow-hidden pb-12 sm:pb-16 md:pb-20 lg:pb-24">
            <Readyto />
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}
