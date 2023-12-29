import Image from "next/image";
import { DarkModeProvider, useDarkMode } from "@/hook/useDarkModeHook";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { useTranslation } from "@/i18n/client";
import { useLayout } from "@/hook/useLayoutHook";
import clsx from "clsx";
import Link from "next/link";
import { useParams } from "next/navigation";

import SunIcon from "@public/images/common/sun.svg";
import MoonIcon from "@public/images/common/moon.svg";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
export const Header = () => {
  const { lng } = useParams();
  const { t } = useTranslation();
  const menuRef = useRef(null);
  const { currentScrollYProgress, scrollYProgress } = useLayout();
  const { isDarkMode, changeTheme } = useDarkMode();

  const [openMenu, setOpenMenu] = useState(false);

  useOnClickOutside(menuRef, () => {
    setOpenMenu(false);
  });

  const optionList = useMemo(() => {
    return [
      {
        name: t("option.home"),
        onClick: () => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        },
      },
      {
        name: t("option.about"),
        onClick: () => onClickOption("#about"),
      },
      {
        name: t("option.project"),
        onClick: () => onClickOption("#project"),
      },
      {
        name: t("option.experience"),
        onClick: () => onClickOption("#experience"),
      },
    ];
  }, [t]);

  const onClickOption = (id: string) => {
    const section = document.querySelector(id);
    section && section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const NavBtn = ({ label }: { label: string }) => {
    const [hover, setHover] = useState(false);
    return (
      <motion.div
        className={clsx(
          " relative  cursor-pointer px-4 py-1 rounded-tr-md rounded-tl-md  text-white bg-transparent  "
        )}
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
      >
        <motion.div
          className="h-1 absolute left-0 right-0 mx-auto -bottom-1 w-0 dark:bg-secondary-400 bg-secondary-500"
          animate={{ width: hover ? "100%" : "0%" }}
        />
        <span className=" ">{label}</span>
      </motion.div>
    );
  };

  const SetThemeBtn = () => {
    return (
      <button
        onClick={() => {
          changeTheme();
        }}
        className=" hover:bg-white  hover:dark:bg-secondary-400  transition-all rounded-md p-1"
      >
        {isDarkMode ? (
          <SunIcon className={"w-6 h-6 text-white hover:text-black"} />
        ) : (
          <MoonIcon className={"w-6 h-6 text-white hover:text-secondary-500"} />
        )}
      </button>
    );
  };

  return (
    <div className="  relative z-auto">
      <motion.nav className="fixed  z-20 top-4  left-1/2 right-1/2 w-0   hidden lg:flex justify-center ">
        <motion.div
          className={clsx(
            "z-20   w-fit rounded-md  mx-auto  h-14 shadow-md shadow-black   opacity-80 hover:opacity-100 transition-colors"
          )}
          style={{
            background: isDarkMode
              ? `linear-gradient(to left, #000 ,  #01303f ${
                  currentScrollYProgress < 20 ? 20 : currentScrollYProgress
                }%  ,#02577a
                )`
              : `linear-gradient(to right, #02a9f7,  #02577a ${
                  currentScrollYProgress < 20 ? 20 : currentScrollYProgress
                }%  ,#01303f  )`,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="mx-auto h-full container flex flex-row items-center justify-center w-fit gap-2  px-4 ">
            <div className=" flex flex-row items-center  gap-2 ">
              {optionList.map((data, index) => {
                return (
                  <motion.div key={index} onClick={data.onClick}>
                    <NavBtn label={data.name} />
                  </motion.div>
                );
              })}
            </div>
            <SetThemeBtn />
          </div>
        </motion.div>
      </motion.nav>
      <div className=" lg:hidden">
        <button
          className="z-20 bg-secondary-500 p-1 w-8 h-8 rounded-lg fixed top-4 left-4 dark:bg-secondary-400 "
          onClick={() => setOpenMenu(true)}
        >
          <Bars3Icon
            className="text-white
              dark:text-black"
          />
        </button>

        <motion.div
          initial={{ opacity: 0, width: "0vw" }}
          animate={{
            opacity: openMenu ? 1 : 0.5,
            width: openMenu ? ["0vw", "80vw"] : "0vw",
          }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0, width: "0vw" }}
          className={clsx(
            " border-primary-700 shadow-lg fixed top-0 left-0 max-w-xs min-h-screen overflow-x-hidden  z-50  overflow-y-auto  bg-gradient-to-b to-primary-700 via-primary-600  from-primary-500  ",
            "dark:from-primary-700 dark:to-black"
          )}
          ref={menuRef}
        >
          <div className="z-50 flex flex-col gap-2   relative">
            <div className="p-4 flex flex-row items-center justify-between">
              <SetThemeBtn />

              <XMarkIcon
                className="text-white w-6 h-6  cursor-pointer
               dark:text-white"
                onClick={() => setOpenMenu(false)}
              />
            </div>
            {optionList.map((data, index) => {
              return (
                <motion.div
                  key={index}
                  onClick={() => {
                    data.onClick();
                    setOpenMenu(false);
                  }}
                  initial={{ opacity: 0, x: 80, y: 80 }}
                  animate={{
                    opacity: openMenu ? 1 : 0,
                    x: openMenu ? 0 : 80,
                    y: openMenu ? 0 : 80,
                  }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="text-white p-4">{data.name}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
