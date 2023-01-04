import Link from "next/link";
import { AiOutlineShop } from "react-icons/ai";

const SellerInformation = ({ seller }) => {
  return (
    <div className="p-3 bg-white">
      <h1 className="font-bold text-lg mb-3">Sold By</h1>
      <div className="flex justify-between py-1 items-center">
        <div className="bg-[#ece1e7] p-3 rounded-full text-[#f43397]">
          <AiOutlineShop size={21} />
        </div>
        <h1 className="text-lg uppercase font-bold">{seller.name}</h1>
        <Link
          className="border-[1px] border-[#f43397] text-[14px] px-2 py-1 rounded-md font-bold text-[#f43397]"
          href="/supplier/shop"
        >
          View Shop
        </Link>
      </div>
      <div className="flex gap-8 ml-2 my-2">
        <div className="flex flex-col">
          <span className="font-semibold">Ratings</span>
          <span className="text-[13px]">Too few ratings</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">0</span>
          <span className="text-[13px]">Followers</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">73</span>
          <span className="text-[13px]">Products</span>
        </div>
      </div>
    </div>
  );
};

export default SellerInformation;
