import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const titles = ['Sofia Aamir', 'Frontend Web Developer', 'Graphic Designer'];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [typing, setTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let typingTimeout;
    let pauseTimeout;

    if (typing && !isPaused) {
      if (displayedText.length < titles[currentTitleIndex].length) {
        typingTimeout = setTimeout(() => {
          setDisplayedText(titles[currentTitleIndex].substring(0, displayedText.length + 1));
        }, 100);
      } else {
        pauseTimeout = setTimeout(() => {
          setTyping(false);
        }, 1000); 
      }
    } else if (!typing && !isPaused) {
      if (displayedText.length > 0) {
        typingTimeout = setTimeout(() => {
          setDisplayedText(titles[currentTitleIndex].substring(0, displayedText.length - 1));
        }, 50);
      } else {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setTyping(true);
      }
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(pauseTimeout);
    };
  }, [displayedText, typing, isPaused, currentTitleIndex, titles]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-[70vh] bg-gray-100 dark:bg-gray-900">
      {/* Left Side - Text and Social Icons */}
      <div className="w-full md:w-1/2 p-8 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Hello, I am <span className="text-blue-500">{displayedText}</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
          I create beautiful and functional websites and designs.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-6">
          <a href="https://www.instagram.com/codeanddesignwithsofia/" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/sofia-aamir-50b876299/" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
          </a>
          <a href="https://github.com/Sofia-Aamir" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
            <FontAwesomeIcon icon={faGithub} className="text-2xl" />
          </a>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center mt-[-20px] md:mt-0">
        <img
          src="./images/home.png"
          alt="Home"
          className="max-w-sm md:max-w-lg h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
