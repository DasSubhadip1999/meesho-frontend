import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import { BsCart } from "react-icons/bs";
import { MdDone } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import CartContext from "../../context/cartPriceContext";
import useAuthStatus from "../../hooks/useAuthStatus";
import {
  addToCart,
  reset,
  getCartItems,
} from "../../redux/feature/cart/cartSlice";
import { toast } from "react-toastify";

const ReturnTypeComp = () => {
  const { user } = useSelector((state) => state.auth);
  const { isLoggedIn } = useAuthStatus(user);

  const { isSuccess, isError, message, cart, type, isLoading } = useSelector(
    (state) => state.cart
  );

  const [selectReturnType, setSelectReturnType] = useState(true);

  const dispatch = useDispatch();
  const router = useRouter();

  const { currentProduct, setConfirmCart, confirmCart, cartModalRef } =
    useContext(CartContext);

  const { size, buyingPrice: confirmBuyingPrice } = confirmCart;

  const offerPrice = Math.floor(
    currentProduct?.discountedPrice - currentProduct?.discountedPrice * 0.05
  );

  useEffect(() => {
    const returnType = selectReturnType
      ? "All returns"
      : "wrong/defect product return";
    let buyingPrice = selectReturnType
      ? currentProduct?.discountedPrice
      : offerPrice;

    if (buyingPrice == undefined) {
      buyingPrice = "";
    }

    //setting the buying price and return type according to the selectReturnType state
    setConfirmCart((prev) => ({ ...prev, returnType, buyingPrice }));

    // eslint-disable-next-line
  }, [selectReturnType, currentProduct]);

  //for reacting on error or success of add to cart
  useEffect(() => {
    if (isSuccess && Object.keys(cart).length && type == "addToCart") {
      cartModalRef.current.checked = false;
      toast.success("Product added to cart");
    }

    if (isError) {
      toast.error(message);
      if (isLoggedIn) {
        cartModalRef.current.checked = true;
      }
    }

    dispatch(reset());

    // eslint-disable-next-line
  }, [isSuccess, cart, isError]);

  const handleAddToCart = () => {
    //console.log(size, confirmBuyingPrice);

    if (isLoggedIn) {
      if (!size || !confirmBuyingPrice) {
        console.log("Size or price error");
      } else {
        dispatch(
          addToCart({ productId: currentProduct._id, userCart: confirmCart })
        );
        setTimeout(() => {
          dispatch(getCartItems());
        }, 500);
      }
    } else {
      router.push("/account");
    }

    if (isLoading) {
      cartModalRef.current.checked = false;
    }
  };

  //styles
  const tickIcon =
    "absolute -right-2 -top-2 bg-[#f43397] text-white text-[1.2rem] font-bold rounded-full p-1";
  const chooseBox = "w-[48%] min-h-[8rem] relative border-[1px] rounded-md";

  return (
    <div>
      <h2 className="my-2 font-bold text-sm">Select Return Type</h2>
      <div className="flex justify-between items-center text-[13px] w-full mb-3">
        <label
          onClick={() => setSelectReturnType((prev) => !prev)}
          className={`${chooseBox} ${
            selectReturnType ? "border-[#f43397]" : "border-[rgba(0,0,0,0.1)]"
          }`}
        >
          <div className="h-full">
            <h3 className="bg-[rgba(0,0,0,0.03)] font-semibold p-2">
              All Returns
            </h3>
            <div className="text-xl font-bold py-2 px-2">
              ₹{currentProduct?.discountedPrice}
            </div>
          </div>
          {/* tick icon */}
          <div className={`${tickIcon} ${!selectReturnType && "hidden"}`}>
            <MdDone />
          </div>
        </label>
        <label
          onClick={() => setSelectReturnType((prev) => !prev)}
          className={`${chooseBox} ${
            !selectReturnType ? "border-[#f43397]" : "border-[rgba(0,0,0,0.1)]"
          }`}
        >
          <div className="">
            <h3 className="bg-[rgba(0,0,0,0.03)] font-semibold p-2">
              Only Wrong/Defect item Returns
            </h3>
            <div className="text-xl font-bold py-1 px-2">₹{offerPrice}</div>
            <div className="text-[11px] text-center bg-green-100 text-green-600 font-semibold rounded-md rounded-t-none mt-3 py-1">
              Special Offer | Save ₹
              {currentProduct?.discountedPrice - offerPrice}
            </div>
          </div>
          {/* tick icon */}
          <div className={`${tickIcon} ${selectReturnType && "hidden"}`}>
            <MdDone />
          </div>
        </label>
      </div>
      <button
        onClick={handleAddToCart}
        className={`w-full bg-[#f43397] flex items-center justify-center  text-white rounded-md py-2 ${
          isLoading && "pointer-events-none"
        }`}
      >
        <BsCart /> <span className="ml-1">Add to Cart</span>
      </button>
    </div>
  );
};

export default ReturnTypeComp;
