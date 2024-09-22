import React from 'react';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Education Section */}
      <h1 className="text-3xl font-bold text-center mb-4">About Me</h1>
      <p className="text-center mb-8">
        I am a frontend web developer and graphic designer passionate about creating engaging and user-friendly digital experiences. With expertise in HTML, CSS, and JavaScript, I build responsive websites that combine functionality with visual appeal. My design background enriches my projects, ensuring that aesthetics and usability go hand in hand.
      </p>

      {/* Education Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Box 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center h-48 border-2 border-transparent hover:shadow-lg hover:border-blue-500 transition duration-300">
          <h2 className="text-xl font-semibold">COMSATS University Islamabad, Abbottabad Campus</h2>
          <p className="text-sm mt-2">CGPA: 3.51/4.00</p>
          <p className="text-sm">Bachelor's in Software Engineering</p>
        </div>
        {/* Box 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center h-48 border-2 border-transparent hover:shadow-lg hover:border-blue-500 transition duration-300">
          <h2 className="text-xl font-semibold">ISLAMIA COLLEGE PESHAWAR</h2>
          <p className="text-sm mt-2">MARKS: 984/1100</p>
          <p className="text-sm">Pre Engineering</p>
        </div>
        {/* Box 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center h-48 border-2 border-transparent hover:shadow-lg hover:border-blue-500 transition duration-300">
          <h2 className="text-xl font-semibold">NEW ISLAMIA PUBLIC SCHOOL CHARSADDA</h2>
          <p className="text-sm mt-2">MARKS: 1013/1100</p>
          <p className="text-sm">Science Group</p>
        </div>
        {/* Box 4 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center h-48 border-2 border-transparent hover:shadow-lg hover:border-blue-500 transition duration-300">
          <h2 className="text-xl font-semibold">GRAPHIC DESIGNING TUTOR</h2>
          <p className="text-sm font-semibold">D3 Digital Dream Dynamo</p>
          <p className="text-sm mt-2">I have helped students develop their skills in graphic design, focusing on both theory and practical applications.</p>
        </div>
        {/* Box 5 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center h-48 border-2 border-transparent hover:shadow-lg hover:border-blue-500 transition duration-300">
          <h2 className="text-xl font-semibold">FRONTEND DEVELOPMENT INTERNEE</h2>
          <p className="text-sm font-semibold">YoungDev Internship</p>
          <p className="text-sm mt-2">I gained hands-on experience in developing responsive web applications and teamwork.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
