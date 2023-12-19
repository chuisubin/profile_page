import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import clsx from "clsx";
export const InfoView = () => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <div className=" max-w-xs TODO ">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className={clsx("mySwiper    ")}
        >
          <SwiperSlide className="  info_card">
            <div>Phone: 2</div>
          </SwiperSlide>
          <SwiperSlide className=" info_card">Slide 2</SwiperSlide>
          <SwiperSlide className=" info_card">Slide 3</SwiperSlide>
          <SwiperSlide className=" info_card">Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
