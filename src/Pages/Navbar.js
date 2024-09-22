import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMoon, faSun, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import { useTheme } from './ThemeContext'; // Import the theme context

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme(); // Use context values
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling mobile menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`bg-white dark:bg-gray-900 shadow-md`}>
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon
            icon={faUser}
            className="text-3xl dark:text-white"
          />
          <span className="text-3xl font-bold dark:text-white">Sofia</span>
        </div>

        {/* Centered Navbar items */}
        <div className="flex-grow flex justify-center">
          <ul className="hidden md:flex space-x-8 text-xl">
            <li className="hover:text-blue-500 cursor-pointer dark:text-white">
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="hover:text-blue-500 cursor-pointer dark:text-white">
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className="hover:text-blue-500 cursor-pointer dark:text-white">
              <Link to="portfolio" smooth={true} duration={500}>
                Portfolio
              </Link>
            </li>
            <li className="hover:text-blue-500 cursor-pointer dark:text-white">
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-4 ml-auto">
          {/* Dark mode toggle button */}
          <button onClick={toggleDarkMode}>
            <FontAwesomeIcon
              icon={darkMode ? faSun : faMoon}
              className="text-3xl hover:text-blue-500 dark:text-white"
            />
          </button>

          {/* Hamburger icon for small screens */}
          <button onClick={toggleMenu} className="block md:hidden text-3xl dark:text-white">
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white dark:bg-gray-900 space-y-4 px-4 py-6">
          <li className="hover:text-blue-500 cursor-pointer dark:text-white">
            <Link to="home" smooth={true} duration={500} onClick={toggleMenu}>Home</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer dark:text-white">
            <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>About</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer dark:text-white">
            <Link to="portfolio" smooth={true} duration={500} onClick={toggleMenu}>Portfolio</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer dark:text-white">
            <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
