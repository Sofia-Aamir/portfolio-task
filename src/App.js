import React from 'react';
import { ThemeProvider } from './Pages/ThemeContext';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      {/* Render all sections one after the other */}
      <div>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="portfolio"><Portfolio /></section>
        <section id="contact"><Contact /></section>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
