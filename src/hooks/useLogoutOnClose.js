import { useEffect } from "react";

const useLogoutOnClose = (logoutCallback) => {
  useEffect(() => {
    const handleLogout = (event) => {
      event.preventDefault();
      if (event.currentTarget.performance.navigation.type === 1) {
        return;
      }
      logoutCallback();
    };

    window.addEventListener("beforeunload", handleLogout);

    return () => {
      window.removeEventListener("beforeunload", handleLogout);
    };
  }, [logoutCallback]);
};

export default useLogoutOnClose;
