import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import HashLoaderComponent from "../../assets/HashLoaderComponent";
import { getCartItems, reset } from "../../redux/feature/cart/cartSlice";
import CartListItem from "./CartListItem";
import CartPricing from "./CartPricing";
import WishList from "./WishList";

const CartList = () => {
  const { allCartItems, isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(message);
      dispatch(reset());
    }

    if (isSuccess) {
      dispatch(reset());
    }

    // eslint-disable-next-line
  }, [isError]);

  // useEffect(() => {
  //   dispatch(getCartItems());

  //   // eslint-disable-next-line
  // }, []);

  if (isLoading) {
    return <HashLoaderComponent />;
  } else {
    return (
      <div className="bg-[#e6ebf8]">
        {allCartItems.length &&
          allCartItems.map((cartItem) => (
            <CartListItem
              key={uuidv4()}
              product={cartItem?.product}
              userCart={cartItem?.userSelection}
              cartId={cartItem._id}
            />
          ))}
        <WishList />
        <CartPricing carts={allCartItems} />
      </div>
    );
  }
};

export default CartList;
