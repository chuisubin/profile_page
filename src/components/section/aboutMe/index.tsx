import { motion } from "framer-motion";
import { NumberCard } from "./NumberCard";
import { useMemo, useState } from "react";
import { useTranslation } from "@/i18n/client";
import { CustomDialog } from "@/components/common/CustomDialog";
import { SkillGame } from "../skillGame";
import Link from "next/link";
import { useParams } from "next/navigation";
import data from "@data";
import Image from "next/image";
import { SkillView } from "./SkillView";
import { InfoView } from "./InfoView";
import { SectionTitleView } from "@/components/common/SectionTitleView";
import { Infomation } from "./Information";

export const AboutMe = () => {
  const { t } = useTranslation();
  const { lng, params } = useParams();

  const [openModal, setOpenModal] = useState(false);

  const numberCardData = useMemo(() => {
    return [
      {
        number: 30,
        label: "year old",
      },
      {
        number: 4,
        label: "expensive year",
      },
    ];
  }, []);

  const intro = useMemo(() => {
    return `Hello, my name is Angus Chui, and I'm a senior front-end developer with 4 years of experience.\n 
I'm enjoy about building apps and website, I graduated from Huaqiao University in Xiamen with a Bachelor of Engineering degree in Software Engineering.\n
I prioritize user experience in my development work and I value collaboration and aim to foster a harmonious and friendly atmosphere.\n
Outside of work, I enjoy staying active through sports and have a keen interest in music and movies.`;
  }, []);

  return (
    <>
      <div className=" relative ">
        <motion.div
          // initial={{ scale: 0.8 }}
          // whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className=" relative flex flex-col justify-center items-center text-primary-700 dark:text-white"
        >
          <SectionTitleView title={t("aboutMe.title")} />

          <div className="flex flex-col  ">
            <div className=" flex flex-row flex-wrap  mb-4 ">
              <div className=" whitespace-pre-wrap mb-4 flex-1">
                {/* {t("aboutMe.intro")} */}
                {intro}
              </div>

              <div className="flex-1 ">
                <InfoView />
              </div>
            </div>

            <SkillView />
            {/* <div
              className="mb-4 cursor-pointer w-fit "
              onClick={() => setOpenModal(true)}
            >
              to Game Page
            </div> */}
          </div>

          <Infomation />
        </motion.div>
      </div>

      {openModal && (
        <CustomDialog close={() => setOpenModal(false)}>
          <SkillGame />
        </CustomDialog>
      )}
    </>
  );
};
