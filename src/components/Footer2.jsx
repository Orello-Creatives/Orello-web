import React from 'react'
import { Link } from 'react-router-dom'
import orello from '../assets/logos/orello.svg'
import orelloclip from '../assets/logos/orelloclip.svg'
import instagram from '../assets/logos/instagram.svg'
import linkedin from '../assets/logos/linkedin.svg'
import locatio from '../assets/logos/locatio.svg'
import mailid from '../assets/logos/mailid.svg'


const Footer = () => {
  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Work', path: '/casestudy-overview' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' }
  ]

  const socialLinks = [
    { img: instagram, alt: 'Instagram', href: 'https://www.instagram.com/orello.io', external: true },
    { img: linkedin, alt: 'LinkedIn', href: 'https://www.linkedin.com/company/orello', external: true },
    { img: locatio, alt: 'Location', href: 'https://www.google.com/search?q=Orello+Creatives+Pvt+Ltd+Bengaluru', external: true },
    { img: mailid, alt: 'Email', href: 'mailto:hello@orello.io', external: false },
  ]

  return (
    <div className="bg-[#fcf4e9] flex flex-col relative w-full overflow-hidden">

      {/* Transition & Footer Section */}
      <div className="relative mt-12 sm:mt-16 md:mt-20">
        
        {/* Floating Logo Badge */}
        <div className="hidden md:block absolute right-[5%] sm:right-[6%] md:right-[8%] -top-10 sm:-top-12 md:-top-16 z-30">
          <div className="relative flex items-center justify-center">
            {/* The Yellow Arc */}
            <div 
              className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-full"
              style={{
                background: 'conic-gradient(from 252deg, #F7AF19 207deg, transparent 0deg)'
              }}
            />
            {/* The Black Circle */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-black rounded-full border-2 sm:border-4 border-[#fdf7ee] flex items-center justify-center shadow-xl">
              <img src={orelloclip} alt="Orello mark" />
            </div>
          </div>
        </div>

        {/* Diagonal Background Shape */}
        <div 
          className="absolute inset-0 bg-[#e7e1d5] z-10"
          style={{
            clipPath: 'polygon(0 100%, 0 45%, 100% 0, 100% 100%)',
          }}
        />

        {/* Actual Footer Content */}
        <footer className="relative z-20 pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 md:px-16 rounded-t-[30px] sm:rounded-t-[40px] md:rounded-t-[80px]">
          <div className="max-w-[1400px] mx-auto">
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
              
              {/* Logo Area */}
              <div className="w-full md:w-auto flex justify-start">
                <Link to="/">
                  <img src={orello} alt="Orello Logo" className="w-32 sm:w-36 md:w-42" />
                </Link>
              </div>

              {/* Navigation & Socials Column */}
              <div className="flex flex-col items-start md:items-end gap-4 sm:gap-6 w-full md:w-auto">
                
                {/* Nav Links */}
                <nav className="flex flex-wrap justify-start md:justify-end gap-2 sm:gap-3 w-full">
                  {footerLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="px-4 sm:px-6 py-2 sm:py-2.5 bg-white rounded-lg text-black text-xs sm:text-sm font-bold shadow-sm hover:bg-gray-50 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>

                {/* Social Icons */}
                <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto">
                  <span className="text-black font-black text-xs uppercase tracking-widest">
                    Socials
                  </span>
                  <div className="flex gap-2">
                    {socialLinks.map((social) => (
                      <a
                        key={social.alt}
                        href={social.href}
                        target={social.external ? '_blank' : undefined}
                        rel={social.external ? 'noopener noreferrer' : undefined}
                        className="w-9 h-9 sm:w-10 sm:h-10 bg-[#F9F5ED] rounded-xl flex items-center justify-center hover:bg-[#F7AF19] transition-colors"
                      >
                        <img src={social.img} alt={social.alt} className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer