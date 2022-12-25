import Link from "next/link";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { BsHeart, BsCart } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";

const ProductTopbar = () => {
  return (
    <div className="flex justify-between items-center p-3 w-full fixed top-0 bg-white z-20">
      <Link href="/">
        <MdOutlineArrowBackIosNew />
      </Link>
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

export default ProductTopbar;
