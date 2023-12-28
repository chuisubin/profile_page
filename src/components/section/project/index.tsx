import { ProjectCard } from "@/components/common/ProjectCard";
import { SectionTitleView } from "@/components/common/SectionTitleView";
import { useTranslation } from "@/i18n/client";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { ProjectItem } from "./ProjectItem";
import data from "@data";
import { ProjectGallery } from "./ProjectGallery";
import clsx from "clsx";
import { useParams } from "next/navigation";
import { CustomDialog } from "@/components/common/CustomDialog";
import { XMarkIcon } from "@heroicons/react/24/solid";
export type ProjectItemType = {
  pjName: string;
  pjDescription: string;
  coverImageSrc: string;
  pjLink: string;
  images: {
    src: string;
    description: string;
  }[];
};

export const Project = () => {
  const { t } = useTranslation();
  const params = useParams();
  const projectList = data.getData(params.lng).project;
  const [showGallery, setShowGallery] = useState<ProjectItemType | null>(null);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = showGallery ? "hidden" : "auto";
    }
    return () => {
      if (html) {
        html.style.overflow = "auto";
      }
    };
  }, [showGallery]);

  return (
    <div className=" ">
      <div>
        <SectionTitleView title={t("project.title")} />
      </div>
      <div className=" ">
        <div className="max-w-4xl w-full mx-auto  flex flex-col  gap-10 py-8  ">
          {projectList.map((project, index) => {
            return (
              <div key={index} className=" w-full  ">
                {project && (
                  <ProjectItem
                    project={project}
                    clickDetail={() => setShowGallery(project)}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <motion.div
        className={clsx(
          "bg-black/80 fixed top-0 bottom-0 left-0 right-0   items-center justify-center hidden "
        )}
        animate={{
          opacity: showGallery ? 1 : 0,
          zIndex: showGallery ? 50 : 0,
          display: showGallery ? "flex" : "none",
        }}
      >
        <button
          className="text-white z-10 absolute right-10 top-10 cursor-pointer active:scale-95 p-1 hover:scale-110  rounded-full hover:border transition-all"
          onClick={() => setShowGallery(null)}
        >
          <XMarkIcon className=" w-6 h-6 lg:w-10 lg:h-10 " />
        </button>
        <div className=" relative w-full h-full ">
          {showGallery && <ProjectGallery project={showGallery} />}
        </div>
      </motion.div>
    </div>
  );
};
