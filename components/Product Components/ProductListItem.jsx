import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";

const ProductListItem = ({ item }) => {
  const imagePrefix = "http://localhost:5000/";
  return (
    <Link href={`/products/${item._id}`} className="border-[1px] relative pb-3">
      <div className="absolute right-2 top-2 p-2 rounded-full bg-white">
        <AiOutlineHeart />
      </div>
      <Image
        src={imagePrefix + item.images[0]}
        width={180}
        height={100}
        alt="product image"
        className="h-52"
      />
      <p className="text-[13px] font-semibold text-[rgba(0,0,0,0.6)]">
        {`${item.name}`.substring(0, 40)}
      </p>
      <h2 className="my-1 text-xl font-semibold text-[rgba(0,0,0,0.7)]">
        ₹{item.discountedPrice}
      </h2>
      <div className="px-3 text-[#23bb75] bg-[rgba(0,0,0,0.1)] mx-4 rounded-3xl">
        <span className="font-bold text-sm">₹{item.price}</span>
        <span className="ml-2 text-[13px]">{item.discount}</span>
      </div>
    </Link>
  );
};

export default ProductListItem;
