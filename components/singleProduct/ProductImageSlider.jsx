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
import AddToCart from "./AddToCart";

export default function ProductImageSlider({ images, handleAddToCart }) {
  const { imageURL } = useContext(CartContext);
  return (
    <div className="lg:w-[30%] lg:border-[1px] lg:mt-2 lg:rounded-md lg:max-h-[34rem] lg:py-3">
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
              className="h-80 lg:h-[28rem] mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <AddToCart handleAddToCart={handleAddToCart} />
    </div>
  );
}
