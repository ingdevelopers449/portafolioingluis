import React from 'react';
import fotoLuis from '../img/fotoluis.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-24 relative overflow-hidden bg-transparent">
      
      {/* Very subtle background grid (Silicon Valley style) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Content */}
        <div className="flex flex-col gap-6 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-zinc-800 bg-zinc-900/50 w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-zinc-300 text-xs font-mono tracking-tight">status: "Open to work"</span>
          </div>
          
          <div className="flex flex-col xl:flex-row xl:items-end gap-6 mb-2">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
              Luis Felipe <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600">
                Lozada Bastidas.
              </span>
            </h1>
            <div className="xl:mb-4">
              <span className="inline-block text-sm md:text-base font-mono text-zinc-400 px-4 py-2 border border-white/5 rounded-full bg-zinc-900/50 backdrop-blur-sm">
                {"//"} Análisis y Desarrollo de Software
              </span>
            </div>
          </div>
          
          <p className="text-zinc-400 text-lg md:text-xl max-w-xl font-light leading-relaxed mt-4">
            Aprendiz en formación enfocado en arquitectura escalable, lógica pura y la creación de soluciones tecnológicas avanzadas.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="px-5 py-2.5 rounded-lg bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors duration-300 flex items-center gap-2">
              Explorar Proyectos
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button>
          </div>
        </div>
        
        {/* Right Content - Prominent Photo + Floating Terminal */}
        <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0 w-full mx-auto lg:mx-0">
          
          {/* Main Photo (Enmarcada) */}
          <div className="relative z-10 w-[280px] md:w-[350px]">
            {/* Subtle glow behind frame */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/10 rounded-full blur-3xl z-0"></div>
            
            {/* El Marco Blanco / Glassmorphism */}
            <div className="relative z-10 rounded-[2rem] border-2 border-white/60 bg-gradient-to-b from-zinc-800/50 to-[#09090b] p-4 pb-0 overflow-hidden shadow-2xl backdrop-blur-md">
              <img 
                src={fotoLuis} 
                alt="Luis Felipe" 
                className="w-full h-auto object-cover relative z-10 transform translate-y-4"
              />
              {/* Gradient to blend the bottom of the photo inside the frame */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#09090b] to-transparent z-20"></div>
            </div>
          </div>

          {/* Floating Terminal Card over the image */}
          <div className="absolute bottom-10 -left-6 md:-left-12 z-30 w-[280px] md:w-[320px] bg-[#0d0d0f]/95 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="h-8 bg-[#161618] border-b border-zinc-800 flex items-center px-3 gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
            </div>
            <div className="p-4 flex flex-col gap-2 font-mono text-xs">
               <div className="flex items-start gap-2">
                 <span className="text-zinc-500 shrink-0">{'>'}</span>
                 <span className="text-zinc-300">Construyendo arquitecturas robustas.</span>
               </div>
               <div className="flex items-start gap-2">
                 <span className="text-zinc-500 shrink-0">{'>'}</span>
                 <span className="text-zinc-300">Stack: Python, React, PHP.</span>
               </div>
               <div className="flex items-start gap-2">
                 <span className="text-zinc-500 shrink-0">{'>'}</span>
                 <span className="text-white font-semibold">Generative AI Certified.</span>
               </div>
               <div className="flex items-start gap-2 mt-1">
                 <span className="animate-pulse text-zinc-400">_</span>
               </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
