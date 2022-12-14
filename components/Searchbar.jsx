import { CiSearch } from "react-icons/ci";

const Searchbar = () => {
  return (
    <div className="p-2 border-[1px] border-[rgba(0,0,0,0.4)] relative mx-3 mt-1 rounded-md">
      <CiSearch size={25} className="absolute" />
      <input
        className="text-[12px] w-[80%] border-none outline-none ml-8"
        type="text"
        placeholder="Search by keyword or Product ID"
      />
    </div>
  );
};

export default Searchbar;
