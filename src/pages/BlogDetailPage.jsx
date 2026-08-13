import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const BASE = 'https://letsyogwithshai-backend.onrender.com';

function formatDate(iso) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

// Renders a blog post using the shared Orello article markup/classes.
export default function BlogDetailPage() {
  const { slug } = useParams();

  const { data: cmsPost, isError } = useQuery({
    queryKey: ['cms', `/blogs/${slug}`],
    queryFn: () =>
      fetch(`${BASE}/api/cms/blogs/${slug}`).then((res) => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      }),
    enabled: Boolean(BASE),
    retry: false,
  });

  const post = cmsPost || null;
  const status = post ? 'ready' : BASE && !isError ? 'loading' : 'error';

  return (
    <div>
      <Navbar />
      <div className="bg-[#FDF6E9] pt-24 pb-16 min-h-screen">
        <div className="container">
          {status === 'loading' && (
            <p className="pt-12 text-sm text-gray-500">Loading...</p>
          )}

          {status === 'error' && (
            <div className="pt-12 pb-24">
              <h1 className="font-bold text-gray-900 mb-4">Post not found</h1>
              <p className="paragraph text-gray-800 mb-6">
                This article may have been moved or unpublished.
              </p>
              <Link to="/resources" className="text-[#d98127] font-semibold underline">
                Browse all resources
              </Link>
            </div>
          )}

          {status === 'ready' && post && (
            <>
              {/* Hero Image Section */}
              {post.featuredImage && (
                <div className="pt-6 sm:pt-8 lg:pt-12 mb-8 sm:mb-12">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              )}

              {/* Content Section */}
              <div className="pb-12 sm:pb-16 lg:pb-20">
                <h1 className="font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  {post.title}
                </h1>

                <div className="mb-6 sm:mb-8">
                  {post.author && (
                    <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                      Author: {post.author}
                    </p>
                  )}
                  <p className="text-sm sm:text-base font-semibold text-black">
                    {formatDate(post.publishedDate)}
                  </p>
                </div>

                <hr className="border-t border-[#E77B00] mb-6 sm:mb-8" />

                {post.intro && (
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-8 sm:mb-12 leading-relaxed">
                    {post.intro}
                  </p>
                )}

                {(post.sections || []).map((section, i) => (
                  <div key={i} className="mb-8 sm:mb-10">
                    {section.heading && (
                      <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                        {section.heading}
                      </h2>
                    )}
                    {(section.paragraphs || []).map((p, j) => (
                      <p key={j} className="text-sm sm:text-base md:text-lg text-gray-800 mb-3 sm:mb-4 leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
