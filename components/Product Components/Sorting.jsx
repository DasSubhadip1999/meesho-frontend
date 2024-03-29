import { TbArrowsSort } from "react-icons/tb";
import { RxCaretDown } from "react-icons/rx";
import { BsFilter } from "react-icons/bs";

const Sorting = () => {
  const style =
    "border-r-[1px] last:border-none px-[0.6rem] md:px-14 font-semibold py-3 md:py-5 flex items-center text-sm md:text-xl cursor-pointer";

  return (
    <div className="sticky top-[0.66rem] z-30 lg:hidden">
      <h1 className="px-4 lg:px-20 lg:text-3xl py-2 md:py-4 text-lg md:text-lg font-bold border-b-[1px] border-[rgba(0,0,0,0.1)]">
        Products For You
      </h1>
      <div className="flex mb-1 shadow-md px-[2px] lg:px-6 sticky top-[55px] z-20 bg-white border-b-[1px] border-[rgba(0,0,0,0.1)]">
        <label htmlFor="sort-modal" className={style}>
          <TbArrowsSort />
          <span className="ml-1">Sort</span>
        </label>
        <div className={style}>
          <RxCaretDown size={23} />
          <span className="ml-1">Category</span>
        </div>
        <label htmlFor="gender-modal" className={style}>
          <RxCaretDown size={23} />
          <span className="ml-1">Gender</span>
        </label>
        <div className={style}>
          <BsFilter size={20} />
          <span className="ml-1">Filter</span>
        </div>
      </div>
    </div>
  );
};

export default Sorting;
