import { useDarkMode } from "@/hook/useDarkModeHook";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const canvas = canvasRef.current;

    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let columns = Math.floor(width / 20);
    const characters = "01";
    const charArray = characters.split("");
    let drops: string[] | number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }
    let frameRate = 25;
    let lastFrameTime = Date.now();
    console.log("frameTime", lastFrameTime);

    const draw = () => {
      if (ctx) {
        ctx.fillStyle = "rgba(1,48,63,0.4)";
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = "rgba(137,214,251)";
        ctx.font = "15pt monospace";
      }

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx?.fillText(text, i * 20, (drops[i] as number) * 20);
        if ((drops[i] as number) * 20 > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        (drops[i] as number)++;
      }
    };
    const animate = () => {
      const currentTime = Date.now();
      const ellapsedTime = currentTime - lastFrameTime;
      if (ellapsedTime > 1500 / frameRate) {
        draw();
        lastFrameTime = currentTime;
      }
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      if (canvas) {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }

      columns = Math.floor(width / 20);
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = 1;
      }
    };
    const isMobileDevice = /Modi/i.test(navigator.userAgent);
    if (isMobileDevice) {
      window.addEventListener("resize", handleResize);
    }
    return () => {
      if (isMobileDevice) {
        window.addEventListener("resize", handleResize);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 -z-10 " />;
};
