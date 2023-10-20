import React from "react";
import {
  ILeaveRequest,
  User,
  LeaveType,
  ApprovalState,
} from "../interface/InterfaceCollection"; // No need for the file extension

const LeaveRequestTable: React.FC<LeaveRequestTableProps> = ({
  leaveRequests,
}) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Date Requested</th>
            <th>Approval State</th>
          </tr>
        </thead>
        <tbody>
          {leaveRequests.map((leaveRequest, index) => (
            <tr key={index}>
              <td>{leaveRequest.employeeName}</td>
              <td>{new Date(leaveRequest.startDate).toLocaleDateString()}</td>
              <td>{new Date(leaveRequest.endDate).toLocaleDateString()}</td>
              <td>
                {new Date(leaveRequest.dateRequested).toLocaleDateString()}
              </td>
              <td>
                {if({leaveRequest.approvalState} === 1){"Pending"}
                else if({leaveRequest.approvalState} === 2)
                {"Approved"} else if({leaveRequest.approvalState} === 3)
                {"Rejected"} else
                {}}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveRequestTable;
