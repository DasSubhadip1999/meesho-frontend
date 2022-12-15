import Image from "next/image";
import { useContext } from "react";
import AuthContext from "../context/authContext";

const Profile = () => {
  const { openModal } = useContext(AuthContext);
  return (
    <div className="flex py-4 px-3 justify-between items-center">
      <Image src="/user.png" alt="user" width={43} height={43} />
      <div className="text-white">
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
    </div>
  );
};

export default Profile;
