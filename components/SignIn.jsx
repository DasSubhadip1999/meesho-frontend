const SignIn = () => {
  const inputStyle =
    "outline-none border-[1px] border-[rgba(0,0,0,0.2)] p-2 w-full rounded-md";
  const formGroupStyle = "my-2";
  return (
    <div>
      <h1 className="text-lg font-semibold">Login to your account</h1>
      <form>
        <div className={formGroupStyle}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className={inputStyle}
          />
        </div>
        <div className={formGroupStyle}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className={inputStyle}
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
