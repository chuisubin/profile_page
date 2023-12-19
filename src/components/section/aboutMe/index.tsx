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

export const AboutMe = () => {
  const { t } = useTranslation();
  const { lng, params } = useParams();

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
            <div className=" flex flex-row flex-wrap  ">
              <div className=" whitespace-normal mb-4 flex-1">
                {t("aboutMe.intro")}
              </div>

              <div className="flex-1 ">
                <InfoView />
              </div>
            </div>

            <div className="mb-4 border border-white">
              <Link href={`${lng}/game`}>to Game Page</Link>
            </div>

            <SkillView />
          </div>

          <div className="flex flex-row flex-wrap items-center justify-between gap-4 mb-4">
            {numberCardData.map((data, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  transition={{ delay: index + 1, duration: 1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className=""
                >
                  <NumberCard number={data.number} label={data.label} />
                </motion.div>
              );
            })}
          </div>

          <div className="flex flex-row flex-wrap ">
            <div>
              contact
              <div>tel: 4</div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
