import useAuthStatus from "../hooks/useAuthStatus";
import Loading from "../assets/Loading";
import { useRouter } from "next/router";
import { BsCart, BsSearch } from "react-icons/bs";
import Searchbar from "../components/Searchbar";
import { useSelector } from "react-redux";

const myOders = () => {
  const { user } = useSelector((state) => state.auth);
  const { checking, isLoggedIn } = useAuthStatus(user);

  const router = useRouter();

  if (checking) {
    return <Loading />;
  }

  if (!isLoggedIn) {
    router.push("/account");
  }

  if (isLoggedIn) {
    return (
      <div>
        <header className="flex justify-between items-center p-3 border-b-[1px] border-[rgba(0,0,0,0.2)] fixed z-20 bg-white top-0 w-full">
          <span className="text-md font-semibold">MY ORDERS</span>
          <div className="w-[18%] flex justify-between items-center">
            <BsSearch size={20} />
            <BsCart size={20} />
          </div>
        </header>
        <h1 className="mt-16 px-3">Your Orders</h1>
        <Searchbar />
      </div>
    );
  }
};

export default myOders;
