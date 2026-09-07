import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Manejo del scroll para el fondo del header
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer para detectar en qué sección estamos
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Activa cuando la sección pasa por la mitad de la pantalla
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observar todas las secciones que nos interesan
    const sections = ['home', 'about', 'projects', 'skills', 'contact'];
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Sobre mí' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'skills', label: 'Stack' }
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center mt-6 px-4 transition-all duration-300">
      <header 
        className={`flex items-center justify-between px-6 py-2 transition-all duration-500 rounded-full w-full max-w-5xl ${
          scrolled 
            ? 'bg-zinc-900/80 backdrop-blur-lg border border-white/10 shadow-2xl shadow-black/50' 
            : 'bg-[#09090b]/40 backdrop-blur-sm border border-white/5'
        }`}
      >
        
        {/* Logo */}
        <div className="flex items-center cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
          <div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center font-bold text-lg font-mono transform transition-transform group-hover:scale-105 duration-300 shadow-lg">
            L
          </div>
          <span className="ml-3 font-semibold text-zinc-100 tracking-tight hidden sm:block">Luis Lozada</span>
        </div>
        
        {/* Navigation - Con Active State Tracker */}
        <nav className="hidden md:flex gap-1 items-center bg-[#111113]/80 rounded-full px-2 py-1.5 border border-white/5 shadow-inner">
          {navLinks.map(link => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              className={`text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-300 ${
                activeSection === link.id 
                  ? 'bg-white text-black shadow-md' 
                  : 'text-zinc-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a 
            href="/cv.pdf" 
            download="CV_Luis_Lozada.pdf"
            className="flex items-center justify-center px-4 py-2 rounded-full border border-zinc-700 bg-transparent text-zinc-300 text-xs font-bold hover:bg-white/10 hover:text-white transition-all duration-300"
          >
            Descargar CV
          </a>
          <a href="mailto:pipelozada994@gmail.com" className="flex items-center justify-center px-5 py-2 rounded-full border border-white/10 bg-[#111113] text-zinc-300 text-xs font-bold hover:bg-white hover:text-black transition-all duration-300 shadow-lg">
            Contactar
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center bg-zinc-800/50 p-2 rounded-full border border-white/10">
          <button className="text-zinc-300 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
