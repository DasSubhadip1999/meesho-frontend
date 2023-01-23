import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { BsHeart } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import CartLogo from "../assets/CartLogo";
import ResponsiveContext from "../context/responsiveContext";

const Topbar = () => {
  const { userName } = useContext(ResponsiveContext);

  return (
    <div className="flex justify-between items-center px-3 pt-3 pb-1 md:hidden">
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
