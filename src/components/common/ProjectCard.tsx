import React from "react";

export const ProjectCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <div className=" relative    mx-auto w-full ">
        <div className="-z-10 absolute  top-0 w-full h-full -left-0 rounded-md translate-x-2 translate-y-2 bg-black blur"></div>
        <div className=" relative bg-white  border-2 border-black rounded-md  w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
};
