import { DarkModeProvider, useDarkMode } from "@/hook/useDarkModeHook";
import { useTranslation } from "@/i18n/client";
import SunnyIcon from "@public/images/day-sunny-icon.svg";
import MoonIcon from "@public/images/moon-line-icon.svg";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export const Menu = (props: {}) => {
  const { isDarkMode, changeTheme } = useDarkMode();
  const { t, i18n } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();

  // useEffect(() => {
  //   if (i18n.language === "zh-Hant" && pathname.includes("/en")) {
  //     router.replace("/zh-Hant");
  //   } else if (i18n.language === "en" && pathname.includes("/zh-Hant")) {
  //     router.replace("/en");
  //   }
  // }, [i18n.language]);

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      // exit={{scaleY:0}}
      transition={{ duration: 0.2 }}
      animate={{ height: "auto", opacity: 1 }}
      className="text-primary-700 dark:text-white bg-white/70 dark:bg-black/70  overflow-hidden absolute right-0   top-full  rounded-lg  "
    >
      <div className="w-full h-full absolute blur-lg   z-0" />

      <div className="flex flex-col   items-start z-10 px-4 gap-4 py-4">
        <motion.div
          className="flex flex-row justify-start  items-center  flex-nowrap gap-1"
          // initial={{ y: "100%", opacity: 0 }}
          // animate={{ y: 0, opacity: 1 }}
        >
          {/* <span className="whitespace-nowrap">{t("darkmode")}:</span> */}
          <motion.div
            className="    cursor-pointer transition-all z-10"
            onClick={() => {
              changeTheme();
            }}
            whileTap={{ scale: 0.8 }}
          >
            <span className=" whitespace-nowrap">
              {t("darkmode")} {isDarkMode ? t("off") : t("on")}
            </span>
          </motion.div>
        </motion.div>
        {/* <motion.div
          className="flex flex-row justify-start  items-center  flex-nowrap gap-1"
        >
          <motion.div
            className=" cursor-pointer transition-all flex flex-row items-center  flex-nowrap whitespace-nowrap z-10"
            whileTap={{ scale: 0.8 }}
            onClick={() => {
              i18n.changeLanguage(i18n.language === "en" ? "zh-Hant" : "en");
              const url = pathname.replace(
                i18n.language === "en" ? "/en" : "/zh-Hant",
                i18n.language === "en" ? "/zh-Hant" : "/en"
              );
              window.history.pushState("", "", url);
            }}
          >
            <span className=" whitespace-nowrap">
              {i18n.language === "en" ? "English" : "中文"}
            </span>
          </motion.div>
        </motion.div> */}
      </div>
    </motion.div>
  );
};
