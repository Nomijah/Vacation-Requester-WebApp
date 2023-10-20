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
  const renderApprovalState = (state: number) => {
    switch (state) {
      case 1:
        return "Pending";
      case 2:
        return "Approved";
      case 3:
        return "Rejected";
      default:
        return null; // or return "Unknown" or some other placeholder
    }
  };
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
                <td>{renderApprovalState(leaveRequest.approvalState)}</td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveRequestTable;
