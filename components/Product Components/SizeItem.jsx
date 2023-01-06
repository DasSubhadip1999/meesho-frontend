import { useContext } from "react";
import CartContext from "../../context/cartPriceContext";

const SizeItem = ({ sizeProp, handleClick }) => {
  const {
    confirmCart: { size },
  } = useContext(CartContext);

  return (
    <li
      onClick={() => handleClick(sizeProp)}
      className={`px-3 rounded-2xl transition-all ${
        sizeProp == size
          ? "border-[#e65082] border-2 text-[#e65082] font-bold bg-[#f8dde6]"
          : "border-black border-[1px]"
      }`}
    >
      {sizeProp}
    </li>
  );
};

export default SizeItem;
