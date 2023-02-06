import { useState } from "react";
import { toast } from "react-toastify";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, reset } from "../../redux/feature/auth/authSlice";
import { useEffect } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const { name, email, password, password2 } = formData;

  const { user, isSuccess, isError, isLoading, message } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess && user) {
      toast.success("Sign up completed");
      setFormData({ name: "", email: "", password: "", password2: "" });
    }

    if (isError) {
      toast.error(message);
    }

    // eslint-disable-next-line
  }, [isSuccess, isError]);

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("Please fill all the details");
    } else if (password !== password2) {
      toast.error("Confirm password doesn't match");
    } else {
      //console.log({ name, email, password });
      dispatch(registerUser({ name, email, password }));
    }
  };

  const onInputFocus = (e) => {
    e.currentTarget.classList.add("active");
  };
  const onInputFocusOut = (e) => {
    if (!e.target.value) {
      e.currentTarget.classList.remove("active");
    }
  };

  const formGroup =
    "relative border-[1px] rounded-md my-[0.9rem] form-group transition-all";
  const spans =
    "absolute text-sm top-[24.5%] font-semibold text-[rgba(0,0,0,0.45)] left-3 bg-white px-[2px] span cursor-not-allowed transition-all";
  const inputs =
    "py-[0.5rem] outline-none px-[0.8rem] form-input w-full text-[rgba(0,0,0,0.8)] rounded-md text-sm";
  return (
    <div className="px-8 py-5">
      <h1 className="my-2 text-lg font-bold">Sign Up to view your profile</h1>
      <form onSubmit={onSubmit}>
        <div className={formGroup}>
          <input
            type="text"
            className={inputs}
            onFocus={onInputFocus}
            onBlur={onInputFocusOut}
            name="name"
            value={name}
            onChange={onChange}
            autoComplete="off"
          />
          <span className={spans}>Name</span>
        </div>
        <div className={formGroup}>
          <input
            type="email"
            className={inputs}
            onFocus={onInputFocus}
            onBlur={onInputFocusOut}
            name="email"
            value={email}
            onChange={onChange}
            autoComplete="off"
          />
          <span className={spans}>Email</span>
        </div>
        <div className={formGroup}>
          <input
            type={showPassword ? "text" : "password"}
            className={inputs}
            onFocus={onInputFocus}
            onBlur={onInputFocusOut}
            name="password"
            value={password}
            onChange={onChange}
            autoComplete="off"
          />
          <span className={spans}>Password</span>
          {showPassword ? (
            <FiEyeOff
              color="#f43397"
              size={20}
              className="absolute right-3 top-[24%] cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          ) : (
            <FiEye
              color="#f43397"
              size={20}
              className="absolute right-3 top-[24%] cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          )}
        </div>
        <div className={formGroup}>
          <input
            type="password"
            className={inputs}
            onFocus={onInputFocus}
            onBlur={onInputFocusOut}
            name="password2"
            value={password2}
            onChange={onChange}
            autoComplete="off"
          />
          <span className={spans}>Confirm Password</span>
        </div>
        <button
          type="submit"
          className="bg-[#f43397] w-full py-2 text-white rounded-md active:scale-[0.98] hover:bg-[#e33991] transition-all"
        >
          Sign up
        </button>
      </form>
      <style jsx>{`
        .form-input.active + span {
          transform: translateY(-1.2rem);
          color: #d54ca3;
        }
        .form-group:has(> .form-input.active) {
          border: 1px solid #d54ca3;
        }
      `}</style>
    </div>
  );
};

export default Signup;
