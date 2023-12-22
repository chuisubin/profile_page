import { SpotlightCard } from "@/components/common/SpotlightCard";
import { TypeTextView } from "@/components/common/TypeTextView";
import { OptionList } from "@/components/section/Home/OptionList";
import { ProfileIcon } from "@/components/section/Home/ProfileIcon";
import { useLayout } from "@/hook/useLayoutHook";
import { useTranslation } from "@/i18n/client";
import clsx from "clsx";
import { motion } from "framer-motion";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import GithubIcon from "@public/images/github.svg";
import LinkedInIcon from "@public/images/linkedin.svg";
import data from "@data";
type HomeType = {
  onClickOption: (index: number) => void;
};
export const Home = (props: HomeType) => {
  const { t } = useTranslation();
  const infoData = data.getData("en").information;
  const { onClickOption } = props;
  const {} = useLayout();

  return (
    <>
      <motion.div className="    relative  w-full    ">
        <div className="flex-1 relative">
          <div className="flex flex-col gap-2  ">
            <ProfileIcon />

            <div>
              <div className="mb-4 lg:mb-8  relative">
                <div className="absolute top-0 left-0">
                  <TypeTextView
                    baseText={t("intro")}
                    delay={0.5}
                    duration={2.5}
                    cursorClassName="bg-primary-700 dark:bg-white"
                    className="text-xl  md:text-2xl lg:text-4xl font-COOL text-primary-700 dark:text-white "
                  />
                </div>
                <div className="   invisible text-xl  md:text-2xl lg:text-4xl ">
                  {t("intro")}
                </div>
              </div>
            </div>
            <motion.div className="mb-4">
              <OptionList onClickOption={onClickOption} />
            </motion.div>

            <motion.div
              className=" mx-auto w-full lg:w-auto flex flex-col  lg:flex-row   gap-4   "
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: "0%" }}
              transition={{ duration: 1, delay: 1 }}
            >
              <button
                className={clsx(
                  "w-fit flex-nowrap h-8 lg:h-10 transition-all items-center flex flex-row rounded-3xl   px-4  dark:bg-secondary-400 dark:text-black text-white bg-secondary-500  active:scale-95 hover:scale-105"
                )}
              >
                <span className="text-base lg:text-lg whitespace-nowrap leading-normal ">
                  {t("downloadCV")}
                </span>
                <ArrowDownTrayIcon className=" ml-1 w-5 h-5" />
              </button>
              <div className=" flex flex-row gap-4 items-center h-8 lg:h-10">
                <button
                  className=" transition-all h-full  aspect-square flex  items-center justify-center bg-white rounded-full hover:scale-105 active:scale-95 "
                  title={"Github"}
                  onClick={() => {
                    window.open(infoData.github, "_blank");
                  }}
                >
                  <GithubIcon className={clsx("w-5 h-5")} />
                </button>

                <button
                  className="transition-all h-full  aspect-square flex  items-center justify-center bg-white rounded-full hover:scale-105 active:scale-95 "
                  title={"LinkedIn"}
                  onClick={() => {
                    window.open(infoData.linkedIn, "_blank");
                  }}
                >
                  <LinkedInIcon className={clsx("w-5 h-5")} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
