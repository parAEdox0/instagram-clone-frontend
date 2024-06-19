// importing dependencies
import axios from "axios";
import { useNavigate } from "react-router-dom";

// importing hooks
import useForm from "../../hooks/useFrom";
import useUrl from "../../hooks/useUrl";
import { useState } from "react";

// importing resources
import loadingGif from "/src/assets/gif/loading-gif.gif";

const FormDetails = ({ user }) => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const { token } = useUrl();
  const { values, handleChange, resetForm } = useForm({
    username: user.username,
    bio: user.bio,
  });

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:9999/users/editProfile",
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsLoading(false);
      navigate("/profile");
    } catch (error) {
      console.error("Error updating profile:", error);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-6">
      <label
        htmlFor="username"
        className="username text-[12px] text-start w-[100%] font-normal text-zinc-600 mt-2"
      >
        Username
      </label>

      <input
        type="text"
        name="username"
        id="username"
        className="bg-transparent text-white text-[15px] p-2 outline-none w-[80vw] border-b border-white"
        value={values.username}
        onChange={handleChange}
      />

      <label
        htmlFor="bio"
        className="text-[12px] font-normal text-zinc-600 mt-2"
      >
        Bio
      </label>
      <textarea
        name="bio"
        id="bio"
        className="bg-transparent text-white text-[13px] outline-none w-[80vw] border-b border-white resize-none text-start"
        value={values.bio}
        onChange={handleChange}
      />

      {!isLoading && (
        <input
          type="submit"
          value="Save username/bio"
          className="bg-blue-500 text-[13px] w-[80vw] px-3 py-2 rounded-md mt-5"
        />
      )}
      {isLoading && (
        <button
          disabled
          className="bg-blue-500 text-[13px] w-[80vw] flex justify-center px-3 py-2 rounded-md mt-5"
        >
          <img className="h-6" src={loadingGif}></img>
        </button>
      )}
    </form>
  );
};

export default FormDetails;
