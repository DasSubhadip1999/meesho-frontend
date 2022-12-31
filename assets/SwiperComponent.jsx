// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { SiPaytm, SiPhonepe, SiGooglepay } from "react-icons/si";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";

export default function SwiperComponent() {
  return (
    <div className="w-16">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className="w-full grid place-items-center">
            <SiPaytm size={33} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full grid place-items-center">
            <SiPhonepe size={29} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full grid place-items-center">
            <SiGooglepay size={34} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
