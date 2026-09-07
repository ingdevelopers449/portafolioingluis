import React from 'react';
import Cursor from './componentes/cursor';
import Header from './componentes/header';
import Hero from './componentes/hero';
import About from './componentes/about';
import Certifications from './componentes/certifications';
import Skills from './componentes/skills';
import Projects from './componentes/projects';
import Contact from './componentes/contact';
import Footer from './componentes/footer';
import Chatbot from './componentes/chatbot/Chatbot';
import './App.css';

function App() {
  return (
    <div className="App bg-zinc-950 min-h-screen text-zinc-100 selection:bg-cyan-500/30 relative">
      {/* Global subtle dot pattern */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #3f3f46 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="relative z-10">
        <Cursor />
        <Header />
        <Hero />
        <About />
        <Certifications />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <Chatbot />
      </div>
    </div>
  );
}

export default App;
