// importing dependencies
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // defining variables
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  return (
    <div className="main flex">
      <div className="right h-[100vh] w-[100vw] flex flex-col gap-7 justify-center items-center">
        <div className=" w-[90%] flex flex-col items-center gap-5 p-5">
          <img
            src="https://www.pngkey.com/png/full/28-287308_instagram-logo-text-white.png"
            className="w-[50vw]"
          />
          <form autoComplete="off" className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border text-black border-gray-300 px-10 py-2 text-center rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border text-black border-gray-300 px-[5vw] py-2 text-center rounded-lg"
            />
            <button className="text-center bg-blue-500 text-white px-[5vw] py-2 rounded-lg">
              Login
            </button>
            <Link to={"/"} className="pb-11 pt-11 text-center">
              Don't have an account?{" "}
              <span className="text-blue-500">Sign up</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
