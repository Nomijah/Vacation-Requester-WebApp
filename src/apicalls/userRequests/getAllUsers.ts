import axios from "axios";

const getAllUsers = () : Promise<IUser[]> => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${
          import.meta.env.VITE_API_URL
        }/User`,
        {
          headers: {
            "Content-Type": "application/json",
          },
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

export default getAllUsers;