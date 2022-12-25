import Image from "next/image";
import { useContext } from "react";
import { MdOutlineLogout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import AuthContext from "../context/authContext";
import { removeItemFromStorage } from "../assets/localstorage";
import { userLogout } from "../redux/feature/auth/authSlice";

const Profile = () => {
  const { openModal } = useContext(AuthContext);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  return (
    <div className="flex py-4 px-3 items-center mt-12">
      <div className="avatar">
        <div className="w-16 rounded-full">
          <Image src="/user.png" alt="user" width={30} height={30} />
        </div>
      </div>

      {user ? (
        <div className="border-l-2 border-[rgba(0,0,0,0.2)] ml-4 p-2 relative">
          <p className="font-semibold">{user.name}</p>
          <p>{user.email}</p>
          <button
            onClick={() => {
              removeItemFromStorage("user");
              dispatch(userLogout());
            }}
            className="flex absolute right-0 -top-1 items-center bg-[#f000b8] text-white px-2 py-1 rounded-md"
          >
            Logout <MdOutlineLogout className="ml-1" />
          </button>
        </div>
      ) : (
        <div className="text-white ml-4">
          <label
            htmlFor="my-modal-6"
            className="bg-[#80489C] px-4 py-2 rounded-md text-sm mx-2"
            onClick={() => openModal("sign-up")}
          >
            Sign up
          </label>

          <label
            htmlFor="my-modal-6"
            className="bg-[#80489C] px-4 py-2 rounded-md text-sm mx-2"
            onClick={() => openModal("sign-in")}
          >
            Sign in
          </label>
        </div>
      )}
    </div>
  );
};

export default Profile;
