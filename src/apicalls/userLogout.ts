import axios from "axios";

const userLogout = () => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/Authentication/Logout`,{},
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export default userLogout;