import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsHeart } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import CartLogo from "../assets/CartLogo";

const Topbar = () => {
  const { user } = useSelector((state) => state.auth);
  const [userName, setUserName] = useState("Not Loggedin");

  useEffect(() => {
    if (user) {
      setUserName(user?.name);
    }
  }, [user]);

  return (
    <div className="flex justify-between items-center p-3">
      <div className="flex justify-between items-center w-[40%]">
        <Image src="/user.png" width={38} height={38} alt="avatar" />
        <div className="text-sm">{userName}</div>
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
