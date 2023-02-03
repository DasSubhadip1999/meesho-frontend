import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const formGroup = "relative border-[1px] rounded-md my-[0.9rem] form-group";
  const spans =
    "absolute text-sm top-[24.5%] font-semibold text-[rgba(0,0,0,0.45)] left-3 bg-white px-[2px] span";
  const inputs =
    "py-[0.4rem] outline-none px-3 form-input w-full text-[rgba(0,0,0,0.8)]";
  return (
    <div className="px-8 py-5">
      <h1 className="my-2 text-lg font-bold">Sign Up to view your profile</h1>
      <form>
        <div className={formGroup}>
          <input type="text" className={inputs} />
          <span className={spans}>Name</span>
        </div>
        <div className={formGroup}>
          <input type="email" className={inputs} />
          <span className={spans}>Email</span>
        </div>
        <div className={formGroup}>
          <input type="password" className={inputs} />
          <span className={spans}>Password</span>
        </div>
        <div className={formGroup}>
          <input type="password" className={inputs} />
          <span className={spans}>Confirm Password</span>
        </div>
        <button className="bg-[#f43397] w-full py-2 text-white rounded-md">
          Sign up
        </button>
      </form>
      <style jsx>{`
        .form-input + .span {
          transition: 0.2s ease-in-out;
        }
        .form-group {
          transition: 0.2s ease-in-out;
        }
        .form-group:focus-within {
          border-color: rgba(0, 0, 0, 0.5);
        }
        .form-input:focus + .span {
          transform: translateY(-1.25rem);
          color: rgba(0, 0, 0, 0.7);
        }
      `}</style>
    </div>
  );
};

export default Signup;
