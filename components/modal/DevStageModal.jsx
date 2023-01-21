import { useEffect, useRef } from "react";

const DevStageModal = () => {
  const devRef = useRef(null);

  useEffect(() => {
    devRef.current.checked = true;
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="dev" className="modal-toggle" ref={devRef} />
      <div className="modal modal-bottom sm:modal-middle hidden 2xl:block 2xl:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Thank You Visiting! Full Screen is on development
          </h3>
          <p className="py-4">
            Please switch to mobile view for full experience
          </p>
          <div className="modal-action">
            <label htmlFor="dev" className="btn">
              OK
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DevStageModal;
