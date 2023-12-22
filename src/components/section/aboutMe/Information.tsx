import { useTranslation } from "@/i18n/client";
import {
  UserIcon,
  CakeIcon,
  PhoneIcon,
  EnvelopeIcon,
  HomeIcon,
} from "@heroicons/react/20/solid";
import data from "@data";
import { useParams } from "next/navigation";
import { useMemo } from "react";

export const Infomation = () => {
  const { t } = useTranslation();
  const { lng, params } = useParams();
  const infoData = data.getData(lng).information;

  const infoList = useMemo(() => {
    return [
      {
        icon: <UserIcon className="w-5 h-5 mr-2" />,
        key: t("aboutMe.name"),
        value: infoData.name,
      },
      {
        icon: <PhoneIcon className="w-5 h-5 mr-2" />,
        key: t("aboutMe.tel"),
        value: infoData.telephone,
      },
      {
        icon: <EnvelopeIcon className="w-5 h-5 mr-2" />,
        key: t("aboutMe.email"),
        value: infoData.email,
      },
      {
        icon: <CakeIcon className="w-5 h-5 mr-2" />,
        key: t("aboutMe.bornIn"),
        value: infoData.bornIn,
      },
      {
        icon: <HomeIcon className="w-5 h-5 mr-2" />,
        key: t("aboutMe.address"),
        value: infoData.address,
      },
    ];
  }, [t, infoData]);

  return (
    <div className=" flex flex-col gap-2  text-sm lg:text-lg   whitespace-nowrap">
      {infoList.map((item, index) => {
        return (
          <div
            className=" flex flex-row items-start justify-center"
            key={index}
          >
            {item.icon}
            <span className="mr-2">{item.key}:</span>
            <span className=" whitespace-normal ">{item.value}</span>
          </div>
        );
      })}
    </div>
  );
};
