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
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

export default function ProductImageSlider({ images }) {
  const { imageURL } = useContext(CartContext);
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {images?.map((image) => (
          <SwiperSlide key={uuidv4()}>
            <Image
              src={imageURL + image}
              alt="single product image"
              width={250}
              height={300}
              className="h-80 mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
