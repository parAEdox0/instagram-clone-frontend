// importing hooks
import useFetch from "../hooks/useFetch";
import useUrl from "../hooks/useUrl";

// importing components
import Navbar from "../components/profile/Navbar";
import UserInfo from "../components/profile/UserInfo";
import UserActions from "../components/profile/UserActions";
import Posts from "../components/profile/Posts";
import Footer from "../components/general/Footer";

// profile function to export as a Page
const Profile = () => {
  const { url } = useUrl();

  const { user, posts, loading, error } = useFetch(url);

  if (loading) return <Footer user={{ profile: "placeholder.webp" }}></Footer>;
  if (error) console.log(error);
  if (user && posts) {
    return (
      <div className="h-[100vh] w-[100vw] overflow-hidden">
        <Navbar user={user} />
        <UserInfo user={user} posts={posts} />
        <UserActions />
        <Posts user={user} posts={posts} />
        <Footer user={user} />
      </div>
    );
  }
};

export default Profile;
