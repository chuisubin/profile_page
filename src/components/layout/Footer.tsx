import { useTranslation } from "@/i18n/client";
import { motion } from "framer-motion";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className=" w-full shadow-lg  p-10 ">
      <motion.div className=" footerText mx-auto  text-center lg:container    relative">
        {t("footer.copyRight")}
      </motion.div>
    </div>
  );
};
