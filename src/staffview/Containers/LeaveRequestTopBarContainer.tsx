// LeaveRequestTopBarContainer.tsx
import React, { useEffect, useState } from "react";
import LeaveRequestTopBar from "../Components/LeaveRequestTopBar";
import getAllLeaveRequests from "./leaveRequestsApi";

const LeaveRequestTopBarContainer: React.FC = () => {
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>(
    []
  );

  useEffect(() => {
    getAllLeaveRequests() // Using the function from the separate API call file
      .then((data) => {
        setLeaveRequests(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const totalRequests = leaveRequests.length;
  const pendingRequests = leaveRequests.filter(
    (lr) => lr.ApprovalState === "Pending"
  ).length;
  const approvedRequests = leaveRequests.filter(
    (lr) => lr.ApprovalState === "Approved"
  ).length;
  const rejectedRequests = leaveRequests.filter(
    (lr) => lr.ApprovalState === "Rejected"
  ).length;

  return (
    <LeaveRequestTopBar
      totalRequests={totalRequests}
      pendingRequests={pendingRequests}
      approvedRequests={approvedRequests}
      rejectedRequests={rejectedRequests}
    />
  );
};

export default LeaveRequestTopBarContainer;
