import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

const ProtectedRoutes = ({ children }) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoutes;
