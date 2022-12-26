import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";

const Pricing = ({ product }) => {
  return (
    <>
      <div className="flex justify-between items-center px-3 py-1 my-2">
        <div className="flex flex-col">
          <p className="font-semibold text-[rgba(0,0,0,0.6)]">{product.name}</p>
          <h1 className="text-xl font-semibold py-1">
            ₹{product.discountedPrice}
          </h1>
        </div>
        <div className="flex gap-5 ml-2">
          <div className="flex flex-col items-center">
            <AiOutlineHeart size={20} />
            <span className="text-[13px] mt-1">Wishlist</span>
          </div>
          <div className="flex flex-col items-center">
            <AiOutlineShareAlt size={21} />
            <span className="text-[13px] mt-1">Share</span>
          </div>
        </div>
      </div>
      <div className="pb-2">
        <div className="bg-[#f9f9f9] mx-3 py-1 px-2 rounded-md text-[#1e9f63] text-sm font-semibold">
          <span>
            <span className="mr-1">Origin Price:</span>₹{product.price}
          </span>
          <span className="ml-2">
            <span className="mr-1">Discount:</span>
            {product.discount.includes("%")
              ? product.discount
              : `₹${product.discount}`}
          </span>
        </div>
      </div>
    </>
  );
};

export default Pricing;
