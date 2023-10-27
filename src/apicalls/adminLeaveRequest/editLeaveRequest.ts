enum ApprovalState {
  Pending = "Pending",
  Accepted = "Accepted",
  Rejected = "Rejected",
}
import "../../interface/InterfaceCollection";
import axios from "axios";

const editLeaveRequests = (id: string, model: ILeaveRequest) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${import.meta.env.VITE_API_URL}/LeaveRequest/${id}`, model, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        resolve(`Successfully edited LeaveRequest with id ${model.Id}`);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export default editLeaveRequests;
