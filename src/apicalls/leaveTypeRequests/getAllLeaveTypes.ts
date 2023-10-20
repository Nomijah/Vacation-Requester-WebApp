import axios from "axios";
import "../../interface/InterfaceCollection";

const getAllLeaveTypes = (): Promise<ILeaveType[]> => {
  return new Promise((resolve, reject) => {
    axios
      .get<ILeaveType[]>(`${import.meta.env.VITE_API_URL}/LeaveType`, {
        headers: {
          "Content-Type": "application/json",
        },withCredentials: true,
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

export default getAllLeaveTypes;