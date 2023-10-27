import React, { useEffect, useState } from "react";
import LeaveRequestTopBar from "../Components/LeaveRequestTopBar";
import getAllLeaveRequests from "../../apicalls/adminLeaveRequest/getAllLeaveRequests";

interface ILeaveRequest {
  Id: string;
  UserId: string;
  LeaveTypeId: string;
  StartDate: string;
  EndDate: string;
  DateRequested: string;
  approvalState: number; // Changed from string to number
}

const LeaveRequestTopBarContainer: React.FC = () => {
  const [leaveRequests, setLeaveRequests] = useState<any[]>([]);

  useEffect(() => {
    getAllLeaveRequests()
      .then((data) => {
        setLeaveRequests(data);
      })
      .catch((err) => console.error("An error occurred:", err));
  }, []);

  const totalRequests = leaveRequests.length;

  // Updated filtering logic to use numbers
  const pendingRequests = leaveRequests.filter(
    (lr) => lr.approvalState === 1
  ).length; // 1 for Pending
  const approvedRequests = leaveRequests.filter(
    (lr) => lr.approvalState === 2
  ).length; // 2 for Approved
  const rejectedRequests = leaveRequests.filter(
    (lr) => lr.approvalState === 3
  ).length; // 3 for Rejected

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
