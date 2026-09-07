import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    topic: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hola Luis Felipe, soy ${formData.name}. Te contacto por el siguiente tema: ${formData.topic}. Mensaje: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/573171444624?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="pt-32 pb-24 relative bg-[#09090b] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para colaborar?
          </h2>
          <p className="text-zinc-400 text-lg font-light max-w-2xl mx-auto">
            Estoy abierto a nuevas oportunidades, arquitectura de software y discusiones sobre tecnología.
          </p>
        </div>

        <div className="bg-[#111113] border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl mb-16">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-mono text-zinc-400">Nombre / Empresa</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-[#09090b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-colors"
                  placeholder="Tu nombre..."
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="topic" className="text-sm font-mono text-zinc-400">Asunto</label>
                <input 
                  type="text" 
                  id="topic" 
                  name="topic" 
                  required
                  value={formData.topic}
                  onChange={handleChange}
                  className="bg-[#09090b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-colors"
                  placeholder="Ej. Propuesta de trabajo, Freelance..."
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-mono text-zinc-400">Mensaje</label>
              <textarea 
                id="message" 
                name="message" 
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="bg-[#09090b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                placeholder="Hola Luis, me gustaría hablar contigo sobre..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="mt-4 bg-white text-black font-bold font-mono py-4 px-8 rounded-xl hover:bg-zinc-200 transition-colors flex items-center justify-center gap-3 group"
            >
              <span>Enviar mensaje a WhatsApp</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </form>
        </div>

        {/* Información de Contacto Adicional */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 text-zinc-400 font-mono text-sm">
          <a href="mailto:pipelozada994@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            <span>pipelozada994@gmail.com</span>
          </a>
          
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <span>Neiva, Colombia</span>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-12">
          <a href="https://github.com/ingdevelopers449" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#111113] border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-all duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
          </a>
          <a href="https://www.linkedin.com/in/luis-felipe-lozada-bastidas-530b7538b/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#111113] border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-all duration-300">
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
