 import React from 'react';
import './App.css';

// Import reusable components like the Navbar and Footer
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// Import all the page sections
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      {/* The Navbar component appears at the top of the page */}
      <Navbar />

      {/* The Home section is kept separate for the scroll animation */}
      <Home /> 
      
      {/* All other sections are wrapped in a main content block */}
      <main className="main-content">
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Resume />
        <Contact />
      </main>

      {/* The Footer component appears at the bottom of the page */}
      <Footer />
    </div>
  );
}

export default App;

