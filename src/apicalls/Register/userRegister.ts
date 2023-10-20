import axios from "axios";

const userRegister = (registerCredentials: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/Authentication/Register`,
        JSON.stringify(registerCredentials),
        {
          headers: {
            "Content-Type": "application/json",
          },
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

export default userRegister;
