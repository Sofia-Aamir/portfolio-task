import React from 'react';
import { useTheme } from './ThemeContext'; // Import the theme context

const Contact = () => {
  const { darkMode } = useTheme(); // Use context value for dark mode

  return (
    <div className={`font-[sans-serif] lg:h-screen transition-all duration-300 ${darkMode ? 'bg-gray-900' : 'bg-green-50'}`}>
      <div className="grid lg:grid-cols-3 items-center max-lg:justify-center gap-6 h-full sm:p-12 p-8 max-sm:p-4">
        
        {/* Contact Form Section */}
        <div className="max-w-lg max-lg:mx-auto max-lg:text-center max-lg:mb-6 lg:ml-10 md:-mt-7">
          <h2 className={`text-4xl font-extrabold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Get In Touch
          </h2>
          <p className={`text-sm mt-4 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Have a specific inquiry or looking to explore new opportunities? Our
            experienced team is ready to engage with you.
          </p>

          {/* Widening the white shadow container */}
          <form className={`mx-auto mt-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg space-y-4 lg:w-[150%]`}> 
            {/* lg:w-[150%] increases the width of the white background */}
            <input
              type="text"
              placeholder="Name"
              className={`w-full rounded-md h-12 px-6 ${darkMode ? 'bg-gray-700 text-white' : 'bg-[#f0f1f2] text-black'} text-sm outline-none`}
            />
            <input
              type="email"
              placeholder="Email"
              className={`w-full rounded-md h-12 px-6 ${darkMode ? 'bg-gray-700 text-white' : 'bg-[#f0f1f2] text-black'} text-sm outline-none`}
            />
            <input
              type="text"
              placeholder="Subject"
              className={`w-full rounded-md h-12 px-6 ${darkMode ? 'bg-gray-700 text-white' : 'bg-[#f0f1f2] text-black'} text-sm outline-none`}
            />
            <textarea
              placeholder="Message"
              rows="6"
              className={`w-full rounded-md px-6 ${darkMode ? 'bg-gray-700 text-white' : 'bg-[#f0f1f2] text-black'} text-sm pt-3 outline-none`}
            ></textarea>
            <button
              type="button"
              className={`text-gray-800 font-semibold rounded-md text-sm px-6 py-3 block w-full ${darkMode ? 'bg-green-400 hover:bg-green-500 text-gray-900' : 'bg-green-200 hover:bg-green-300'}`}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="z-10 relative lg:col-span-2 lg:ml-auto lg:w-[80%]">
          <img
            src="https://readymadeui.com/images/analtsis.webp"
            className="w-3/4 object-contain block ml-auto"
            alt="Contact"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
