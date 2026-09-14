import React, { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const init = async (engine) => {
    await loadFull(engine);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
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
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#22d3ee",
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
          value: 80,
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
        zIndex: 0
      }
    }),
    []
  );

  return (
    <ParticlesProvider init={init}>
      <Particles
        id="tsparticles"
        options={options}
        className="absolute inset-0 pointer-events-none"
      />
    </ParticlesProvider>
  );
};

export default ParticleBackground;
