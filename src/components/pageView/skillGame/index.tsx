"use client";

import { SpotlightCard } from "@/components/common/SpotlightCard";
import { SkillGame } from "@/components/section/skillGame";

export const SkillGamePage = () => {
  return (
    <div className="py-20  h-full ">
      <div className=" relative mx-auto container  bg-black/50 backdrop-blur-lg rounded-glass  w-full    h-full p-2 lg:p-10 ">
        {/* <SpotlightCard> */}
        <SkillGame />
        {/* </SpotlightCard> */}
      </div>
    </div>
  );
};
