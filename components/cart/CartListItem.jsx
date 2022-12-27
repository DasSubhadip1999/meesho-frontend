import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { removeItemFromStorage } from "../../assets/localstorage";
import { reset } from "../../redux/feature/cart/cartSlice";
import {
  deleteCartItem,
  getCartItems,
} from "../../redux/feature/cart/cartSlice";

const CartListItem = ({ product, cartId }) => {
  const { isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (message === "Cart item removed successfully") {
      // toast.success(message);
      dispatch(getCartItems());
    }

    dispatch(reset());
    //dispatch(getCartItems());
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
            src={`http://localhost:5000/${product.images[0]}`}
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
          <p className="my-1">₹{product.discountedPrice}</p>
          <span>All Returns</span>
          <div>
            <span>Size: M</span>
            <span>Qty: 1</span>
          </div>
          <h2
            className="my-2 flex items-center font-semibold"
            onClick={handleDeleteCartItem}
          >
            <RxCross2 size={17} className="mr-1" /> Remove
          </h2>
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
