import Link from "next/link";
import { useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/Md";
import { toast } from "react-toastify";

const account = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

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
      console.log(formData);
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
        Login / Signup to Supplier Hub
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
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              className="input input-bordered"
              onChange={onChange}
            />
          </label>
        </div>
        <ul className="text-sm list-disc px-6 my-7">
          <li>Password should have at least on special character.</li>
          <li>Password should have at least on digit [0-9]</li>
          <li>Password should have at least one uppercase letter.</li>
          <li>Password should have minimum length of six.</li>
        </ul>
        <button
          type="submit"
          className="btn w-full bg-[#f43397] outline-none border-none my-3"
        >
          Sign Up
        </button>
      </form>
      <div className="flex flex-col justify-center items-center">
        <span className="text-sm">By continuing you agree to Meesho's</span>
        <Link href="/terms-service" className="text-sm my-1">
          <span className="text-blue-700 mr-[2px]">Terms & Conditions</span>and
          <span className="text-blue-700 ml-[2px]">Privacy Policy</span>
        </Link>
      </div>
    </>
  );
};

export default account;
