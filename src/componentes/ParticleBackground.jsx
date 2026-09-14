import React, { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  // Inicialización del motor de partículas
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // loadFull incluye todas las features necesarias (líneas, repulsión, etc.)
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent", // Fondo transparente para que se mezcle con tu bg oscuro
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100, // Qué tanto se alejan las partículas del cursor
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#22d3ee", // Cian (haciendo match con tu cursor cyan-400)
        },
        links: {
          color: "#22d3ee",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80, // Cantidad de nodos (ajustar si afecta rendimiento)
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
      fullScreen: {
        enable: true,
        zIndex: 0 // Atrás de todo tu contenido
      }
    }),
    []
  );

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute inset-0 pointer-events-none" // Para que no bloquee los clics en la web
    />
  );
};

export default ParticleBackground;
