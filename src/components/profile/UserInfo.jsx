import React from "react";

const UserInfo = ({ user, posts }) => {
  return (
    <div className="py-3 flex items-start">
      <div className="flex flex-col w-[45vw] gap-1 ml-2">
        <img
          src={`/images/${user.profile}`}
          className="w-[11vh] h-[11vh] rounded-[50%] object-cover object-top ml-3"
          alt="User Profile"
        />
        <p className="text-[10px] ml-2 mt-1 text-zinc-300 font-light">
          {user.fullName}
        </p>
        <p className="text-[9px] ml-2 mt-1 min-w-[50px] max-w-[80px] text-white font-normal bg-zinc-700 px-1 py-1 rounded-2xl">
          @ {user.username}
        </p>
        {user.bio && (
          <div className="bio ml-2 text-white text-[11px]">
            <p>{user.bio}</p>
          </div>
        )}
      </div>
      <div className="details flex w-[55vw] items-start gap-5">
        <div className="py-5">
          <p className="text-center">{posts.length}</p>
          <p className="text-[11px] font-light text-center text-white">posts</p>
        </div>
        <div className="py-5">
          <p className="text-center">
            <a href="/followers">{user.followers.length}</a>
          </p>
          <p className="text-[11px] font-light text-center text-white">
            followers
          </p>
        </div>
        <div className="py-5">
          <p className="text-center">
            <a href="/following">{user.following.length}</a>
          </p>
          <p className="text-[11px] font-light text-center text-white">
            following
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
