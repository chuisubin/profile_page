import { ProjectCard } from "@/components/common/ProjectCard";
import { motion } from "framer-motion";
import { ProjectItemType } from ".";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

export const ProjectItem = ({ project }: { project: ProjectItemType }) => {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      viewport={{ once: true, amount: 0.8 }}
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
              alt={project.pjName}
              fill
            />
          </div>
          <motion.div
            className="z-10 absolute top-0 bottom-0 right-0 left-0 bg-black/30  "
            animate={{ opacity: hover ? 1 : 0 }}
          >
            <div className="h-full flex flex-col gap-2 items-center justify-center">
              <h1 className=" relative font-bold text-lg  lg:text-2xl bg-black/30 p-2">
                {project.pjName}

                <motion.div
                  className="absolute h-1 bg-white left-0 right-0 bottom-0 "
                  animate={{
                    width: hover ? "100%" : "0%",
                  }}
                />
              </h1>

              <div>{project.pjDescription}</div>
              <button>MORE</button>
            </div>
          </motion.div>
        </div>
      </ProjectCard>
    </motion.div>
  );
};
