import React, { useState } from 'react';
import './App.css';

// Import the new GlassClock component
import GlassClock from './Components/GlassClock';

// Import other components and pages
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
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
  const [isLoading, setIsLoading] = useState(true);

  // This function will be called by the GlassClock when it finishes
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Conditionally render the preloader or the main portfolio content
  return (
    <>
      {isLoading ? (
        <GlassClock onLoaded={handleLoadingComplete} />
      ) : (
        <div className="App">
          <Navbar />
          <main>
            <Home />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Certifications />
            <Resume />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;

