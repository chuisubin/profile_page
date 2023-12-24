import { motion } from "framer-motion";

export const SpaceLine = () => {
  return (
    <motion.div
      whileInView={{ width: "80%" }}
      exit={{ width: "0%" }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="  h-1 bg-primary-700 dark:bg-white mx-auto my-4"
    />
  );
};
