import Image from "next/image";
import Link from "next/link";
import { BsHeart, BsCart } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import CartLogo from "../assets/CartLogo";

const Topbar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="flex justify-between items-center p-3">
      <div className="flex justify-between items-center w-[40%]">
        <Image src="/user.png" width={38} height={38} alt="avatar" />
        {user && (
          <div className="text-[13px] font-bold capitalize">{user.name}</div>
        )}
      </div>
      <ul className="flex justify-between items-center w-[30%]">
        <li>
          <BsHeart size={19} />
        </li>
        <li>
          <IoMdNotificationsOutline size={23} />
        </li>
        <li>
          <CartLogo />
        </li>
      </ul>
    </div>
  );
};

export default Topbar;
