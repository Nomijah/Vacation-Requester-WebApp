import LeaveRequestTable from "../components/LeaveRequestTable";
import { useState, useEffect } from "react";
import { ILeaveRequest } from "../interfaces/InterfaceCollection";

import getAllUserLeaveRequests from "../../apicalls/adminLeaveRequest/getAllLeaveRequests";

function AdminTableContainer() {
  const [leaveRequests, setLeaveRequests] = useState<ILeaveRequest[]>([]);

  useEffect(() => {
    getAllUserLeaveRequests()
      .then((data) => {
        setLeaveRequests(data as ILeaveRequest[]);
      })
      .catch((err) => console.error("An error occurred:", err));
  }, []);
  return <LeaveRequestTable leaveRequests={leaveRequests} />;
}

export default AdminTableContainer;
