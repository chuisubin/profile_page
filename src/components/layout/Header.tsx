import Image from "next/image";
import { DarkModeProvider, useDarkMode } from "@/hook/useDarkModeHook";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import SettingIcon from "@public/images/setting.svg";
import { useOnClickOutside } from "usehooks-ts";
import { useTranslation } from "@/i18n/client";
import { useLayout } from "@/hook/useLayoutHook";
import clsx from "clsx";
import Link from "next/link";
import { useParams } from "next/navigation";

import SunIcon from "@public/images/sun.svg";
import MoonIcon from "@public/images/moon.svg";

export const Header = () => {
  const menuRef = useRef(null);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { lng } = useParams();
  const { t } = useTranslation();
  const { currentScrollYProgress, scrollYProgress } = useLayout();
  const { isDarkMode, changeTheme } = useDarkMode();
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
        name: t("option.job"),
        onClick: () => onClickOption("#job"),
      },
      {
        name: t("option.project"),
        onClick: () => onClickOption("#project"),
      },
    ];
  }, [t]);

  const onClickOption = (id: string) => {
    const section = document.querySelector(id);
    section && section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleClickOutsideMenu = () => {
    setShowMenu(false);
  };
  useOnClickOutside(menuRef, handleClickOutsideMenu);

  const NavBtn = ({ label }: { label: string }) => {
    return (
      <div
        className={clsx(
          " cursor-pointer px-4 py-1 rounded-md text-white bg-transparent hover:bg-white hover:text-secondary-500",
          "dark:hover:bg-secondary-400 dark:hover:text-black"
        )}
      >
        {label}
      </div>
    );
  };
  return (
    <div className="fixed top-0 w-full z-50 ">
      <motion.nav
        className={clsx(
          "backdrop-blur z-50 relative  w-fit rounded-md  mx-auto mt-4 h-14 shadow-lg shadow-primary-700  dark:shadow-black opacity-90"
        )}
        style={{
          background: isDarkMode
            ? `linear-gradient(to left, #000 ,  #01303f ${
                currentScrollYProgress < 30 ? 30 : currentScrollYProgress
              }%  ,#02577a
                )`
            : `linear-gradient(to right, #02a9f7 ,  #02577a ${
                currentScrollYProgress < 30 ? 30 : currentScrollYProgress
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

          <button
            onClick={() => {
              changeTheme();
            }}
          >
            {isDarkMode ? (
              <SunIcon className={"w-6 h-6"} />
            ) : (
              <MoonIcon className={"w-6 h-6"} />
            )}
          </button>
        </div>
      </motion.nav>
    </div>
  );
};
