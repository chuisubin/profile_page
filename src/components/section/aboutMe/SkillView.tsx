import { useTranslation } from "@/i18n/client";
import data from "@data";
import { useParams } from "next/navigation";
import Image from "next/image";

export const SkillView = () => {
  const { t } = useTranslation();

  const { lng, params } = useParams();

  const skillSetData = data.getData(lng).skillSet;

  return (
    <div className="TODO">
      <h1 className=" mb-2 text-3xl font-bold">{t("aboutMe.mySkills")}</h1>
      <div className=" flex flex-row flex-wrap   gap-4 mb-4">
        {skillSetData.map((item, index) => {
          return (
            <div
              className="flex flex-row items-center border-2  dark:border-white border-primary-700 px-4 py-1  rounded-md"
              key={index}
            >
              <div className="w-20 h-10">
                <Image
                  src={item.image}
                  width={100}
                  height={100}
                  className="w-full h-full object-contain "
                  objectFit="contain"
                  alt={item.title}
                />
              </div>
              {item.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};
