import axios from "axios";

const getAllUserLeaveRequests = (id: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://localhost:7016/leaverequest/GetLeaveRequestsById${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
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
