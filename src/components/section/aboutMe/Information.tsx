import { useTranslation } from "@/i18n/client";
import {
  UserIcon,
  CakeIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/20/solid";
import data from "@data";
import { useParams } from "next/navigation";

export const Infomation = () => {
  const { t } = useTranslation();
  const { lng, params } = useParams();
  const infoData = data.getData(lng).information;
  return (
    <div className=" flex flex-col gap-2">
      <div className=" flex flex-row items-center justify-center">
        <UserIcon className="w-5 h-5 mr-2" />
        <span className="mr-2">{t("aboutMe.name")}:</span>
        <span className=" ">{infoData.name}</span>
      </div>

      <div className=" flex flex-row items-center justify-center">
        <PhoneIcon className="w-5 h-5 mr-2" />
        <span className="mr-2">{t("aboutMe.tel")}:</span>
        <span className=" ">{infoData.telephone}</span>
      </div>

      <div className=" flex flex-row items-center justify-center">
        <EnvelopeIcon className="w-5 h-5 mr-2" />
        <span className="mr-2">{t("aboutMe.email")}:</span>
        <span className=" ">{infoData.email}</span>
      </div>

      <div className=" flex flex-row items-center justify-center">
        <CakeIcon className="w-5 h-5 mr-2" />
        <span className="mr-2">{t("aboutMe.birthday")}:</span>
        <span className=" ">{infoData.birthday}</span>
      </div>
    </div>
  );
};
