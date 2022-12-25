import { createContext, useState } from "react";
import { useRef } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authType, setAuthType] = useState("sign-up");
  const modelAutoClose = useRef(null);

  const openModal = (type) => {
    setAuthType(type);
  };

  return (
    <AuthContext.Provider value={{ modelAutoClose, authType, openModal }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
