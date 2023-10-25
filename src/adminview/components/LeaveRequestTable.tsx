import "../../interface/InterfaceCollection"; // No need for the file extension

import { ArrowDownUp } from "react-bootstrap-icons";
import React, { useState } from "react";
import "./LeaveRequestTable.css";

const LeaveRequestTable: React.FC<LeaveRequestTableProps> = ({
  leaveRequests,
}) => {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "none",
  });
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

  let sortedLeaveRequests = [...leaveRequests];
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
      <table className="table mt-4">
        <thead>
          <tr className="border-1">
            <th onClick={() => requestSort(`employeeName`)}>
              Name <ArrowDownUp color="royalblue" size={13} />
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
            <th onClick={() => requestSort("leaveType")}>
              Leave Type <ArrowDownUp color="royalblue" size={13} />
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
              <td>{leaveRequest.employeeName}</td>
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

              <td>{leaveRequest.leaveType}</td>
              <td>{renderApprovalState(leaveRequest.approvalState)}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveRequestTable;
