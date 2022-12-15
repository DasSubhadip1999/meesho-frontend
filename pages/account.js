import { BsCart, BsSearch } from "react-icons/bs";
import { useState } from "react";
import Profile from "../components/Profile";

const account = () => {
  const [isLogin, setLogin] = useState(true);
  return (
    <div>
      <header className="flex justify-between items-center p-3 border-b-[1px] border-[rgba(0,0,0,0.2)]">
        <span className="text-md font-semibold">ACCOUNT</span>
        <div className="w-[18%] flex justify-between items-center">
          <BsSearch size={20} />
          <BsCart size={20} />
        </div>
      </header>
      {isLogin ? <Profile /> : <div>Login</div>}
    </div>
  );
};

export default account;
