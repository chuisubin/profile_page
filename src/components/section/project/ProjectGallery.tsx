import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/navigation";

import { ProjectItemType } from "./index";
import {
  EffectCoverflow,
  FreeMode,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
export const ProjectGallery = ({ project }: { project: ProjectItemType }) => {
  const [currentSwiperIndex, setCurrentSwiperIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperType>();
  return (
    <div className="h-full relative justify-center flex flex-row items-center ">
      <div className="   w-full h-auto relative ">
        <div className=" relative">
          <Swiper
            effect={"coverflow"}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              scale: 0.8,
              modifier: 1,
              slideShadows: true,
            }}
            wrapperClass="  [&>.swiper-pagination]:!bg-white  "
            modules={[EffectCoverflow, Thumbs, Navigation]}
            className="mySwiper"
            onActiveIndexChange={(swiper) => {
              setCurrentSwiperIndex(swiper.activeIndex);
            }}
          >
            {project.images.map((image, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className=" aspect-video max-w-3xl   w-full"
                >
                  <Image
                    src={image.src}
                    alt={project.pjName}
                    fill
                    className=" aspect-video object-cover w-full h-auto "
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className=" ">
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              className={clsx(
                "z-10 absolute left-2  top-1/2 -translate-y-1/2 p-1 rounded-full disabled:opacity-50  bg-white/80 text-black  transition-all",
                currentSwiperIndex === 0 && "hidden"
              )}
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={currentSwiperIndex === 0}
            >
              <ChevronLeftIcon className="w-6 h-6 lg:w-10 lg:h-10" />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              className={clsx(
                "z-10 absolute right-2 top-1/2 -translate-y-1/2  p-1 rounded-full disabled:opacity-50 bg-white/80 text-black transition-all",
                currentSwiperIndex === project.images.length - 1 && "hidden"
              )}
              onClick={() => swiperRef.current?.slideNext()}
              disabled={currentSwiperIndex === project.images.length - 1}
            >
              <ChevronRightIcon className="w-6 h-6 lg:w-10 lg:h-10" />
            </motion.button>
          </div>
        </div>

        <div className="  absolute top-full w-full whitespace-normal text-center  ">
          {project.images[currentSwiperIndex]?.description !== "" && (
            <div className="  text-white p-4 max-w-[80vw] mx-auto">
              {project.images[currentSwiperIndex].description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
