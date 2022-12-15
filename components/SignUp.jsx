import React from "react";

const SignUp = () => {
  const inputStyle =
    "outline-none border-[1px] border-[rgba(0,0,0,0.2)] p-2 w-full rounded-md";
  const formGroupStyle = "my-2";
  return (
    <div>
      <h1 className="text-lg font-semibold">Create account</h1>
      <form>
        <div className={formGroupStyle}>
          <label>Name</label> <br />
          <input
            type="text"
            placeholder="Enter your name"
            className={inputStyle}
          />
        </div>
        <div className={formGroupStyle}>
          <label>Email</label> <br />
          <input
            type="email"
            placeholder="Enter your email"
            className={inputStyle}
          />
        </div>
        <div className={formGroupStyle}>
          <label>Password</label> <br />
          <input
            type="password"
            placeholder="Enter your password"
            className={inputStyle}
          />
        </div>
        <div className={formGroupStyle}>
          <label>Confirm password</label> <br />
          <input
            type="password"
            placeholder="Confirm password"
            className={inputStyle}
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
