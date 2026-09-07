import React from 'react';
// 1. IMPORTA LA IMAGEN AQUI (asegúrate de poner la ruta correcta cuando tengas tus fotos)
import imgFactu from '../img/factuweb.png';
import imgAirsense from '../img/airsense.png';
import imgFockus from '../img/fockuskid.png';
import imgAgristock from '../img/agristock.png';
import imgBovinos from '../img/bovinosai.png';

const Projects = () => {
  const projectList = [
    {
      title: "FactuWeb PRO",
      status: "Completado",
      description: "Desarrollé el backend y la lógica fiscal de este sistema de facturación electrónica simulando procesos de la DIAN. Implementé la gestión de stock en tiempo real, generación de facturas con CUFE y QR, y reportes financieros.",
      tags: ["PHP", "MySQL", "Arquitectura Fiscal"],
      github: "https://github.com/ingdevelopers449/factuwebpro_v1",
      image: imgFactu
    },
    {
      title: "Fockus Kid",
      status: "Completado",
      description: "Diseñé y programé esta plataforma web interactiva de estudio adaptativo. Mi enfoque principal fue la integración de Inteligencia Artificial para acompañar en tareas escolares a niños con TDAH mediante un enfoque clínico y psicopedagógico.",
      tags: ["React", "IA Generativa", "Web App"],
      github: "https://github.com/ingdevelopers449/focuskind-ai",
      image: imgFockus
    },
    {
      title: "AirSense CEFA",
      status: "En Desarrollo",
      description: "Participé como desarrollador en la creación de scripts en Python para este sistema automatizado. El objetivo del proyecto es monitorear y analizar niveles de CO₂ y calidad del aire conectando sensores a la plataforma.",
      tags: ["Python", "Sensores", "Data Analysis"],
      github: "https://github.com/ingdevelopers449/airsensecefa",
      image: imgAirsense
    },
    {
      title: "Agristock",
      status: "Completado",
      description: "Desarrollé la lógica y la interfaz de este sistema de control y gestión de inventario para el sector agrícola. Mi participación incluyó estructurar la base de datos y optimizar el registro de insumos.",
      tags: ["Desarrollo Web", "Base de Datos", "Gestión"],
      github: "https://github.com/ingdevelopers449/tienda-insumos ",
      image: imgAgristock
    },
    {
      title: "Bot de Análisis de Bovinos",
      status: "En Desarrollo",
      description: "Desarrollé un sistema de análisis inteligente para la Unidad de Ganadería del SENA. El bot utiliza análisis de imágenes con IA para identificar razas bovinas y detectar enfermedades de forma temprana, optimizando la toma de decisiones en el sector ganadero.",
      tags: ["Python", "IA", "Análisis de Imágenes"],
      github: "https://colab.research.google.com/drive/1obFfWTToHGHJs4QSLMA7D2UZ1FFT3WId?usp=sharing",
      image: imgBovinos
    },
    {
      title: "Agente de Formatos Socioeconómicos",
      status: "Completado",
      description: "Diseñé y desarrollé este agente inteligente para el área de Bienestar al Aprendiz del SENA CEFA. El sistema automatiza la verificación de registros socioeconómicos en PDF: el agente carga el documento, lo procesa con la API de Gemini y extrae automáticamente campos clave como nombre, ficha, SISBÉN y apoyo solicitado.",
      tags: ["Python", "Gemini API", "Gradio", "IA Generativa"],
      github: "https://github.com/ingdevelopers449",
      image: imgBovinos
    }
  ];

  return (
    <section id="projects" className="py-32 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Proyectos Destacados</h2>
          <p className="text-zinc-400 font-light max-w-2xl">
            Sistemas y aplicaciones construidas con lógica escalable, bases de datos optimizadas y un enfoque claro en la experiencia de usuario.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <div 
              key={index} 
              className="group bg-[#111113] rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Contenedor de la Imagen */}
              <div className="relative h-64 overflow-hidden bg-[#161618]">
                {/* Overlay oscuro para integrar la imagen al tema */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-4 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                     <svg className="w-16 h-16 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                     </svg>
                     <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase">Placeholder</p>
                  </div>
                )}
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium ${
                    project.status === 'Completado' 
                      ? 'bg-zinc-900/80 text-zinc-300 border border-zinc-700' 
                      : 'bg-zinc-900/80 text-zinc-400 border border-zinc-800 border-dashed'
                  } backdrop-blur-md`}>
                    {project.status === 'Completado' ? 'Deployed' : 'In Progress'}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zinc-300 transition-colors">{project.title}</h3>
                <p className="text-zinc-400 font-light text-sm leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-2.5 py-1 bg-[#1a1a1c] border border-white/5 rounded text-zinc-400 font-mono text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group/link"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    <span className="text-sm font-medium">Ver Repositorio</span>
                  </a>
                  
                  {project.status === 'Completado' && (
                    <a href="#demo" className="text-zinc-500 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
