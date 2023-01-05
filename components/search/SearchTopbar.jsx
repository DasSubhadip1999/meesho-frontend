import Link from "next/link";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { BsHeart } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import CartLogo from "../../assets/CartLogo";

const SearchTopbar = ({ searchText }) => {
  return (
    <header className="fixed justify-between top-0 z-20 flex items-center py-4 px-3 w-full bg-white border-b-[1px] border-[rgba(0,0,0,0.1)] shadow-sm">
      <div className="flex items-center">
        <Link href="/">
          <MdOutlineArrowBackIosNew />
        </Link>
        <span className="ml-2 mt-[2px] text-sm font-bold uppercase">
          {searchText}
        </span>
      </div>
      <ul className="flex gap-3 items-center">
        <li>
          <CiSearch size={25} />
        </li>
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
    </header>
  );
};

export default SearchTopbar;
