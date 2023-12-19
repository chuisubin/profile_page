import { TypeTextView } from "@/components/common/TypeTextView";
import { animate, motion, stagger } from "framer-motion";
import clsx from "clsx";
import { useEffect, useMemo, useState } from "react";
import PlayIcon from "@public/images/play-icon.svg";
import { useTranslation } from "@/i18n/client";

type OptionListType = {
  onClickOption: (index: number) => void;
};

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1],
    },
  },
};

export const OptionItem = (props: { children: React.ReactNode }) => {
  const { children } = props;
  return (
    <motion.div className={clsx("whitespace-nowrap  hidden delayShow ")}>
      {children}
    </motion.div>
  );
};

export const OptionList = (props: OptionListType) => {
  const {} = props;
  const { t } = useTranslation();
  const [currentSelected, setCurrentSelected] = useState<null | number>(null);
  useEffect(() => {
    animate(
      ".delayShow",
      {
        display: ["none", "block"],
        opacity: [0, 1],
        // scale: 1,
        filter: "blur(0px)",
      },
      {
        duration: 1,

        delay: stagger(1, { startDelay: 2 }),
      }
    );
  }, []);

  const optionListData = useMemo(() => {
    return [
      {
        delay: 2,
        label: t("option.about"),
        duration: 1,
        id: "#about",
      },
      {
        delay: 3,
        label: t("option.experience"),
        duration: 1,
        id: "#experience",
      },
      {
        delay: 4,
        label: t("option.project"),
        duration: 1,
        id: "#project",
      },
    ];
  }, [t]);

  return (
    <motion.div
      animate={{ display: "flex" }}
      // transition={{ delay: 3, duration: 1 }}
      className={clsx(
        " w-full  flex-col  text-primary-700 dark:text-white   items-start gap-4 relative  "
      )}
    >
      {optionListData.map((data, index) => {
        const isCurrentSelected =
          currentSelected && index + 1 == currentSelected ? true : false;
        return (
          <div key={index} className=" relative">
            <motion.div
              onHoverEnd={() => {
                setCurrentSelected(null);
              }}
              onHoverStart={() => {
                setCurrentSelected(index + 1);
              }}
              className={clsx(
                " cursor-pointer flex-1 flex flex-row justify-center items-center gap-2 transition-all px-2",
                isCurrentSelected && " bg-secondary-500   "
              )}
              onClick={() => {
                const section = document.querySelector(data.id);
                section &&
                  section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }}
            >
              <OptionItem>
                <TypeTextView
                  baseText={data.label}
                  delay={data.delay}
                  duration={data.duration}
                  cursorClassName="dark:bg-white bg-primary-700"
                  className={clsx(
                    " text-4xl font-COOL ",
                    isCurrentSelected
                      ? " text-white"
                      : "text-primary-700 dark:text-white"
                  )}
                />
              </OptionItem>

              <motion.div
                className={clsx(
                  "w-6 h-6 transition-colors ",
                  isCurrentSelected ? "visible " : "invisible  "
                )}
              >
                <PlayIcon
                  className={clsx(" rotate-180 w-full h-full  fill-white ")}
                />
              </motion.div>
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
};
