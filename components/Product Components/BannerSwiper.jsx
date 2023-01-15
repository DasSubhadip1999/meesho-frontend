// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Banner1 from "../../assets/Images/banner1.jpeg";
import Banner2 from "../../assets/Images/banner2.jpeg";
import Banner3 from "../../assets/Images/banner3.jpg";
import Banner4 from "../../assets/Images/banner4.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";
import Image from "next/image";

export default function BannerSwiper() {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className="px-2 py-1">
            <Image
              src={Banner1}
              width={300}
              height={200}
              alt="banner image 1"
              className="w-full h-40 md:h-64   rounded-md"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-2 py-1">
            <Image
              src={Banner2}
              width={300}
              height={200}
              alt="banner image 2"
              className="w-full h-40 md:h-64 rounded-md"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-2 py-1">
            <Image
              src={Banner3}
              width={300}
              height={200}
              alt="banner image 2"
              className="w-full h-40 md:h-64 rounded-md"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-2 py-1">
            <Image
              src={Banner4}
              width={300}
              height={200}
              alt="banner image 2"
              className="w-full h-40 md:h-64 rounded-md"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
