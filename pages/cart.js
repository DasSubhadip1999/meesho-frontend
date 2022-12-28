import useAuthStatus from "../hooks/useAuthStatus";
import HashLoaderComponent from "../assets/HashLoaderComponent";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import ProgressSteps from "../components/cart/ProgressSteps";
import CartList from "../components/cart/CartList";
import EmptyCart from "../components/cart/EmptyCart";
import CartTopbar from "../components/cart/CartTopbar";
import { useContext } from "react";
import ProgressStepsContext from "../context/progressStepsContext";
import AddressPage from "../components/cart/AddressPage";

const cart = () => {
  const { user } = useSelector((state) => state.auth);
  const { allCartItems } = useSelector((state) => state.cart);
  const { checking, isLoggedIn } = useAuthStatus(user);
  const {
    progress: { cart, address },
  } = useContext(ProgressStepsContext);
  const router = useRouter();

  if (checking) {
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
            <ProgressSteps />
            {cart.pending && <CartList />}
            {address.pending && <AddressPage />}
          </>
        ) : (
          <EmptyCart />
        )}
      </>
    );
  }
};

export default cart;
