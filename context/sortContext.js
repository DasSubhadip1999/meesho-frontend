import { createContext } from "react";

const SortContext = createContext();

export const SortProvider = ({ children }) => {
  return <SortContext.Provider value={{}}>{children}</SortContext.Provider>;
};

export default SortContext;
