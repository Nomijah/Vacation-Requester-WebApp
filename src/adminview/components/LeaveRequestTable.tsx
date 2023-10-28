import "../../interface/InterfaceCollection"; // No need for the file extension

import { ArrowDownUp } from "react-bootstrap-icons";
import React, { useState } from "react";
import "./LeaveRequestTable.css";
import EditRowLeaveRequestForm from "./EditRowLeaveRequestForm";

const LeaveRequestTable: React.FC<LeaveRequestTableProps> = ({
  leaveRequests,
}: {
  leaveRequests: ILeaveRequest[];
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
    <div className="container-fluid bg-light-subtle border border-dark-subtle rounded mt-3">
      <table className="table mt-4">
        <thead>
          <tr className="border-1">
            <th
              className="bg-dark-subtle"
              onClick={() => requestSort(`employeeName`)}
            >
              Name <ArrowDownUp color="royalblue" size={13} />
            </th>
            <th
              className="bg-dark-subtle"
              onClick={() => requestSort("startDate")}
            >
              Start Date <ArrowDownUp color="royalblue" size={13} />
            </th>
            <th
              className="bg-dark-subtle"
              onClick={() => requestSort("endDate")}
            >
              End Date <ArrowDownUp color="royalblue" size={13} />
            </th>

            <th
              className="bg-dark-subtle"
              onClick={() => requestSort("dateRequested")}
            >
              Date Requested <ArrowDownUp color="royalblue" size={13} />
            </th>
            <th
              className="bg-dark-subtle"
              onClick={() => requestSort("leaveType")}
            >
              Leave Type <ArrowDownUp color="royalblue" size={13} />
            </th>

            <th
              className="bg-dark-subtle"
              onClick={() => requestSort("approvalState")}
            >
              Approval State <ArrowDownUp color="royalblue" size={13} />
            </th>
            <th className="bg-dark-subtle"></th>
          </tr>
        </thead>
        <tbody>
          {sortedLeaveRequests.map((leaveRequest, index) => (
            <tr className="align-middle" key={index}>
              <td className="bg-light-subtle">{leaveRequest.employeeName}</td>
              <td className="bg-light-subtle">
                {new Date(leaveRequest.startDate).toLocaleDateString()}
              </td>
              <td className="bg-light-subtle">
                {new Date(leaveRequest.endDate).toLocaleDateString()}
              </td>
              <td className="bg-light-subtle">
                {new Date(leaveRequest.dateRequested).toLocaleDateString()}
              </td>
              <td className="bg-light-subtle">
                {renderApprovalState(leaveRequest.approvalState)}
              </td>

              <td className="bg-light-subtle">{leaveRequest.leaveType}</td>
              <td className="bg-light-subtle">
                {renderApprovalState(leaveRequest.approvalState)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveRequestTable;
