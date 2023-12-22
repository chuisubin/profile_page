import { useTranslation } from "@/i18n/client";
import data from "@data";
import { useParams } from "next/navigation";
import Image from "next/image";

export const SkillView = () => {
  const { t } = useTranslation();

  const { lng, params } = useParams();

  const skillSetData = data.getData(lng).skillSet;

  return (
    <div className=" ">
      <h1 className=" mb-2 text-lg md:text-xl lg:text-3xl font-bold text-center">
        {t("aboutMe.mySkills")}
      </h1>
      <div className="mx-auto max-w-lg flex flex-row flex-wrap justify-center gap-2 lg:gap-4 mb-4">
        {skillSetData.map((item, index) => {
          return (
            <div
              className=" text-sm lg:text-base flex flex-row items-center border lg:border-2 bg-white dark:bg-primary-700 dark:text-white dark:border-white border-primary-700 px-2 lg:px-4 py-1  rounded-md"
              key={index}
            >
              {/* <div className="w-20 h-10">
                <Image
                  src={item.image}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto object-contain "
                  objectFit="contain"
                  alt={item.title}
                  priority
                />
              </div> */}
              {item.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};
