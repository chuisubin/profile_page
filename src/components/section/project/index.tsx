import { SectionTitleView } from "@/components/common/SectionTitleView";
import { useTranslation } from "@/i18n/client";

export const Project = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <SectionTitleView title={t("project.title")} />
      </div>
      <div></div>
    </div>
  );
};
