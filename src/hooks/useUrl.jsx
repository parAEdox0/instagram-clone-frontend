import Cookies from "js-cookie";

const useUrl = () => {
  const user_id = Cookies.get("_id");
  const token = Cookies.get("token");
  const url = `http://localhost:9999/users/${user_id}`;

  return { user_id, token, url };
};

export default useUrl;
