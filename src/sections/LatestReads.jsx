import { useRef, useEffect } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { useCmsContent } from '../hooks/useCmsContent'
import { BLOGS } from '../data/blogs'

// Local card image by slug, used when a CMS post has no cardImage yet
const LOCAL_CARD_IMAGE = Object.fromEntries(BLOGS.map((b) => [b.slug, b.cardImage]))

// Card shape consumed by this section, derived from any blog record
const toCard = (b) => ({
  id: b._id || b.slug,
  image: b.cardImage || LOCAL_CARD_IMAGE[b.slug],
  title: b.title,
  tag: b.tag,
  tagColor: b.tagColor,
  link: `/blogs/${b.slug}`,
})

// Local fallback list (the 3 original posts) until CMS data arrives
const FALLBACK_ARTICLES = BLOGS.map(toCard)

const AnimatedButton = ({ to, label }) => {
  const buttonRef = useRef(null);
  const textRef = useRef(null);
  const circleRightRef = useRef(null);
  const circleLeftRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const text = textRef.current;
    const circleRight = circleRightRef.current;
    const circleLeft = circleLeftRef.current;

    if (!button) return;

    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    if (isTouchDevice) return;

    const handleMouseEnter = () => {
      gsap.to(text, { x: 30, duration: 0.4, ease: 'power2.inOut' });
      gsap.to(circleRight, { scale: 0, duration: 0.4, ease: 'power2.inOut' });
      gsap.to(circleLeft, { scale: 1, duration: 0.4, ease: 'power2.inOut' });
    };

    const handleMouseLeave = () => {
      gsap.to(text, { x: 0, duration: 0.4, ease: 'power2.inOut' });
      gsap.to(circleRight, { scale: 1, duration: 0.4, ease: 'power2.inOut' });
      gsap.to(circleLeft, { scale: 0, duration: 0.4, ease: 'power2.inOut' });
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <Link to={to}>
      <button
        ref={buttonRef}
        className="relative overflow-hidden cursor-pointer rounded-full flex items-center pl-4 pr-2 py-1.5"
        style={{ backgroundColor: '#f7af19', color: '#000000', willChange: 'transform' }}
      >
        {/* Circle left (hover state) - hidden by default */}
        <span
          ref={circleLeftRef}
          className="absolute left-1.5 w-7 h-7 rounded-full flex items-center justify-center text-black"
          style={{ backgroundColor: '#ffffff', transform: 'scale(0)' }}
        >
          <svg width="11" height="11" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>

        {/* Text */}
        <span
          ref={textRef}
          className="text-sm font-medium whitespace-nowrap mr-3"
          style={{ color: '#000000' }}
        >
          {label}
        </span>

        {/* Circle right (initial state) */}
        <span
          ref={circleRightRef}
          className="w-7 h-7 flex-shrink-0 rounded-full flex items-center justify-center text-black"
          style={{ backgroundColor: '#ffffff' }}
        >
          <svg width="11" height="11" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
    </Link>
  );
};

export default function LatestReads() {
  const cmsBlogs = useCmsContent('/blogs', null);
  const articles = cmsBlogs ? cmsBlogs.slice(0, 3).map(toCard) : FALLBACK_ARTICLES;

  return (
    <div className="bg-black text-white py-16 sm:py-20 md:py-24 relative z-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-10 sm:mb-12">
          <h2 className="font-light text-2xl sm:text-3xl md:text-4xl">
            Latest<span className="font-semibold"> Reads</span>
          </h2>
          <AnimatedButton
            to="/resources"
            label="Explore all resources"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article.id} className="group cursor-pointer">
              {/* Image */}
              <Link to={article.link}>
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-video">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div>
                  <h4 className="font-semibold mb-3 text-base sm:text-lg transition-colors">
                    {article.title}
                  </h4>
                  <span className={`${article.tagColor} text-white text-xs font-bold px-4 py-2 rounded inline-block uppercase tracking-wide`}>
                    {article.tag}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}