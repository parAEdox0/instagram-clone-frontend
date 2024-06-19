import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import Cookies from "js-cookie";

const AuthContextProvider = ({ children }) => {
  let user_id = Cookies.get("_id");
  let token = Cookies.get("token");

  // Initialize isLoggedIn based on the existence of user_id and token
  const [isLoggedIn, setIsLoggedIn] = useState(!!(user_id && token));

  useEffect(() => {
    // You can update isLoggedIn whenever user_id or token changes
    setIsLoggedIn(!!(user_id && token));
  }, [user_id, token]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
