import axios from "axios";

const postLeaveRequest = (leaveRequest :ILeaveRequestDto) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/LeaveRequest`,
        JSON.stringify(leaveRequest),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        resolve(res);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export default postLeaveRequest;