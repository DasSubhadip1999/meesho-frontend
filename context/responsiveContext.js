import { createContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const ResponsiveContext = createContext();

export const ResponsiveProvider = ({ children }) => {
  const [width, setWidth] = useState(0);
  const [sidebar, showSidebar] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const [userName, setUserName] = useState("");
  const productDetailsRef = useRef(null);
  const [routeHistory, setRouteHistory] = useState("");

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
      value={{
        width,
        sidebar,
        routeHistory,
        showSidebar,
        userName,
        productDetailsRef,
        setRouteHistory,
      }}
    >
      {children}
    </ResponsiveContext.Provider>
  );
};

export default ResponsiveContext;
