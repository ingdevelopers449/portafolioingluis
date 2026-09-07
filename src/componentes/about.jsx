import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-32 relative bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Sobre Mí
          </h2>
          <p className="text-zinc-400 font-light max-w-2xl">
            Un vistazo a mi trayectoria, experiencia técnica y el valor que aporto a los proyectos en los que participo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Experience & Focus */}
          <div className="md:col-span-2 bg-[#111113] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
            <div className="flex items-center gap-3 mb-6">
               <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
               <h3 className="text-lg font-medium text-white">Perfil Profesional</h3>
            </div>
            <p className="text-zinc-400 font-light leading-relaxed mb-4 text-sm md:text-base">
              Soy <strong className="text-zinc-200 font-medium">Técnico en Sistemas</strong> y actualmente estudiante de <strong className="text-zinc-200 font-medium">Análisis y Desarrollo de Software</strong>. Me especializo en la construcción de APIs robustas, diseño de bases de datos y la implementación de lógica de negocio compleja.
            </p>
            <p className="text-zinc-400 font-light leading-relaxed text-sm md:text-base">
              Constantemente integro herramientas de <strong className="text-zinc-200 font-medium">Inteligencia Artificial</strong> en mis flujos de trabajo para optimizar tiempos de desarrollo y resolver algoritmos lógicos con mayor precisión.
            </p>
          </div>

          {/* Card 2: Certifications */}
          <div className="bg-[#111113] border border-white/5 rounded-2xl p-8 flex flex-col justify-center hover:border-white/10 transition-colors">
            <div className="mb-6 border-b border-white/5 pb-6">
              <p className="text-sm font-medium text-white mb-1">IA Generativa</p>
              <p className="text-zinc-500 text-xs">Curso Avanzado Ingeniería en Software</p>
            </div>
            <div className="mb-6 border-b border-white/5 pb-6">
              <p className="text-sm font-medium text-white mb-1">Robótica Recreativa</p>
              <p className="text-zinc-500 text-xs">Curso Especial Práctico</p>
            </div>
            <div>
              <p className="text-3xl font-mono text-white mb-1">10<span className="text-zinc-600">+</span></p>
              <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Proyectos Base</p>
            </div>
          </div>

          {/* Card 3: Details */}
          <div className="md:col-span-3 bg-[#111113] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-zinc-500 text-xs font-mono mb-1">Ubicación</p>
                <p className="text-zinc-200 text-sm font-medium">Neiva, Colombia</p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs font-mono mb-1">E-mail</p>
                <p className="text-zinc-200 text-sm font-medium truncate">pipelozada994@gmail.com</p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs font-mono mb-1">Disponibilidad</p>
                <p className="text-zinc-200 text-sm font-medium">Remoto</p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs font-mono mb-1">GitHub</p>
                <p className="text-zinc-200 text-sm font-medium">@ingdevelopers449</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
