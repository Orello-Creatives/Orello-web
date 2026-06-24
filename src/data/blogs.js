// Local blog data — the canonical fallback for the three original posts.
// Shape matches the CMS BlogPost model exactly so /blogs/:slug can render
// either source. The dynamic page prefers CMS data and falls back to this
// when the API is down or a field (e.g. an image) is empty.
import blogpng from '../assets/images/blogpng.png';
import blog22 from '../assets/images/blog22.png';
import mobile from '../assets/images/mobile.png';
import read1 from '../assets/images/read1.png';
import read2 from '../assets/images/read2.png';
import read3 from '../assets/images/read3.png';

export const BLOGS = [
  {
    title: 'Why Motion Graphics Will Lead Marketing in 2025',
    slug: 'why-motion-graphics-will-lead-marketing-in-2025',
    author: 'Razeena',
    publishedDate: '2025-01-16',
    tag: 'BLOGS',
    tagColor: 'bg-orange-500',
    featuredImage: blogpng,
    cardImage: read1,
    intro:
      "As the digital world becomes even more competitive and fast-paced, brands need to adapt to new trends and technologies. Motion graphics have proven to be not just a creative tool but a vital part of modern marketing strategies. Here's why they're taking over—and why you need them.",
    sections: [
      {
        heading: '1. Instant Attention in a Busy Digital World',
        paragraphs: [
          'Attention spans are shrinking, and users are scrolling faster than ever. Motion graphics immediately grab attention, making it easier to stand out in crowded social feeds and websites.',
          "Example: TikTok's short-form videos are a prime example of how motion graphics capture attention in seconds and keep users engaged.",
        ],
      },
      {
        heading: '2. Social Media-Friendly Content',
        paragraphs: [
          'With platforms like Instagram, Facebook, and LinkedIn prioritizing video content, motion graphics are an ideal solution to create high-impact posts that encourage shares and interaction.',
          'Example: Instagram\'s "Reels" feature is constantly pushing brands to get creative with motion graphics, which is why many top brands have turned to this format to boost engagement.',
        ],
      },
      {
        heading: '3. Interactive Motion Graphics for Deeper Engagement',
        paragraphs: [
          'Consumers want to engage, not just watch. Interactive elements in motion graphics—like clickable links, surveys, and polls—turn passive viewers into active participants.',
          "Example: Spotify's interactive ads let users preview songs, increasing user engagement while showcasing new content.",
        ],
      },
      {
        heading: '4. AR and VR: The Future of Immersive Experiences',
        paragraphs: [
          "Augmented reality (AR) and virtual reality (VR) are no longer futuristic concepts. They're here, and brands are using motion graphics to create immersive experiences that captivate consumers like never before.",
          'Example: Brands like Gucci and IKEA are leveraging AR in motion graphics to allow customers to interact with their products in a fully immersive environment.',
        ],
      },
      {
        heading: '5. Authenticity Through Motion Graphics',
        paragraphs: [
          "Consumers today demand authenticity from brands. Motion graphics offer an authentic, relatable way to convey messages in an easy-to-digest and approachable format, which is why they're so effective for everything from product launches to brand storytelling.",
          'Example: Nike uses motion graphics to tell empowering stories, allowing them to connect with audiences on a personal level.',
        ],
      },
    ],
  },
  {
    title: 'Why Logos are for Screenshots, not Billboards',
    slug: 'why-logos-are-for-screenshots-not-billboards',
    author: 'Razeena',
    publishedDate: '2025-02-19',
    tag: 'BLOGS',
    tagColor: 'bg-purple-400',
    featuredImage: blog22,
    cardImage: read3,
    intro:
      "In today's digital-first world, branding isn't just about looking good on a billboard—it's about standing out on a screen. The logos that make the biggest impact are the ones that can be screenshotted, shared, remixed, and turned into memes. Welcome to the era of meme branding—where logos are no longer static symbols but dynamic, evolving icons of internet culture.",
    sections: [
      {
        heading: 'What Is Meme Branding?',
        paragraphs: [
          'Meme branding is the strategy of designing logos and brand identities that thrive in the fast-paced, social-media-driven digital landscape. Instead of rigid brand guidelines, these logos embrace adaptability, simplicity, and a touch of humor or irony. They are built to go viral.',
        ],
      },
      {
        heading: '1. MSCHF: The Art of Chaos',
        paragraphs: [
          'MSCHF, the viral art collective, has mastered the art of disruptive branding. Their logo, often altered or reimagined, fits seamlessly into the meme culture of today. From their controversial drops like the Big Red Boot to parody sneakers, MSCHF thrives on the unpredictability of digital virality.',
        ],
      },
      {
        heading: '2. Supreme: The King of Ironic Hype',
        paragraphs: [
          "Supreme's simple red box logo with white Futura text is one of the most meme-ified symbols in fashion. Its minimalist aesthetic makes it easy to replicate and remix, fueling its spread across digital platforms, bootleg merchandise, and pop culture.",
        ],
      },
      {
        heading: '3. Fear of God: Minimalism Meets Meme Culture',
        paragraphs: [
          'Fear of God has mastered the "less is more" approach, with a sleek and simple logo that blends high fashion with streetwear culture. The understated design allows fans and meme-makers to integrate it into various contexts, keeping it in circulation across digital channels.',
        ],
      },
      {
        heading: 'Why Meme Branding Works',
        paragraphs: [
          "The power of meme branding lies in its ability to create instant recognition and engagement. Here's why brands are shifting towards this strategy:",
          '✓ Enhances Shareability — Simple, bold designs are easy to repurpose in user-generated content.',
          '✓ Boosts Engagement — Meme-friendly logos encourage interaction, edits, and remixes.',
          '✓ Keeps Brands Culturally Relevant — Aligning with internet culture ensures longevity in an age where trends shift overnight.',
        ],
      },
      {
        heading: 'How to Design a Meme-Worthy Logo',
        paragraphs: [
          "Want your brand's logo to be a meme magnet? Follow these key principles:",
          "- Keep It Simple — Complex logos don't translate well in a fast-scrolling digital environment.",
          '- Ensure Adaptability — The best logos can be altered slightly while still remaining recognizable.',
          '- Reflect Current Trends — Staying in sync with internet culture helps maintain relevance.',
          'Brands that embrace this shift are capitalizing on organic brand advocacy. When a logo is easily adaptable, audiences take ownership of it—remixing, repurposing, and resharing it in ways that amplify visibility without additional marketing spend. This turns branding into an evolving conversation rather than a fixed statement, making it more resilient in the ever-changing digital landscape.',
        ],
      },
    ],
  },
  {
    title: 'Mastering the Art of Attention',
    slug: 'mastering-the-art-of-attention',
    author: 'Razeena',
    publishedDate: '2025-02-24',
    tag: 'BLOGS',
    tagColor: 'bg-orange-500',
    featuredImage: mobile,
    cardImage: read2,
    intro:
      "In a digital world where scrolling never stops, grabbing attention is a challenge. Studies show you have just 2 seconds to make an impression before your audience moves on. If your content isn't clear, engaging, and visually optimized, it gets lost in the noise. So, how do you create content that stops the scroll and holds attention? Let's dive into the key principles.",
    sections: [
      {
        heading: '1. The 2-Second Rule: Why It Matters',
        paragraphs: [
          "The current digital environment is shrinking attention spans because social media feeds favor fast, engaging content that's skipped if it's not instantly appealing, a challenge compounded by the fact that the human brain processes visuals 60,000× faster than text, making design critical for retention. Furthermore, the rise of short-form video (Reels, TikToks, YouTube Shorts) has conditioned audiences to expect quick, digestible content; therefore, if your audience doesn't immediately see value, relevance, or intrigue, they will scroll past your content.",
          'How to Apply the 2-Second Rule: Start with a strong hook (question, statement, or problem). Make your message instantly clear—avoid fluff. Use visuals that support your message, not distract from it.',
          'Example: "Our brand helps businesses grow through expert marketing strategies." vs "Struggling to get leads? Let\'s fix that—here\'s how!"',
        ],
      },
      {
        heading: '2. Keep It Snackable: The Power of Microcontent',
        paragraphs: [
          "People don't read—they skim. If your content is too long or cluttered, it gets ignored.",
          'How to Make Content Snackable: Use short sentences. Avoid dense paragraphs. Bullet points and bold text help structure information. Break text into sections with clear subheadings. Use numbers and lists (e.g., "5 Ways to Boost Engagement").',
          'Example: "To create engaging social media content, ensure your captions are concise, use high-quality visuals, and add a call-to-action." vs "Want better engagement? Keep captions short, use great visuals, and always add a CTA."',
        ],
      },
      {
        heading: '3. Design for Speed: Make It Easy to Skim',
        paragraphs: [
          "Aesthetics matter. If your content looks cluttered or unstructured, people won't even try to read it.",
          'How to Optimize for Fast Consumption: Use large, readable fonts—avoid small or decorative fonts. Prioritize contrast (dark text on light backgrounds or vice versa). Keep layouts clean—avoid too many elements. Use white space to guide focus and reduce visual fatigue.',
          'Tip: The "F-pattern" and "Z-pattern" layouts guide the reader\'s eye naturally—align your messages accordingly.',
        ],
      },
      {
        heading: '4. Guide the Eye: The Science of Visual Hierarchy',
        paragraphs: [
          "Ever wondered why some content just feels easier to digest? It's all about visual hierarchy—the way we naturally read and process information.",
          'How to Structure Content Visually: Biggest text = Most important message. Bold, colors, and icons help emphasize key points. Directional cues (arrows, underlines, eye-tracking patterns) tell the user where to focus.',
          'Example: Headlines should be larger & bolder than body text, and CTA buttons should stand out with contrast.',
        ],
      },
      {
        heading: '5. Micro-Interactions: The Secret to Higher Engagement',
        paragraphs: [
          'Static content is forgettable. Motion adds life.',
          'How Small Interactions Make a Big Difference: Swipeable carousels = More engagement, less overwhelm. Hover effects and animations = Make content interactive. Dynamic text reveals = Keep users engaged longer.',
          'Tip: Instagram Reels and TikTok prove that motion grabs attention—apply the same logic to your designs.',
        ],
      },
      {
        heading: 'Attention is Currency—Spend It Wisely',
        paragraphs: [
          "In today's fast-paced digital world, attention is the most valuable asset—and you only get 2 seconds to earn it. By crafting snackable, visually optimized, and engaging content, you increase the chances of stopping the scroll and making an impact.",
          'To recap: Hook fast—your first words matter. Keep it short & structured—clarity wins. Design for speed—make it effortless to consume. Use motion & interactivity—keep engagement high.',
          "The brands winning today aren't just creating content—they're creating experiences that demand to be noticed. Now it's your turn!",
        ],
      },
    ],
  },
];

export const getBlogBySlug = (slug) => BLOGS.find((b) => b.slug === slug);
