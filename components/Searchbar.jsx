import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { CiSearch, CiUser } from "react-icons/ci";
import { BiMobile } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  getProductsBySearch,
  reset,
} from "../redux/feature/product/productSlice";
import meeshoLogo from "../assets/Images/meesho-logo.png";
import Image from "next/image";
import ResponsiveContext from "../context/responsiveContext";
import Link from "next/link";
import hoverMenuData from "../data/hoverMenuData";
import { v4 as uuidv4 } from "uuid";
import HoverMenuItem from "./hoverMenu/HoverMenuItem";

const Searchbar = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const { searchProducts, message, isLoading, isError, isSuccess, type } =
    useSelector((state) => state.product);

  const { showSidebar, width } = useContext(ResponsiveContext);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    //console.log(type);
    if (isError && type === "products/search") {
      toast.error(message);
    }

    if (
      isSuccess &&
      type === "products/search" &&
      searchProducts?.length !== 0
    ) {
      router.push(`/${searchKeyword}`);
    }

    dispatch(reset());

    // eslint-disable-next-line
  }, [isSuccess, isError, message, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (searchKeyword.length >= 3) {
      dispatch(getProductsBySearch(searchKeyword));
    } else if (searchKeyword.length > 0) {
      toast.error("Please enter valid keyword");
      setSearchKeyword("");
    }

    //console.log(searchKeyword);
  };

  return (
    <>
      <div className="sticky -top-[2px] 2xl:top-0 z-30 bg-white py-2 md:flex md:items-center 2xl:flex 2xl:justify-between 2xl:items-center md:px-3 md:pb-3 md:pt-4 2xl:px-24 2xl:py-0">
        <div className="2xl:flex 2xl:items-center 2xl:w-[40%] md:flex md:items-center">
          <div className="hidden md:block">
            <Link href="/">
              <Image
                src={meeshoLogo}
                width={width > 1500 ? 160 : 100}
                height={25}
                alt="meesho-logo"
              />
            </Link>
          </div>
          <div className="mx-3 border-[1px] border-[rgba(0,0,0,0.2)] p-2 rounded-md md:w-[80%] 2xl:w-full">
            <CiSearch size={25} className="absolute md:top-8 2xl:top-5" />
            <form className="relative" onSubmit={onSubmit}>
              <input
                className="text-[12px] w-[80%] border-none outline-none ml-8 md:text-xl 2xl:text-[16px] md:py-1 2xl:py-0"
                type={width > 786 ? "text" : "search"}
                placeholder="Search by keyword or Product ID"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
              <button
                type="submit"
                className="bg-[#f43397] text-white px-1 text-sm rounded-md md:absolute md:right-1 md:px-6 md:py-2 2xl:hidden"
              >
                Go
              </button>
            </form>
          </div>
        </div>

        <div className="hidden 2xl:flex">
          <div className="border-r-[1px] px-6 flex items-center py-2">
            {" "}
            <BiMobile size={20} /> <span>Download app</span>
          </div>
          <div className="border-r-[1px] px-6 py-2 flex items-center">
            <Link href="/become-a-supplier">Become a Supplier</Link>
          </div>
          <div className="px-6 flex items-center gap-8 py-2">
            <div className="flex flex-col items-center">
              <CiUser size={width > 1500 ? 24 : 20} />
              <span>Profile</span>
            </div>
            <div className="flex flex-col items-center">
              <BsCart2 size={width > 1500 ? 24 : 20} />
              <span>Cart</span>
            </div>
          </div>
        </div>
        <div
          className="hidden md:block 2xl:hidden"
          onClick={() => showSidebar(true)}
        >
          <RxHamburgerMenu size={30} />
        </div>
      </div>
      <div className="hidden sticky top-16 2xl:flex 2xl:px-24 border-t-[1px] border-b-[1px] justify-between font-semibold text-[rgba(0,0,0,0.7)] z-50 bg-white">
        {hoverMenuData.map((item) => (
          <HoverMenuItem key={uuidv4()} {...item} />
        ))}
      </div>
    </>
  );
};

export default Searchbar;
