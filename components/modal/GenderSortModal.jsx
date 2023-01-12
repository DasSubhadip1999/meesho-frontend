import { RxCrossCircled } from "react-icons/rx";

const GenderSortModal = () => {
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="gender-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex justify-between items-center border-b-[1px] pb-3 py-2 mb-3">
            <h1 className="text-sm font-bold">Gender</h1>
            <div className="modal-action mt-0">
              <label htmlFor="sort-modal" className="text-2xl">
                <RxCrossCircled />
              </label>
            </div>
          </div>
          {/* content */}
        </div>
      </div>
    </>
  );
};

export default GenderSortModal;
