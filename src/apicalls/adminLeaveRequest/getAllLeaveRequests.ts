import axios from "axios";

const getAllLeaveRequests = (): Promise<ILeaveRequestDto[]> => {
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
