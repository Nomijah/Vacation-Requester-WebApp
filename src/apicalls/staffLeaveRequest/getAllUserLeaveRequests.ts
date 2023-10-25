import axios from "axios";

const getAllUserLeaveRequests = (id: string) : Promise<ILeaveRequest[]> => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${
          import.meta.env.VITE_API_URL
        }/LeaveRequest/GetLeaveRequestsById/${id}`, // Include ID in the path
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Ensure cookies are sent with the request
        }
      )
      .then((res) => {
        console.log(res);
        console.log("Successfully fetched LeaveRequest list.");

        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export default getAllUserLeaveRequests;
