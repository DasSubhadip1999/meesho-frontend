import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { BsHeart, BsCart } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import ResponsiveContext from "../../context/responsiveContext";

const Sidebar = () => {
  const { showSidebar, sidebar, userName } = useContext(ResponsiveContext);

  const style =
    "flex gap-3 border-[1px] rounded-md border-[#f43397] my-2 p-3 items-center text-[#f43397] text-lg font-semibold";
  const containerStyle =
    "fixed z-40 hidden 2xl:hidden md:flex flex-col w-[45%] h-full bg-white px-6 pt-16";

  return (
    <div
      className={`${containerStyle} ${sidebar ? "right-0" : "right-[-23rem]"}`}
      style={{
        transition: "ease-in-out",
        transitionDuration: "350ms",
        boxShadow: "0 -0px 5px 5px rgba(0,0,0,0.1)",
      }}
    >
      <span
        className="absolute right-4 top-5"
        onClick={() => showSidebar(false)}
      >
        <RxCross2 size={35} color="#f43397" />
      </span>

      <Link href="/account" className={style}>
        <Image src="/user.png" width={35} height={35} alt="avatar" />
        <span>{userName}</span>
      </Link>
      <div className={style}>
        <BsHeart size={27} />
        <span>Wishlist</span>
      </div>
      <div className={style}>
        <IoMdNotificationsOutline size={32} />
        <span>Notification</span>
      </div>
      <Link href="/cart" className={style}>
        <BsCart size={27} />
        <span>Cart</span>
      </Link>
    </div>
  );
};

export default Sidebar;
