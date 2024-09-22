import React from 'react';
import { useTheme } from './ThemeContext'; // Import the ThemeContext

// Dummy data for websites and graphic design works
const websites = [
    { id: 1, name: "Startup3 Website", img: "./images/startup3.png", url: "https://startup3-website.vercel.app/" },
    { id: 2, name: "My Portfolio", img: "./images/portfolio.png", url: "https://my-portfolio-psi-nine-25.vercel.app/" },
    { id: 3, name: "Car Rental Home Page", img: "./images/carrental.png", url: "https://car-rental-website-home-page.vercel.app/" },
    { id: 4, name: "Bakery Website", img: "./images/bakerywebsite.png", url: "https://github.com/Sofia-Aamir/bakerywebsite" },
];

const graphicWorks = [
  { id: 1, category: "socialMedia", img: "./images/BURGER social media post.png" },
  { id: 2, category: "socialMedia", img: "./images/car for rent 2.png" },
  { id: 3, category: "socialMedia", img: "./images/dinner.png" },
  { id: 4, category: "socialMedia", img: "./images/himalaya face wash social media post.png" },
  { id: 5, category: "socialMedia", img: "./images/pakistan independence day 2.png" },
  { id: 6, category: "socialMedia", img: "./images/pakistan independence day 3.png" },
  { id: 7, category: "socialMedia", img: "./images/sneakers social media 1.png" },
  { id: 8, category: "socialMedia", img: "./images/sneakers social media 2.png" },
  { id: 9, category: "socialMedia", img: "./images/sneakers social media 3.png" },
  { id: 10, category: "socialMedia", img: "./images/sneakers social media 4.png" },
  { id: 11, category: "socialMedia", img: "./images/travel poster.png" },
  { id: 12, category: "logos", img: "./images/all flame logos.png" },
  { id: 13, category: "logos", img: "./images/BRASS - Copy.png" },
  { id: 14, category: "logos", img: "./images/DIETIES (2).png" },
  { id: 15, category: "logos", img: "./images/MOUNT BLANCO (2).png" },
  { id: 16, category: "logos", img: "./images/Music Studio.png" },
  { id: 17, category: "logos", img: "./images/NWARD.png" },
  { id: 18, category: "logos", img: "./images/panda global.png" },
  { id: 19, category: "logos", img: "./images/SNOWDROP.png" },
  { id: 20, category: "posters", img: "./images/business conclave.png" },
  { id: 21, category: "posters", img: "./images/conference poster.png" },
  { id: 22, category: "posters", img: "./images/MEDICAL CARE.png" },
  { id: 23, category: "posters", img: "./images/messi poster.png" },
  { id: 24, category: "posters", img: "./images/messi poster 2.png" },
  { id: 25, category: "posters", img: "./images/ronaldo poster 2.png" },
  { id: 26, category: "posters", img: "./images/messi poster.png" },
  { id: 27, category: "posters", img: "./images/travel agency poster.png" },
  { id: 28, category: "posters", img: "./images/messi poster 2.png" },
  { id: 29, category: "posters", img: "./images/Tropicana.png" },
  { id: 30, category: "posters", img: "./images/2.png" },
  { id: 31, category: "webDesign", img: "./images/food-website.png", url: "https://fbaspot.my.canva.site/food-website" },
  { id: 32, category: "webDesign", img: "./images/asani website.png", url: "https://fbaspot.my.canva.site/asaani" },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = React.useState("all");
  const { darkMode } = useTheme(); // Get darkMode state from ThemeContext

  // Filter graphic works based on active filter
  const filteredWorks = activeFilter === "all" 
    ? graphicWorks 
    : graphicWorks.filter(work => work.category === activeFilter);

  return (
    <div className={darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-black'}>
      <div className="container mx-auto p-6">

        {/* Portfolio Title */}
        <h1 className="text-3xl font-bold text-center mb-8">My Portfolio</h1>

        {/* Websites Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Websites</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {websites.map((site) => (
              <a 
                key={site.id} 
                href={site.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative shadow-md rounded-lg overflow-hidden group border-2 border-gray-300"
              >
                {/* Full width and height for the image */}
                <img
                  src={site.img}
                  alt={site.name}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                />
                {/* Overlay with website name */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <p className="text-white text-xl font-semibold">{site.name}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Graphic Design Work Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Graphic Design Work</h2>

          {/* Portfolio Filters */}
          <ul className="portfolio-filters isotope-filters flex justify-center space-x-4 mb-6">
            <li 
              className={`cursor-pointer ${activeFilter === "all" ? 'filter-active' : ''}`} 
              onClick={() => setActiveFilter("all")}
            >All</li>
            <li 
              className={`cursor-pointer ${activeFilter === "socialMedia" ? 'filter-active' : ''}`} 
              onClick={() => setActiveFilter("socialMedia")}
            >Social Media</li>
            <li 
              className={`cursor-pointer ${activeFilter === "logos" ? 'filter-active' : ''}`} 
              onClick={() => setActiveFilter("logos")}
            >Logos</li>
            <li 
              className={`cursor-pointer ${activeFilter === "posters" ? 'filter-active' : ''}`} 
              onClick={() => setActiveFilter("posters")}
            >Posters</li>
            <li 
              className={`cursor-pointer ${activeFilter === "webDesign" ? 'filter-active' : ''}`} 
              onClick={() => setActiveFilter("webDesign")}
            >Web Designs</li>
          </ul>

          {/* Filtered Graphic Design Work */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredWorks.map((work) => (
              work.url ? (
                <a 
                  key={work.id} 
                  href={work.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="shadow-md rounded-lg overflow-hidden"
                >
                  <img 
                    src={work.img} 
                    alt="" 
                    className="w-full h-full object-cover"
                  />
                </a>
              ) : (
                <div key={work.id} className="shadow-md rounded-lg overflow-hidden">
                  <img 
                    src={work.img} 
                    alt="" 
                    className="w-full h-full object-cover"
                  />
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
