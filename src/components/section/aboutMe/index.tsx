import { motion } from "framer-motion";
import { NumberCard } from "./NumberCard";
import { useMemo, useState } from "react";
import { useTranslation } from "@/i18n/client";
import { CustomDialog } from "@/components/common/CustomDialog";
import { SkillGame } from "../skillGame";
import Link from "next/link";
import { useParams } from "next/navigation";
import data from "@data";
export const AboutMe = () => {
  const { t } = useTranslation();
  const { lng, params } = useParams();

  const skillSetData = data.getData(lng).skillSet;

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
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className=" relative flex flex-col justify-center items-center text-primary-700 dark:text-white"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full"
          >
            <h1 className="text-4xl">{t("aboutMe.title")}</h1>
            <motion.div className=" bg-primary-700 dark:bg-white my-2 h-1" />
          </motion.div>

          <div className="flex flex-col  ">
            <div className=" whitespace-normal mb-4">{t("aboutMe.intro")}</div>

            <div className="mb-4 border border-white">
              <Link href={`${lng}/game`}>to Game Page</Link>
            </div>

            <h1 className=" mb-2 text-3xl font-bold">
              {t("aboutMe.mySkills")}
            </h1>
            <div className=" flex flex-row flex-wrap   gap-4 mb-4">
              {skillSetData.map((data, index) => {
                return (
                  <div
                    className=" border-2  dark:border-white border-primary-700 px-4 py-1  rounded-md"
                    key={index}
                  >
                    {data.title}
                  </div>
                );
              })}
            </div>
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
