// importing dependencies
import axios from "axios";
import Cookies from "js-cookie";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

// importing hooks
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useForm from "../hooks/useFrom";

// importing resources
import loadingGif from "/src/assets/gif/loading-gif.gif";

const Login = () => {
  // importing setIsLoggedIn
  const { setIsLoggedIn } = useContext(AuthContext);

  // defining variables
  let { values, handleChange, resetForm } = useForm({
    email: "",
    password: "",
  });
  let [error, setError] = useState("");
  let [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // handleSubmit
  const handleSubmit = async (e) => {
    // preventing default behaviour
    e.preventDefault();

    // setting loading state to true
    setError("");
    setLoading(true);

    try {
      // logging in user with the post request
      const user = await axios.post(
        "http://localhost:9999/users/login",
        values
      );

      // setting errors and loading state to false
      setError("");
      setLoading(false);

      // resetting the forrm
      resetForm();

      // storing the token and id as cookies in browser
      Cookies.set("_id", user.data._id);
      Cookies.set("token", user.data.token);

      // changing login state
      setIsLoggedIn(true);

      // navigating to the profile page
      navigate("/profile");
    } catch (error) {
      // managing and setting errors
      setError(error.response.data.error);
      setLoading(false);
      console.log(error.response.data);
    }
  };

  return (
    <div className="main flex">
      <div className="h-[100vh] w-[100vw] overflow-auto flex flex-col gap-7 justify-center items-center">
        <div className="w-[90%] flex flex-col items-center gap-5  p-5">
          <img src="../images/instagram-logo.png" className="w-[50vw]" />
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="flex flex-col gap-3 "
          >
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="border text-black px-10 py-2 text-center rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
              className="border text-black px-[5vw] py-2 text-center rounded-lg"
            />
            <div className="relative flex flex-col">
              {!loading && (
                <button className="text-center bg-blue-500 text-white px-[5vw] py-2 rounded-md">
                  Login
                </button>
              )}
              {loading && (
                <button
                  disabled
                  className="flex justify-center bg-blue-500 text-white px-[5vw] py-2 rounded-md"
                >
                  <img className="h-6" src={loadingGif}></img>
                </button>
              )}
              {error && (
                <p className="absolute top-14 text-center w-[100%] text-red-400">
                  {error}
                </p>
              )}
            </div>
            <p className="pb-11 pt-11 text-center">
              don't have an account?
              <Link to={"/"} className="text-blue-500">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
