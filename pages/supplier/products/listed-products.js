import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

const ListedProducts = () => {
  return (
    <div>
      <header className="fixed top-0 z-20 flex items-center py-4 px-3 w-full bg-white border-b-[1px] border-[rgba(0,0,0,0.1)] shadow-sm">
        <Link href="/supplier/account">
          <MdOutlineArrowBackIosNew />
        </Link>
        <span className="ml-4 text-sm font-semibold">MY LISTINGS</span>
      </header>
      <div className="mt-14 pb-2 border-b-[1px] border-[rgba(0,0,0,0.1)]">
        <h1 className="font-semibold px-3 py-1">Your Listings</h1>
        <div className="bg-white py-2">
          <div className="mx-3 border-[1px] border-[rgba(0,0,0,0.2)] p-2 rounded-md">
            <CiSearch size={25} className="absolute" />
            <input
              className="text-[12px] w-[80%] border-none outline-none ml-8"
              type="text"
              placeholder="Search by keyword or Product ID"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedProducts;
