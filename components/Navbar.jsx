import { MdOutlineBorderAll } from "react-icons/md";
import { BsBag } from "react-icons/bs";
import { TbUsers } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import Image from "next/image";
import homeLogo from "../assets/home.png";

const Navbar = () => {
  return (
    <>
      <nav className="absolute bottom-0 w-full">
        <ul className="flex justify-between items-center px-3 pt-3 pb-2 upper-shadow shadow-[0px_-0px_6px_0px_rgba(0,0,0,0.2)]">
          <li>
            <Image
              className="pb-2"
              src={homeLogo}
              width={40}
              height={40}
              alt="home logo"
            />
          </li>
          <li className="flex flex-col items-center">
            <MdOutlineBorderAll size={25} />
            <p className="text-[11px] my-1">Catagories</p>
          </li>
          <li className="flex flex-col items-center">
            <BsBag size={25} />
            <p className="text-[11px] my-1">My Orders</p>
          </li>
          <li className="flex flex-col items-center">
            <TbUsers size={25} />
            <p className="text-[11px] my-1">Community</p>
          </li>
          <li className="flex flex-col items-center">
            <AiOutlineUser size={25} />
            <p className="text-[11px] my-1">Account</p>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
