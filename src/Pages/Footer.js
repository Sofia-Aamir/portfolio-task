import React from 'react';
import { useTheme } from './ThemeContext'; // Import the theme context
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
  const { darkMode } = useTheme(); // Use context value for dark mode

  return (
    <footer className={`py-6 ${darkMode ? 'bg-gray-900' : 'bg-white'} transition-all duration-300`}>
      <div className="container mx-auto text-center">
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-800'}`}>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://web.facebook.com/profile.php?id=61556663408753&_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
            <FaFacebook className={`text-xl ${darkMode ? 'text-gray-400 hover:text-blue-600' : 'text-gray-800 hover:text-blue-600'}`} />
          </a>
          <a href="https://github.com/Sofia-Aamir" target="_blank" rel="noopener noreferrer">
            <FaGithub className={`text-xl ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-800 hover:text-blue-400'}`} />
          </a>
          <a href="https://www.linkedin.com/in/sofia-aamir-50b876299/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={`text-xl ${darkMode ? 'text-gray-400 hover:text-blue-700' : 'text-gray-800 hover:text-blue-700'}`} />
          </a>
          <a href="https://www.instagram.com/codeanddesignwithsofia/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={`text-xl ${darkMode ? 'text-gray-400 hover:text-pink-600' : 'text-gray-800 hover:text-pink-600'}`} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
