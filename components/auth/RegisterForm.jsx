import Signup from "./Signup";

const RegisterForm = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="border-2 w-96 rounded-lg mt-8 bg-white shadow-sm">
        <img
          src="https://images.meesho.com/images/marketing/1661417516766.webp"
          alt="register_banner"
          className="rounded-b-none rounded-t-lg"
        />
        <Signup />
      </div>
    </div>
  );
};

export default RegisterForm;
