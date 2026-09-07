import React from 'react';

const certifications = [
  {
    title: "IA Generativa",
    issuer: "Ingeniería en Software — Curso Avanzado",
    year: "2025",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    tags: ["Machine Learning", "Prompting", "Python"],
    badge: "Completado"
  },
  {
    title: "Robótica Recreativa",
    issuer: "Curso Especial Práctico",
    year: "2024",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    tags: ["Arduino", "Hardware", "Lógica"],
    badge: "Completado"
  },
  {
    title: "Técnico en Sistemas",
    issuer: "SENA — Servicio Nacional de Aprendizaje",
    year: "2023",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    tags: ["Redes", "Mantenimiento", "SO"],
    badge: "Título Obtenido"
  },
  {
    title: "Análisis y Desarrollo de Software",
    issuer: "SENA — Servicio Nacional de Aprendizaje",
    year: "2026",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    tags: ["React", "Python", "PHP", "Bases de Datos"],
    badge: "En Curso"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-zinc-800 bg-zinc-900/50 mb-4">
            <span className="text-zinc-500 text-xs font-mono">03.</span>
            <span className="text-zinc-400 text-xs font-mono">certificaciones</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Formación & Certificaciones
          </h2>
          <p className="text-zinc-400 font-light max-w-2xl">
            Títulos y cursos completados que respaldan mis habilidades técnicas como desarrollador de software.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-[#111113] border border-white/5 rounded-2xl p-7 hover:border-white/15 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

              {/* Top row: Icon + Year + Badge */}
              <div className="flex items-start justify-between mb-5">
                <div className="p-2.5 bg-white/5 rounded-xl text-zinc-400 group-hover:text-white group-hover:bg-white/10 transition-all duration-300">
                  {cert.icon}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-zinc-600 font-mono text-xs">{cert.year}</span>
                  <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${
                    cert.badge === 'En Curso'
                      ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
                      : cert.badge === 'Título Obtenido'
                      ? 'border-white/20 text-white bg-white/5'
                      : 'border-zinc-700 text-zinc-400 bg-transparent'
                  }`}>
                    {cert.badge}
                  </span>
                </div>
              </div>

              {/* Title & Issuer */}
              <h3 className="text-white font-semibold text-lg mb-1 tracking-tight group-hover:text-white transition-colors">
                {cert.title}
              </h3>
              <p className="text-zinc-500 text-sm font-light mb-5">{cert.issuer}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {cert.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-mono text-zinc-500 bg-zinc-900 border border-white/5 px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
