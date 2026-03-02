import { useRef, useEffect } from 'react'
import read1 from '../assets/images/read1.png'
import read2 from '../assets/images/read2.png'
import read3 from '../assets/images/read3.png'
import { Link } from 'react-router'
import gsap from 'gsap'

const AnimatedButton = ({ to, label, className }) => {
  const wrapperRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const btn = btnRef.current;

    const handleMouseMove = (e) => {
      const rect = wrapper.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * 0.5;
      const dy = (e.clientY - cy) * 0.5;
      gsap.to(btn, { x: dx, y: dy, duration: 0.4, ease: 'power2.out' });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1.1, 0.4)' });
    };

    wrapper.addEventListener('mousemove', handleMouseMove);
    wrapper.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      wrapper.removeEventListener('mousemove', handleMouseMove);
      wrapper.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={wrapperRef} style={{ display: 'inline-block', padding: '16px', margin: '-16px' }}>
      <Link to={to}>
        <button
          ref={btnRef}
          className={className}
          style={{ willChange: 'transform', display: 'block' }}
        >
          {label}
        </button>
      </Link>
    </div>
  );
};

export default function LatestReads() {
  const articles = [
    {
      id: 1,
      image: read1,
      title: "Why Logos are for Screenshots, not Billboard",
      tag: "BLOGS",
      tagColor: "bg-orange-500"
    },
    {
      id: 2,
      image: read2,
      title: "Why Logos are for Screenshots, not Billboard",
      tag: "BLOGS",
      tagColor: "bg-orange-500"
    },
    {
      id: 3,
      image: read3,
      title: "Why Logos are for Screenshots, not Billboard",
      tag: "ARTICLE",
      tagColor: "bg-purple-400"
    }
  ]

  return (
    <div className="bg-black text-white py-16 sm:py-20 md:py-24 relative z-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-10 sm:mb-12">
          <h2 className="font-light text-2xl sm:text-3xl md:text-4xl">
            Latest<span className="font-semibold"> Reads</span>
          </h2>
          <AnimatedButton
            to="/blogs"
            label="Explore all resources"
            className="bg-[#F7AF19] cursor-pointer text-black px-4 py-2 rounded-full font-medium hover:bg-yellow-400 transition-colors w-fit"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article.id} className="group cursor-pointer">
              {/* Image */}
              <Link to="/blogs">
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