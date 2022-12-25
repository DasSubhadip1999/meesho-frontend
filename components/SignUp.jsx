import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { registerUser, reset } from "../redux/feature/auth/authSlice";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;
  const { user, isError, isLoading, isSuccess, message, seller } = useSelector(
    (state) => state.auth
  );

  // console.log(user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess && user && !seller) {
      toast.success("User account created successfully");
    }

    dispatch(reset());
  }, [isError, isSuccess, message, dispatch]);

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !password2) {
      toast.error("Please fill all fields");
    } else if (password !== password2) {
      toast.error("Confirm passowrd doesn't match");
    } else {
      dispatch(registerUser({ name, email, password }));
      setFormData({
        name: "",
        email: "",
        password: "",
        password2: "",
      });
    }
  };

  //styles
  const inputStyle =
    "outline-none border-[1px] border-[rgba(0,0,0,0.2)] p-2 w-full rounded-md";
  const formGroupStyle = "my-2";

  return (
    <div>
      <h1 className="text-lg font-semibold">Create account</h1>
      <form onSubmit={onSubmit}>
        <div className={formGroupStyle}>
          <label>Name</label> <br />
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className={inputStyle}
            onChange={onChange}
            value={name}
          />
        </div>
        <div className={formGroupStyle}>
          <label>Email</label> <br />
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
          <label>Password</label> <br />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            className={inputStyle}
            onChange={onChange}
          />
        </div>
        <div className={formGroupStyle}>
          <label>Confirm password</label> <br />
          <input
            type="password"
            name="password2"
            value={password2}
            placeholder="Confirm password"
            className={inputStyle}
            onChange={onChange}
          />
        </div>
        <input
          type="submit"
          value="Sign up"
          className="btn w-full bg-[#80489C] outline-none border-none my-2"
        />
      </form>
    </div>
  );
};

export default SignUp;
