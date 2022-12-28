import { createContext, useState } from "react";

const ProgressStepsContext = createContext();

export const ProgressStepsProvider = ({ children }) => {
  const [progress, setProgress] = useState({
    cart: {
      pending: true,
      completed: false,
    },
    address: {
      pending: false,
      completed: false,
    },
    payment: {
      pending: false,
      completed: false,
    },
    summary: {
      pending: false,
      completed: false,
    },
  });

  const backToCart = () => {
    setProgress((prev) => ({
      cart: {
        pending: true,
        completed: false,
      },
      address: {
        pending: false,
        completed: false,
      },
      payment: {
        pending: false,
        completed: false,
      },
      summary: {
        pending: false,
        completed: false,
      },
    }));
  };

  //////
  return (
    <ProgressStepsContext.Provider
      value={{ progress, setProgress, backToCart }}
    >
      {children}
    </ProgressStepsContext.Provider>
  );
};

export default ProgressStepsContext;
