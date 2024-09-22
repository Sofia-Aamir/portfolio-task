import React from 'react';
import { useTheme } from './ThemeContext'; // Import the theme context

const About = () => {
  const { darkMode } = useTheme(); // Use context value for dark mode

  return (
    <div className={`w-full ${darkMode ? 'bg-gray-900' : 'bg-white'} transition-all duration-300`}>
      <div className={`max-w-6xl mx-auto p-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        {/* About Section */}
        <h1 className="text-3xl font-bold text-center mb-4">About Me</h1>
        <p className="text-center text-lg mb-8">
          I am a passionate frontend web developer and graphic designer with a strong eye for detail and a knack for creating engaging, user-friendly digital experiences. 
          Combining expertise in web development technologies like HTML, CSS, JavaScript with a deep understanding of design principles, I bring both creativity and functionality 
          to every project.
        </p>

        {/* Skills Section */}
        <div className="my-12">
          <h2 className="text-2xl font-bold text-center mb-6">Skills & Expertise</h2>
          <div className="flex flex-wrap justify-center space-x-4">
            <div className={`p-4 ${darkMode ? 'bg-gray-800 border-2 border-blue-500' : 'bg-gray-100'} shadow-md rounded-md hover:shadow-lg transition duration-300`}>
              <h3 className="text-xl font-semibold">Frontend Development</h3>
              <p className="text-sm mt-2">HTML, CSS, JavaScript, React.js, Bootstrap</p>
            </div>
            <div className={`p-4 ${darkMode ? 'bg-gray-800 border-2 border-blue-500' : 'bg-gray-100'} shadow-md rounded-md hover:shadow-lg transition duration-300`}>
              <h3 className="text-xl font-semibold">Graphic Design</h3>
              <p className="text-sm mt-2">Adobe Photoshop, Adobe Illustrator, Canva, Figma</p>
            </div>
            <div className={`p-4 ${darkMode ? 'bg-gray-800 border-2 border-blue-500' : 'bg-gray-100'} shadow-md rounded-md hover:shadow-lg transition duration-300`}>
              <h3 className="text-xl font-semibold">UI/UX Design</h3>
              <p className="text-sm mt-2">Wireframing, Prototyping, Usability Testing</p>
            </div>
          </div>
        </div>

        {/* Add vertical space only on small screens */}
        <div className="block md:hidden my-6"></div> {/* This will add space on small screens */}

        {/* Education Section */}
        <div className="my-12">
          <h2 className="text-2xl font-bold text-center mb-6">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Education Boxes */}
            <div className={`shadow-md rounded-lg p-6 text-center h-48 border-2 ${darkMode ? 'bg-gray-800 text-white border-blue-500' : 'hover:border-blue-500 bg-gray-100'} transition duration-300`}>
              <h2 className="text-xl font-semibold">COMSATS University Islamabad, Abbottabad Campus</h2>
              <p className="text-sm mt-2">CGPA: 3.51/4.00</p>
              <p className="text-sm">Bachelor's in Software Engineering</p>
            </div>
            <div className={`shadow-md rounded-lg p-6 text-center h-48 border-2 ${darkMode ? 'bg-gray-800 text-white border-blue-500' : 'hover:border-blue-500 bg-gray-100'} transition duration-300`}>
              <h2 className="text-xl font-semibold">Islamia College Peshawar</h2>
              <p className="text-sm mt-2">Marks: 984/1100</p>
              <p className="text-sm">Pre Engineering</p>
            </div>
            <div className={`shadow-md rounded-lg p-6 text-center h-48 border-2 ${darkMode ? 'bg-gray-800 text-white border-blue-500' : 'hover:border-blue-500 bg-gray-100'} transition duration-300`}>
              <h2 className="text-xl font-semibold">New Islamia Public School Charsadda</h2>
              <p className="text-sm mt-2">Marks: 1013/1100</p>
              <p className="text-sm">Science Group</p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="my-12">
          <h2 className="text-2xl font-bold text-center mb-6">Professional Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Experience Boxes */}
            <div className={`shadow-md rounded-lg p-6 text-center h-48 border-2 ${darkMode ? 'bg-gray-800 text-white border-blue-500' : 'hover:border-blue-500 bg-gray-100'} transition duration-300`}>
              <h2 className="text-xl font-semibold">Graphic Designing Tutor</h2>
              <p className="text-sm font-semibold">D3 Digital Dream Dynamo</p>
              <p className="text-sm mt-2">Guided students in design fundamentals, focusing on practical skills and creative applications.</p>
            </div>
            <div className={`shadow-md rounded-lg p-6 text-center h-48 border-2 ${darkMode ? 'bg-gray-800 text-white border-blue-500' : 'hover:border-blue-500 bg-gray-100'} transition duration-300`}>
              <h2 className="text-xl font-semibold">Frontend Development Intern</h2>
              <p className="text-sm font-semibold">YoungDev Internship</p>
              <p className="text-sm mt-2">Worked on responsive web applications and collaborated with teams on real-world projects.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
