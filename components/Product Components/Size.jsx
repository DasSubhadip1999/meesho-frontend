import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import CartContext from "../../context/cartPriceContext";
import ResponsiveContext from "../../context/responsiveContext";
import SizeItem from "./SizeItem";

const Size = ({ sizes }) => {
  const { setConfirmCart, setSizeSelected, sizeSelected } =
    useContext(CartContext);
  const { width } = useContext(ResponsiveContext);
  const { product } = useSelector((state) => state.product);

  const handleClick = (eachSize) => {
    setConfirmCart((prev) => ({ ...prev, size: eachSize }));
    setSizeSelected(true);
    if (width >= 1024) {
      setConfirmCart((prev) => ({
        ...prev,
        buyingPrice: product?.discountedPrice,
      }));
    }
  };

  useEffect(() => {
    setConfirmCart((prev) => ({ ...prev, size: "" }));
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className={`p-3 mb-2 shadow-sm lg:border-[1px] lg:rounded-md ${
        sizeSelected ? "bg-white" : "bg-[#ffdad6]"
      }`}
    >
      <h1 className="font-bold text-lg lg:my-2">Select Size</h1>
      <ul className="my-2 flex gap-4 lg:my-3">
        {sizes?.length == 0 ? (
          <li className="border-[1px] cursor-pointer border-[#f43397] bg-[#fce5f1] text-[#f43397] rounded-2xl px-2 py-1 font-bold">
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
      {!sizeSelected && (
        <span className="text-red-600">Please select a size</span>
      )}
    </div>
  );
};

export default Size;
