import { CiSearch } from "react-icons/ci";

const Searchbar = () => {
  return (
    <div className="sticky -top-[2px] z-20 bg-white py-2">
      <div className="mx-3 border-[1px] border-[rgba(0,0,0,0.2)] p-2 rounded-md">
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
