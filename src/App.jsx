import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import PWAInstallPrompt from './components/ui/PWAInstallPrompt';
import OfflineIndicator from './components/ui/OfflineIndicator';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* PWA Components */}
      <OfflineIndicator />
      <PWAInstallPrompt />
      
      {/* Main App Structure */}
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;