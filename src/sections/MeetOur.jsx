import team1 from '../assets/logos/team1.svg'
import team2 from '../assets/logos/team2.svg'
import team3 from '../assets/logos/team3.svg'
import team4 from '../assets/logos/team4.svg'
import team5 from '../assets/logos/team5.svg'

export default function MeetOurTeam() {
  const teamMembers = [
    {
      id: 1,
      image: team1,
      name: "Team Member 1",
    },
    {
      id: 2,
      image: team2,
      name: "Team Member 2",
    },
    {
      id: 3,
      image: team3,
      name: "Team Member 3",
    },
    {
      id: 4,
      image:team4,
      name: "Team Member 4",
    },
    {
      id: 5,
      image: team5,
      name: "Team Member 5",
    },
  ];

  return (
    <div className="bg-[#F4EDE2] py-24 relative z-20">
      <div className="container ">
        {/* Header */}
        <div className="mb-12">
        <h2 className="font-light mb-4 leading-tight text-[#402E1D]">
  Meet <br />
  <span className="font-semibold">Our Team</span>
</h2>


          <div className="flex items-center gap-4">
            <p className="text-gray-900 text-sm max-w-xs">
              A team of thinkers and doers who collaborate closely, combining thoughtful ideas with careful execution.
            </p>
            <button className="bg-black text-white px-6 py-2 cursor-pointer rounded-full text-sm hover:bg-gray-800 transition-colors">
              Join Us
            </button>
          </div>
        </div>

        {/* First Row */}
        <div className="grid grid-cols-3 gap-16 mb-16">
          {teamMembers.slice(0, 3).map((member) => (
            <div
              key={member.id}
              className="aspect-square rounded-lg overflow-hidden bg-gray-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Second Row (Centered) */}
        <div className="flex justify-center gap-16 ">
          {teamMembers.slice(3, 5).map((member) => (
            <div
              key={member.id}
              className="aspect-square w-[calc(33.333%-0.5rem)] rounded-lg overflow-hidden bg-gray-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        
     {/* CTA Content */}
<div className="bg-[#FFB721] container mx-auto px-6 sm:px-8 md:px-10 lg:px-14 rounded-3xl py-8 sm:py-12 md:py-16 relative overflow-hidden mt-24">

  {/* Background Circles – SAME STYLE AS YOURS */}
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

  {/* CTA Text + Buttons (UNCHANGED) */}
  <div className="relative z-10 md:ml-12 lg:ml-24">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 md:mb-4">
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
