import Image from "next/image";
import { DarkModeProvider, useDarkMode } from "@/hook/useDarkModeHook";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import SettingIcon from "@public/images/setting.svg";
import { useOnClickOutside } from "usehooks-ts";
import { Menu } from "./Menu";
import { OptionList } from "../pageView/landing/OptionList";
import { useTranslation } from "@/i18n/client";
import { useLayout } from "@/hook/useLayoutHook";
import clsx from "clsx";
import Link from "next/link";

export const Header = () => {
  const menuRef = useRef(null);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const { t } = useTranslation();
  const { currentScrollYProgress, scrollYProgress } = useLayout();

  const optionList = useMemo(() => {
    return [
      {
        name: "AboutMe",

        onClick: () => onClickOption("#about_me"),
      },
      {
        name: "Job",
        onClick: () => onClickOption("#job"),
      },
      {
        name: "Project",
        onClick: () => onClickOption("#project"),
      },
    ];
  }, []);

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
          "backdrop-blur z-50 relative  w-fit rounded-md  mx-auto mt-4 h-14 shadow-lg  shadow-black opacity-90"
        )}
        style={{
          background: `linear-gradient(to right, #000 ${currentScrollYProgress}%,  #01303f  ,#02577a)`,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="mx-auto h-full container flex flex-row items-center justify-center w-fit gap-2  px-4 ">
          <div className=" flex flex-row items-center  gap-2 ">
            <Link href="/">
              <NavBtn label="home" />
            </Link>
            {optionList.map((data, index) => {
              return (
                <motion.div key={index} onClick={data.onClick}>
                  <NavBtn label={data.name} />
                </motion.div>
              );
            })}
          </div>
          <motion.div className="   relative rounded-full   " ref={menuRef}>
            <motion.button
              className="p-1  w-8 h-8 rounded-full shadow-xl shadow-primary-500"
              style={{ rotate: Number(currentScrollYProgress) * 3.6 }}
              onClick={(e) => {
                e.preventDefault();
                setShowMenu(!showMenu);
              }}
              // whileHover={{ scale: 1.2 }}
            >
              <SettingIcon />
            </motion.button>

            {showMenu && <Menu />}
          </motion.div>
        </div>
      </motion.nav>
    </div>
  );
};
