"use client";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  stagger,
  animate,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import {
  ReactComponentElement,
  ReactElement,
  Ref,
  useEffect,
  useRef,
  useState,
} from "react";
import { useParams } from "next/navigation";
import { TypeTextView } from "@/components/common/TypeTextView";
import data from "@data";
import { useTranslation } from "@/i18n/client";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import clsx from "clsx";
import { AboutMe } from "@/components/section/aboutMe";
import { Experience } from "@/components/section/experience";
import { Project } from "@/components/section/project";
import { useLayout } from "@/hook/useLayoutHook";
import { Home } from "@/components/section/home";

const SectionDiv = ({ children }: { children: ReactElement }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "-100px"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <motion.div
      ref={ref}
      className=" w-full  py-16  overflow-x-hidden   "
      style={{ scale: scaleProgess }}
    >
      {children}
    </motion.div>
  );
};

export const Landing = () => {
  // const { lng } = useParams();
  const { t } = useTranslation();
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  const onClickOption = (index: number) => {
    if (index == 0) {
      aboutRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (index == 1) {
      experienceRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (index == 2) {
      projectRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="  w-full  px-5 lg:px-20 ">
      <div className="  lg:container  xl:max-w-7xl mx-auto     relative  ">
        <motion.div className=" relative ">
          <SectionDiv>
            <SpotlightCard>
              <div className="">
                <Home onClickOption={onClickOption} />
              </div>
            </SpotlightCard>
          </SectionDiv>
        </motion.div>

        <div ref={aboutRef} id={"about"} className=" relative ">
          <SectionDiv>
            <SpotlightCard>
              <div>
                <AboutMe />
              </div>
            </SpotlightCard>
          </SectionDiv>
        </div>

        <div ref={projectRef} id={"project"}>
          <SectionDiv>
            <SpotlightCard>
              <div>
                <Project />
              </div>
            </SpotlightCard>
          </SectionDiv>
        </div>
        <div ref={experienceRef} id={"experience"} className=" ">
          <SectionDiv>
            <SpotlightCard>
              <div>
                <Experience />
              </div>{" "}
            </SpotlightCard>
          </SectionDiv>
        </div>
      </div>
    </div>
  );
};
