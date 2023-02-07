import { useState } from "react";
import { useSelector } from "react-redux";
import Login from "./Login";
import Signup from "./Signup";

const RegisterForm = () => {
  const [formType, setFormType] = useState(false);
  const { isLoading } = useSelector((state) => state.auth);
  return (
    <div className="flex justify-center items-center relative">
      <div className="border-2 w-96 rounded-lg mt-8 bg-white shadow-sm">
        <img
          src="https://images.meesho.com/images/marketing/1661417516766.webp"
          alt="register_banner"
          className="rounded-b-none rounded-t-lg"
        />
        {formType ? <Login /> : <Signup />}
      </div>
      <button
        className={`absolute right-6 top-7 bg-[#f43397] py-1 w-20 text-white rounded-md active:scale-[0.98] hover:bg-[#e33991] transition-all ${
          isLoading && "pointer-events-none cursor-wait"
        }`}
        onClick={() => setFormType((prev) => !prev)}
      >
        {formType ? "Sign up" : "Log in"}
      </button>
    </div>
  );
};

export default RegisterForm;
