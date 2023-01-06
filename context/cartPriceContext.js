import { createContext, useRef, useState } from "react";
import { useSelector } from "react-redux";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [confirmCart, setConfirmCart] = useState({
    size: "",
    returnType: "",
    buyingPrice: "",
  });

  //to set the current product which user is viewing
  const [currentProduct, setCurrentProduct] = useState({});

  const [sellerId, setSellerId] = useState("");

  const { products } = useSelector((state) => state.product);

  const sellerProducts = products.filter(
    (item) => item.seller._id === sellerId
  );

  //console.log("sellerId", sellerId);

  const { allCartItems } = useSelector((state) => state.cart);
  const cartModalRef = useRef(null);

  const totalPrice = allCartItems.reduce((total, { product }) => {
    return (total += product?.discountedPrice);
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
        sellerProducts,
        sendCurrentProduct,
        setSellerId,
        setConfirmCart,
        currentProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
