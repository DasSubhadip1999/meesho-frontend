import { RxCrossCircled } from "react-icons/rx";

const SortModal = () => {
  return (
    <div>
      <input type="checkbox" id="sort-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {/* content */}

          <div className="modal-action absolute right-3 -top-3">
            <label htmlFor="sort-modal" className="text-2xl">
              <RxCrossCircled />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortModal;
