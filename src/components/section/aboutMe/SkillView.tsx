import { useTranslation } from "@/i18n/client";
import data from "@data";
import { useParams } from "next/navigation";
import Image from "next/image";
import { SkillBall } from "./SkillBall";
import { useState } from "react";

import { ListBulletIcon, CubeIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
export const skillSetData = [
  "React",
  "NextJs",
  "React Native",
  "VueJs",
  "NodeJs",
  "Java",
  "Tailwind",
  "HTML5",
  "CSS3",
  "Firebase",
  "Javascript",
  "Typescript",
  "NextJs",
  "Vuex",
  "Redux",
  "MySQL",
  "Github",
  "GraphQL",
  "Expo",
  "Material UI",
  "Bootstrap",
  "Strapi",
  "Android",
  "JQuery",
];
export const SkillView = () => {
  const { t } = useTranslation();

  const { lng, params } = useParams();

  // const skillSetData = data.getData(lng).skillSet;

  const [showBall, setShowBall] = useState(true);
  return (
    <div className=" ">
      <div className=" flex flex-row items-center justify-center gap-4 mb-2">
        <h1 className="  text-lg md:text-xl lg:text-3xl font-bold text-center">
          {t("aboutMe.mySkills")}
        </h1>
        <button
          onClick={() => setShowBall(!showBall)}
          className={clsx(
            "transition-all hover:bg-white  dark:hover:bg-secondary-500 p-2 ",
            showBall ? "rounded-lg" : " rounded-full"
          )}
        >
          {showBall ? (
            <ListBulletIcon className="w-6 h-6" title={t("aboutMe.list")} />
          ) : (
            <CubeIcon className="w-6 h-6" title={t("aboutMe.ball")} />
          )}
        </button>
      </div>
      <AnimatePresence>
        <motion.div
          className={clsx("mx-auto lg:w-[30rem]  md:w-[25rem] w-full")}
          animate={{ height: showBall ? "auto" : "100%" }}
        >
          {showBall ? (
            <motion.div
              className={clsx(
                "w-full border-4 hover:shadow-2xl rounded-full border-primary-700 dark:border-white  hover:dark:border-secondary-500 hover:border-primary-500  overflow-hidden "
              )}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div className="cursor-grab aspect-square bg-white/60 dark:bg-black/60 w-full h-full flex flex-row items-center justify-center">
                <SkillBall />
              </motion.div>
            </motion.div>
          ) : (
            <div className="h-fit w-full flex flex-row flex-wrap justify-center gap-2 lg:gap-4  ">
              {skillSetData.map((item, index) => {
                return (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className=" text-base lg:text-lg text-primary-700  dark:text-white  px-1 lg:px-2"
                    key={index}
                  >
                    {item}
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
