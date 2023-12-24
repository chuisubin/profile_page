import { motion } from "framer-motion";

export const SectionTitleView = ({ title }: { title: string }) => {
  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5 }}
      className="w-full mb-2"
    >
      <h1 className=" text-xl md:text-2xl lg:text-4xl whitespace-nowrap text-primary-700 dark:text-white">
        {title}
      </h1>
      <motion.div className=" bg-primary-700 dark:bg-white my-1 lg:my-2 h-1" />
    </motion.div>
  );
};
