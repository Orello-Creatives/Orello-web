import React from 'react';
import mobile from '../assets/images/mobile.png'

export default function BlogSection() {
  return (
    <div className="bg-[#FDF6E9] pt-24 pb-16">
      <div className="container">
        {/* Hero Image Section */}
        <div className="pt-6 sm:pt-8 lg:pt-12 mb-8 sm:mb-12">
          <img 
            src={mobile} 
            alt="Blog header" 
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="pb-12 sm:pb-16 lg:pb-20">
          {/* Title */}
          <h1 className="font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Mastering the Art of Attention
          </h1>

          {/* Author and Date */}
          <div className="mb-6 sm:mb-8">
            <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Author: Razeena</p>
            <p className="text-sm sm:text-base font-semibold text-black">24 February 2025</p>
          </div>

          {/* Divider */}
          <hr className="border-t border-[#E77B00] mb-6 sm:mb-8" />

          {/* Introduction */}
          <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-4 sm:mb-6 leading-relaxed">
            In a digital world where scrolling never stops, grabbing attention is a challenge. Studies show you have just 2 seconds to make an impression before your audience moves on. If your content isn't clear, engaging, and visually optimized, it gets lost in the noise.
          </p>
          <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-8 sm:mb-12 leading-relaxed">
            So, how do you create content that stops the scroll and holds attention? Let's dive into the key principles.
          </p>

          {/* Section 1 */}
          <div className="mb-8 sm:mb-10">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
              1. The 2-Second Rule: Why It Matters
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 mb-4 leading-relaxed">
              The current digital environment is shrinking attention spans because social media feeds favor fast, engaging content that's skipped if it's not instantly appealing, a challenge compounded by the fact that the human brain processes visuals 60,000× faster than text, making design critical for retention. Furthermore, the rise of short-form video (Reels, TikToks, YouTube Shorts) has conditioned audiences to expect quick, digestible content; therefore, if your audience doesn't immediately see value, relevance, or intrigue, they will scroll past your content..
            </p>

            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
              How to Apply the 2-Second Rule
            </h3>
            <div className="text-sm sm:text-base md:text-lg text-gray-800 mb-3 leading-relaxed space-y-2">
              <p>1. Start with a strong hook (question, statement, or problem).</p>
              <p>2. Make your message instantly clear—avoid fluff.</p>
              <p>3. Use visuals that support your message, not distract from it.</p>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 mb-2 leading-relaxed">Example:</p>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 mb-1 leading-relaxed">- "Our brand helps businesses grow through expert marketing strategies."</p>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">- "Struggling to get leads? Let's fix that—here's how!"</p>
          </div>

          {/* Section 2 */}
          <div className="mb-8 sm:mb-10">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
              2. Keep It Snackable: The Power of Microcontent
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 mb-4 leading-relaxed">
              People don't read—they skim. If your content is too long or cluttered, it gets ignored.
            </p>

            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
              How to Make Content Snackable
            </h3>
            <div className="text-sm sm:text-base md:text-lg text-gray-800 mb-4 leading-relaxed space-y-2">
              <p>Use short sentences. Avoid dense paragraphs.</p>
              <p>Bullet points and bold text help structure information.</p>
              <p>Break text into sections with clear subheadings.</p>
              <p>Use numbers and lists (e.g., "5 Ways to Boost Engagement").</p>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-gray-800 mb-2 leading-relaxed">Example:-</p>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 mb-1 leading-relaxed">"To create engaging social media content, ensure your captions are concise, use high-quality visuals, and add a call-to-action."</p>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">"Want better engagement? Keep captions short, use great visuals, and always add a CTA."</p>
          </div>

          {/* Section 3 */}
          <div className="mb-8 sm:mb-10">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
              3. Design for Speed: Make It Easy to Skim
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 mb-4 leading-relaxed">
              Aesthetics matter. If your content looks cluttered or unstructured, people won't even try to read it.
            </p>

            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
              How to Optimize for Fast Consumption
            </h3>
            <div className="text-sm sm:text-base md:text-lg text-gray-800 mb-4 leading-relaxed space-y-2">
              <p>Use large, readable fonts—avoid small or decorative fonts.</p>
              <p>Prioritize contrast (dark text on light backgrounds or vice versa).</p>
              <p>Keep layouts clean—avoid too many elements.</p>
              <p>Use white space to guide focus and reduce visual fatigue.</p>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
              Tip: The "F-pattern" and "Z-pattern" layouts guide the reader's eye naturally—align your messages accordingly.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-8 sm:mb-10">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
              4. Guide the Eye: The Science of Visual Hierarchy
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 mb-4 leading-relaxed">
              Ever wondered why some content just feels easier to digest? It's all about visual hierarchy—the way we naturally read and process information.
            </p>

            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
              How to Structure Content Visually
            </h3>
            <div className="text-sm sm:text-base md:text-lg text-gray-800 mb-4 leading-relaxed space-y-2">
              <p>Biggest text = Most important message.</p>
              <p>Bold, colors, and icons help emphasize key points.</p>
              <p>Directional cues (arrows, underlines, eye-tracking patterns) tell the user where to focus.</p>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
              Example: Headlines should be larger & bolder than body text, and CTA buttons should stand out with contrast.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-8 sm:mb-10">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
              5. Micro-Interactions: The Secret to Higher Engagement
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 mb-4 leading-relaxed">
              Static content is forgettable. Motion adds life.
            </p>

            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
              How Small Interactions Make a Big Difference
            </h3>
            <div className="text-sm sm:text-base md:text-lg text-gray-800 mb-4 leading-relaxed space-y-2">
              <p>Swipeable carousels = More engagement, less overwhelm.</p>
              <p>Hover effects and animations = Make content interactive.</p>
              <p>Dynamic text reveals = Keep users engaged longer.</p>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
              Tip: Instagram Reels and TikTok prove that motion grabs attention—apply the same logic to your designs.
            </p>
          </div>

          {/* Conclusion */}
          <div className="mb-8 sm:mb-10">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
              Attention is Currency—Spend It Wisely
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 mb-6 leading-relaxed">
              In today's fast-paced digital world, attention is the most valuable asset—and you only get 2 seconds to earn it. By crafting snackable, visually optimized, and engaging content, you increase the chances of stopping the scroll and making an impact.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-800 mb-3 leading-relaxed">To recap:</p>
            <div className="text-sm sm:text-base md:text-lg text-gray-800 mb-6 leading-relaxed space-y-2">
              <p>→ Hook fast—your first words matter.</p>
              <p>→ Keep it short & structured—clarity wins.</p>
              <p>→ Design for speed—make it effortless to consume.</p>
              <p>→ Use motion & interactivity—keep engagement high.</p>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
              The brands winning today aren't just creating content—they're creating experiences that demand to be noticed. Now it's your turn!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}