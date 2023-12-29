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
import { KitcheeImgs } from "@public/images/project/kitchee";
import { FoodMarcoImgs } from "@public/images/project/foodmarco";
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
  {
    index: 3,
    pjName: "KitChee",
    pjDescription:
      "Kitchee is a professional football club in Hong Kong. This is the official website of Kitchee.",
    techStacks: [
      "Nextjs",
      "Typescript",
      "TailwindCSS",
      "Strapi",
      "Graphql",
      "Monorepo",
      "Storybook",
    ],
    coverImageSrc: KitcheeImgs.home,
    pjLink: "https://www.kitchee.com/",
    images: [
      {
        src: KitcheeImgs.contentPage,
        description: "",
      },
      { src: KitcheeImgs.matchDetail, description: "" },
      { src: KitcheeImgs.articleNews, description: "" },
      { src: KitcheeImgs.articleDetail, description: "" },
      { src: KitcheeImgs.teamPlayer, description: "" },
      { src: KitcheeImgs.playerDetail, description: "" },
      { src: KitcheeImgs.teamDCoaches, description: "" },
      { src: KitcheeImgs.appform, description: "" },
      { src: KitcheeImgs.calendar, description: "" },
    ],
  },
  {
    index: 4,
    pjName: "Food Marco Website",
    pjDescription:
      "Food Marco is a food sharing platform targeting the Taiwan market. Food enthusiasts can post food articles on the platform and receive cash back.",
    techStacks: [
      "Nextjs",
      "Firebase",
      "Material UI",
      "Restful API",
      "SEO",
      "Bootstrap",
      "Google Analytics",
    ],
    coverImageSrc: FoodMarcoImgs.homepage,
    pjLink: "https://www.facebook.com/FoodMarco/?locale=zh_HK",
    images: [
      {
        src: FoodMarcoImgs.login,
        description: "",
      },
      {
        src: FoodMarcoImgs.detail,
        description: "",
      },
      {
        src: FoodMarcoImgs.profile,
        description: "",
      },
      {
        src: FoodMarcoImgs.referral,
        description: "",
      },
      {
        src: FoodMarcoImgs.search,
        description: "",
      },
      {
        src: FoodMarcoImgs.map,
        description: "",
      },
      {
        src: FoodMarcoImgs.mapSearch,
        description: "",
      },
      {
        src: FoodMarcoImgs.edit,
        description: "",
      },
      {
        src: FoodMarcoImgs.createArticle,
        description: "",
      },
    ],
  },
];
