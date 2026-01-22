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
import { useState } from 'react'


export default function MeetOurTeam() {
  const [hoveredId, setHoveredId] = useState(null);

  const teamMembers = [
    {
      id: 1,
      image: team1,
      personImage: hamid,
      name: "Team Member 1",
    },
    {
      id: 2,
      image: team2,
      personImage: razeena,
      name: "Team Member 2",
    },
    {
      id: 3,
      image: team3,
      personImage: naveen,
      name: "Team Member 3",
    },
    {
      id: 4,
      image: team4,
      personImage: dobasreeta,
      name: "Team Member 4",
    },
    {
      id: 5,
      image: team5,
      personImage: prasanna,
      name: "Team Member 5",
    },
  ];

  return (
    <div className="bg-[#F4EDE2] py-12 sm:py-16 md:py-20 lg:py-24 relative z-20">
      <div className="container px-4 sm:px-6 lg:px-4">
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
            <button className="bg-black text-white px-6 py-2 cursor-pointer rounded-full text-sm hover:bg-gray-800 transition-colors whitespace-nowrap">
              Join Us
            </button>
          </div>
        </div>

        {/* First Row - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 md:gap-12 lg:gap-16 mb-8 sm:mb-12 lg:mb-16">
          {teamMembers.slice(0, 3).map((member) => (
            <div
              key={member.id}
              className="aspect-square rounded-lg overflow-hidden cursor-pointer bg-gray-300 relative"
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full  object-cover transition-all duration-700 ease-in-out"
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
            </div>
          ))}
        </div>

        {/* Second Row (Centered) - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 cursor-pointer lg:flex lg:justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16">
          {teamMembers.slice(3, 5).map((member) => (
            <div
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
            </div>
          ))}
        </div>

        {/* CTA Content */}
        <div className="bg-[#FFB721] mx-auto px-6 sm:px-8 md:px-10 lg:px-14 rounded-2xl sm:rounded-3xl py-8 sm:py-12 md:py-16 relative overflow-hidden mt-12 sm:mt-16 md:mt-20 lg:mt-24">

          {/* Background Circles */}
          <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-0 overflow-hidden">
            <div
              className="absolute w-[140vw] h-[130vw] bg-[#FFB721] left-1/2"
              style={{
                borderRadius: "50%",
                bottom: "-75vw",
                transform: "translateX(-50%)",
              }}
            />
            <div
              className="absolute w-[115vw] h-[105vw] bg-[#FFC855] left-1/2"
              style={{
                borderRadius: "50%",
                bottom: "-65vw",
                transform: "translateX(-50%)",
              }}
            />
            <div
              className="absolute w-[90vw] h-[85vw] bg-[#FFB721] left-1/2"
              style={{
                borderRadius: "50%",
                bottom: "-55vw",
                transform: "translateX(-50%)",
              }}
            />
            <div
              className="absolute w-[65vw] h-[65vw] bg-[#FFC855] left-1/2"
              style={{
                borderRadius: "50%",
                bottom: "-45vw",
                transform: "translateX(-50%)",
              }}
            />
            <div
              className="absolute w-[40vw] h-[40vw] bg-[#FFB721] left-1/2"
              style={{
                borderRadius: "50%",
                bottom: "-35vw",
                transform: "translateX(-50%)",
              }}
            />
          </div>

          {/* CTA Text + Buttons */}
          <div className="relative z-10 md:ml-8 lg:ml-12 xl:ml-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 md:mb-4 leading-tight">
              Ready to make <span className="font-bold">a bigger</span>
              <br />
              <span className="font-bold">impact</span> with your work?
            </h2>

            <p className="text-sm sm:text-base font-semibold mb-6 md:mb-8 max-w-3xl">
              Join organizations we work with to build clear identities, strong
              digital platforms, and communication that actually converts.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              {/* BUTTON 1 */}
              <button className="hover:bg-amber-200 relative overflow-hidden cursor-pointer bg-white text-black py-3 md:py-4 rounded-full font-semibold group w-full sm:w-auto">
                <span className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 transition-transform duration-400 ease-in-out sm:group-hover:translate-x-[40px] text-sm md:text-base">
                  Talk to us
                </span>

                <span className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 bg-gray-900 text-white rounded-full flex items-center justify-center transition-transform duration-400 ease-in-out sm:group-hover:scale-0">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>

                <span className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 bg-gray-900 text-white rounded-full flex items-center justify-center scale-0 transition-transform duration-400 ease-in-out sm:group-hover:scale-100">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>

                <span className="opacity-0 px-8 md:px-10 text-sm md:text-base">Talk to us</span>
              </button>

              {/* BUTTON 2 */}
              <button className="relative hover:bg-amber-200 overflow-hidden cursor-pointer bg-white text-black py-3 md:py-4 rounded-full font-semibold group w-full sm:w-auto">
                <span className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 transition-transform duration-400 ease-in-out sm:group-hover:translate-x-[50px] text-sm md:text-base">
                  Know more about us
                </span>

                <span className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 bg-black text-white rounded-full flex items-center justify-center transition-transform duration-400 ease-in-out sm:group-hover:scale-0">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>

                <span className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 bg-black text-white rounded-full flex items-center justify-center scale-0 transition-transform duration-400 ease-in-out sm:group-hover:scale-100">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>

                <span className="opacity-0 px-10 md:px-12 text-sm md:text-base">
                  Know more about us
                </span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}