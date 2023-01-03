import { useContext, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { BsCart } from "react-icons/bs";
import { MdDone } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import CartContext from "../../context/cartPriceContext";

const CartConfirmModal = () => {
  const [selectReturnType, setSelectReturnType] = useState(true);

  const { cartModalRef, currentProduct } = useContext(CartContext);

  const offerPrice = Math.floor(
    currentProduct?.discountedPrice - currentProduct?.discountedPrice * 0.05
  );

  const tickIcon =
    "absolute -right-2 -top-2 bg-[#f43397] text-white text-[1.2rem] font-bold rounded-full p-1";
  const chooseBox = "w-[48%] min-h-[8rem] relative border-[1px] rounded-md";

  //console.log(currentProduct);
  return (
    <>
      {/* The button to open modal */}
      {/* <label htmlFor="my-modal-6" className="btn">
        open modal
      </label> */}

      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id="cart-modal"
        className="modal-toggle"
        ref={cartModalRef}
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {/* content */}
          <div className="border-b-2 pb-2">
            <h2 className="font-bold my-1">Select Size</h2>
            <ul className="flex items-center gap-4 my-3">
              {currentProduct?.sizes?.length == 0 ? (
                <li className="border-[1px] border-[#f43397] bg-[#fce5f1] text-[#f43397] text-sm rounded-2xl px-2 py-1 font-bold">
                  Free Size
                </li>
              ) : (
                currentProduct?.sizes?.map((size) => (
                  <li
                    key={uuidv4()}
                    className="rounded-2xl px-4 py-1 border-[1px] border-black font-bold"
                  >
                    {size}
                  </li>
                ))
              )}
            </ul>
          </div>

          <div>
            <h2 className="my-2 font-bold text-sm">Select Return Type</h2>
            <div className="flex justify-between items-center text-[13px] w-full mb-3">
              <label
                onClick={() => setSelectReturnType((prev) => !prev)}
                className={`${chooseBox} ${
                  selectReturnType
                    ? "border-[#f43397]"
                    : "border-[rgba(0,0,0,0.1)]"
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
                  !selectReturnType
                    ? "border-[#f43397]"
                    : "border-[rgba(0,0,0,0.1)]"
                }`}
              >
                <div className="">
                  <h3 className="bg-[rgba(0,0,0,0.03)] font-semibold p-2">
                    Only Wrong/Defect item Returns
                  </h3>
                  <div className="text-xl font-bold py-1 px-2">
                    ₹{offerPrice}
                  </div>
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
            <button className="w-full bg-[#f43397] flex items-center justify-center  text-white rounded-md py-2">
              <BsCart /> <span className="ml-1">Add to Cart</span>
            </button>
          </div>

          <div className="modal-action absolute right-3 -top-3">
            <label htmlFor="cart-modal" className="text-2xl">
              <RxCrossCircled />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartConfirmModal;
