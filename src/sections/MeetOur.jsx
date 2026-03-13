import team1 from '../assets/logos/team1.svg'
import team2 from '../assets/logos/team2.svg'
import team3 from '../assets/logos/team3.svg'
import team4 from '../assets/logos/team4.svg'
import team5 from '../assets/logos/team5.svg'
import hamid from '../assets/images/hamid.png'
import razeena from '../assets/images/razeena.png'
import naveen from '../assets/images/naveen.png'
import dobasreeta from '../assets/images/dobasreeta.png'
import prasanna from '../assets/images/prasanna.png'
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router'
import Readyto from '../components/Readyto'
import gsap from 'gsap'

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

export default function MeetOurTeam() {
  const [hoveredId, setHoveredId] = useState(null);

  const teamMembers = [
    {
      id: 1,
      image: team1,
      personImage: hamid,
      name: "Team Member 1",
      linkedin: "https://www.linkedin.com/in/haamid-khan",
    },
    {
      id: 2,
      image: team2,
      personImage: razeena,
      name: "Team Member 2",
      linkedin: "https://www.linkedin.com/in/razeena-ibrahim",
    },
    {
      id: 3,
      image: team3,
      personImage: naveen,
      name: "Team Member 3",
      linkedin: "https://www.linkedin.com/in/naveentnaik",
    },
    {
      id: 4,
      image: team4,
      personImage: dobasreeta,
      name: "Team Member 4",
      linkedin: "https://www.linkedin.com/in/debosrita-pattanayak-037b3a1b4",
    },
    {
      id: 5,
      image: team5,
      personImage: prasanna,
      name: "Team Member 5",
      linkedin: "https://www.linkedin.com/in/prasanna-naik-4994b7289",
    },
  ];

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

        {/* First Row - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 md:gap-12 lg:gap-16 mb-8 sm:mb-12 lg:mb-16">
          {teamMembers.slice(0, 3).map((member) => (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              key={member.id}
              className="aspect-square rounded-lg overflow-hidden cursor-pointer bg-gray-300 relative"
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                style={{
                  opacity: hoveredId === member.id ? 0 : 1,
                  transform: hoveredId === member.id ? 'scale(1.1)' : 'scale(1)'
                }}
              />
              <img
                src={member.personImage}
                alt={member.name}
                className="w-full h-full object-cover absolute inset-0 transition-all duration-700 ease-in-out"
                style={{
                  opacity: hoveredId === member.id ? 1 : 0,
                  transform: hoveredId === member.id ? 'scale(1)' : 'scale(1.1)'
                }}
              />
            </a>
          ))}
        </div>

        {/* Second Row (Centered) - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 cursor-pointer lg:flex lg:justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16">
          {teamMembers.slice(3, 5).map((member) => (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              key={member.id}
              className="aspect-square lg:w-[calc(33.333%-0.5rem)] rounded-lg overflow-hidden bg-gray-300 relative"
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                style={{
                  opacity: hoveredId === member.id ? 0 : 1,
                  transform: hoveredId === member.id ? 'scale(1.1)' : 'scale(1)'
                }}
              />
              <img
                src={member.personImage}
                alt={member.name}
                className="w-full h-full object-cover absolute inset-0 transition-all duration-700 ease-in-out"
                style={{
                  opacity: hoveredId === member.id ? 1 : 0,
                  transform: hoveredId === member.id ? 'scale(1)' : 'scale(1.1)'
                }}
              />
            </a>
          ))}
        </div>
        <Readyto />
      </div>
    </div>
  );
}