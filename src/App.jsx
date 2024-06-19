// importing dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importing pages and components
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProtectedRoutes from "./components/general/ProtectedRoutes";
import LoggedInRoutes from "./components/general/LoggedInRoutes";
import AuthContextProvider from "./contexts/AuthContextProvider";
import Logout from "./pages/Logout";
import EditProfile from "./pages/EditProfile";

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <LoggedInRoutes>
                <Register />
              </LoggedInRoutes>
            }
          />
          <Route
            path="/login"
            element={
              <LoggedInRoutes>
                <Login />
              </LoggedInRoutes>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoutes>
                <Profile />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/edit"
            element={
              <ProtectedRoutes>
                <EditProfile />
              </ProtectedRoutes>
            }
          />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
};

export default App;
