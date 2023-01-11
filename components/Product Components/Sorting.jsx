import { TbArrowsSort } from "react-icons/tb";
import { RxCaretDown } from "react-icons/rx";
import { BsFilter } from "react-icons/bs";
const Sorting = () => {
  const style = "border-r-[1px] last:border-none px-2 py-2 flex items-center";

  return (
    <>
      <h1 className="px-4 py-2 text-lg font-bold border-b-[1px] border-[rgba(0,0,0,0.1)]">
        Products For You
      </h1>
      <div className="flex mb-1 shadow-md px-[2px] sticky top-[55px] z-20 bg-white border-b-[1px] border-[rgba(0,0,0,0.1)]">
        <label htmlFor="sort-modal" className={style}>
          <TbArrowsSort />
          <span className="ml-1">Sort</span>
        </label>
        <div className={style}>
          <RxCaretDown size={23} />
          <span className="ml-1">Category</span>
        </div>
        <div className={style}>
          <RxCaretDown size={23} />
          <span className="ml-1">Gender</span>
        </div>
        <div className={style}>
          <BsFilter size={20} />
          <span className="ml-1">Filter</span>
        </div>
      </div>
    </>
  );
};

export default Sorting;
