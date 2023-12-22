import React, { useCallback, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";

import clsx from "clsx";
import { useDarkMode } from "@/hook/useDarkModeHook";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { isMobile } from "react-device-detect";
import type { Container, Engine } from "@tsparticles/engine";
import { loadTextShape } from "@tsparticles/shape-text";
import { tsParticles } from "@tsparticles/engine";
const Particle = () => {
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadTextShape(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const [init, setInit] = useState(false);

  const particlesLoaded = async (container: any) => {
    await console.log(container);
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          // className="-z-10 "
          particlesLoaded={particlesLoaded}
          options={{
            name: "Chars",
            fpsLimit: 120,
            preset: "char",
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },

            particles: {
              color: {
                value: ["#ffffff", "#d4f0fc", "#89d6fb", "#02a9f7"],
              },

              move: {
                enable: true,
                speed: 1,
                direction: isDarkMode ? "bottom" : "top",
                straight: true,
                random: false,
              },
              links: {
                enable: false,
                distance: 50,
                color: {
                  value: "random",
                },
                opacity: 1,
                width: 1,
              },
              shape: {
                type: "char",
                options: {
                  char: [
                    {
                      value: ["0️", "1️"],
                      font: "Binary X CHR BRK",
                      // font: "arial",
                      style: " ",
                      weight: "100",
                      fill: true,
                    },
                  ],
                },
              },

              number: {
                density: {
                  enable: true,
                },
                value: 200,
              },
              opacity: {
                value: {
                  min: 0.4,
                  max: 0.7,
                },
              },
              size: {
                value: isMobile ? 8 : 14,
              },
            },
            fullScreen: {
              enable: true,
              zIndex: -1,
            },

            detectRetina: true,
          }}
        />
      )}
    </>
  );
};

export const Background = () => {
  return (
    <>
      <Particle />
    </>
  );
};
