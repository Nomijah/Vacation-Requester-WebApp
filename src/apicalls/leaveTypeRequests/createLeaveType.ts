import axios from "axios";
import "../../interface/InterfaceCollection";

const createLeaveType = (leaveType: ILeaveType) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${import.meta.env.VITE_API_URL}/LeaveType`, leaveType, {
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

export default createLeaveType;
