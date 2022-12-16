import AuthContext from "../context/authContext";
import { useContext } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { RxCrossCircled } from "react-icons/rx";

const AuthModal = () => {
  const { authType } = useContext(AuthContext);

  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-top sm:modal-middle">
        <div className="modal-box">
          {/* design */}
          {authType === "sign-up" ? <SignUp /> : <SignIn />}

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
