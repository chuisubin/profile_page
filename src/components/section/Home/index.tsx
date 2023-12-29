import { SpotlightCard } from "@/components/common/SpotlightCard";
import { TypeTextView } from "@/components/common/TypeTextView";
import { OptionList } from "@/components/section/home/OptionList";
import { ProfileIcon } from "@/components/section/home/ProfileIcon";
import { useLayout } from "@/hook/useLayoutHook";
import { useTranslation } from "@/i18n/client";
import clsx from "clsx";
import { motion } from "framer-motion";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import GithubIcon from "@public/images/common/github.svg";
import LinkedInIcon from "@public/images/common/linkedin.svg";
import data from "@data";
import { useState } from "react";
type HomeType = {
  onClickOption: (index: number) => void;
};
export const Home = (props: HomeType) => {
  const { t } = useTranslation();
  const infoData = data.getData("en").information;
  const { onClickOption } = props;
  const {} = useLayout();
  const [doneIntro, setDoneIntro] = useState(false);

  const downCVHandler = () => {};
  return (
    <>
      <motion.div className="    relative  w-full    ">
        <div className="flex-1 relative">
          <div className="flex flex-col gap-2 lg:gap-4 ">
            <ProfileIcon />

            <div>
              <div className="mb-4 lg:mb-8  relative">
                <div className="absolute top-0 left-0">
                  <TypeTextView
                    onTypingDone={() => {
                      setDoneIntro(true);
                    }}
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
              <OptionList onClickOption={onClickOption} doneIntro={doneIntro} />
            </motion.div>

            <motion.div
              className=" mx-auto w-full lg:w-auto flex flex-col  lg:flex-row   gap-4   relative "
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: "0%" }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.button
                className={clsx(
                  " element-to-rotate gradient relative  w-fit flex-nowrap h-8 lg:h-10 transition-all items-center ",
                  "flex flex-row   rounded-md  px-4  text-white  "
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downCVHandler}
              >
                <a
                  href={"/files/CV_AngusChui.pdf"}
                  download
                  className="text-base lg:text-lg whitespace-nowrap leading-normal "
                >
                  {t("downloadCV")}
                </a>
                <ArrowDownTrayIcon className=" ml-1 w-5 h-5" />
              </motion.button>
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
