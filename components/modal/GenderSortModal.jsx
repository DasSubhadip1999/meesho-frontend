import { RxCrossCircled } from "react-icons/rx";
import { MdDone } from "react-icons/md";
import man from "../../assets/Images/Male_avatar.png";
import woman from "../../assets/Images/Female_avatar.png";
import boy from "../../assets/Images/toy_car.png";
import girl from "../../assets/Images/doll_play.png";
import Image from "next/image";
import { useContext, useState } from "react";
import SortContext from "../../context/sortContext";
import { useSelector } from "react-redux";

const GenderSortModal = () => {
  const [select, setSelect] = useState("");
  const { isLoading, isSuccess } = useSelector((state) => state.product);

  const { setSort, genderModalRef } = useContext(SortContext);

  const conditionalStyle = "border-2 border-[#f43397]";
  return (
    <>
      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id="gender-modal"
        className="modal-toggle"
        ref={genderModalRef}
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div
          className={`modal-box ${isLoading === true && "pointer-events-none"}`}
        >
          <div className="flex justify-between items-center border-b-[1px] pb-3 py-2 mb-3">
            <h1 className="text-sm font-bold">Gender</h1>
            <div className="modal-action mt-0">
              <label htmlFor="gender-modal" className="text-2xl cursor-pointer">
                <RxCrossCircled />
              </label>
            </div>
          </div>
          {/* content */}
          <div className="flex items-center justify-between border-b-[1px] pb-2">
            <div onClick={(e) => setSelect(e.target.alt)} className="relative">
              <Image
                src={man}
                alt="man"
                width={65}
                height={65}
                className={`rounded-full w-16 h-16  ${
                  select === "man" && conditionalStyle
                }`}
              />
              {select === "man" && (
                <span className="absolute right-0 top-0 bg-[#f43397] text-white rounded-full p-[1px]">
                  <MdDone />
                </span>
              )}
            </div>
            <div onClick={(e) => setSelect(e.target.alt)} className="relative">
              <Image
                src={woman}
                width={65}
                height={65}
                alt="woman"
                className={`rounded-full w-16 h-16  ${
                  select === "woman" && conditionalStyle
                }`}
              />
              {select === "woman" && (
                <span className="absolute right-0 top-0 bg-[#f43397] text-white rounded-full p-[1px]">
                  <MdDone />
                </span>
              )}
            </div>
            <div onClick={(e) => setSelect(e.target.alt)} className="relative">
              <Image
                src={boy}
                width={70}
                height={70}
                alt="boy"
                className={`rounded-full w-16 h-16 ${
                  select === "boy" && conditionalStyle
                }`}
              />
              {select === "boy" && (
                <span className="absolute right-0 top-0 bg-[#f43397] text-white rounded-full p-[1px]">
                  <MdDone />
                </span>
              )}
            </div>
            <div onClick={(e) => setSelect(e.target.alt)} className="relative">
              <Image
                src={girl}
                width={80}
                height={80}
                alt="girl"
                className={`rounded-full w-16 h-16 ${
                  select === "girl" && conditionalStyle
                }`}
              />
              {select === "girl" && (
                <span className="absolute right-0 top-0 bg-[#f43397] text-white rounded-full p-[1px]">
                  <MdDone />
                </span>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center py-3 text-sm">
            <span>1000+ Products</span>{" "}
            <button
              className="px-4 py-1 bg-[#f43397] text-white rounded-sm"
              onClick={() => setSort(select)}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GenderSortModal;
