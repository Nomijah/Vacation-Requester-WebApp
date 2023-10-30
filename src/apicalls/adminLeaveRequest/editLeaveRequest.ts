enum ApprovalState {
  Pending = "Pending",
  Accepted = "Accepted",
  Rejected = "Rejected",
}
import "../../interface/InterfaceCollection";
import axios from "axios";

const editLeaveRequests = (model: ILeaveRequestToEdit) => {
  return new Promise((resolve, reject) => {
    if (typeof model.approvalState === "string") {
      model.approvalState = parseInt(model.approvalState);
    }
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
        console.log("FAILED IN JS FUNCTION: LeaveRequestToEdit: ", model);
        reject(err);
      });
  });
};

export default editLeaveRequests;
