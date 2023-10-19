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
              <td>{leaveRequest.startDate}</td>
              <td>{leaveRequest.endDate}</td>
              <td>{leaveRequest.dateRequested}</td>
              <td>{leaveRequest.approvalState}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveRequestTable;
