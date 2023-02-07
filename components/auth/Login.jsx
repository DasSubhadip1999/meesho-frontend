import { useState } from "react";
import { toast } from "react-toastify";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, reset } from "../../redux/feature/auth/authSlice";
import { useEffect } from "react";
import ClipLoaderComponent from "../../assets/ClipLoaderComponent";
import { useRef } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = formData;

  const { user, isSuccess, isError, isLoading, message, type } = useSelector(
    (state) => state.auth
  );

  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  let allInput = [emailInput, passwordInput];

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (isSuccess && user && type === "user-login") {
      toast.success("Login Successfull");
      setFormData({ email: "", password: "" });
      allInput.forEach((item) => item.current.classList.remove("active"));
      dispatch(reset());
      router.push("/");
    }

    if (isError && type === "user-login") {
      toast.error(message);
      dispatch(reset());
    }

    // eslint-disable-next-line
  }, [isSuccess, isError]);

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill all the details");
    } else {
      dispatch(loginUser({ email, password }));
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
    <div className="px-8 py-5 relative">
      <h1 className="my-2 text-lg font-bold">Login to view your profile</h1>
      {isLoading && <ClipLoaderComponent />}
      <form onSubmit={onSubmit}>
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
            ref={emailInput}
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
            ref={passwordInput}
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

        <button
          type="submit"
          className={`bg-[#f43397] w-full py-2 text-white rounded-md active:scale-[0.98] hover:bg-[#e33991] transition-all ${
            isLoading && "pointer-events-none"
          }`}
        >
          Log in
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

export default Login;
