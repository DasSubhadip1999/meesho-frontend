import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineRemoveRedEye,
} from "react-icons/Md";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { loginSeller, reset } from "../../../redux/feature/auth/authSlice";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = formData;
  const { seller, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess && seller && router.pathname !== "/account") {
      router.push("/supplier/account");
    }

    dispatch(reset());

    // eslint-disable-next-line
  }, [seller, isError, isSuccess, message, dispatch]);

  const onChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    let strongPassword = new RegExp(
      "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,})"
    );
    if (!email || !password) {
      toast.error("Please fill all details");
    } else if (strongPassword.test(password)) {
      dispatch(loginSeller(formData));
      setFormData({
        email: "",
        password: "",
      });
    } else {
      toast.error("Password error");
    }
  };

  return (
    <>
      <div className="border-2 p-3">
        <Link href="/become-a-supplier" className="">
          <MdOutlineArrowBackIosNew size={22} />
        </Link>
      </div>
      <header className="px-5 py-1 font-bold">
        <Link className="text-[#f43397]" href="/supplier/account/sign-in">
          Login
        </Link>{" "}
        /{" "}
        <Link className="text-[#f43397]" href="/supplier/account/sign-up">
          Sign up
        </Link>{" "}
        to Supplier Hub
      </header>
      {/*  */}
      <form className="px-4" onSubmit={onSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <label className="input-group">
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="info@site.com"
              className="input input-bordered"
              onChange={onChange}
            />
          </label>
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Your Password</span>
          </label>
          <label className="input-group">
            <span>Password</span>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              placeholder="Enter your password"
              className="input input-bordered"
              onChange={onChange}
            />
            {!showPassword ? (
              <MdOutlineRemoveRedEye
                size={24}
                className="absolute right-3 top-[3rem] text-[#f43397]"
                onClick={() => setShowPassword(true)}
              />
            ) : (
              <AiOutlineEyeInvisible
                size={24}
                className="absolute right-3 top-[3rem] text-[#f43397]"
                onClick={() => setShowPassword(false)}
              />
            )}
          </label>
        </div>
        <ul className="text-sm list-disc px-6 my-5">
          <li>Password should have at least on special character.</li>
          <li>Password should have at least on digit [0-9]</li>
          <li>Password should have at least one uppercase letter.</li>
          <li>Password should have minimum length of six.</li>
        </ul>
        <button
          type="submit"
          className="btn w-full bg-[#f43397] outline-none border-none my-3"
        >
          Sign In
        </button>
      </form>
      <div className="flex flex-col justify-center items-center pb-20">
        <span className="text-sm">
          By continuing you agree to Meesho&apos;s
        </span>
        <Link href="/terms-service" className="text-sm my-1">
          <span className="text-blue-700 mr-[2px]">Terms & Conditions</span>and
          <span className="text-blue-700 ml-[2px]">Privacy Policy</span>
        </Link>
      </div>
    </>
  );
};

export default SignIn;
