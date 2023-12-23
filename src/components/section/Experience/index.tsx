import { SectionTitleView } from "@/components/common/SectionTitleView";
import { useTranslation } from "@/i18n/client";
import { motion } from "framer-motion";
import { useMemo } from "react";

import { LinkIcon } from "@heroicons/react/24/solid";
import { LinkView } from "@/components/common/LinkView";
export const Experience = () => {
  const { t } = useTranslation();

  const experienceData = useMemo(() => {
    return [
      {
        title: "Freelance",
        companyName: "Po Leung Kuk, Hong Kong",
        companyLink: "https://www.poleungkuk.org.hk/",
        date: "2023(Dec) - 2023(Dec)",

        description:
          "Create a PWA website for the anti-drug campaign event of Po Leung Kuk",
        techStack: ["React", "Next.js", "TailwindCSS", "Typescript"],
      },
      {
        title: "Senior Front-end Developer",
        date: "2022(AUG) - 2023(OCT)",
        companyName: "Cooltech Solutions Limited, Hong Kong",
        companyLink: "https://cooltechsol.com/en/",
        description:
          "Develop and maintain project websites for a company that operates as a vendor. Clients include tutoring centers, online media, sports teams, and financial companies.",
        techStack: [
          "Next.js",
          "TailwindCSS",
          "Typescript",
          "Storybook",
          "Google Ads",
          "Google Analytics",
          "GraphQL",
          "Strapi",
          "Jiar",
        ],
      },
      {
        title: "Web Developer",
        date: "2020(MAR) - 2022(AUG)",
        companyName: "Marco Technology Limited, Hong Kong",
        companyLink: "https://www.facebook.com/FoodMarco/?locale=zh_HK",
        description:
          "Work for a platform that delivers culinary experiences to users, allowing them to express their food reviews and conveniently find restaurants they want to visit.",
        techStack: [
          "Next.js",
          "Redux",
          "Material UI",
          "Bootstrap",
          "Firebase",
          "Google Analytics",
          "Jenkins",
        ],
      },
      {
        title: "IT Analyst",
        date: "2019(JUN) - 2020(MAR)",
        companyName: "Kwoon Chung Bus Holdings Limited, Hong Kong",
        companyLink: "https://www.kcbh.com.hk/",
        description:
          "Develop a web application and mobile app for the company's internal use, including the company's internal management system, and customer management system.",
        techStack: [
          "React",
          "React Native",
          "EXPO",
          "Vue",
          "VueX",
          "Vuetify",
          "LESS css",
        ],
      },
    ];
  }, []);
  return (
    <div>
      <SectionTitleView title={t("experience.title")} />
      <div className="  text-primary-700 dark:text-white">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <div className=" flex flex-col w-full   ">
            {experienceData.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  className=" relative mb-10"
                  initial={{ opacity: 0, y: -30, scale: 0.9 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  {/* <motion.div
                    initial={{ height: "0%" }}
                    whileInView={{
                      height: "100%",
                    }}
                    className=" absolute top-0 left-2  w-1  bg-secondary-500 dark:bg-white"
                  /> */}

                  <motion.div className=" flex flex-col lg:flex-row  relative items-start justify-between gap-2">
                    {/* <div className=" w-5 h-5 bg-white rounded-full absolute left-0 top-0  "></div> */}
                    <motion.div className="flex-1  ">
                      <div className="flex flex-col   text-lg lg:text-2xl mb-2">
                        {item.date}
                      </div>
                      <div className=" break-words whitespace-normal text-base lg:text-xl">
                        <span className="">{item.companyName}</span>
                        {item.companyLink && (
                          <LinkView
                            className="ml-2 inline-block  align-middle "
                            href={item.companyLink}
                            isBlank
                          >
                            <LinkIcon className="w-4 h-4 lg:w-5 lg:h-5" />
                          </LinkView>
                        )}
                      </div>
                    </motion.div>
                    <motion.div className=" flex-1 ">
                      <div className="text-base lg:text-xl mb-2">
                        {item.title}
                      </div>
                      <div className=" break-words  p-2 rounded-md bg-white/30 dark:bg-black/30 whitespace-normal ">
                        <div className=" mb-2 text-xs lg:text-sm">
                          {item.description}
                        </div>

                        <div className="flex flex-row flex-wrap font-light text-xs lg:text-sm gap-2 text-primary-700/80 dark:text-white/80">
                          {item.techStack.map((tech, idx) => {
                            return (
                              <div key={idx}>
                                •<span className="underline ml-1">{tech}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                    <div></div>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* <div className="flex flex-row justify-between items-start">
              <div className="text-left text-sm lg:text-lg">
                <div className="font-bold"></div>
                <div className="text-xs lg:text-sm">2019 - Present</div>
              </div>
              <div className="text-right text-sm lg:text-lg">
                <div className="font-bold">2019 - Present</div>
                <div className="text-xs lg:text-sm"></div>
              </div>
            </div> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
