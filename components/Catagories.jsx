import Link from "next/link";
import catagoriesData from "../data/catagoriesData";
import { v4 as uuidv4 } from "uuid";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import ResponsiveContext from "../context/responsiveContext";

const Catagories = () => {
  const { width } = useContext(ResponsiveContext);

  return (
    <div className="flex border-b-[1px] py-2 md:py-3 px-3 items-center my-2 2xl:hidden">
      <Swiper
        slidesPerView={4}
        spaceBetween={width > 786 && width < 1024 ? 25 : 30}
      >
        <SwiperSlide>
          <div className="flex flex-col items-center gap-1 md:gap-2">
            <div className="rounded-full bg-[#c9e3ff] grid place-items-center p-4 md:p-5">
              <Link href="/catagories">
                <div className="grid grid-cols-2">
                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-sm m-[1px] bg-[#D58BDD]"></div>
                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-sm m-[1px] bg-[#A555EC]"></div>
                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-sm m-[1px] bg-[#A555EC]"></div>
                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-sm m-[1px] bg-[#D58BDD]"></div>
                </div>
              </Link>
            </div>
            <span className="text-xs md:text-sm">Catagories</span>
          </div>
        </SwiperSlide>
        {catagoriesData.map(({ title, img }) => (
          <SwiperSlide key={uuidv4()}>
            <div className="flex flex-col items-center gap-1 md:gap-2">
              <Image
                src={img}
                alt="cata-img"
                width={width > 786 && width < 1024 ? 60 : 50}
                height={width > 786 && width < 1024 ? 60 : 50}
                className="w-16 md:w-24 h-16 md:h-24 rounded-full border-[1px]"
              />
              <span className="text-xs md:text-sm">{title}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Catagories;
