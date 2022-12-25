import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Searchbar = () => {
  const [scrollVal, setScrollVal] = useState(0);
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setScrollVal(scrollY);
    });
  }
  return (
    <div
      className={`${
        scrollVal > 57 && "z-20 fixed top-0 bg-white w-full h-16 pt-2"
      }`}
    >
      <div
        className={`p-2 border-[1px] border-[rgba(0,0,0,0.4)] mx-3 mt-1 rounded-md ${
          scrollVal > 57 ? "w-[94%]" : "relative"
        }`}
      >
        <CiSearch size={25} className="absolute" />
        <input
          className="text-[12px] w-[80%] border-none outline-none ml-8"
          type="text"
          placeholder="Search by keyword or Product ID"
        />
      </div>
    </div>
  );
};

export default Searchbar;
