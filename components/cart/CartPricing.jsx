import { useContext } from "react";
import ProgressStepsContext from "../../context/progressStepsContext";

const CartPricing = ({ carts }) => {
  const { setProgress } = useContext(ProgressStepsContext);
  //console.log(setProgress);
  const totalPrice = carts.reduce((total, { product }) => {
    return (total += product.discountedPrice);
  }, 0);

  const handleClick = () => {
    setProgress((prev) => ({
      ...prev,
      cart: {
        pending: false,
        completed: true,
      },
      address: {
        pending: true,
        completed: false,
      },
    }));
  };

  // console.log(totalPrice);

  return (
    <>
      <div className="bg-white pb-20 px-3 pt-4">
        <h1 className="text-sm font-bold mb-4">
          Pricing Details ({carts.length} <span>Items</span>)
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
      </div>

      <div className="fixed bottom-0 z-20 bg-white w-full flex justify-between items-center p-3">
        <h1 className="text-xl font-bold">₹{totalPrice}</h1>
        <button
          className="bg-[#f43397] text-white px-3 py-2 w-[48%] mb-1 rounded-md flex items-center justify-center"
          onClick={handleClick}
        >
          Continute
        </button>
      </div>
    </>
  );
};

export default CartPricing;
