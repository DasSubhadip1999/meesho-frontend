import useAuthStatus from "../hooks/useAuthStatus";
import HashLoaderComponent from "../assets/HashLoaderComponent";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import ProgressSteps from "../components/cart/ProgressSteps";
import CartList from "../components/cart/CartList";
import EmptyCart from "../components/cart/EmptyCart";
import CartTopbar from "../components/cart/CartTopbar";
import { useContext } from "react";
import ProgressStepsContext from "../context/progressStepsContext";
import AddressPage from "../components/cart/AddressPage";
import PaymentPage from "../components/payment/PaymentPage";
import OrderSummaryPage from "../components/orderSummary/OrderSummaryPage";

const Cart = () => {
  const { user } = useSelector((state) => state.auth);
  const { allCartItems, isLoading: cartIsLoading } = useSelector(
    (state) => state.cart
  );
  const { isLoading } = useSelector((state) => state.order);
  const { checking, isLoggedIn } = useAuthStatus(user);
  const {
    progress: { cart, address, payment, summary },
  } = useContext(ProgressStepsContext);
  const router = useRouter();
  const dispatch = useDispatch();

  if (checking || isLoading || cartIsLoading) {
    return <HashLoaderComponent />;
  }

  if (!isLoggedIn) {
    router.push("/account");
  }

  if (isLoggedIn) {
    return (
      <>
        <CartTopbar />
        {allCartItems.length ? (
          <>
            <div className="lg:hidden">
              <ProgressSteps />
            </div>
            {cart.pending && <CartList />}
            {address.pending && <AddressPage />}
            {payment.pending && <PaymentPage />}
            {summary.pending && <OrderSummaryPage />}
          </>
        ) : (
          <EmptyCart />
        )}
      </>
    );
  }
};

export default Cart;
