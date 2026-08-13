import LinkedInLink from '../assets/logos/LinkedInLink.svg'
import { useRef, useEffect } from 'react'
import { Link } from 'react-router'
import Readyto from '../components/Readyto'
import gsap from 'gsap'
import { useCmsContent } from '../hooks/useCmsContent'

// Neutral placeholder so a member added without any image never renders a broken <img>
const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23d1d5db'/%3E%3C/svg%3E";

// The coded hover card: a clean headshot that, on hover, insets into a dark
// panel revealing the member's name, role, and a LinkedIn badge — replacing the
// old approach of baking that overlay into a second uploaded image.
const MemberTile = ({ member, className = "" }) => (
  <a
    href={member.linkedin || undefined}
    target="_blank"
    rel="noopener noreferrer"
    className={`group block aspect-square rounded-2xl overflow-hidden relative bg-linear-to-br from-[#1E1E1E] to-[#333037] ${className}`}
  >
    {/* Photo — fills the tile, then insets on hover to expose the dark frame + text row */}
    <div className="absolute top-4 left-9 right-9 bottom-22 rounded-xl overflow-hidden transition-all duration-500 ease-out lg:inset-0 lg:rounded-2xl lg:group-hover:top-4 lg:group-hover:left-9 lg:group-hover:right-9 lg:group-hover:bottom-22 lg:group-hover:rounded-xl">
      <img src={member.image || PLACEHOLDER} alt={member.name} className="w-full h-full object-cover" />
    </div>

    {/* Name / role / LinkedIn — fades up on hover */}
    <div className="absolute left-0 right-0 bottom-0 px-8 pb-4 flex items-center justify-between gap-2 opacity-100 translate-y-0 transition-all duration-500 ease-out lg:opacity-0 lg:translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0">
      <div className="min-w-0">
        <p className="text-white font-bold text-lg sm:text-2xl leading-tight truncate" style={{ fontFamily: 'Satoshi, sans-serif' }}>{member.name}</p>
        {member.role && <p className="text-[#C79A5B] font-light text-base sm:text-xl mt-0.5 truncate" style={{ fontFamily: 'Satoshi, sans-serif' }}>{member.role}</p>}
      </div>
      <span className="shrink-0 w-9 h-9 rounded-full bg-[#34302B] flex items-center justify-center text-white">
        <img src={LinkedInLink} alt="LinkedIn" />
      </span>
    </div>
  </a>
);

// ─── Animated "Join Us" Button ─────────────────────────────────────────────────
const JoinUsButton = () => {
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
      gsap.to(button, { backgroundColor: '#f7af19', duration: 0.3, ease: 'power2.out' });
      gsap.to(text, { color: '#000000', x: 30, duration: 0.4, ease: 'power2.inOut' });
      gsap.to(circleRight, { scale: 0, duration: 0.4, ease: 'power2.inOut' });
      gsap.to(circleLeft, { scale: 1, duration: 0.4, ease: 'power2.inOut' });
    };

    const handleMouseLeave = () => {
      gsap.to(button, { backgroundColor: '#000000', duration: 0.3, ease: 'power2.in' });
      gsap.to(text, { color: '#ffffff', x: 0, duration: 0.4, ease: 'power2.inOut' });
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
    <Link to="/careers">
      <button
        ref={buttonRef}
        className="relative overflow-hidden cursor-pointer rounded-full flex items-center pl-4 pr-2 py-1.5"
        style={{ backgroundColor: '#000000', color: '#ffffff', willChange: 'transform' }}
      >
        {/* Circle left (hover state) - hidden by default */}
        <span
          ref={circleLeftRef}
          className="absolute left-1.5 w-7 h-7 rounded-full flex items-center justify-center text-white"
          style={{ backgroundColor: '#ffffff30', transform: 'scale(0)' }}
        >
          <svg width="11" height="11" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>

        {/* Text */}
        <span
          ref={textRef}
          className="text-sm font-medium whitespace-nowrap mr-3"
          style={{ color: '#ffffff' }}
        >
          Join Us
        </span>

        {/* Circle right (initial state) */}
        <span
          ref={circleRightRef}
          className="w-7 h-7 flex-shrink-0 rounded-full flex items-center justify-center text-white"
          style={{ backgroundColor: '#ffffff30' }}
        >
          <svg width="11" height="11" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
    </Link>
  );
};

const renderTile = (member, className) => (
  <MemberTile key={member.id} member={member} className={className} />
);

export default function MeetOurTeam() {
  const cmsTeam = useCmsContent('/team', null);
  const teamMembers = (cmsTeam || []).map((m, idx) => ({
    id: m._id || idx + 1,
    image: m.personImage || PLACEHOLDER, // clean headshot
    name: m.name,
    role: m.role,
    linkedin: m.linkedin,
  }));

  return (
    <div className="bg-[#F4EDE2] py-12 sm:py-16 md:py-20 lg:py-24 relative z-20">
      <div className="container">
        {/* Header */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-3 sm:mb-4 leading-tight text-[#402E1D]">
            Meet <br />
            <span className="font-semibold">Our Team</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <p className="text-gray-900 text-sm sm:text-base max-w-xs">
              A team of thinkers and doers who collaborate closely, combining thoughtful ideas with careful execution.
            </p>
            <JoinUsButton />
          </div>
        </div>

        {teamMembers.length > 0 && (
          <>
            {/* First Row - Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 md:gap-12 lg:gap-16 mb-8 sm:mb-12 lg:mb-16">
              {teamMembers.slice(0, 3).map((member) => renderTile(member))}
            </div>

            {/* Second Row (Centered) - Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16">
              {teamMembers.slice(3).map((member) => renderTile(member, "lg:w-[calc(33.333%-0.5rem)]"))}
            </div>
          </>
        )}
        <Readyto />
      </div>
    </div>
  );
}