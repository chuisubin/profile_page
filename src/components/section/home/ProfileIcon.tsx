import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import human from "@public/images/human.png";
import Typewriter from "typewriter-effect";
import clsx from "clsx";
import { useLayout } from "@/hook/useLayoutHook";
import homeProfile from "@public/images/profile/home_profile.jpeg";
export const ProfileIcon = () => {
  const { currentScrollYProgress, scrollYProgress } = useLayout();

  return (
    <div className="  w-full flex flex-col justify-center  items-start  relative mb-4">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%", left: 0 }}
        transition={{ duration: 2 }}
        className=" absolute top-1/2  left-0  bg-secondary-500  h-1"
      />
      <div className="rounded-full overflow-hidden w-24 h-24 lg:w-32 lg:h-32   relative  border-4  border-secondary-500  bg-white ">
        <Image
          alt={"Angus Chui"}
          title={"Angus Chui"}
          width={200}
          height={200}
          className=" object-cover object-center "
          src={homeProfile.src}
        />
      </div>
    </div>
  );
};
