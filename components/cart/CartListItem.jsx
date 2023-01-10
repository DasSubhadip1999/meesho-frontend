import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
import ProgressStepsContext from "../../context/progressStepsContext";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { removeItemFromStorage } from "../../assets/localstorage";
import { reset } from "../../redux/feature/cart/cartSlice";
import {
  deleteCartItem,
  getCartItems,
} from "../../redux/feature/cart/cartSlice";
import CartContext from "../../context/cartPriceContext";

const CartListItem = ({ product, cartId, userCart }) => {
  const { isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.cart
  );
  const {
    progress: { summary },
  } = useContext(ProgressStepsContext);
  const dispatch = useDispatch();

  const { imageURL } = useContext(CartContext);

  useEffect(() => {
    if (message === "Cart item removed successfully") {
      // toast.success(message);
      dispatch(getCartItems());
    }

    dispatch(reset());

    // eslint-disable-next-line
  }, []);

  //remove cart item
  const handleDeleteCartItem = () => {
    dispatch(deleteCartItem(cartId));
    removeItemFromStorage("cart");
  };

  return (
    <div className="bg-white mb-3">
      <div className="flex px-4 py-3 border-b-[1px]">
        <Link href={`/products/${product._id}`}>
          <Image
            src={imageURL + product.images[0]}
            alt="cart product image"
            width={80}
            height={80}
            className="rounded-md"
          />
        </Link>
        <div className="ml-3 text-[13px]">
          <h1 className="text-sm font-semibold">
            {product.name.substring(0, 50)}
          </h1>
          <p className="my-1">₹{userCart?.buyingPrice}</p>
          <span className="capitalize">{userCart?.returnType}</span>
          <div className="flex gap-2">
            <span>Size: {userCart?.size}</span>
            <span>Qty: 1</span>
          </div>
          {!summary.pending && (
            <h2
              className="my-2 flex items-center font-semibold"
              onClick={handleDeleteCartItem}
            >
              <RxCross2 size={17} className="mr-1" /> Remove
            </h2>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center px-3 py-3 text-[13px]">
        <div className="flex">
          <span>Supplier:</span>
          <span className="uppercase font-semibold ml-1">
            KRITIKA COLLECTION
          </span>
        </div>
        <span>Free Delivery</span>
      </div>
    </div>
  );
};

export default CartListItem;
