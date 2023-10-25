import axios from "axios";
import "../../interface/InterfaceCollection";

const deleteLeaveType = (leaveTypeId: string) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/LeaveType/${leaveTypeId}`, {
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

export default deleteLeaveType;
