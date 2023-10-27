import React, { useState } from "react";
import { ArrowDownUp, Trash } from "react-bootstrap-icons";
import { Clock, Check2Circle, XCircle } from "react-bootstrap-icons";
import DeleteButtonStaff from "./DeleteButtonStaff";

interface StaffLeaveRequestTableProps {
  leaveRequests: IStaffLeaveRequest[];
  onDelete: (id: string) => void;
}

const StaffTable: React.FC<StaffLeaveRequestTableProps> = ({
  leaveRequests,
  onDelete,
}) => {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "none",
  });

  const renderApprovalState = (state: number) => {
    switch (state) {
      case 1:
        return (
          <span className="bg-warning rounded-2 p-2">
            <Clock color="black" size={16} /> Pending
          </span>
        );
      case 2:
        return (
          <span className="bg-success rounded-2 p-2">
            <Check2Circle color="white" size={16} /> Approved
          </span>
        );
      case 3:
        return (
          <span className="bg-danger rounded-2 p-2">
            <XCircle color="white" size={16} /> Rejected
          </span>
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
    <div className="container-fluid bg-light-subtle border border-dark-subtle rounded mt-3">
      <h2 className="ms-2 mt-3">Your Leave Requests</h2>
      <table className="table mt-4">
        <thead>
          <tr className="border-1">
            <th
              className="bg-dark-subtle"
              onClick={() => requestSort("leaveTypeName")}
            >
              Leave Type <ArrowDownUp color="royalblue" size={13} />
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
              onClick={() => requestSort("approvalState")}
            >
              Approval State <ArrowDownUp color="royalblue" size={13} />
            </th>
            <th className="bg-dark-subtle">Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedLeaveRequests.map((leaveRequest, index) => (
            <tr className="align-middle" key={index}>
              <td className="bg-light-subtle">{leaveRequest.leaveType.type}</td>
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
              <td className="bg-light-subtle">
                <DeleteButtonStaff
                  approvalState={leaveRequest.approvalState}
                  onDelete={onDelete}
                  id={leaveRequest.id}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffTable;

// import { ArrowDownUp } from "react-bootstrap-icons";
// import React, { useState } from "react";

// import { Clock, Check2Circle, XCircle } from "react-bootstrap-icons";

// const StaffTable: React.FC<StaffLeaveRequestTableProps> = ({
//   leaveRequests,
// }) => {
//   const [sortConfig, setSortConfig] = useState({
//     key: null,
//     direction: "none",
//   });
//   const renderApprovalState = (state: number) => {
//     switch (state) {
//       case 1:
//         return (
//           <span className="bg-warning rounded-2 p-2">
//             <Clock color="black" size={16} /> Pending
//           </span>
//         );
//       case 2:
//         return (
//           <span className="bg-success rounded-2 p-2">
//             <Check2Circle color="white" size={16} /> Approved
//           </span>
//         );
//       case 3:
//         return (
//           <span className="bg-danger rounded-2 p-2">
//             <XCircle color="white" size={16} /> Rejected
//           </span>
//         );
//       default:
//         return null;
//     }
//   };

//   const requestSort = (key: string) => {
//     let direction = "ascending";
//     if (
//       sortConfig &&
//       sortConfig.key === key &&
//       sortConfig.direction === "ascending"
//     ) {
//       direction = "descending";
//     }
//     setSortConfig({ key, direction });
//   };

//   const leaveRequestsWithTypeName = leaveRequests.map((request) => ({
//     ...request,
//     leaveTypeName: request.leaveType.type,
//   }));

//   let sortedLeaveRequests = [...leaveRequestsWithTypeName];
//   if (sortConfig !== null) {
//     sortedLeaveRequests.sort((a, b) => {
//       if (a[sortConfig.key] < b[sortConfig.key]) {
//         return sortConfig.direction === "ascending" ? -1 : 1;
//       }
//       if (a[sortConfig.key] > b[sortConfig.key]) {
//         return sortConfig.direction === "ascending" ? 1 : -1;
//       }
//       return 0;
//     });
//   }
//   return (
//     <div>
//       <h2 className="ms-2 mt-3">Your Leave Requests</h2>
//       <table className="table mt-4">
//         <thead>
//           <tr className="border-1">
//             <th onClick={() => requestSort(`leaveTypeName`)}>
//               Leave Type <ArrowDownUp color="royalblue" size={13} />
//             </th>
//             <th onClick={() => requestSort("startDate")}>
//               Start Date <ArrowDownUp color="royalblue" size={13} />
//             </th>
//             <th onClick={() => requestSort("endDate")}>
//               End Date <ArrowDownUp color="royalblue" size={13} />
//             </th>
//             <th onClick={() => requestSort("dateRequested")}>
//               Date Requested{" "}
//               <ArrowDownUp color="royalblue" size={13} />
//             </th>
//             <th onClick={() => requestSort("approvalState")}>
//               Approval State{" "}
//               <ArrowDownUp color="royalblue" size={13} />
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {sortedLeaveRequests.map((leaveRequest, index) => (
//             <tr key={index}>
//               <td>{leaveRequest.leaveType.type}</td>
//               <td>
//                 {new Date(
//                   leaveRequest.startDate
//                 ).toLocaleDateString()}
//               </td>
//               <td>
//                 {new Date(leaveRequest.endDate).toLocaleDateString()}
//               </td>
//               <td>
//                 {new Date(
//                   leaveRequest.dateRequested
//                 ).toLocaleDateString()}
//               </td>
//               <td>
//                 {renderApprovalState(leaveRequest.approvalState)}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default StaffTable;
