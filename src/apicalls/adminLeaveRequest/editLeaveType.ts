import axios from "axios";
import "../../interface/InterfaceCollection";

const editLeaveType = (leaveType: LeaveType, id: string) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${import.meta.env.VITE_API_URL}/LeaveType/${id}`, leaveType, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
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

export default editLeaveType;
