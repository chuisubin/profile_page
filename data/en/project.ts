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

import {
  ChannelCLandingImgSrc,
  ChannelCDarkmodeImgSrc,
  ChannelCDetailImgSrc,
  ChannelCCommentImgSrc,
  ChannelCMemberImgSrc,
  ChannelCPlanImgSrc,
  ChannelCSettingImgSrc,
} from "@public/images/project/channelC";
import { StudyLuImgs } from "@public/images/project/studylu";
export const project = [
  {
    index: 5,
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
    index: 1,
    pjName: "Cooltech Solutions",
    pjDescription:
      "This is the official website of Cooltech Solutions Limited, allowing visitors to understand the company.",
    techStacks: [
      "React",
      "Nextjs",
      "Typescript",
      "TailwindCSS",
      "Framer Motion",
      "I18n",
      "SEO",
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
        description: "Responsive design.",
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
  {
    index: 0,
    pjName: "Channel C Website",
    pjDescription:
      "Channel C is a online media company. Its website provides the latest news and information about HK, and it also has a membership subscription plan that brings benefits to its members.",
    techStacks: [
      "React",
      "Nextjs",
      "Typescript",
      "TailwindCSS",
      "SEO",
      "Google tag manager",
      "Dexie.js",
      "Firebase",
      "Graphql",
    ],
    coverImageSrc: ChannelCLandingImgSrc,
    pjLink: "https://channelchk.com/",
    images: [
      {
        src: ChannelCDarkmodeImgSrc,
        description: "",
      },
      {
        src: ChannelCDetailImgSrc,
        description: "",
      },
      {
        src: ChannelCCommentImgSrc,
        description: "",
      },
      {
        src: ChannelCMemberImgSrc,
        description: "",
      },
      {
        src: ChannelCPlanImgSrc,
        description: "",
      },
      {
        src: ChannelCSettingImgSrc,
        description: "",
      },
    ],
  },
  {
    index: 2,
    pjName: "StudyLU",
    pjDescription:
      "A web application allowing students to do online practices and teachers to create practices for their students.",
    techStacks: [
      "React",
      "Nextjs",
      "Typescript",
      "TailwindCSS",
      "Firebase",
      "Graphql",
      "Socket",
    ],
    coverImageSrc: StudyLuImgs.login,
    pjLink: "https://nightly.studylu.com/auth/signin",
    images: [
      {
        src: StudyLuImgs.parentLanding,
        description: "",
      },
      {
        src: StudyLuImgs.parentDaily,
        description: "",
      },
      {
        src: StudyLuImgs.parentRecord,
        description: "",
      },
      {
        src: StudyLuImgs.createPractice,
        description: "",
      },
      {
        src: StudyLuImgs.createMC,
        description: "",
      },
      {
        src: StudyLuImgs.createSetting,
        description: "",
      },
      {
        src: StudyLuImgs.createSort,
        description: "",
      },
      {
        src: StudyLuImgs.createWriting,
        description: "",
      },
      {
        src: StudyLuImgs.exportQuestion,
        description: "",
      },
      {
        src: StudyLuImgs.studentLanding,
        description: "",
      },
      {
        src: StudyLuImgs.studentRecord,
        description: "",
      },
      {
        src: StudyLuImgs.math,
        description: "",
      },
      {
        src: StudyLuImgs.review,
        description: "",
      },
      {
        src: StudyLuImgs.selectQuestionBar,
        description: "",
      },
    ],
  },
];
