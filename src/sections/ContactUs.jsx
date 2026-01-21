import React, { useState } from 'react';
import msg from '../assets/logos/msg.svg'
import call from '../assets/logos/call.svg'
import loc from '../assets/logos/loc.svg'
import Navbar from '../components/Navbar'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative overflow-hidden bg-[#FCF4E9] ">
    <Navbar />
      {/* Circular Background Design */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none overflow-hidden ">
        <div
          className="absolute w-[120vw] h-[110vw] bg-[#F4EDE2] left-1/2"
          style={{ 
            borderRadius: "50%", 
            bottom: "-60vw", 
           
            transform: "translateX(-50%)" 
          }}
        />
        <div
          className="absolute w-[95vw] h-[85vw] bg-[#FCF4E9] left-1/2"
          style={{ 
            borderRadius: "50%", 
            bottom: "-50vw", 
          
            transform: "translateX(-50%)" 
          }}
        />
        <div
          className="absolute w-[70vw] h-[65vw] bg-[#F4EDE2] left-1/2"
          style={{ 
            borderRadius: "50%", 
            bottom: "-40vw", 
       
            transform: "translateX(-50%)" 
          }}
        />
        <div
          className="absolute w-[45vw] h-[45vw] bg-[#FCF4E9] left-1/2"
          style={{ 
            borderRadius: "50%", 
            bottom: "-30vw", 
           
            transform: "translateX(-50%)" 
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 mt-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className=" font-bold text-[#402E1D] mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-700 paragraph">
                Reach out if you're looking for a thoughtful design<br />
                and development partner.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email Card */}
              <div className="bg-[#FFFBF3]  cursor-pointer rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                   <img src={msg}></img>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">You can email us at</p>
                    <a 
                      href="mailto:hello@orello.io" 
                      className="text-lg font-semibold text-gray-900 hover:text-purple-600 transition-colors"
                    >
                      hello@orello.io
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-[#FFFBF3] cursor-pointer rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                   <img src={loc}></img>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">Location</p>
                   <button
  onClick={() =>
    window.open(
      'https://www.google.com/search?q=Orello+Creatives+Pvt+Ltd+Bengaluru',
      '_blank'
    )
  }
  className="text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors"
>
  Get direction
</button>

                  </div>
                </div>
              </div>

              {/* Phone Card */}
             <div className="bg-[#FFFBF3]  cursor-pointer rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
  <div className="flex items-start gap-4">
    
    {/* Icon */}
    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
     <img src={call}></img>
    </div>

    {/* Content */}
    <div>
      <p className="text-sm font-semibold text-gray-700 mb-1">Give us a call</p>

      <div className="flex flex-wrap items-center gap-3">
        <a
          href="tel:+919538601012"
          className="text-lg font-semibold text-gray-900 hover:text-teal-600 transition-colors"
        >
          +91 9538601012
        </a>

        <span className="text-gray-400">|</span>

        <a
          href="tel:+918848385154"
          className="text-lg font-semibold text-gray-900 hover:text-teal-600 transition-colors"
        >
          +91 8848385154
        </a>
      </div>
    </div>

  </div>
</div>

            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-[#FFFBF3] rounded-3xl p-6 sm:p-8 lg:p-10 ">
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Type your name"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-all"
                />
              </div>

              {/* Purpose Field */}
              <div>
                <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-2">
                  Purpose
                </label>
                <select
                  id="purpose"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-all appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                    backgroundPosition: 'right 0.5rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em',
                    paddingRight: '2.5rem'
                  }}
                >
                  <option value="">Select your purpose</option>
                  <option value="project">New Project</option>
                  <option value="consultation">Consultation</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-black text-white font-semibold py-3.5 px-6 rounded-full hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}