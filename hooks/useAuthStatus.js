import { useEffect, useState } from "react";

const useAuthStatus = (type) => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (type) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    setChecking(false);
  }, [type]);

  return { checking, isLoggedIn };
};

export default useAuthStatus;
