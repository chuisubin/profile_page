import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import clsx from "clsx";
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
            <div>靚仔相</div>
          </SwiperSlide>
          <SwiperSlide className=" info_card">靚仔相</SwiperSlide>
          <SwiperSlide className=" info_card">靚仔相</SwiperSlide>
          <SwiperSlide className=" info_card">靚仔相</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
