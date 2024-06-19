import { Link } from "react-router-dom";
import React from "react";

const UserActions = () => {
  return (
    <div className="button p-[5px] mb-5">
      <div className="flex gap-1 justify-evenly items-center">
        <Link to={"/edit"}>
          <button className="bg-zinc-800 h-8 w-[48vw] rounded-md text-[11px]">
            Edit Profile
          </button>
        </Link>
        <Link to={"/logout"}>
          <button className="bg-zinc-800 h-8 w-[48vw] rounded-md text-[11px]">
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserActions;
