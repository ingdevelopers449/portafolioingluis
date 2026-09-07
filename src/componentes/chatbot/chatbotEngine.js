// ============================================================
// chatbotEngine.js — Motor de reglas del bot (sin IA)
// Funciona por coincidencia de palabras clave (pattern matching)
// ============================================================

// Normaliza el texto: minúsculas, sin tildes, sin caracteres especiales
export const normalize = (text) => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, '')
    .trim();
};

// ============================================================
// BASE DE CONOCIMIENTO — 35+ reglas entrenadas
// ============================================================
export const rules = [

  // --- SALUDOS ---
  {
    keywords: ['hola', 'hey', 'buenas', 'saludos', 'buen dia', 'buenos dias', 'buenas tardes', 'buenas noches', 'hi', 'hello', 'ey', 'que tal', 'como estas', 'que mas', 'quiubo', 'habla'],
    response: `👋 ¡Hola! Soy **Luis.bot**, el asistente virtual de Luis Felipe Lozada.\n\nPuedes preguntarme sobre:\n• 💻 **Proyectos** desarrollados\n• 🛠️ **Tecnologías** que maneja\n• 🎓 **Formación** y certificaciones\n• 📞 **Contacto** y disponibilidad\n• 📄 **Curriculum vitae**\n\n¿Qué te gustaría saber?`
  },

  // --- IDENTIDAD DEL BOT ---
  {
    keywords: ['quien eres', 'que eres', 'eres un bot', 'eres ia', 'robot', 'asistente', 'como te llamas', 'tu nombre', 'eres humano', 'eres real'],
    response: `🤖 Soy **Luis.bot**, un asistente virtual programado con reglas para responder preguntas sobre el portafolio de Luis Felipe Lozada.\n\nNo uso inteligencia artificial — respondo con sentencias predefinidas basadas en palabras clave. ¡Pero intento ser muy útil! 😄\n\nEscribe **ayuda** para ver qué puedo responder.`
  },

  // --- NOMBRE / QUIÉN ES LUIS ---
  {
    keywords: ['quien es luis', 'quien es', 'presentate', 'habla de luis', 'dime sobre luis', 'info de luis', 'cuéntame', 'cuentame', 'perfil', 'acerca', 'sobre el'],
    response: `👨‍💻 **Luis Felipe Lozada Bastidas** es un desarrollador de software en formación, oriundo de **Neiva, Huila — Colombia**.\n\nEs **Técnico en Sistemas** (2023) y actualmente cursa **Análisis y Desarrollo de Software** en el SENA. Se especializa en arquitecturas escalables, lógica de negocio y desarrollo web full-stack con Python, React y PHP.\n\nCuenta con 4 proyectos reales desarrollados y certificaciones en IA Generativa y Robótica.`
  },

  // --- NOMBRE COMPLETO / APELLIDO ---
  {
    keywords: ['apellido', 'nombre completo', 'como se llama', 'su nombre', 'nombre', 'lozada', 'bastidas', 'felipe'],
    response: `👤 Su nombre completo es:\n\n**Luis Felipe Lozada Bastidas**\n\n— **Luis Felipe** (nombres)\n— **Lozada Bastidas** (apellidos)\n\nNació y reside en **Neiva, Huila, Colombia** 🇨🇴`
  },

  // --- EDAD ---
  {
    keywords: ['edad', 'cuantos anos tiene', 'anos tiene', 'cuanto tiene', 'joven', 'que edad'],
    response: `🎂 Luis es un **desarrollador joven**, lo que significa que tiene energía, disposición para aprender y está al día con las tecnologías más modernas.\n\nSi necesitas saberlo con exactitud, puedes consultarle directamente:\n📧 pipelozada994@gmail.com\n📱 317 1444 624`
  },

  // --- FORMACIÓN / ESTUDIOS ---
  {
    keywords: ['estudia', 'estudios', 'carrera', 'formacion', 'sena', 'colegio', 'donde estudia', 'que estudia', 'academia', 'escuela', 'instituto', 'aprendiz', 'grado'],
    response: `🎓 **Formación académica de Luis:**\n\n📘 **Análisis y Desarrollo de Software** — SENA, Neiva *(En curso, 2026)*\n🏫 **Técnico en Sistemas** — I.E. Atanasio Girardot *(2023)*\n🤖 **IA Generativa en Ingeniería de Software** — FET Neiva *(2026)*\n⚙️ **Robótica Recreativa** — SENA, Neiva *(2025)*`
  },

  // --- TECNOLOGÍAS / STACK ---
  {
    keywords: ['tecnologia', 'tecnologias', 'stack', 'lenguaje', 'lenguajes', 'sabe', 'maneja', 'conoce', 'habilidades tecnicas', 'programacion', 'herramienta', 'herramientas', 'que usa'],
    response: `🛠️ **Stack tecnológico de Luis:**\n\n**Frontend:** React.js, HTML5, CSS3, JavaScript\n**Backend:** PHP, Python\n**Bases de datos:** MySQL, diseño relacional\n**Control de versiones:** Git, GitHub\n**Extras:** IA Generativa, Sensores IoT (Python)\n**Enfoque:** Arquitectura escalable, lógica de negocio`
  },

  // --- PYTHON ---
  {
    keywords: ['python', 'piton', 'script', 'automatizacion', 'scripting'],
    response: `🐍 **Luis y Python:**\n\nUtiliza Python principalmente para:\n• Scripts de **automatización** y procesamiento de datos\n• Lectura de **sensores IoT** (proyecto AirSense CEFA)\n• Integración con plataformas de **IA Generativa**\n• Lógica de análisis y data processing\n\nEs uno de sus lenguajes más sólidos junto a PHP y JavaScript.`
  },

  // --- REACT ---
  {
    keywords: ['react', 'reactjs', 'jsx', 'frontend', 'interfaz', 'componentes', 'spa'],
    response: `⚛️ **Luis y React:**\n\nDesarrolló su portafolio y el proyecto **Fockus Kid** usando React.\n\nManeja:\n• Componentes funcionales y hooks (useState, useEffect)\n• Estilos con Tailwind CSS\n• Estructura de SPAs (Single Page Applications)\n• Integración de lógica con estado\n\n¡Este mismo portafolio está construido en React! 🚀`
  },

  // --- PHP ---
  {
    keywords: ['php', 'backend', 'servidor', 'server', 'api', 'web dinamica'],
    response: `🐘 **Luis y PHP:**\n\nUsó PHP como tecnología principal en **FactuWeb PRO**, donde implementó:\n\n• Lógica de **facturación fiscal** (simulando la DIAN)\n• Gestión de **stock en tiempo real**\n• Generación de **CUFE y códigos QR**\n• **Reportes financieros** automatizados\n\nEs su principal lenguaje de backend.`
  },

  // --- BASE DE DATOS ---
  {
    keywords: ['base de datos', 'mysql', 'sql', 'bd', 'datos', 'tablas', 'consultas', 'database'],
    response: `🗄️ **Luis y Bases de Datos:**\n\nTrabaja con **MySQL** y diseño de bases de datos relacionales.\n\nEn sus proyectos:\n• **FactuWeb PRO** — BD para facturación y stock\n• **Agristock** — BD para inventario agrícola\n• **Fockus Kid** — BD para usuarios y sesiones\n\nSabe hacer consultas SQL, diseñar esquemas y optimizar relaciones.`
  },

  // --- HTML / CSS ---
  {
    keywords: ['html', 'css', 'diseno', 'maquetacion', 'estilos', 'web', 'pagina web', 'tailwind'],
    response: `🎨 **Luis y HTML/CSS:**\n\n• **HTML5** semántico y accesible\n• **CSS3** con animaciones y diseño responsivo\n• **Tailwind CSS** (este portafolio lo usa)\n• Diseño **mobile-first** y adaptable\n\nSu portafolio personal es evidencia directa de su nivel en diseño web.`
  },

  // --- GIT / GITHUB ---
  {
    keywords: ['git', 'github', 'repositorio', 'codigo', 'repo', 'open source', 'control de versiones', 'commit'],
    response: `💻 **Luis en GitHub:**\n\n**github.com/ingdevelopers449**\n\nRepositorios disponibles:\n• FactuWeb PRO\n• Fockus Kind AI\n• AirSense CEFA\n• Agristock\n• Portafolio personal\n\nUsa Git para control de versiones en todos sus proyectos.`
  },

  // --- PROYECTOS (general) ---
  {
    keywords: ['proyecto', 'proyectos', 'trabajo', 'trabajos', 'que hizo', 'que ha hecho', 'portafolio', 'app', 'aplicacion', 'sistema', 'cuantos proyectos'],
    response: `📁 **Proyectos destacados de Luis (4 en total):**\n\n1. 🧾 **FactuWeb PRO** — Facturación electrónica DIAN *(PHP + MySQL)*\n2. 🧠 **Fockus Kid** — Plataforma IA para niños con TDAH *(React + IA)*\n3. 🌿 **AirSense CEFA** — Monitor de CO₂ con sensores *(Python)*\n4. 🌾 **Agristock** — Inventario agrícola *(Web + BD)*\n\n¿Quieres detalles de alguno? Escribe su nombre.`
  },

  // --- FACTURACION / FACTUWEB ---
  {
    keywords: ['factuweb', 'factura', 'facturacion', 'dian', 'cufe', 'qr', 'fiscal', 'electronica', 'tributario'],
    response: `🧾 **FactuWeb PRO**\n\nSistema de facturación electrónica que simula procesos reales de la DIAN colombiana.\n\n✅ Gestión de stock en tiempo real\n✅ Generación de facturas con CUFE y código QR\n✅ Reportes financieros exportables\n✅ Arquitectura fiscal escalable\n\n**Stack:** PHP, MySQL\n🔗 github.com/ingdevelopers449/factuwebpro_v1`
  },

  // --- FOCUS KID ---
  {
    keywords: ['focuskind', 'fockus', 'focus', 'nino', 'tdah', 'educacion', 'escolar', 'adaptativo', 'psicopedagogico', 'infancia', 'aprendizaje'],
    response: `🧠 **Fockus Kid**\n\nPlataforma web de estudio adaptativo para niños con TDAH, con enfoque clínico y psicopedagógico.\n\n✅ IA Generativa integrada para acompañar tareas\n✅ Interfaz amigable diseñada para niños\n✅ Metodología psicopedagógica validada\n\n**Stack:** React, IA Generativa\n🔗 github.com/ingdevelopers449/focuskind-ai`
  },

  // --- AIRSENSE ---
  {
    keywords: ['airsense', 'aire', 'co2', 'sensor', 'calidad', 'monitor', 'cefa', 'contaminacion', 'gas'],
    response: `🌿 **AirSense CEFA**\n\nSistema automatizado de monitoreo de calidad del aire — mide niveles de CO₂ con sensores físicos.\n\n✅ Scripts Python para lectura de sensores\n✅ Análisis de datos en tiempo real\n✅ En desarrollo activo\n\n**Stack:** Python, Sensores IoT, Data Analysis\n🔗 github.com/ingdevelopers449/airsensecefa`
  },

  // --- AGRISTOCK ---
  {
    keywords: ['agristock', 'agri', 'inventario', 'agricola', 'insumos', 'campo', 'granja', 'cultivo', 'tienda'],
    response: `🌾 **Agristock**\n\nSistema web de control y gestión de inventario para el sector agrícola colombiano.\n\n✅ Registro y control de insumos agrícolas\n✅ Base de datos relacional optimizada\n✅ Interfaz de gestión clara y funcional\n\n**Stack:** Desarrollo Web, MySQL\n🔗 github.com/ingdevelopers449/tienda-insumos`
  },

  // --- HABILIDADES BLANDAS ---
  {
    keywords: ['habilidad blanda', 'fortaleza', 'personalidad', 'equipo', 'trabajo en equipo', 'soft skill', 'comunicacion', 'liderazgo', 'actitud', 'valores'],
    response: `✨ **Habilidades de Luis más allá del código:**\n\n🧩 Resolución creativa de problemas\n🤝 Trabajo colaborativo en equipos técnicos\n📚 Aprendizaje autónomo y autodidacta\n💬 Comunicación técnica clara y efectiva\n🎯 Orientación a resultados y calidad\n🔄 Adaptabilidad a nuevas tecnologías\n⏱️ Gestión del tiempo y cumplimiento de entregas`
  },

  // --- CERTIFICACIONES ---
  {
    keywords: ['certificado', 'certificacion', 'titulo', 'fet', 'robotica', 'ia generativa', 'tecnico', 'logros', 'diploma', 'curso'],
    response: `🏅 **Certificaciones de Luis:**\n\n🤖 **Ingeniería de Software con IA Generativa** — FET Neiva *(2026)*\n⚙️ **Robótica Recreativa** — SENA Neiva *(2025)*\n🎓 **Técnico en Sistemas** — I.E. Atanasio Girardot *(2023)*\n💻 **Análisis y Desarrollo de Software** — SENA *(En curso, 2026)*`
  },

  // --- INTELIGENCIA ARTIFICIAL ---
  {
    keywords: ['inteligencia artificial', 'ia', 'machine learning', 'ml', 'chatgpt', 'gemini', 'openai', 'modelo', 'prompt'],
    response: `🤖 **Luis e Inteligencia Artificial:**\n\nTiene formación específica en IA gracias al curso de **Ingeniería de Software con IA Generativa** (FET, 2026).\n\nAplica la IA en sus proyectos:\n• **Fockus Kid** — IA generativa para tareas de niños\n• **AirSense** — Análisis de datos automatizado\n• **Flujo de trabajo** — Herramientas IA para optimizar código\n\nTambién domina el **prompting avanzado**.`
  },

  // --- METODOLOGÍAS ---
  {
    keywords: ['metodologia', 'agil', 'scrum', 'kanban', 'sprint', 'proceso', 'desarrollo agil'],
    response: `🔄 **Metodologías de Luis:**\n\n• **Desarrollo iterativo** — entrega por fases funcionales\n• **Git** — commits descriptivos y ramas de trabajo\n• **Documentación** de código y bases de datos\n• **Testing manual** y revisión de funcionalidades\n\nTiene bases de metodologías ágiles (Scrum, Kanban) de su formación SENA.`
  },

  // --- CONTACTO (general) ---
  {
    keywords: ['correo', 'email', 'gmail', 'mail', 'escribir', 'mensaje', 'contactar', 'contacto', 'comunicarse'],
    response: `📧 **Correo electrónico de Luis:**\n\n**pipelozada994@gmail.com**\n\nEscríbele para propuestas, colaboraciones, cotizaciones o preguntas. Responde en menos de **24 horas**.`
  },

  // --- TELÉFONO / WHATSAPP ---
  {
    keywords: ['telefono', 'celular', 'numero', 'llamar', 'whatsapp', 'wp', 'wasap', 'llamada', 'movil', 'cel', 'hablar'],
    response: `📱 **Teléfono / WhatsApp de Luis:**\n\n**317 1444 624** 🇨🇴\n\n• 📞 Llamada directa\n• 💬 WhatsApp (más rápido)\n\n¡El canal de respuesta más ágil!`
  },

  // --- LINKEDIN ---
  {
    keywords: ['linkedin', 'red profesional', 'red social', 'profesional', 'link'],
    response: `💼 **LinkedIn de Luis:**\n\nlinkedin.com/in/luis-felipe-lozada-bastidas-530b7538b/\n\nEn su perfil encontrarás experiencia completa, formación, habilidades y proyectos destacados.`
  },

  // --- UBICACIÓN ---
  {
    keywords: ['donde vive', 'ciudad', 'ubicacion', 'vive', 'neiva', 'colombia', 'huila', 'donde esta', 'pais', 'region'],
    response: `📍 **Ubicación de Luis:**\n\n**Neiva, Huila — Colombia** 🇨🇴\n\nDisponible para:\n• 🏠 Trabajo **100% remoto** (prioridad)\n• 🏢 Trabajo presencial en la región del Huila`
  },

  // --- DISPONIBILIDAD / TRABAJO ---
  {
    keywords: ['disponible', 'trabaja', 'trabajo', 'remoto', 'empleo', 'contratar', 'open to work', 'freelance', 'hire', 'oferta', 'oportunidad', 'pasantia', 'practica'],
    response: `✅ **Disponibilidad de Luis:**\n\nEstado actual: **Open to Work** 🟢\n\nAbierto a:\n🏠 Trabajo **100% remoto**\n💼 Proyectos freelance\n🤝 Colaboraciones técnicas\n📚 Prácticas profesionales SENA\n🌎 Empresas nacionales e internacionales\n\nContacto: pipelozada994@gmail.com | 317 1444 624`
  },

  // --- CV / HOJA DE VIDA ---
  {
    keywords: ['cv', 'curriculum', 'hoja de vida', 'descargar', 'resume', 'vitae'],
    response: `📄 **Curriculum Vitae de Luis:**\n\nDescárgalo desde la **barra de navegación** → botón **"Descargar CV"** (esquina superior derecha).\n\nIncluye:\n✅ Formación académica\n✅ Tecnologías y habilidades\n✅ Proyectos desarrollados\n✅ Certificaciones`
  },

  // --- PRECIO / TARIFA ---
  {
    keywords: ['cobra', 'precio', 'cuanto vale', 'tarifa', 'costo', 'presupuesto', 'cotizacion', 'cuanto cuesta', 'honorario'],
    response: `💰 **Tarifas de desarrollo:**\n\nLuis maneja **tarifas personalizadas** según:\n• Alcance y complejidad del proyecto\n• Tiempo estimado de desarrollo\n• Tecnologías requeridas\n\nCotización gratuita:\n📧 pipelozada994@gmail.com\n📱 317 1444 624`
  },

  // --- EXPERIENCIA / TRAYECTORIA ---
  {
    keywords: ['experiencia', 'anos', 'cuanto lleva', 'trayectoria', 'recorrido', 'historia', 'tiempo'],
    response: `📅 **Trayectoria de Luis:**\n\n🏫 **2023** — Técnico en Sistemas (I.E. Atanasio Girardot)\n💻 **2024** — Inicio ADSO SENA + primeros proyectos web\n🤖 **2025** — AirSense CEFA, Robótica Recreativa\n🚀 **2026** — IA Generativa (FET) + FactuWeb, FocusKind, Agristock + Portafolio`
  },

  // --- IDIOMAS ---
  {
    keywords: ['ingles', 'idioma', 'habla ingles', 'nivel ingles', 'english', 'bilingue'],
    response: `🌐 **Idiomas de Luis:**\n\n🇨🇴 **Español** — Nativo (nivel experto)\n🇺🇸 **Inglés** — Nivel básico-intermedio\n\nLee documentación técnica en inglés sin problemas (Stack Overflow, docs oficiales, GitHub).`
  },

  // --- HOBBIES / INTERESES ---
  {
    keywords: ['hobby', 'hobbies', 'gusta', 'intereses', 'pasion', 'tiempo libre', 'aficion', 'le gusta'],
    response: `🎮 **Intereses de Luis más allá del código:**\n\n• 🤖 Explorar nuevas herramientas de IA\n• 📖 Arquitectura de software y buenas prácticas\n• 🌐 Tendencias del mundo tech\n• ⚙️ Electrónica y robótica\n• 🎯 Desafíos de programación\n\n¡Es un apasionado genuino de la tecnología!`
  },

  // --- METAS / OBJETIVOS ---
  {
    keywords: ['meta', 'metas', 'objetivo', 'objetivos', 'futuro', 'plan', 'sueno', 'aspira', 'quiere ser', 'donde se ve'],
    response: `🚀 **Metas profesionales de Luis:**\n\n• Convertirse en **desarrollador Full-Stack senior**\n• Especializarse en **arquitecturas escalables**\n• Trabajar en empresas de **impacto internacional**\n• Profundizar en **IA aplicada al desarrollo**\n• Contribuir a proyectos **open source**\n\nEstá construyendo ese camino con cada proyecto.`
  },

  // --- SOBRE ESTE PORTAFOLIO ---
  {
    keywords: ['este portafolio', 'esta pagina', 'como hizo esto', 'quien hizo este', 'tecnologia del portafolio', 'como esta hecho'],
    response: `💡 **Sobre este portafolio:**\n\n⚛️ **React.js** — Framework principal\n🎨 **Tailwind CSS** — Estilos y diseño\n🖤 **Diseño dark mode** — Paleta zinc/Silicon Valley\n🤖 **Luis.bot** — Este chatbot con pattern matching\n☁️ **Vercel** — Hosting y deploy desde GitHub\n\n¡Todo hecho desde cero por Luis! 🚀`
  },

  // --- RECLUTADORES ---
  {
    keywords: ['reclutador', 'empresa', 'recruiter', 'hr', 'recursos humanos', 'vacante'],
    response: `🤝 **¡Hola, reclutador/a!**\n\nLuis está activamente buscando oportunidades.\n\n📄 **CV:** Botón "Descargar CV" en el menú superior\n💼 **LinkedIn:** linkedin.com/in/luis-felipe-lozada-bastidas-530b7538b/\n💻 **GitHub:** github.com/ingdevelopers449\n📧 **Email:** pipelozada994@gmail.com\n📱 **WhatsApp:** 317 1444 624\n\n✅ Disponible para trabajo **remoto inmediato**.`
  },

  // --- AYUDA ---
  {
    keywords: ['ayuda', 'help', 'opciones', 'que puedo preguntar', 'menu', 'temas', 'comandos', 'que sabes'],
    response: `🆘 **Temas disponibles en Luis.bot:**\n\n👤 Quién es Luis / Presentación\n🎓 Formación, carrera, estudios\n🛠️ Stack: Python, React, PHP, SQL, Git, HTML, CSS\n📁 Proyectos: FactuWeb, FocusKind, AirSense, Agristock\n🏅 Certificaciones y títulos\n🤖 Inteligencia Artificial\n📞 Teléfono y WhatsApp\n📧 Correo electrónico\n💼 LinkedIn\n💻 GitHub\n📍 Ubicación\n✅ Disponibilidad laboral\n📄 CV descargable\n💰 Tarifas\n🌐 Idiomas\n🎮 Hobbies\n🚀 Metas profesionales\n🤝 Info para reclutadores\n\n¡Escribe cualquier palabra clave!`
  },

  // --- ELOGIOS ---
  {
    keywords: ['genial', 'excelente', 'buenisimo', 'increible', 'perfecto', 'chevere', 'bien', 'bueno', 'me gusto', 'me gusta', 'cool', 'impresionante', 'wow'],
    response: `🙏 ¡Muchas gracias! Me alegra que te haya sido útil. 😊\n\nSi tienes más preguntas sobre Luis Lozada, aquí estaré. Escribe **ayuda** para ver todos los temas.`
  },

  // --- INSULTOS / MENSAJES NEGATIVOS ---
  {
    keywords: ['malo', 'feo', 'pesimo', 'terrible', 'inutil', 'no sirve', 'basura', 'tonto', 'estupido'],
    response: `😅 ¡Vaya! Parece que no te di la respuesta que esperabas.\n\nSoy un bot con reglas predefinidas, así que tengo limitaciones. Intenta ser más específico o escribe **ayuda** para ver los temas disponibles. 😊`
  },

  // --- DESPEDIDA ---
  {
    keywords: ['gracias', 'adios', 'bye', 'chao', 'hasta luego', 'nos vemos', 'ciao', 'listo', 'perfecto', 'hasta pronto', 'fue todo', 'nada mas'],
    response: `👋 **¡Hasta pronto!**\n\nFue un placer ayudarte. Si quieres contactar a Luis:\n\n📧 pipelozada994@gmail.com\n📱 317 1444 624\n💼 linkedin.com/in/luis-felipe-lozada-bastidas-530b7538b/\n\n¡Mucho éxito! 🚀`
  }
];

// ============================================================
// FUNCIÓN PRINCIPAL — Procesa el input del usuario
// ============================================================
export const getBotResponse = (input) => {
  const normalized = normalize(input);
  const words = normalized.split(/\s+/);

  // Buscar coincidencia en las reglas
  for (const rule of rules) {
    const match = rule.keywords.some(keyword => {
      const normalizedKeyword = normalize(keyword);
      if (normalizedKeyword.includes(' ')) {
        return normalized.includes(normalizedKeyword);
      }
      return words.includes(normalizedKeyword);
    });

    if (match) return rule.response;
  }

  // Respuesta de fallback si no hay coincidencia
  return `🤔 No entendí bien tu pregunta. Intenta con palabras clave como:\n\n*proyectos, python, react, php, contacto, formación, certificaciones, cv, disponibilidad, github...*\n\nO escribe **ayuda** para ver todos los temas disponibles.`;
};
