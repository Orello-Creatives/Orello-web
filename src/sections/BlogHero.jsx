import React from 'react';
import blogpng from '../assets/images/blogpng.png'

export default function BlogSection() {
  return (
    <div className=" bg-[#FDF6E9] pt-24 pb-16">
      <div className="container ">
        {/* Hero Image Section */}
        <div className="pt-6 sm:pt-8 lg:pt-12 mb-8 sm:mb-12">
          <img 
            src={blogpng} 
            alt="Blog header" 
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="pb-12 sm:pb-16 lg:pb-20">
          {/* Title */}
          <h1 className="font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Why Motion Graphics Will Lead <br/>Marketing in 2025
          </h1>

          {/* Author and Date */}
          <div className="mb-6 sm:mb-8">
            <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Author: Razeena</p>
            <p className="text-sm sm:text-base font-semibold text-black">16 January 2025</p>
          </div>

          {/* Divider */}
          <hr className="border-t border-[#E77B00] mb-6 sm:mb-8" />

          {/* Introduction */}
          <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-8 sm:mb-12 leading-relaxed">
           As the digital world becomes even more competitive and fast-paced, brands need to adapt to new trends and technologies. Motion graphics have proven to be not just a creative tool but a vital part of modern marketing strategies. Here's why they're taking over—and why you need them.
          </p>

          {/* Section 1 */}
          <div className="mb-8 sm:mb-10">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
            1. Instant Attention in a Busy Digital World
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 mb-3 sm:mb-4 leading-relaxed">
             Attention spans are shrinking, and users are scrolling faster than ever. Motion graphics immediately grab attention, making it easier to stand out in crowded social feeds and websites.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
             Example: TikTok's short-form videos are a prime example of how motion graphics capture attention in seconds and keep users engaged.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-8 sm:mb-10">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
             2. Social Media-Friendly Content
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 mb-3 sm:mb-4 leading-relaxed">
             With platforms like Instagram, Facebook, and LinkedIn prioritizing video content, motion graphics are an ideal solution to create high-impact posts that encourage shares and interaction.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
              Example: Instagram's "Reels" feature is constantly pushing brands to get creative with motion graphics, which is why many top brands have turned to this format to boost engagement.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-8 sm:mb-10">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
              3. Interactive Motion Graphics for Deeper Engagement
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 mb-3 sm:mb-4 leading-relaxed">
              Consumers want to engage, not just watch. Interactive elements in motion graphics—like clickable links, surveys, and polls—turn passive viewers into active participants.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
              Example: Spotify's interactive ads let users preview songs, increasing user engagement while showcasing new content.
            </p>
          </div>
           <div className="mb-8 sm:mb-10">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
             4. AR and VR: The Future of Immersive Experiences
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 mb-3 sm:mb-4 leading-relaxed">
             Augmented reality (AR) and virtual reality (VR) are no longer futuristic concepts. They're here, and brands are using motion graphics to create immersive experiences that captivate consumers like never before.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
             Example: Brands like Gucci and IKEA are leveraging AR in motion graphics to allow customers to interact with their products in a fully immersive environment.
            </p>
          </div>
            <div className="mb-8 sm:mb-10">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
             5. Authenticity Through Motion Graphics
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 mb-3 sm:mb-4 leading-relaxed">
             Consumers today demand authenticity from brands. Motion graphics offer an authentic, relatable way to convey messages in an easy-to-digest and approachable format, which is why they're so effective for everything from product launches to brand storytelling.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
             Example: Nike uses motion graphics to tell empowering stories, allowing them to connect with audiences on a personal level.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}