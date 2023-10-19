import axios from "axios";

const getAllLeaveRequests = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://localhost:7016/LeaveRequest")
      .then((res) => {
        console.log(res);
        console.log("Successfully fetched LeaveRequest list.");

        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
        console.log("Failed to fetch LeaveRequest list.");
      });
  });
};

export default getAllLeaveRequests;