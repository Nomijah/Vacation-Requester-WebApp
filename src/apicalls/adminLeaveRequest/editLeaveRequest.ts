enum ApprovalState {
  Pending = "Pending",
  Accepted = "Accepted",
  Rejected = "Rejected",
}
import "../../interface/InterfaceCollection";
import axios from "axios";

const editLeaveRequests = (model: ILeaveRequestToEdit) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${import.meta.env.VITE_API_URL}/LeaveRequest`, model, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        resolve(
          `Successfully edited LeaveRequest with id ${model.id}`
        );
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export default editLeaveRequests;
