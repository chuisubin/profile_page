import { ProjectCard } from "@/components/common/ProjectCard";
import { SectionTitleView } from "@/components/common/SectionTitleView";
import { useTranslation } from "@/i18n/client";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { ProjectItem } from "./ProjectItem";

import AntidrugHomepage from "@public/images/project/antidrug/antidrug-home.png";

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

  const projectList = useMemo<ProjectItemType[]>(() => {
    return [
      {
        pjName: "Anti-drug Game",
        pjDescription: "",
        coverImageSrc: AntidrugHomepage.src,
        pjLink: "https://www.yds-antidrugsgame.com/",
        images: [
          {
            src: "",
            description: "",
          },
        ],
      },
      // {
      //   pjName: "Cooltech Website",
      //   pjDescription: "",
      //   coverImageSrc: "",
      //   pjLink: "https://www.yds-antidrugsgame.com/",
      //   images: [
      //     {
      //       src: "",
      //       description: "",
      //     },
      //   ],
      // },
    ];
  }, []);

  return (
    <div>
      <div>
        <SectionTitleView title={t("project.title")} />
      </div>
      <div className=" flex flex-col  gap-4 ">
        <div className="max-w-3xl w-full mx-auto ">
          {projectList.map((project, index) => {
            return (
              <div key={index} className=" w-full  ">
                <ProjectItem project={project} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
