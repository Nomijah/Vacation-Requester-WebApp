// LeaveRequestTopBar.tsx
import React from "react";

interface LeaveRequestTopBarProps {
  totalRequests: number;
  pendingRequests: number;
  approvedRequests: number;
  rejectedRequests: number;
}

const LeaveRequestTopBar: React.FC<LeaveRequestTopBarProps> = ({
  totalRequests,
  pendingRequests,
  approvedRequests,
  rejectedRequests,
}) => {
  return (
    <div className="topBar">
      <div>Total Number of Requests: {totalRequests}</div>
      <div>Pending Requests: {pendingRequests}</div>
      <div>Approved Requests: {approvedRequests}</div>
      <div>Rejected Requests: {rejectedRequests}</div>
    </div>
  );
};

export default LeaveRequestTopBar;
