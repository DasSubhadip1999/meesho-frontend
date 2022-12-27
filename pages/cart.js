import useAuthStatus from "../hooks/useAuthStatus";
import HashLoaderComponent from "../assets/HashLoaderComponent";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Link from "next/link";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import ProgressSteps from "../components/cart/ProgressSteps";
import CartList from "../components/cart/CartList";

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
    return (
      <>
        <div className="flex items-center gap-3 border-2 p-3">
          <Link href="/">
            <MdOutlineArrowBackIosNew size={22} />
          </Link>
          <span className="text-sm font-semibold">CART</span>
        </div>
        <ProgressSteps />
        {/*  */}
        <CartList />
        <div className="fixed bottom-0 z-20 bg-white w-full flex justify-between items-center p-3">
          <h1 className="text-xl font-bold">₹704</h1>
          <button className="bg-[#f43397] text-white px-3 py-2 w-[48%] mb-1 rounded-md flex items-center justify-center">
            Continute
          </button>
        </div>
      </>
    );
  }
};

export default cart;
