import { useEffect } from "react";

const useSessionTimeout = (logoutCallback, timeout = 1800000) => {
  // 15 minutes timeout
  useEffect(() => {
    let timer = setTimeout(logoutCallback, timeout);

    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(logoutCallback, timeout);
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
    };
  }, [logoutCallback, timeout]);
};

export default useSessionTimeout;
