import { RxCaretRight } from "react-icons/rx";

const WishList = () => {
  return (
    <div className="mb-3 flex justify-between items-center bg-[#fff] px-3 py-4">
      <span className="text-sm font-semibold">Wishlist</span>
      <RxCaretRight size={23} />
    </div>
  );
};

export default WishList;
