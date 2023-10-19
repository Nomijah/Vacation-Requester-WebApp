enum ApprovalState {
  Pending = "Pending",
  Accepted = "Accepted",
  Rejected = "Rejected",
}

interface ILeaveRequest {
  Id: string; // GUIDs are generally represented as strings in TypeScript
  UserId: string; // GUID, represented as a string
  LeaveTypeId: string; // GUID, represented as a string
  StartDate: Date; // assuming this gets converted to a JavaScript Date object
  EndDate: Date; // same as above
  DateRequested: Date; // same as above
  ApprovalState: ApprovalState; // using the TypeScript enum
}

import axios from "axios";

const editLeaveRequests = (id: string, model: ILeaveRequest) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`https://localhost:7016/leaverequest/${id}`, model, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        console.log(`Successfully edited LeaveRequest with id ${model.Id}`);

        resolve(`Successfully edited LeaveRequest with id ${model.Id}`);
      })
      .catch((err) => {
        console.l;
        console.log(err);
        reject(err);
      });
  });
};

export default editLeaveRequests;
