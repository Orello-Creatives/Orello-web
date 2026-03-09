import React from 'react';
import read1 from '../assets/images/read1.png';
import read2 from '../assets/images/read2.png';
import read3 from '../assets/images/read3.png';
import { Link } from 'react-router';

export default function BlogGridSection() {
  const blogPosts = [
    {
      id: 1,
      image: read1,
      title: "Why Motion Graphics Will Lead Marketing in 2025",
      bgColor: "#2a1f5c",
      link: "/blogs"
    },
    {
      id: 2,
      image: read2,
      title: "Mastering the Art of Attention",
      bgColor: "#fdf6e9",
      link: "/blog3"
    },
    {
      id: 3,
      image: read3,
      title: "Why Logos are for Screenshots, not Billboard",
      bgColor: "#fdf6e9",
      link: "/blog2"
    },
  ];

  return (
    <div id="blogs" className="bg-[#F4EDE2] py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link to={post.link} key={post.id}>
              <div className="group cursor-pointer">
                {/* Image Container */}
                <div
                  className="rounded-2xl overflow-hidden mb-4 aspect-[4/3] relative"
                  style={{ backgroundColor: post.bgColor }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Text Content */}
                <div className="space-y-3">
                  <h4 className="text-[#402E1D] font-medium leading-tight">
                    {post.title}
                  </h4>

                  <button className="flex items-center gap-2 cursor-pointer text-[#D98127] font-semibold text-base group-hover:gap-3 transition-all duration-300">
                    Read more
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}