import { useState, useContext } from "react";
import { RxCaretDown } from "react-icons/rx";
import SortContext from "../../context/sortContext";

const LGSorting = () => {
  const [sortText, setSortText] = useState("Relevence");
  const [listMenu, setListMenu] = useState(false);
  const { setSort } = useContext(SortContext);

  const listStyle =
    "py-3 px-4 hover:bg-[#f9f9f9] cursor-pointer font-semibold text-[rgba(0,0,0,0.6)] text-[15px] rounded-sm";

  return (
    <div className="hidden lg:flex flex-col lg:w-[40%]">
      <h1 className="text-3xl font-bold">Products For You</h1>
      <div
        className="relative border-[1px] px-3 py-2 my-4 rounded-md cursor-pointer"
        onClick={() => setListMenu((prev) => !prev)}
      >
        <span className="font-semibold text-[rgba(0,0,0,0.6)]">Sort by:</span>{" "}
        <span className="font-semibold capitalize">{sortText}</span>
        <RxCaretDown className="absolute right-2 top-2" size={25} />
        {listMenu && (
          <ul className="absolute top-[2.8rem] -left-1 border-[1px] w-[102%] rounded-md shadow-md max-h-[12rem] overflow-y-auto customScrollbar">
            <li
              className={listStyle}
              onClick={() => {
                setSortText("Relevence");
                setSort("relevence");
              }}
            >
              Relevence
            </li>
            <li
              className={listStyle}
              onClick={() => {
                setSortText("New Arrivals");
                setSort("new-arrivals");
              }}
            >
              New Arrivals
            </li>
            <li
              className={listStyle}
              onClick={() => {
                setSortText("High to Low");
                setSort("high-to-low");
              }}
            >
              Price (High to Low)
            </li>
            <li
              className={listStyle}
              onClick={() => {
                setSortText("Low to High");
                setSort("low-to-high");
              }}
            >
              Price (Low to High)
            </li>
            <li
              className={listStyle}
              onClick={() => {
                setSortText("Ratings");
                setSort("ratings");
              }}
            >
              Ratings
            </li>
            <li
              className={listStyle}
              onClick={() => {
                setSortText("Discount");
                setSort("discount");
              }}
            >
              Discount
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default LGSorting;
