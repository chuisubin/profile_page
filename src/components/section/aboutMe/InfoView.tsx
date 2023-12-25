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
import { useMemo } from "react";
export const InfoView = () => {
  const list = useMemo(() => {
    return [
      {
        src: DeveloperIcon.src,
        alt: "Developer",
      },
      {
        src: GuitarIcon.src,
        alt: "Guitar",
      },
      {
        src: GymIcon.src,
        alt: "Gym",
      },
      {
        src: WatchMovieIcon.src,
        alt: "WatchMovie",
      },
    ];
  }, []);
  return (
    <div className="px-4 lg:px-10  flex flex-col items-center justify-center">
      <div className="max-w-[14rem] lg:max-w-[18rem]  ">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className={clsx("mySwiper    ")}
        >
          {list.map((data, index) => {
            return (
              <SwiperSlide className="  info_card  " key={index}>
                <div className={clsx("  relative  w-full h-full ")}>
                  <Image src={data.src} fill className={""} alt={data.alt} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
