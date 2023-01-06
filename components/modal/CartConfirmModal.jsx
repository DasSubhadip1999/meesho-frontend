import { useContext } from "react";
import { RxCrossCircled } from "react-icons/rx";
import CartContext from "../../context/cartPriceContext";
import Size from "../Product Components/Size";
import ReturnTypeComp from "../modalComponents/ReturnTypeComp";

const CartConfirmModal = () => {
  const { cartModalRef, currentProduct } = useContext(CartContext);

  const offerPrice = Math.floor(
    currentProduct?.discountedPrice - currentProduct?.discountedPrice * 0.05
  );

  const handleAddToCart = () => {};

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
          <div className="border-b-2">
            <Size sizes={currentProduct.sizes} />
          </div>

          <ReturnTypeComp />

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
