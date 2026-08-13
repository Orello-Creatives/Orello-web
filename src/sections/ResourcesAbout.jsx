import React, { useState } from 'react';
import { Link } from 'react-router';
import { useCmsContent } from '../hooks/useCmsContent';

const toCard = (b) => ({
  id: b._id || b.slug,
  image: b.cardImage,
  title: b.title,
  bgColor: '#fdf6e9',
  link: `/blogs/${b.slug}`,
});

export default function BlogGridSection() {
  const [activeTab, setActiveTab] = useState('all');

  const cmsBlogs = useCmsContent('/blogs', null);
  const blogPosts = (cmsBlogs || []).map(toCard);

  const showBlogs = activeTab === 'all' || activeTab === 'blogs';
  const showArticles = activeTab === 'articles';

  return (
    <div id="blogs" className="bg-[#F4EDE2] py-24">
      <div className="container">

        {/* Tab Buttons - Left Aligned */}
        <div className="flex flex-row gap-4 justify-start items-start mb-14">
          <button
            onClick={() => setActiveTab('blogs')}
            className={`px-12 py-4 rounded-full text-lg font-semibold transition-colors duration-300 min-w-[160px] cursor-pointer ${
              activeTab === 'blogs'
                ? 'bg-[#4B433B] text-white'
                : 'bg-[#f7af19] text-[#4B433B] '
            }`}
          >
            Blogs
          </button>
          <button
            onClick={() => setActiveTab('articles')}
            className={`px-12 py-4 rounded-full text-lg font-semibold transition-colors duration-300 min-w-[160px] cursor-pointer ${
              activeTab === 'articles'
                ? 'bg-[#4B433B] text-white'
                : 'bg-[#f7af19] text-[#4B433B]  '
            }`}
          >
            Articles
          </button>
        </div>

        {/* No Blogs State */}
        {showBlogs && blogPosts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-[#4B433B] text-2xl font-semibold opacity-60">
              No blogs present
            </p>
          </div>
        )}

        {/* Blog Cards */}
        {showBlogs && blogPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link to={post.link} key={post.id}>
                <div className="group cursor-pointer">
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
        )}

        {/* No Articles State */}
        {showArticles && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-[#4B433B] text-2xl font-semibold opacity-60">
              No articles present
            </p>
          </div>
        )}

      </div>
    </div>
  );
}