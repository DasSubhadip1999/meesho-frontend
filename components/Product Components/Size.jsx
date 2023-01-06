import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CartContext from "../../context/cartPriceContext";
import SizeItem from "./SizeItem";

const Size = ({ sizes }) => {
  const { setConfirmCart } = useContext(CartContext);

  const handleClick = (eachSize) => {
    setConfirmCart((prev) => ({ ...prev, size: eachSize }));
  };

  useEffect(() => {
    setConfirmCart((prev) => ({ ...prev, size: "" }));
  }, []);

  return (
    <div className="p-3 mb-2 bg-white shadow-sm">
      <h1 className="font-bold text-lg">Select Size</h1>
      <ul className="my-2 flex gap-4">
        {sizes?.length == 0 ? (
          <li className="border-[1px] border-[#f43397] bg-[#fce5f1] text-[#f43397] rounded-2xl px-2 py-1 font-bold">
            Free Size
          </li>
        ) : (
          sizes?.map((size) => (
            <SizeItem
              key={uuidv4()}
              sizeProp={size}
              handleClick={handleClick}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default Size;
