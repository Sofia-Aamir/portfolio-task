import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from './ThemeContext'; // Import the theme context

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme(); // Use context values

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
        <ul className="hidden md:flex space-x-8 text-xl">
          <li className="hover:text-blue-500 cursor-pointer dark:text-white">Home</li>
          <li className="hover:text-blue-500 cursor-pointer dark:text-white">About</li>
          <li className="hover:text-blue-500 cursor-pointer dark:text-white">Portfolio</li>
          <li className="hover:text-blue-500 cursor-pointer dark:text-white">Contact</li>
        </ul>
        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode}>
            <FontAwesomeIcon
              icon={darkMode ? faSun : faMoon}
              className="text-3xl hover:text-blue-500 dark:text-white"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
