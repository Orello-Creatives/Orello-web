import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const AvailableVacancies = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const jobs = [
    {
      id: 1,
      title: "Job Title",
      shortDescription: "Job description goes here",
      fullDescription: `This role is for someone who enjoys working thoughtfully, taking ownership, and collaborating closely with others. As part of the Orello team, you'll work on projects for purpose-driven organisations across different regions and contexts. You'll be involved across the lifecycle of a project, from early thinking and exploration to execution and delivery. You'll collaborate with designers, developers, and strategists, contributing ideas, refining details, and helping shape work that is clear, functional, and considered. We value people who ask questions, think through problems, and care about both the process and the outcome.`,
      expertise: [
        "Strong foundational skills relevant to the role",
        "Experience working on real-world projects, not just concepts",
        "The ability to think through problems and translate ideas into practical outcomes",
        "Comfort working independently as well as collaboratively",
        "Clear communication skills and openness to feedback",
        "An interest in purpose-driven or impact-oriented work"
      ],
      bonus: [
        "Experience working in remote or distributed teams",
        "Exposure to multidisciplinary projects",
        "Familiarity with working across different cultures or contexts"
      ],
      expectations: [
        "Meaningful, real-world projects",
        "A remote-first way of working",
        "Thoughtful collaboration across disciplines",
        "Hands-on involvement and room to grow",
        "A team that values clarity, care, and intention"
      ],
      email: "hello@orello.io"
    },
    {
      id: 2,
      title: "Job Title",
      shortDescription: "Job description goes here",
      fullDescription: `This role is for someone who enjoys working thoughtfully, taking ownership, and collaborating closely with others. As part of the Orello team, you'll work on projects for purpose-driven organisations across different regions and contexts. You'll be involved across the lifecycle of a project, from early thinking and exploration to execution and delivery. You'll collaborate with designers, developers, and strategists, contributing ideas, refining details, and helping shape work that is clear, functional, and considered. We value people who ask questions, think through problems, and care about both the process and the outcome.`,
      expertise: [
        "Strong foundational skills relevant to the role",
        "Experience working on real-world projects, not just concepts",
        "The ability to think through problems and translate ideas into practical outcomes",
        "Comfort working independently as well as collaboratively",
        "Clear communication skills and openness to feedback",
        "An interest in purpose-driven or impact-oriented work"
      ],
      bonus: [
        "Experience working in remote or distributed teams",
        "Exposure to multidisciplinary projects",
        "Familiarity with working across different cultures or contexts"
      ],
      expectations: [
        "Meaningful, real-world projects",
        "A remote-first way of working",
        "Thoughtful collaboration across disciplines",
        "Hands-on involvement and room to grow",
        "A team that values clarity, care, and intention"
      ],
      email: "hello@orello.io"
    },
    {
      id: 3,
      title: "Job Title",
      shortDescription: "Job description goes here",
      fullDescription: `This role is for someone who enjoys working thoughtfully, taking ownership, and collaborating closely with others. As part of the Orello team, you'll work on projects for purpose-driven organisations across different regions and contexts. You'll be involved across the lifecycle of a project, from early thinking and exploration to execution and delivery. You'll collaborate with designers, developers, and strategists, contributing ideas, refining details, and helping shape work that is clear, functional, and considered. We value people who ask questions, think through problems, and care about both the process and the outcome.`,
      expertise: [
        "Strong foundational skills relevant to the role",
        "Experience working on real-world projects, not just concepts",
        "The ability to think through problems and translate ideas into practical outcomes",
        "Comfort working independently as well as collaboratively",
        "Clear communication skills and openness to feedback",
        "An interest in purpose-driven or impact-oriented work"
      ],
      bonus: [
        "Experience working in remote or distributed teams",
        "Exposure to multidisciplinary projects",
        "Familiarity with working across different cultures or contexts"
      ],
      expectations: [
        "Meaningful, real-world projects",
        "A remote-first way of working",
        "Thoughtful collaboration across disciplines",
        "Hands-on involvement and room to grow",
        "A team that values clarity, care, and intention"
      ],
      email: "hello@orello.io"
    }
  ];

  const handleCardClick = (jobId) => {
    setExpandedCard(expandedCard === jobId ? null : jobId);
  };

  return (
    <div className=" bg-[#F4EDE2]  py-16 sm:py-24">
      <div className="container">
        <h2 className="font-light mb-8 sm:mb-12 text-[#402E1D]">
          Available<br />
          <span className="font-semibold">Vacancies</span>
        </h2>

        <div className="space-y-4 sm:space-y-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className={`bg-[#FDF6E9] rounded-2xl transition-all duration-500 ease-in-out ${
                expandedCard === job.id ? 'shadow-lg' : 'shadow-sm'
              }`}
              onMouseEnter={() => setHoveredCard(job.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Header - Always Visible */}
              <div
                className="flex items-center justify-between p-6 sm:p-8 cursor-pointer"
                onClick={() => handleCardClick(job.id)}
              >
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-1">{job.title}</h2>
                  <p className="text-sm sm:text-base text-gray-700">{job.shortDescription}</p>
                </div>
                
                <button
                  className={`flex-shrink-0 ml-4 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                    expandedCard === job.id
                      ? 'bg-black'
                      : hoveredCard === job.id
                      ? 'bg-black'
                      : 'bg-[#E6B74D]'
                  }`}
                >
                  <ArrowUpRight
                    className={`w-6 h-6 sm:w-7 sm:h-7 transition-all duration-300 ${
                      expandedCard === job.id || hoveredCard === job.id
                        ? 'text-white rotate-[60deg]'
                        : 'text-black'
                    }`}
                  />
                </button>
              </div>

              {/* Expanded Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedCard === job.id ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8">
                  <div className="border-t border-gray-300 pt-4 sm:pt-6 md:pt-8">
                    {/* Job Description */}
                    <div className="mb-6 sm:mb-8">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4">Job Description</h3>
                      <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-800">
                        {job.fullDescription}
                      </p>
                    </div>

                    {/* Expertise */}
                    <div className="mb-6 sm:mb-8">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4">Expertise</h3>
                      <p className="text-xs sm:text-sm md:text-base mb-2 sm:mb-3 text-gray-800">
                        We're looking for someone who brings a mix of skill, curiosity, and responsibility to their work.
                      </p>
                      <p className="text-xs sm:text-sm md:text-base mb-2 sm:mb-3 text-gray-800">You should have:</p>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {job.expertise.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2 sm:mr-3 mt-1.5 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                            <span className="text-xs sm:text-sm md:text-base text-gray-800">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bonus */}
                    <div className="mb-6 sm:mb-8">
                      <p className="text-xs sm:text-sm md:text-base mb-2 sm:mb-3 text-gray-800 italic">Bonus, but not mandatory:</p>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {job.bonus.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2 sm:mr-3 mt-1.5 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                            <span className="text-xs sm:text-sm md:text-base text-gray-800">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What you can expect */}
                    <div className="mb-6 sm:mb-8">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4">What you can expect</h3>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {job.expectations.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2 sm:mr-3 mt-1.5 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                            <span className="text-xs sm:text-sm md:text-base text-gray-800">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* How to apply */}
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4">How to apply</h3>
                      <p className="text-xs sm:text-sm md:text-base mb-1.5 sm:mb-2 text-gray-800">
                        Send us your resume and a brief note about yourself.
                      </p>
                      <p className="text-xs sm:text-sm md:text-base mb-2 sm:mb-3 text-gray-800">
                        If applicable, include links to your portfolio or previous work.
                      </p>
                      <p className="text-xs sm:text-sm md:text-base font-bold text-gray-900 break-all">
                        {job.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableVacancies;