import Link from "next/link";
import { useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import CartContext from "../../context/cartPriceContext";

const ProductListItem = ({ item }) => {
  const { imageURL } = useContext(CartContext);

  return (
    <Link
      href={`/products/${item._id}`}
      className="border-[1px] 2xl:rounded-md relative pb-3"
    >
      <div className="absolute right-2 top-2 p-2 rounded-full bg-white shadow-md">
        <AiOutlineHeart />
      </div>
      <img
        src={imageURL + item.images[0]}
        alt="product image"
        className="h-52 md:h-80 md:w-72 mx-auto 2xl:rounded-t-md 2xl:h-60 2xl:w-60"
      />
      <p className="text-[13px] md:text-xl 2xl:text-[16px] font-semibold text-[rgba(0,0,0,0.6)] px-1 2xl:px-2 my-1 md:my-3">
        {`${item.name}`.substring(0, 40)}
      </p>
      <h2 className="my-1 text-xl md:text-2xl font-semibold text-[rgba(0,0,0,0.7)] px-1 2xl:px-2">
        ₹{item.discountedPrice}
      </h2>
      <div className="px-3 md:py-1 text-[#23bb75] bg-[rgba(0,0,0,0.1)] mx-4 rounded-3xl">
        <span className="font-bold text-sm md:text-lg">₹{item.price}</span>
        <span className="ml-2 text-[13px] md:text-sm">{item.discount}</span>
      </div>
    </Link>
  );
};

export default ProductListItem;
