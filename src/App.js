// App.js
import React from 'react';
import { ThemeProvider } from './Pages/ThemeContext';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Home />
      <About />
    </ThemeProvider>
  );
}

export default App;
