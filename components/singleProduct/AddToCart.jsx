import { BsCart2 } from "react-icons/bs";
import { RxCaretRight } from "react-icons/rx";

const AddToCart = ({ handleAddToCart }) => {
  //styles
  const button =
    "px-3 py-2 w-[48%] mb-1 rounded-md flex items-center justify-center cursor-pointer";
  return (
    <section className="fixed lg:static bottom-0 z-20 bg-white w-full flex lg:px-6 lg:mt-3">
      <ul className="text-[#e65082] flex w-full justify-between items-center px-3 pt-3 pb-2">
        <li
          className={`${button} border-[1px] border-black text-black`}
          onClick={handleAddToCart}
        >
          <BsCart2 size={23} className="mr-1" />
          Add to cart
        </li>
        <li className={`${button} bg-[#f43397] text-white`}>
          {" "}
          <RxCaretRight size={25} />
          Buy Now
        </li>
      </ul>
    </section>
  );
};

export default AddToCart;
