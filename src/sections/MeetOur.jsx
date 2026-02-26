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
import {Link} from 'react-router'
import  Readyto from '../components/Readyto'

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
            <Link to="/careers">
              <button className="bg-black text-white px-6 py-2 cursor-pointer rounded-full text-sm  transition-colors whitespace-nowrap">
                Join Us
              </button>
            </Link>
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
          <Readyto />
      

      </div>
    </div>
  );
}