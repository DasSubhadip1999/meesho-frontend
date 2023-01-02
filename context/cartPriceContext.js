import { createContext, useRef, useState } from "react";
import { useSelector } from "react-redux";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [confirmCart, setConfirmCart] = useState({
    size: "",
    returnType: "",
  });
  const { allCartItems } = useSelector((state) => state.cart);
  const cartModalRef = useRef(null);

  const totalPrice = allCartItems.reduce((total, { product }) => {
    return (total += product.discountedPrice);
  }, 0);

  return (
    <CartContext.Provider
      value={{
        totalPrice,
        items: allCartItems.length,
        cartModalRef,
        confirmCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
