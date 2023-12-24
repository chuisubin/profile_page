import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import clsx from "clsx";
import Image from "next/image";

import DeveloperIcon from "@public/images/about/developer.png";
import GuitarIcon from "@public/images/about/guitar.png";
import GymIcon from "@public/images/about/weightlifter.png";
import WatchMovieIcon from "@public/images/about/watching-a-movie.png";
export const InfoView = () => {
  return (
    <div className="px-4 lg:px-10  flex flex-col items-center justify-center">
      <div className="max-w-[14rem] lg:max-w-[18rem]  ">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className={clsx("mySwiper    ")}
        >
          <SwiperSlide className="  info_card">
            <div className=" relative  w-full h-full">
              <Image src={DeveloperIcon.src} fill className={""} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" info_card">
            <div className=" relative  w-full h-full">
              <Image src={GuitarIcon.src} fill className={""} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" info_card">
            <div className=" relative  w-full h-full">
              <Image src={GymIcon.src} fill className={""} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" info_card">
            <div className=" relative  w-full h-full">
              <Image src={WatchMovieIcon.src} fill className={""} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
