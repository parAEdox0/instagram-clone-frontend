import React from "react";
import Navbar from "../components/profile/Navbar";
import UserInfo from "../components/profile/UserInfo";
import UserActions from "../components/profile/UserActions";
import Posts from "../components/profile/Posts";
import Footer from "../components/general/Footer";

const Profile = () => {
  const user = {
    username: "disha_pats",
    fullname: "Disha Patani",
    profile: "../images/profile.jpg",
    bio: "Pat's your cock",
    followers: [],
    following: [],
  };

  const posts = [
    { picture: "../images/post1.jpg" },
    { picture: "../images/post2.jpg" },
  ];

  return (
    <div className="main relative min-h-screen max-w-full overflow-hidden text-white">
      <Navbar user={user} />
      <UserInfo user={user} posts={posts} />
      <UserActions />
      <Posts user={user} posts={posts} />
      <Footer user={user} />
    </div>
  );
};

export default Profile;
