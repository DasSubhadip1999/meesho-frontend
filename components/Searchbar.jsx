import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { CiSearch, CiUser } from "react-icons/ci";
import { BiLogOut } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
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
import { userLogout } from "../redux/feature/auth/authSlice";
import { removeItemFromStorage } from "../assets/localstorage";

const Searchbar = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [showHoverMenu, setShowHoverMenu] = useState(false);
  const { searchProducts, message, isLoading, isError, isSuccess, type } =
    useSelector((state) => state.product);
  const { user } = useSelector((state) => state.auth);

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
      <div
        className={`sticky -top-[2px] lg:top-0 z-50 bg-white py-2 md:flex md:items-center lg:flex lg:justify-between lg:items-center md:px-3 md:pb-3 md:pt-4 lg:px-24 ${
          router.pathname === "/register" ? "lg:py-2 lg:shadow-md" : "lg:py-0"
        }`}
      >
        <div className="lg:flex lg:items-center lg:w-[40%] md:flex md:items-center">
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
          <div className="mx-3 border-[1px] border-[rgba(0,0,0,0.2)] p-2 rounded-md md:w-[80%] lg:w-full">
            <CiSearch size={25} className="absolute md:top-8 lg:top-5" />
            <form className="relative" onSubmit={onSubmit}>
              <input
                className="text-[12px] w-[80%] border-none outline-none ml-8 md:text-xl lg:text-[16px] md:py-1 lg:py-0"
                type={width > 786 ? "text" : "search"}
                placeholder="Search by keyword or Product ID"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
              <button
                type="submit"
                className="bg-[#f43397] text-white px-1 text-sm rounded-md md:absolute md:right-1 md:px-6 md:py-2 lg:hidden"
              >
                Go
              </button>
            </form>
          </div>
        </div>

        <div className="hidden lg:flex py-2">
          <div className="border-r-[1px] px-6 flex items-center py-2">
            {" "}
            <BiMobile size={20} /> <span>Download app</span>
          </div>
          <div className="border-r-[1px] px-6 py-2 flex items-center">
            <Link href="/become-a-supplier">Become a Supplier</Link>
          </div>
          <div
            className={`px-6 items-center gap-8 ${
              router.pathname === "/register" ? "hidden" : "flex"
            }`}
          >
            <div
              className="flex flex-col items-center cursor-pointer hover:text-[#f43397] transition-all hover:after:block after:hidden relative after:absolute after:w-[117%] after:h-[2px] after:bg-[#f43397] after:-bottom-2"
              onMouseOver={() => setShowHoverMenu(true)}
              onMouseOut={() => setShowHoverMenu(false)}
            >
              <CiUser size={width > 1500 ? 24 : 20} />
              <span>Profile</span>
              <div
                className={`absolute bg-white text-black px-4 py-5 rounded-md top-[3rem] z-[200] hoverMenu w-[16rem] cursor-default ${
                  showHoverMenu && "active"
                }`}
                onMouseOver={() => setShowHoverMenu(true)}
                onMouseOut={() => setShowHoverMenu(false)}
              >
                {user?.isVerified ? (
                  <div className="flex items-center gap-2">
                    <img
                      src="/user.png"
                      alt="user avatar"
                      className="w-9 h-9"
                    />
                    <div>
                      <h1 className="font-semibold">{user?.name}</h1>
                      <p className="text-[13px]">{user?.email}</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <h1 className="font-semibold my-1">Hello User</h1>
                    <p className="text-xs my-[5px]">
                      To access your Meesho account
                    </p>
                    <button className="bg-[#f43397] text-white w-full font-semibold py-3 my-1 rounded-md active:scale-[0.98] transition-all">
                      <Link href="/register">Sign up</Link>
                    </button>
                  </>
                )}
                <div className="pt-3 px-2 mt-3 flex items-center gap-3 border-t-[1px] border-[rgba(0,0,0,0.2)]">
                  <HiOutlineShoppingBag />
                  <span className="cursor-pointer">My Orders</span>
                </div>
                {user?.isVerified && (
                  <div className="flex items-center px-1 mt-3 gap-3 border-t-[1px] border-[rgba(0,0,0,0.2)] pt-3">
                    <BiLogOut />
                    <span
                      className="cursor-pointer"
                      onClick={() => {
                        dispatch(userLogout());
                        removeItemFromStorage("user");
                      }}
                    >
                      Log out
                    </span>
                  </div>
                )}
              </div>
            </div>
            <style jsx>{`
              .hoverMenu {
                box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                display: none;
                transition: display 0.5s linear;
              }
              .hoverMenu.active {
                display: block;
              }
            `}</style>
            <div className="flex flex-col items-center">
              <BsCart2 size={width > 1500 ? 24 : 20} />
              <span>Cart</span>
            </div>
          </div>
        </div>
        <div
          className="hidden md:block lg:hidden"
          onClick={() => showSidebar(true)}
        >
          <RxHamburgerMenu size={30} />
        </div>
      </div>
      <div
        className={`hidden sticky top-16 lg:${
          router.pathname === "/register" ? "hidden" : "flex"
        }  lg:px-24 border-t-[1px] border-b-[1px] justify-between font-semibold text-[rgba(0,0,0,0.7)] z-40 bg-white shadow-sm`}
      >
        {hoverMenuData.map((item) => (
          <HoverMenuItem key={uuidv4()} {...item} />
        ))}
      </div>
    </>
  );
};

export default Searchbar;
