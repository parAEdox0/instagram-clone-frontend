import React from "react";

const Navbar = ({ user }) => {
  return (
    <div className="info p-[5px]">
      <div className="h-[8.2vh] w-[100vw]  relative flex justify-between p-5 items-center">
        <div className="flex gap-2 items-center">
          <p>
            <a href="/" className="text-blue-500">
              <i className="fa-solid fa-arrow-left text-lg"></i>
            </a>
          </p>
          <h1 className="text-[13px]">@ {user.username}</h1>
        </div>
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
};

export default Navbar;
