import { createContext } from "react";
import { useSelector } from "react-redux";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { allCartItems } = useSelector((state) => state.cart);

  const totalPrice = allCartItems.reduce((total, { product }) => {
    return (total += product.discountedPrice);
  }, 0);

  return (
    <CartContext.Provider value={{ totalPrice, items: allCartItems.length }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
