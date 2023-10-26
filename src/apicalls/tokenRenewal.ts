import axios from 'axios';

const tokenRenewal = () => {
    return new Promise((resolve, reject) => {
        axios
          .post(
            `${import.meta.env.VITE_API_URL}/Authentication/RefreshToken`,{},
            {
              headers: { "Content-Type": "application/json" },
              withCredentials: true,
            }
          )
          .then((res) => {
            resolve(res.data);
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      });
}

export default tokenRenewal;