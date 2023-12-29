import {
  useMotionValue,
  motion,
  useMotionTemplate,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useState, MouseEvent } from "react";
import clsx from "clsx";
import { useDarkMode } from "@/hook/useDarkModeHook";

export const SpotlightCard = (props: { children: React.ReactNode }) => {
  const { children } = props;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { isDarkMode } = useDarkMode();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {}, []);

  const mouseMoveHandle = ({ clientX, clientY, currentTarget }: MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();

    const xPosition = clientX - left;
    const yPosition = clientY - top;

    mouseX.set(xPosition);
    mouseY.set(yPosition);
  };

  return (
    <div
      className="relative  group   bg-white/30 dark:bg-black/50 shadow rounded-md   "
      onMouseMove={mouseMoveHandle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute  backdrop-blur rounded-md w-full h-full " />
      {/* <div  className="spotlight-shadow"/> */}

      <motion.div
        className={clsx(
          "top-0 bottom-0 right-0 left-0  absolute  pointer-events-none  rounded-md  ",
          "group-hover:opacity-100 opacity-0 "
        )}
        style={{
          background: isDarkMode
            ? useMotionTemplate`radial-gradient(circle at ${mouseX}px ${mouseY}px, rgb(2,87,122,0.5),transparent 50%) `
            : useMotionTemplate`radial-gradient(circle at ${mouseX}px ${mouseY}px, rgb(212,240,252,0.5),transparent 50%) `,
        }}
      />

      <div className=" p-4 lg:p-10 relative w-full h-full ">{children}</div>
    </div>
  );
};
