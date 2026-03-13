import { Link } from "react-router";

export default function ReadyToMakeCTA() {
  return (
    <div className="container">
      <div className="bg-[#FFB721]  mx-auto px-5 sm:px-8 md:px-10 lg:px-14 rounded-2xl sm:rounded-3xl py-8 sm:py-10 md:py-14 lg:py-16 relative overflow-hidden mt-12 sm:mt-16 md:mt-20 lg:mt-24">

        {/* Background Circles */}
        <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-0 overflow-hidden">
          <div
            className="absolute w-[140vw] h-[130vw] bg-[#FFB721] left-1/2"
            style={{ borderRadius: '50%', bottom: '-75vw', transform: 'translateX(-50%)' }}
          />
          <div
            className="absolute w-[115vw] h-[105vw] bg-[#FFC855] left-1/2"
            style={{ borderRadius: '50%', bottom: '-65vw', transform: 'translateX(-50%)' }}
          />
          <div
            className="absolute w-[90vw] h-[85vw] bg-[#FFB721] left-1/2"
            style={{ borderRadius: '50%', bottom: '-55vw', transform: 'translateX(-50%)' }}
          />
          <div
            className="absolute w-[65vw] h-[65vw] bg-[#FFC855] left-1/2"
            style={{ borderRadius: '50%', bottom: '-45vw', transform: 'translateX(-50%)' }}
          />
          <div
            className="absolute w-[40vw] h-[40vw] bg-[#FFB721] left-1/2"
            style={{ borderRadius: '50%', bottom: '-35vw', transform: 'translateX(-50%)' }}
          />
        </div>

        {/* CTA Text + Buttons */}
        <div className="relative z-10 md:ml-12 lg:ml-24">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-2 sm:mb-3 md:mb-4">
            Ready to make <span className="font-bold">a bigger</span>
            <br />
            <span className="font-bold">impact</span> with your work?
          </h2>

          <p className="text-xs sm:text-sm md:text-base font-semibold mb-5 sm:mb-6 md:mb-8 max-w-3xl">
            Join organizations we work with to build clear identities, strong
            digital platforms, and communication that actually converts.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            {/* BUTTON 1 */}
            <Link to="/contact">
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
            </Link>

            {/* BUTTON 2 */}
             <Link to="/casestudy-overview">
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
              </Link>
          </div>
        </div>
      </div>
    </div>
  )
}