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
// BASE DE CONOCIMIENTO — Todas las reglas del bot
// ============================================================
export const rules = [

  // --- SALUDOS ---
  {
    keywords: ['hola', 'hey', 'buenas', 'saludos', 'buen dia', 'buenos dias', 'buenas tardes', 'buenas noches', 'hi', 'hello'],
    response: `👋 ¡Hola! Soy **Luis.bot**, el asistente virtual de Luis Felipe Lozada.\n\nPuedes preguntarme sobre:\n• 💻 **Proyectos** desarrollados\n• 🛠️ **Tecnologías** que maneja\n• 🎓 **Formación** y certificaciones\n• 📞 **Contacto** y disponibilidad\n• 📄 **Curriculum vitae**\n\n¿Qué te gustaría saber?`
  },

  // --- IDENTIDAD DEL BOT ---
  {
    keywords: ['quien eres', 'que eres', 'eres un bot', 'eres ia', 'robot', 'asistente'],
    response: `🤖 Soy **Luis.bot**, un asistente virtual programado con reglas para responder preguntas sobre el portafolio de Luis Felipe Lozada.\n\nNo uso inteligencia artificial — respondo con sentencias predefinidas. ¡Pero intento ser muy útil! 😄`
  },

  // --- NOMBRE / QUIÉN ES LUIS ---
  {
    keywords: ['quien es luis', 'quien es', 'presentate', 'habla de luis', 'dime sobre luis', 'info de luis'],
    response: `👨‍💻 **Luis Felipe Lozada Bastidas** es un desarrollador de software en formación, oriundo de **Neiva, Colombia**.\n\nEs **Técnico en Sistemas** y actualmente cursa **Análisis y Desarrollo de Software** en el SENA. Se especializa en arquitecturas escalables, lógica de negocio y desarrollo web con Python, React y PHP.`
  },

  // --- FORMACIÓN / ESTUDIOS ---
  {
    keywords: ['estudia', 'estudios', 'carrera', 'formacion', 'sena', 'universidad', 'colegio', 'donde estudia', 'que estudia'],
    response: `🎓 **Formación de Luis:**\n\n📘 **Análisis y Desarrollo de Software** — SENA, Neiva *(En curso, 2026)*\n🏫 **Técnico en Sistemas** — I.E. Atanasio Girardot, 2023\n🤖 **IA Generativa en Ingeniería de Software** — FET Neiva, 2026\n⚙️ **Robótica Recreativa** — SENA, Neiva`
  },

  // --- TECNOLOGÍAS / STACK ---
  {
    keywords: ['tecnologia', 'tecnologias', 'stack', 'lenguaje', 'lenguajes', 'sabe', 'maneja', 'conoce', 'habilidades tecnicas', 'programacion'],
    response: `🛠️ **Stack tecnológico de Luis:**\n\n**Frontend:** React.js, HTML5, CSS3, JavaScript\n**Backend:** PHP, Python\n**Bases de datos:** MySQL, gestión de datos\n**Herramientas:** Git, GitHub, IA Generativa\n**Enfoque:** Arquitectura escalable, lógica de negocio`
  },

  // --- PROYECTOS (general) ---
  {
    keywords: ['proyecto', 'proyectos', 'trabajo', 'trabajos', 'desarrollo', 'que hizo', 'que ha hecho', 'portafolio'],
    response: `📁 **Proyectos destacados de Luis:**\n\n1. **FactuWeb PRO** — Sistema de facturación electrónica con DIAN, CUFE y QR *(PHP + MySQL)*\n2. **Fockus Kid** — Plataforma de estudio con IA para niños con TDAH *(React + IA)*\n3. **AirSense CEFA** — Monitor de CO₂ y calidad del aire con sensores *(Python)*\n4. **Agristock** — Control de inventario para el sector agrícola *(Web + Base de Datos)*\n\n¿Quieres detalles de alguno en específico?`
  },

  // --- FACTURACION / FACTU WEB ---
  {
    keywords: ['factuweb', 'factura', 'facturacion', 'dian', 'cufe', 'qr', 'fiscal'],
    response: `🧾 **FactuWeb PRO**\n\nSistema de facturación electrónica que simula procesos reales de la DIAN colombiana.\n\n✅ Gestión de stock en tiempo real\n✅ Generación de facturas con CUFE y código QR\n✅ Reportes financieros\n\n**Stack:** PHP, MySQL, Arquitectura Fiscal\n🔗 GitHub: github.com/ingdevelopers449/factuwebpro_v1`
  },

  // --- FOCUS KID ---
  {
    keywords: ['focuskind', 'fockus', 'focus', 'nino', 'tdah', 'educacion', 'escolar', 'adaptativo'],
    response: `🧠 **Fockus Kid**\n\nPlataforma web de estudio adaptativo para niños con TDAH, con enfoque clínico y psicopedagógico.\n\n✅ Integración de IA Generativa para acompañar tareas\n✅ Interfaz amigable y adaptada\n✅ Metodología psicopedagógica validada\n\n**Stack:** React, IA Generativa\n🔗 GitHub: github.com/ingdevelopers449/focuskind-ai`
  },

  // --- AIRSENSE ---
  {
    keywords: ['airsense', 'aire', 'co2', 'sensor', 'calidad', 'monitor', 'cefa'],
    response: `🌿 **AirSense CEFA**\n\nSistema automatizado de monitoreo de niveles de CO₂ y calidad del aire mediante sensores físicos.\n\n✅ Scripts en Python para lectura de sensores\n✅ Análisis de datos en tiempo real\n✅ En desarrollo activo\n\n**Stack:** Python, Sensores, Data Analysis\n🔗 GitHub: github.com/ingdevelopers449/airsensecefa`
  },

  // --- AGRISTOCK ---
  {
    keywords: ['agristock', 'agri', 'inventario', 'agricola', 'insumos', 'campo'],
    response: `🌾 **Agristock**\n\nSistema de control y gestión de inventario especializado para el sector agrícola.\n\n✅ Registro y control de insumos\n✅ Base de datos estructurada\n✅ Interfaz de gestión clara\n\n**Stack:** Desarrollo Web, Base de Datos, Gestión\n🔗 GitHub: github.com/ingdevelopers449/tienda-insumos`
  },

  // --- HABILIDADES BLANDAS ---
  {
    keywords: ['habilidad blanda', 'fortaleza', 'personalidad', 'equipo', 'trabajo en equipo', 'soft skill'],
    response: `✨ **Habilidades de Luis más allá del código:**\n\n🧩 Resolución creativa de problemas\n🤝 Trabajo colaborativo en equipos técnicos\n📚 Aprendizaje autónomo continuo\n💬 Comunicación técnica clara\n🎯 Orientación a resultados y calidad de entrega`
  },

  // --- CERTIFICACIONES ---
  {
    keywords: ['certificado', 'certificacion', 'titulo', 'fet', 'robotica', 'ia generativa', 'tecnico', 'logros'],
    response: `🏅 **Certificaciones de Luis:**\n\n🤖 **Ingeniería de Software con IA Generativa** — FET Neiva *(2026)*\n⚙️ **Robótica Recreativa** — SENA Neiva\n🎓 **Técnico en Sistemas** — I.E. Atanasio Girardot *(2023)*\n💻 **Análisis y Desarrollo de Software** — SENA *(En curso)*`
  },

  // --- CONTACTO EMAIL ---
  {
    keywords: ['correo', 'email', 'gmail', 'mail', 'escribir', 'mensaje'],
    response: `📧 **Correo electrónico de Luis:**\n\n**pipelozada994@gmail.com**\n\nPuedes escribirle directamente a ese correo para propuestas, colaboraciones o cualquier consulta. Suele responder en menos de 24 horas.`
  },

  // --- CONTACTO TELÉFONO / WHATSAPP ---
  {
    keywords: ['telefono', 'celular', 'numero', 'llamar', 'whatsapp', 'wp', 'wasap', 'llamada'],
    response: `📱 **Teléfono / WhatsApp de Luis:**\n\n**317 1444 624** 🇨🇴\n\nPuedes contactarlo por llamada o mensaje de WhatsApp. ¡Es el canal más rápido para respuesta!`
  },

  // --- LINKEDIN ---
  {
    keywords: ['linkedin', 'red profesional', 'perfil', 'red social', 'profesional'],
    response: `💼 **LinkedIn de Luis:**\n\nlinkedin.com/in/luis-felipe-lozada-bastidas-530b7538b/\n\nEn su perfil encontrarás su experiencia completa, formación y proyectos destacados.`
  },

  // --- GITHUB ---
  {
    keywords: ['github', 'repositorio', 'codigo', 'repo', 'open source'],
    response: `💻 **GitHub de Luis:**\n\n**github.com/ingdevelopers449**\n\nAhí encontrarás todos sus proyectos con el código fuente: FactuWeb, Fockus Kid, AirSense CEFA, Agristock y más.`
  },

  // --- UBICACIÓN ---
  {
    keywords: ['donde vive', 'ciudad', 'ubicacion', 'vive', 'neiva', 'colombia', 'huila', 'donde esta'],
    response: `📍 **Ubicación de Luis:**\n\n**Neiva, Huila — Colombia** 🇨🇴\n\nActualmente disponible para trabajo **remoto** (100%) y presencial en la región del Huila.`
  },

  // --- DISPONIBILIDAD / TRABAJO ---
  {
    keywords: ['disponible', 'trabaja', 'trabajo', 'remoto', 'empleo', 'contratar', 'open to work', 'freelance', 'hire'],
    response: `✅ **Disponibilidad de Luis:**\n\nActualmente está **Open to Work** y disponible para:\n\n🏠 Trabajo **100% remoto**\n💼 Contratos de desarrollo por proyecto\n🤝 Colaboraciones y freelance\n📚 Prácticas profesionales (SENA)\n\nPara propuestas, escríbele a: pipelozada994@gmail.com`
  },

  // --- CV / HOJA DE VIDA ---
  {
    keywords: ['cv', 'curriculum', 'hoja de vida', 'descargar', 'resume'],
    response: `📄 **Curriculum Vitae de Luis:**\n\nPuedes descargar su CV directamente desde la barra de navegación superior → botón **"Descargar CV"**.\n\nEl CV incluye su formación, tecnologías, proyectos y certificaciones.`
  },

  // --- PRECIO / TARIFA ---
  {
    keywords: ['cobra', 'precio', 'cuanto vale', 'tarifa', 'costo', 'presupuesto', 'cotizacion'],
    response: `💰 **Tarifas de desarrollo:**\n\nLuis maneja tarifas personalizadas según el alcance y complejidad del proyecto.\n\nPara obtener una cotización, contáctalo directamente:\n📧 pipelozada994@gmail.com\n📱 317 1444 624\n\n¡Responde propuestas con gusto!`
  },

  // --- EXPERIENCIA ---
  {
    keywords: ['experiencia', 'anos', 'cuanto lleva', 'trayectoria', 'recorrido', 'historia'],
    response: `📅 **Trayectoria de Luis:**\n\n🏫 **2023** — Título Técnico en Sistemas (I.E. Atanasio Girardot)\n💻 **2024** — Inicio de formación en Análisis y Desarrollo de Software (SENA)\n🤖 **2025** — Desarrollo de AirSense CEFA y Robótica Recreativa\n🚀 **2026** — Certificación IA Generativa (FET) + Proyectos FactuWeb, FocusKind y Agristock`
  },

  // --- AYUDA ---
  {
    keywords: ['ayuda', 'help', 'opciones', 'que puedo preguntar', 'menu', 'temas'],
    response: `🆘 **Temas sobre los que puedo informarte:**\n\n👤 Quién es Luis\n🎓 Formación y estudios\n🛠️ Tecnologías y Stack\n📁 Proyectos (FactuWeb, FocusKind, AirSense, Agristock)\n🏅 Certificaciones\n📞 Teléfono y WhatsApp\n📧 Correo electrónico\n💼 LinkedIn y GitHub\n📍 Ubicación\n✅ Disponibilidad laboral\n📄 Descargar CV\n💰 Tarifas\n\nEscribe cualquier palabra relacionada ¡y te respondo!`
  },

  // --- DESPEDIDA ---
  {
    keywords: ['gracias', 'adios', 'bye', 'chao', 'hasta luego', 'nos vemos', 'ciao', 'ok', 'listo', 'perfecto'],
    response: `👋 **¡Hasta luego!**\n\nFue un placer ayudarte. Si necesitas más información sobre Luis Lozada, aquí estaré.\n\nNo dudes en contactarlo directamente:\n📧 pipelozada994@gmail.com\n📱 317 1444 624`
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
      // Coincide si el keyword es una frase (múltiples palabras) o una sola palabra
      if (normalizedKeyword.includes(' ')) {
        return normalized.includes(normalizedKeyword);
      }
      return words.includes(normalizedKeyword);
    });

    if (match) return rule.response;
  }

  // Respuesta de fallback si no hay coincidencia
  return `🤔 No entendí bien tu pregunta. Intenta con palabras clave como:\n\n*proyectos, tecnologías, contacto, formación, certificaciones, CV, disponibilidad, GitHub...*\n\nO escribe **ayuda** para ver todos los temas disponibles.`;
};
