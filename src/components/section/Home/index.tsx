import { SpotlightCard } from "@/components/common/SpotlightCard";
import { TypeTextView } from "@/components/common/TypeTextView";
import { OptionList } from "@/components/section/Home/OptionList";
import { ProfileIcon } from "@/components/section/Home/ProfileIcon";
import { useLayout } from "@/hook/useLayoutHook";
import { useTranslation } from "@/i18n/client";
import { motion } from "framer-motion";

type HomeType = {
  onClickOption: (index: number) => void;
};
export const Home = (props: HomeType) => {
  const { t } = useTranslation();

  const { onClickOption } = props;
  const {} = useLayout();

  return (
    <>
      <motion.div className="    relative  w-full    ">
        <div className="flex-1 relative">
          <div className="flex flex-col gap-2  ">
            <ProfileIcon />

            <div>
              <div className="mb-8  relative">
                <div className="absolute top-0 left-0">
                  <TypeTextView
                    baseText={t("intro")}
                    delay={0.5}
                    duration={2.5}
                    cursorClassName="bg-primary-700 dark:bg-white"
                    className="text-4xl font-COOL text-primary-700 dark:text-white "
                  />
                </div>
                <div className="   invisible text-4xl ">{t("intro")}</div>
              </div>
            </div>
            <motion.div>
              <OptionList onClickOption={onClickOption} />
            </motion.div>

            <div className=" flex flex-row flex-wrap  gap-4">
              <div>download cv</div>
              <div>git link</div>
              <div>linkIm </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
