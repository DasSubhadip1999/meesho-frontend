import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authType, setAuthType] = useState("sign-up");

  const openModal = (type) => {
    setAuthType(type);
  };

  return (
    <AuthContext.Provider value={{ authType, openModal }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
