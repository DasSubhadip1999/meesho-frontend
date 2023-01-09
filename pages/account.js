import { BsCart, BsSearch } from "react-icons/bs";
import CartLogo from "../assets/CartLogo";
import Menu from "../components/Menu";
import Profile from "../components/Profile";

const Account = () => {
  //
  return (
    <div>
      <header className="flex justify-between items-center p-3 border-b-[1px] border-[rgba(0,0,0,0.2)] fixed z-20 bg-white top-0 w-full">
        <span className="text-md font-semibold">ACCOUNT</span>
        <div className="w-[18%] flex justify-between items-center">
          <BsSearch size={20} />
          <CartLogo />
        </div>
      </header>
      <Profile />
      <Menu />
    </div>
  );
};

export default Account;
