import React from "react";
import RegisterForm from "../components/auth/RegisterForm";
import Searchbar from "../components/Searchbar";

const Register = () => {
  return (
    <div className="bg-[#fdebef] h-[100vh]">
      <Searchbar />
      <RegisterForm />
    </div>
  );
};

export default Register;
