import { useContext } from "react";
import CartContext from "../../context/cartPriceContext";
import ProgressStepsContext from "../../context/progressStepsContext";

const PriceConfirm = () => {
  const { totalPrice, items } = useContext(CartContext);
  const { setProgress } = useContext(ProgressStepsContext);

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
          onClick={goToSummary}
          className="bg-[#f43397] text-white px-3 py-2 w-[48%] mb-1 rounded-md flex items-center justify-center"
        >
          Continute
        </button>
      </div>
    </div>
  );
};

export default PriceConfirm;
