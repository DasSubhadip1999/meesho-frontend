import { RxCrossCircled } from "react-icons/rx";
import { useContext } from "react";
import SortContext from "../../context/sortContext";

const SortModal = () => {
  const { setSort, sortModalRef } = useContext(SortContext);

  const style = "flex justify-between my-5 text-xs items-center";
  return (
    <div>
      <input
        type="checkbox"
        id="sort-modal"
        ref={sortModalRef}
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {/* content */}
          <div>
            <div className="flex justify-between items-center border-b-[1px] pb-3 py-2 mb-3">
              <h1 className="text-sm font-bold">SORT</h1>
              <div className="modal-action mt-0">
                <label htmlFor="sort-modal" className="text-2xl">
                  <RxCrossCircled />
                </label>
              </div>
            </div>
            <div className={style}>
              <span>New Arrivals</span>
              <input
                type="radio"
                name="radio-3"
                value="new-arrivals"
                className="radio radio-secondary"
                onClick={(e) => setSort(e.target.value)}
              />
            </div>
            <div className={style}>
              <span>Price (High to Low)</span>
              <input
                type="radio"
                name="radio-3"
                value="high-to-low"
                className="radio radio-secondary"
                onClick={(e) => setSort(e.target.value)}
              />
            </div>
            <div className={style}>
              <span>Price (Low to High)</span>
              <input
                type="radio"
                name="radio-3"
                value="low-to-high"
                className="radio radio-secondary"
                onClick={(e) => setSort(e.target.value)}
              />
            </div>
            <div className={style}>
              <span>Ratings</span>
              <input
                type="radio"
                name="radio-3"
                value="ratings"
                className="radio radio-secondary"
                onClick={(e) => setSort(e.target.value)}
              />
            </div>
            <div className={style}>
              <span>Discount</span>
              <input
                type="radio"
                name="radio-3"
                value="discount"
                className="radio radio-secondary"
                onClick={(e) => setSort(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortModal;
