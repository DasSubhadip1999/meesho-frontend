import { useContext } from "react";
import { RxCrossCircled } from "react-icons/rx";
import CartContext from "../../context/cartPriceContext";

const CartConfirmModal = () => {
  const { cartModalRef } = useContext(CartContext);
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
          <div className="border-b-2">
            <h2>Selec Size</h2>
            <ul className="flex gap-2">
              <li>M</li>
              <li>L</li>
              <li>XL</li>
            </ul>
          </div>

          <div>
            <h2>Select Return Type</h2>
            <div>
              <input type="checkbox" id="return-type" />
              <label htmlFor="return-type">Yes</label>
              <label htmlFor="return-type">No</label>
            </div>
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
