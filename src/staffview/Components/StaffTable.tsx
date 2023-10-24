import {
  ILeaveRequest,
  User,
  LeaveType,
  ApprovalState,
} from "../interface/InterfaceCollection"; // No need for the file extension

import { ArrowDownUp } from "react-bootstrap-icons";
import React, { useState } from "react";

import { Clock, Check2Circle, XCircle } from "react-bootstrap-icons";

const StaffTable: React.FC<StaffLeaveRequestTableProps> = ({
  leaveRequests,
}) => {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "none",
  });
  const renderApprovalState = (state: number) => {
    switch (state) {
      case 1:
        return (
          <div
            style={{
              backgroundColor: "yellow",
              padding: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100px",
              height: "30px",
            }}
          >
            <Clock color="black" size={16} /> Pending
          </div>
        );
      case 2:
        return (
          <div
            style={{
              backgroundColor: "green",
              padding: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100px",
              height: "30px",
            }}
          >
            <Check2Circle color="white" size={16} /> Approved
          </div>
        );
      case 3:
        return (
          <div
            style={{
              backgroundColor: "red",
              padding: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100px",
              height: "30px",
            }}
          >
            <XCircle color="white" size={16} /> Rejected
          </div>
        );
      default:
        return null;
    }
  };

  const requestSort = (key: string) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const leaveRequestsWithTypeName = leaveRequests.map((request) => ({
    ...request,
    leaveTypeName: request.leaveType.type,
  }));

  let sortedLeaveRequests = [...leaveRequestsWithTypeName];
  if (sortConfig !== null) {
    sortedLeaveRequests.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }
  return (
    <div>
      <h2 className="ms-2 mt-3">Your Leave Requests</h2>
      <table className="table mt-4">
        <thead>
          <tr className="border-1">
            <th onClick={() => requestSort(`leaveTypeName`)}>
              Leave Type <ArrowDownUp color="royalblue" size={13} />
            </th>
            <th onClick={() => requestSort("startDate")}>
              Start Date <ArrowDownUp color="royalblue" size={13} />
            </th>
            <th onClick={() => requestSort("endDate")}>
              End Date <ArrowDownUp color="royalblue" size={13} />
            </th>
            <th onClick={() => requestSort("dateRequested")}>
              Date Requested{" "}
              <ArrowDownUp color="royalblue" size={13} />
            </th>
            <th onClick={() => requestSort("approvalState")}>
              Approval State{" "}
              <ArrowDownUp color="royalblue" size={13} />
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedLeaveRequests.map((leaveRequest, index) => (
            <tr key={index}>
              <td>{leaveRequest.leaveType.type}</td>
              <td>
                {new Date(
                  leaveRequest.startDate
                ).toLocaleDateString()}
              </td>
              <td>
                {new Date(leaveRequest.endDate).toLocaleDateString()}
              </td>
              <td>
                {new Date(
                  leaveRequest.dateRequested
                ).toLocaleDateString()}
              </td>
              <td>
                {renderApprovalState(leaveRequest.approvalState)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffTable;
