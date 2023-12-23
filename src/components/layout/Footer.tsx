import { useTranslation } from "@/i18n/client";
import { motion } from "framer-motion";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className=" w-full shadow-lg  p-10 ">
      <motion.div className="mx-auto  text-center lg:container  text-white/80 dark:text-white/50 text-sm lg:text-base  relative">
        {t("footer.copyRight")}
      </motion.div>
    </div>
  );
};
