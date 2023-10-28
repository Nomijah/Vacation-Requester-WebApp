import axios from "axios";
import "../../interface/InterfaceCollection";

const deleteLeaveRequest = (leaveRequestId: string) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(
        `${
          import.meta.env.VITE_API_URL
        }/LeaveRequest?id=${leaveRequestId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        resolve(leaveRequestId); // return the leaveRequestId upon successful deletion
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export default deleteLeaveRequest;
