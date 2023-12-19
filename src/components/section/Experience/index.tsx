import { SectionTitleView } from "@/components/common/SectionTitleView";
import { useTranslation } from "@/i18n/client";

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <div>
      <SectionTitleView title={t("experience.title")} />
      <div></div>
    </div>
  );
};
