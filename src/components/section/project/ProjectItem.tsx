"use client";
import { ProjectCard } from "@/components/common/ProjectCard";
import { motion } from "framer-motion";
import { ProjectItemType } from "./index";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { useTranslation } from "@/i18n/client";

export const ProjectItem = ({
  project,
  clickDetail,
}: {
  project: ProjectItemType;
  clickDetail: () => void;
}) => {
  const [hover, setHover] = useState(false);
  const { t } = useTranslation();

  const MoreBtn = ({ customClassName = "" }: { customClassName?: string }) => {
    return (
      <motion.button
        className={clsx(
          "text-base lg:text-lg rounded-md border  px-4 py-1 ",
          customClassName
        )}
        onClick={clickDetail}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {t("project.more")}
      </motion.button>
    );
  };
  return (
    <>
      <div className=" lg:hidden mb-2">
        <span className="text-xl  text-center text-primary-700 dark:text-white">
          {project?.pjName}
        </span>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ once: true }}
        animate={{ opacity: 1 }}
        className="w-full h-full "
        onHoverStart={() => {
          setHover(true);
        }}
        onHoverEnd={() => {
          setHover(false);
        }}
      >
        <ProjectCard>
          <div className=" relative z-10">
            <div className="   relative w-full h-full aspect-video  overflow-hidden">
              <Image
                className={clsx(
                  " object-cover object-center w-full h-auto  z-10 transition-all",
                  hover && "scale-110"
                )}
                src={project.coverImageSrc}
                alt={project?.pjName ?? ""}
                fill
              />
            </div>

            <motion.div
              className="hidden lg:flex  z-10 absolute top-0 bottom-0 right-0 left-0 bg-black/40  items-center justify-center "
              animate={{ opacity: hover ? 1 : 0 }}
            >
              <div className=" flex flex-col gap-2 items-center justify-center bg-black/70 p-10  rounded-md">
                <div className=" relative  pb-1 w-full">
                  <span className="font-bold text-2xl ">{project.pjName}</span>

                  <motion.div
                    className="absolute h-1 bg-white left-0  bottom-0 "
                    animate={{
                      width: hover ? "100%" : "0%",
                    }}
                  />
                </div>

                <div className=" whitespace-normal break-words text-base lg:text-lg">
                  {project.pjDescription}
                </div>
                <MoreBtn />
              </div>
            </motion.div>
          </div>
        </ProjectCard>
      </motion.div>
      <div className="flex flex-col  lg:hidden gap-2 mt-2 text-primary-700 dark:text-white">
        <div className=" mb-2">{project.pjDescription}</div>
        <MoreBtn customClassName={"dark:border-white border-primary-700"} />
      </div>
    </>
  );
};
