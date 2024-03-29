import { useContext } from "react";
import ProgressStepsContext from "../../context/progressStepsContext";

const CartPricing = ({ carts }) => {
  const { setProgress, progress } = useContext(ProgressStepsContext);
  //console.log(setProgress);
  const totalPrice = carts.reduce((total, { userSelection }) => {
    return (total += userSelection?.buyingPrice);
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
      <div className="bg-white pb-20 lg:pb-0 px-3 pt-4">
        <h1 className="text-sm lg:text-[17px] lg:font-semibold font-bold mb-4">
          Pricing Details ({carts.length} <span>Items</span>)
        </h1>

        <div className="flex justify-between items-center text-sm lg:text-[17px] border-b-[1px] pb-4">
          <span className="border-b-[1px] border-[rgba(0,0,0,0.8)] border-dashed">
            Total Product Price
          </span>
          <span>₹{totalPrice}</span>
        </div>

        <div className="flex font-semibold justify-between items-center py-3 lg:text-[17px]">
          <span>Order Total</span>
          <span>₹{totalPrice}</span>
        </div>
        <p
          className={`hidden lg:${
            progress.address.pending ? "hidden" : "block"
          } bg-[#f9f9f9] rounded-md text-xs font-semibold text-[rgba(0,0,0,0.5)] px-4 py-2 mb-3`}
        >
          Clicking on ‘Continue’ will not deduct any money
        </p>
        <button
          className={`bg-[#f43397] hidden lg:w-full lg:font-semibold text-white px-3 py-2 mb-1 rounded-md items-center justify-center lg:${
            progress.address.pending ? "hidden" : "flex"
          }`}
          onClick={handleClick}
        >
          Continute
        </button>
      </div>

      <div className="fixed bottom-0 z-20 bg-white w-full flex justify-between items-center p-3 lg:hidden">
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
