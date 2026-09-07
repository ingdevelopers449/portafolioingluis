import React from 'react';

const Skills = () => {
  const skillsData = [
    { name: 'HTML5', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS3', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'JavaScript', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'Python', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'PHP', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
    { name: 'Laravel', category: 'Framework', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
    { name: 'React', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'MySQL', category: 'Database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'Java', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'Git', category: 'Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'Prompt Eng.', category: 'AI', icon: null }
  ];

  return (
    <section id="skills" className="pb-32 relative bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Stack Tecnológico
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <div 
              key={index} 
              className="group p-6 md:p-8 bg-[#111113] border border-white/5 hover:border-white/20 rounded-2xl flex flex-col items-center text-center gap-4 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl cursor-default"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100 mb-2">
                {skill.icon ? (
                  <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain drop-shadow-xl" />
                ) : (
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-zinc-200 font-bold text-lg md:text-xl group-hover:text-white transition-colors">
                  {skill.name}
                </span>
                <span className="text-zinc-500 font-mono text-xs md:text-sm tracking-widest uppercase">
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
