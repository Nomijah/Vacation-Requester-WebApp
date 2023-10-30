import "../../interface/InterfaceCollection"; // No need for the file extension

import { Trash } from "react-bootstrap-icons";
import { ArrowDownUp } from "react-bootstrap-icons";
import React, { useState } from "react";
import "./LeaveRequestTable.css";
import EditRowLeaveRequestForm from "./EditRowLeaveRequestForm";

const LeaveRequestEditTable: React.FC<LeaveRequestTableProps> = ({
  leaveRequests,
  handleClickEdit,
  leaveTypes,
  handleOnSubmit,
  handleChange,
  formState,
  setEditingState,
  isEditing,
  handleDelete,
}: {
  handleClickEdit: (id: string, userId: string) => void;
  leaveRequests: ILeaveRequest[];
  leaveTypes: ILeaveType[];
  handleOnSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formState: ILeaveRequest;
  setIsEditing: (index: number) => void;
  isEditing: number | null;
  handleDelete: (id: string) => void;
}) => {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "none",
  });

  const renderApprovalState = (state: number) => {
    let colorClass = "";
    let text = "";
    switch (state) {
      case 1:
        text = "Pending";
        colorClass = "";
        break;
      case 2:
        text = "Approved";
        colorClass = "bg-success";
        break;
      case 3:
        text = "Rejected";
        colorClass = "bg-danger";
        break;
      default:
        text = "Unknown";
        colorClass = "bg-warning";
        break;
    }

    return (
      <>
        <div
          className={` me-2 rounded-circle ${colorClass}`}
          style={{
            width: "12px",
            height: "12px",
            display: "inline-block",
            marginLeft: "8px",
          }}
        ></div>
        {text}
      </>
    );
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
          {sortedLeaveRequests.map((leaveRequest, index) =>
            isEditing === index ? (
              <EditRowLeaveRequestForm
                leaveRequest={leaveRequest}
                leaveTypes={leaveTypes}
                key={index}
                index={index}
                handleOnSubmit={handleOnSubmit}
                handleChange={handleChange}
                setEditingState={setEditingState}
                formState={formState}
              />
            ) : (
              <tr className="grow-0 mw-100 align-middle" key={index}>
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
                <td className="bg-light-subtle">{leaveRequest.leaveType}</td>
                <td className="bg-light-subtle">
                  {renderApprovalState(leaveRequest.approvalState)}
                </td>

                <td>
                  <button
                    onClick={() => {
                      setEditingState(index);
                      handleClickEdit(
                        leaveRequest.leaveRequestId,
                        leaveRequest.userId
                      );
                      console.log(
                        "leaveRequestId:",
                        leaveRequest.leaveRequestId
                      );
                      console.log(
                        "leaveRequestObject From OnClick Button:",
                        leaveRequest
                      );
                    }}
                    className="btn btn-warning"
                  >
                    Edit
                  </button>
                  {(leaveRequest.approvalState === 2 ||
                    leaveRequest.approvalState === 3) && (
                    <button
                      onClick={() => {
                        handleDelete(leaveRequest.leaveRequestId);
                        console.log(leaveRequest.leaveRequestId);
                      }}
                      className="btn btn-danger ms-1"
                    >
                      <Trash color="white" size={16} />
                    </button>
                  )}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveRequestEditTable;
