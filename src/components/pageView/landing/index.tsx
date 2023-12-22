"use client";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  stagger,
  animate,
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
import { Experience } from "@/components/section/Experience";
import { Project } from "@/components/section/project";
import { useLayout } from "@/hook/useLayoutHook";
import { Home } from "@/components/section/Home";

const SectionDiv = ({ children }: { children: ReactElement }) => {
  return (
    <motion.div
      // initial={{ opacity: 0.8 }}
      // whileInView={{ opacity: 1 }}
      // exit={{ opacity: 0.8 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.8 }}
      className="relative w-full min-h-screen pt-16 lg:pt-20  overflow-x-hidden   "
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
  const contactRef = useRef<HTMLDivElement>(null);

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
    <div className=" relative w-full  px-4 lg:px-10 ">
      <div className="  container  mx-auto     relative  ">
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
