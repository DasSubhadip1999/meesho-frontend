import Image from "next/image";
import { BsHeart, BsCart } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import userLogo from "../assets/user.png";

const Topbar = () => {
  return (
    <div className="flex justify-between p-2">
      <div>
        <Image src={userLogo} width={10} height={10} alt="Avatar" />
        <p>Subhadip Das</p>
      </div>
      <ul className="flex justify-between items-center w-[30%]">
        <li>
          <BsHeart size={19} />
        </li>
        <li>
          <IoMdNotificationsOutline size={23} />
        </li>
        <li>
          <BsCart size={20} />
        </li>
      </ul>
    </div>
  );
};

export default Topbar;
