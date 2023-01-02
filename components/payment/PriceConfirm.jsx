import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import CartContext from "../../context/cartPriceContext";
import ProgressStepsContext from "../../context/progressStepsContext";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllCartItems } from "../../redux/feature/cart/cartSlice";

const PriceConfirm = () => {
  const { message, isLoading, isSuccess } = useSelector((state) => state.cart);
  const { totalPrice, items } = useContext(CartContext);
  const {
    setProgress,
    progress: { summary },
    backToCart,
  } = useContext(ProgressStepsContext);

  const dispatch = useDispatch();
  const router = useRouter();

  const goToSummary = () => {
    setProgress((prev) => ({
      ...prev,
      payment: {
        pending: false,
        completed: true,
      },
      summary: {
        pending: true,
        completed: false,
      },
    }));
  };

  const placeOrder = () => {
    toast.success("Order Placed");
    dispatch(deleteAllCartItems());
    backToCart();
    router.push("/my-orders");
  };

  return (
    <div className="px-4 mt-3">
      <h1 className="text-sm font-bold mb-4">
        Price Details ({items} <span>Items</span>)
      </h1>

      <div className="flex justify-between items-center text-sm border-b-[1px] pb-4">
        <span className="border-b-[1px] border-[rgba(0,0,0,0.8)] border-dashed">
          Total Product Price
        </span>
        <span>₹{totalPrice}</span>
      </div>

      <div className="flex font-semibold justify-between items-center py-3">
        <span>Order Total</span>
        <span>₹{totalPrice}</span>
      </div>

      <div className="fixed bottom-0 z-20 bg-white w-[93%] flex justify-between items-center p-3">
        <h1 className="text-xl font-bold">₹{totalPrice}</h1>
        <button
          onClick={summary.pending ? placeOrder : goToSummary}
          className="bg-[#f43397] text-white px-3 py-2 w-[48%] mb-1 rounded-md flex items-center justify-center"
        >
          {summary.pending ? "Place Order" : "Continue"}
        </button>
      </div>
    </div>
  );
};

export default PriceConfirm;
