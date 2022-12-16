import { BsCart, BsSearch } from "react-icons/bs";
import { useState } from "react";
import Profile from "../components/Profile";
import { useSelector } from "react-redux";
import HashLoader from "react-spinners/HashLoader";
const account = () => {
  const [isLogin, setLogin] = useState(true);
  const { isLoading } = useSelector((state) => state.auth);

  const overrideCss = {
    position: "absolute",
    left: "43%",
    top: "48%",
  };

  if (isLoading) {
    return <HashLoader color="#80489C" size={50} cssOverride={overrideCss} />;
  }
  //
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
