import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import AuthContext from "../contexts/AuthContext";

const Logout = () => {
  const { setIsLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    // deleting cookies
    Cookies.remove("_id");
    Cookies.remove("token");

    // changing global logged in state
    setIsLoggedIn(false);
  }, [setIsLoggedIn]);

  // redirecting to login page
  return <Navigate to="/login" />;
};

export default Logout;
