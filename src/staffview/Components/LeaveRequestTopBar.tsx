// LeaveRequestTopBar.tsx
import React from "react";
import "./LeaveRequestTopBar.css";
import { Clock, Check2Circle, XCircle, Check2 } from "react-bootstrap-icons";

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
    <div
      className="container text-center py-2 rounded"
      style={{ maxWidth: "90%" }}
    >
      <div className="row">
        <div className="col p-2 m-2 border border-2 border-secondary rounded shadow-sm hover-shadow-lg custom-bg shadow">
          <Check2Circle className="text-primary mb-2" size={32} />
          <div className="font-weight-bold text-secondary">Total Requests</div>
          <div className="h5 text-primary">{totalRequests}</div>
        </div>
        <div className="col p-2 m-2 border border-2 border-secondary rounded shadow-sm hover-shadow-lg custom-bg shadow">
          <Clock className="text-warning mb-2" size={32} />
          <div className="font-weight-bold text-secondary">
            Pending Requests
          </div>
          <div className="h5 text-warning">{pendingRequests}</div>
        </div>
        <div className="col p-2 m-2 border border-2 border-secondary rounded shadow-sm hover-shadow-lg custom-bg shadow">
          <Check2 className="text-success mb-2" size={32} />
          <div className="font-weight-bold text-secondary">
            Approved Requests
          </div>
          <div className="h5 text-success">{approvedRequests}</div>
        </div>
        <div className="col p-2 m-2 border border-2 border-secondary rounded shadow-sm hover-shadow-lg custom-bg shadow">
          <XCircle className="text-danger mb-2" size={32} />
          <div className="font-weight-bold text-secondary">
            Rejected Requests
          </div>
          <div className="h5 text-danger">{rejectedRequests}</div>
        </div>
      </div>
    </div>
  );
};

export default LeaveRequestTopBar;
