// App.js
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
      <Home />
      <About />
      <Portfolio/>
      <Contact/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
