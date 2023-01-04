import { createContext, useRef, useState } from "react";
import { useSelector } from "react-redux";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [confirmCart, setConfirmCart] = useState({
    size: "",
    returnType: "",
  });
  const [currentProduct, setCurrentProduct] = useState({});

  const [sellerId, setSellerId] = useState("");

  //console.log("sellerId", sellerId);

  const { allCartItems } = useSelector((state) => state.cart);
  const cartModalRef = useRef(null);

  const totalPrice = allCartItems.reduce((total, { product }) => {
    return (total += product.discountedPrice);
  }, 0);

  const sendCurrentProduct = (product) => {
    setCurrentProduct(product);
  };

  return (
    <CartContext.Provider
      value={{
        totalPrice,
        items: allCartItems.length,
        cartModalRef,
        confirmCart,
        sellerId,
        sendCurrentProduct,
        setSellerId,
        currentProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
