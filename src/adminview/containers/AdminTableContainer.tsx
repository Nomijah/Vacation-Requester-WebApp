import LeaveRequestTable from "../components/LeaveRequestTable";
import { useState, useEffect } from "react";
// import "../../interfaces/InterfaceCollection";

import getAllUserLeaveRequests from "../../apicalls/adminLeaveRequest/getAllLeaveRequests";

function AdminTableContainer() {
  const [leaveRequests, setLeaveRequests] = useState<
    IStaffLeaveRequest[]
  >([]);

  useEffect(() => {
    getAllUserLeaveRequests()
      .then((data) => {
        setLeaveRequests(data);
      })
      .catch((err) => console.error("An error occurred:", err));
  }, []);
  return <LeaveRequestTable leaveRequests={leaveRequests} />;
}

export default AdminTableContainer;
