import axios from "axios";
import "../../interface/InterfaceCollection";

const getAllLeaveRequests = (): Promise<ILeaveRequest[]> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/LeaveRequest`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export default getAllLeaveRequests;
