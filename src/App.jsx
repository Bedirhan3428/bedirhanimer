import React from 'react';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative architectural-grid bg-deep-black text-pure-white">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-32">
        <Hero />
        <Philosophy />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
