import React, { useEffect, useState } from 'react';
import { ReactComponent as LogoLF } from '../img/logo-lf.svg';
import './preloader.css'; // We will style the animation here

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos un tiempo de carga de 2.5 segundos para la animación
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] transition-opacity duration-700 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="relative flex flex-col items-center">
        {/* Logo wrapper for pulsing effect */}
        <div className="w-24 h-24 mb-8 animate-pulse-fast relative">
            <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full"></div>
            <LogoLF className="w-full h-full relative z-10 animate-draw-svg" />
        </div>
        
        {/* Loading Bar */}
        <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-loading-bar rounded-full"></div>
        </div>
        <p className="text-cyan-400 font-mono mt-4 text-sm tracking-widest uppercase animate-pulse">Iniciando Sistema...</p>
      </div>
    </div>
  );
};

export default Preloader;
