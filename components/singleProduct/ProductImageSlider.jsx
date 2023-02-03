// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper";
import { useContext } from "react";
import CartContext from "../../context/cartPriceContext";
import { v4 as uuidv4 } from "uuid";

export default function ProductImageSlider({ images }) {
  const { imageURL } = useContext(CartContext);
  return (
    <div className="2xl:w-[30%] border-2">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {images?.map((image) => (
          <SwiperSlide key={uuidv4()}>
            <img
              src={imageURL + image}
              alt="single product image"
              className="h-80 2xl:h-[28rem] mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
