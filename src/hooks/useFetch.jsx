// hooks/useFetch.js

import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setUser({
          fullName: response.data.fullName,
          username: response.data.username,
          profile: response.data.profile,
          bio: response.data.bio,
          following: response.data.following,
          followers: response.data.followers,
        });
        setPosts(response.data.posts);
        setLoading(false);
      } catch (error) {
        setError(error.response.data.error);
        setLoading(false);
      }
    };

    fetchData(); // Call fetchData when the component mounts
  }, [url]); // useEffect dependency on url

  return { user, posts, loading, error };
};

export default useFetch;
