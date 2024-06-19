import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

const LoggedInRoutes = ({ children }) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? <Navigate to="/profile" /> : children;
};

export default LoggedInRoutes;
