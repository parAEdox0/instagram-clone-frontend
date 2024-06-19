import React from "react";

const Footer = ({ user }) => {
  return (
    <div className="footer fixed h-[7vh] bg-zinc-900 flex p-3 justify-between items-center w-screen bottom-0">
      <a href="/feed">
        <i className="fa-solid fa-house text-xl"></i>
      </a>
      <a href="/search">
        <i className="fa-solid fa-magnifying-glass text-xl"></i>
      </a>
      <a href="/post">
        <i className="fa-solid fa-square-plus text-2xl"></i>
      </a>
      <a href="/profile">
        <img
          src={`/images/${user.profile}`}
          className="h-8 w-8 rounded-full object-cover object-top"
          alt="User Profile"
        />
      </a>
    </div>
  );
};

export default Footer;
