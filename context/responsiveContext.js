import { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ResponsiveContext = createContext();

export const ResponsiveProvider = ({ children }) => {
  const [width, setWidth] = useState(0);
  const [sidebar, showSidebar] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (user) {
      setUserName(user?.name);
    }
  }, [user]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.screen.width);
    }
  }, []);

  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      setWidth(window.screen.width);
    });
  }

  return (
    <ResponsiveContext.Provider
      value={{ width, sidebar, showSidebar, userName }}
    >
      {children}
    </ResponsiveContext.Provider>
  );
};

export default ResponsiveContext;
