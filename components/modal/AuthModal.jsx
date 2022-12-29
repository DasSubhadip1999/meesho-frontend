import AuthContext from "../../context/authContext";
import { useContext } from "react";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import { RxCrossCircled } from "react-icons/rx";
import { useSelector } from "react-redux";
import HashLoader from "react-spinners/HashLoader";

const AuthModal = () => {
  const { authType, modelAutoClose } = useContext(AuthContext);
  const { isLoading } = useSelector((state) => state.auth);

  const overrideCss = {
    position: "absolute",
    left: "43%",
    top: "48%",
    zIndex: 20,
  };

  return (
    <>
      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id="my-modal-6"
        className="modal-toggle"
        ref={modelAutoClose}
      />
      <div
        className={`modal modal-bottom sm:modal-middle ${
          isLoading && "pointer-events-none"
        }`}
      >
        <div className="modal-box">
          {/* design */}
          {authType === "sign-up" ? <SignUp /> : <SignIn />}
          {isLoading && (
            <HashLoader color="#80489C" size={50} cssOverride={overrideCss} />
          )}
          {/* actions */}
          <div className="modal-action absolute right-3 -top-3">
            <label htmlFor="my-modal-6" className="text-2xl">
              <RxCrossCircled />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthModal;
