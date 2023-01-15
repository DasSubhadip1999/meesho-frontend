import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
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

const Searchbar = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const { searchProducts, message, isLoading, isError, isSuccess, type } =
    useSelector((state) => state.product);

  const { showSidebar } = useContext(ResponsiveContext);

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
    <div className="sticky -top-[2px] z-30 bg-white py-2 md:flex md:items-center md:px-3 md:pb-3 md:pt-4">
      <div className="hidden md:block">
        <Image src={meeshoLogo} width={100} height={20} alt="meesho-logo" />
      </div>
      <div className="mx-3 border-[1px] border-[rgba(0,0,0,0.2)] p-2 rounded-md md:w-[80%]">
        <CiSearch size={25} className="absolute md:top-8" />
        <form className="relative" onSubmit={onSubmit}>
          <input
            className="text-[12px] w-[80%] border-none outline-none ml-8 md:text-xl md:py-1"
            type="search"
            placeholder="Search by keyword or Product ID"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#f43397] text-white px-1 text-sm rounded-md md:absolute md:right-1 md:px-6 md:py-2"
          >
            Go
          </button>
        </form>
      </div>
      <div className="hidden md:block" onClick={() => showSidebar(true)}>
        <RxHamburgerMenu size={30} />
      </div>
    </div>
  );
};

export default Searchbar;
