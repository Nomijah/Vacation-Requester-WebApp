import axios from "axios";

const userLogin = (loginCredentials: {
  email: string;
  password: string;
}) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/Authentication/Login`,
        JSON.stringify(loginCredentials),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        resolve(res);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export default userLogin;
