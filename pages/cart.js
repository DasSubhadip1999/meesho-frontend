import useAuthStatus from "../hooks/useAuthStatus";
import HashLoaderComponent from "../assets/HashLoaderComponent";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import CartComponent from "../components/cart/cartComponent";

const cart = () => {
  const { user } = useSelector((state) => state.auth);
  const { checking, isLoggedIn } = useAuthStatus(user);
  const router = useRouter();

  if (checking) {
    return <HashLoaderComponent />;
  }

  if (!isLoggedIn) {
    router.push("/account");
  }

  if (isLoggedIn) {
    return <CartComponent />;
  }
};

export default cart;
