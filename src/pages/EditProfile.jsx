// importing hooks
import useUrl from "../hooks/useUrl";
import useFetch from "../hooks/useFetch";

// importing components
import Footer from "../components/general/Footer";
import Header from "../components/general/Header";
import FormDetails from "../components/editProfile/FormDetails";

const EditProfile = () => {
  const { url } = useUrl();
  const { user, posts, loading, error } = useFetch(url);

  if (loading) return <Footer user={{ profile: "placeholder.webp" }}></Footer>;
  if (error) console.log(error);
  if (user && posts) {
    return (
      <div className="h-[100vh] w-[100vw] flex flex-col items-center overflow-hidden">
        <Header title={"Edit Profile"} link={"profile"} />
        <FormDetails user={user} />
        <Footer user={user} />
      </div>
    );
  }
};
export default EditProfile;
