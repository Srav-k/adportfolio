import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceEducation from './components/ExperienceEducation';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="relative">
      
      {/* ===== DYNAMIC BACKGROUND ===== */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[35%] h-[35%] bg-indigo-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ===== NAVBAR ===== */}
      <Navbar />

      {/* ===== MAIN CONTENT ===== */}
      <main>
        <Hero />
        <About />
        <Skills />
        <ExperienceEducation />
        <Projects />
        <Contact />
      </main>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
};

export default App;
