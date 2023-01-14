import Link from "next/link";
import catagoriesData from "../data/catagoriesData";
import { v4 as uuidv4 } from "uuid";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const Catagories = () => {
  return (
    <div className="flex border-b-[1px] py-2 px-3 items-center my-2">
      <Swiper slidesPerView={4} spaceBetween={30}>
        <SwiperSlide>
          <div className="flex flex-col justify-center gap-1">
            <div className="rounded-full bg-[#c9e3ff] grid place-items-center py-4">
              <Link href="/catagories">
                <div className="grid grid-cols-2">
                  <div className="w-3 h-3 rounded-sm m-[1px] bg-[#D58BDD]"></div>
                  <div className="w-3 h-3 rounded-sm m-[1px] bg-[#A555EC]"></div>
                  <div className="w-3 h-3 rounded-sm m-[1px] bg-[#A555EC]"></div>
                  <div className="w-3 h-3 rounded-sm m-[1px] bg-[#D58BDD]"></div>
                </div>
              </Link>
            </div>
            <span className="text-xs">Catagories</span>
          </div>
        </SwiperSlide>
        {catagoriesData.map(({ title, img }) => (
          <SwiperSlide key={uuidv4()}>
            <div className="flex flex-col items-center gap-1">
              <Image
                src={img}
                alt="cata-img"
                width={50}
                height={50}
                className="w-16 h-16 rounded-full border-[1px]"
              />
              <span className="text-xs">{title}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Catagories;
