import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import CartContext from "../../context/cartPriceContext";

const ProductListItem = ({ item }) => {
  const { imageURL } = useContext(CartContext);

  return (
    <Link href={`/products/${item._id}`} className="border-[1px] relative pb-3">
      <div className="absolute right-2 top-2 p-2 rounded-full bg-white">
        <AiOutlineHeart />
      </div>
      <Image
        priority
        src={imageURL + item.images[0]}
        width={180}
        height={100}
        alt="product image"
        className="h-52 md:h-80 md:w-72"
      />
      <p className="text-[13px] md:text-xl font-semibold text-[rgba(0,0,0,0.6)] px-1 my-1 md:my-3">
        {`${item.name}`.substring(0, 40)}
      </p>
      <h2 className="my-1 text-xl md:text-2xl font-semibold text-[rgba(0,0,0,0.7)] px-1">
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
