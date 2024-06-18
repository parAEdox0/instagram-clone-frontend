import React from "react";

const Posts = ({ user, posts }) => {
  return (
    <div className="posts">
      <div className="images flex flex-wrap gap-1 ml-[2px]">
        {posts.length === 0 ? (
          <p className="text-center text-[13px] w-full mt-5">
            No Posts Yet{" "}
            <a href="/post" className="text-blue-500 cursor-pointer">
              Create a new One!
            </a>
          </p>
        ) : (
          posts.reverse().map((post, index) => (
            <a key={index} href={`/${user.username}/posts`}>
              <div className="image w-[32vw] h-[32.4vw] bg-zinc-500">
                <img
                  src={`${post.picture}`}
                  className="h-[100%] w-[100%] object-cover object-top"
                  alt="Post"
                />
              </div>
            </a>
          ))
        )}
      </div>
      {posts.length > 0 && (
        <a href="/delete">
          <p className="text-sm text-[tomato] w-[100vw] text-center mt-5">
            delete posts<i className="fa-solid fa-trash ml-2 text-[12px]"></i>
          </p>
        </a>
      )}
      <div className="filler h-[7vh] w-screen bg-zinc-900"></div>
    </div>
  );
};

export default Posts;
