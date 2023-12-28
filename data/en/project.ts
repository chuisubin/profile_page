import {
  AntidrugHomeImgSrc,
  CorrectImgSrc,
  WrongImgSrc,
  QuestionImgSrc,
  ResultImgSrc,
  TutorialImgSrc,
  UserImgSrc,
} from "@public/images/project/antidrug";
import {
  CooltechHomeImgSrc,
  CooltechWeProvideImgSrc,
  CooltechLightModeImgSrc,
  CooltechOurClientImgSrc,
  CooltechResponsiveImgSrc,
  CooltechContactUsImgSrc,
} from "@public/images/project/cooltechWebsite";
export const project = [
  {
    pjName: "Anti-drug Game",
    pjDescription: "This is the website for Po Leung Kuk Anti-drug event.",
    techStacks: ["React", "Nextjs", "Typescript", "TailwindCSS"],
    coverImageSrc: AntidrugHomeImgSrc,
    pjLink: "https://www.yds-antidrugsgame.com/",
    images: [
      {
        src: UserImgSrc,
        description:
          "The Anti-drug Game successfully deepened student understanding of the harm caused by drugs.",
      },
      {
        src: TutorialImgSrc,
        description: "Used next-pwa to make the game a PWA",
      },
      {
        src: QuestionImgSrc,
        description: "Used sound effect from pixabay.com",
      },
      { src: CorrectImgSrc, description: "" },
      { src: WrongImgSrc, description: "" },
      {
        src: ResultImgSrc,
        description: "The result depends on the player's score",
      },
    ],
  },
  {
    pjName: "Cooltech solution website",
    pjDescription:
      "This is the official website of COOLTECH Solution Limited, allowing visitors to understand the company.",
    techStacks: [
      "React",
      "Nextjs",
      "Typescript",
      "TailwindCSS",
      "Framer Motion",
      "i18n",
    ],
    coverImageSrc: CooltechHomeImgSrc,
    pjLink: "https://cooltechsol.com/en/",
    images: [
      {
        src: CooltechLightModeImgSrc,
        description: "Light mode.",
      },
      {
        src: CooltechResponsiveImgSrc,
        description: "",
      },
      {
        src: CooltechWeProvideImgSrc,
        description: "",
      },

      {
        src: CooltechOurClientImgSrc,
        description: "",
      },

      {
        src: CooltechContactUsImgSrc,
        description: "",
      },
    ],
  },
];
