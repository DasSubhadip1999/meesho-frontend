import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const formGroup = "relative border-[1px] rounded-md my-2";
  const spans = "absoloute";
  return (
    <div>
      <h1>Sign up to Meesho</h1>
      <form>
        <div className={formGroup}>
          <span>Email</span>
          <input type="email" />
        </div>
        <div className={formGroup}>
          <span>Password</span>
          <input type="password" />
        </div>
      </form>
    </div>
  );
};

export default Login;
