import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import AuthContext from "../context/authContext";
import { loginUser, reset } from "../redux/feature/auth/authSlice";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { user, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const { email, password } = formData;
  const dispatch = useDispatch();
  const { modelAutoClose } = useContext(AuthContext);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess && user) {
      toast.success("Login successfull");
      modelAutoClose.current.checked = false;
    }

    dispatch(reset());
  }, [isError, isSuccess, message, dispatch]);

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill all details");
    } else {
      dispatch(loginUser({ email, password }));
      setFormData({
        email: "",
        password: "",
      });
    }
  };

  const inputStyle =
    "outline-none border-[1px] border-[rgba(0,0,0,0.2)] p-2 w-full rounded-md";
  const formGroupStyle = "my-2";
  return (
    <div>
      <h1 className="text-lg font-semibold">Login to your account</h1>
      <form onSubmit={onSubmit}>
        <div className={formGroupStyle}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            className={inputStyle}
            onChange={onChange}
          />
        </div>
        <div className={formGroupStyle}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            className={inputStyle}
            onChange={onChange}
          />
        </div>
        <input
          type="submit"
          value="Sign in"
          className="btn w-full bg-[#80489C] outline-none border-none my-2"
        />
      </form>
    </div>
  );
};

export default SignIn;
