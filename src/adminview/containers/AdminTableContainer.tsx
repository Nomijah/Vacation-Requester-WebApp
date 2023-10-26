import LeaveRequestTable from "../components/LeaveRequestTable";
import { useState, useEffect } from "react";

import getAllUserLeaveRequests from "../../apicalls/adminLeaveRequest/getAllLeaveRequests";

function AdminTableContainer() {
  const [leaveRequests, setLeaveRequests] = useState<ILeaveRequest[]>([]);
  const [leaveRequest, setLeaveRequest] = useState<ILeaveRequest>(
    {} as ILeaveRequest
  );
  const [leaveTypes, setLeaveTypes] = useState<ILeaveType[]>([]);
  const [selectedLeaveType, setSelectedLeaveType] = useState<ILeaveType>({
    id: "defaultID",
    type: "Choose a leave type..",
  });

  useEffect(() => {
    getAllUserLeaveRequests()
      .then((data) => {
        setLeaveRequests(data);
      })
      .catch((err) => console.error("An error occurred:", err));
  }, []);

  const handleClickEdit = (id: string) => {
    console.log("Edit Clicked");
    console.log(leaveRequests.find((leaveRequest) => leaveRequest.id === id));
  };

  const handleChangeApprovalState = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = event.target.value;
    setLeaveRequest({
      ...leaveRequest,
      approvalState: newValue,
      id: selectedLeaveType.id,
    });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.target.value;
    const matchingLeaveType = leaveTypes.find(
      (leaveType) => leaveType.id === selectedId
    );
    if (matchingLeaveType === undefined) return;

    setSelectedLeaveType(matchingLeaveType);
  };

  return (
    <div>
      <h2>All LeaveRequests</h2>
      <LeaveRequestTable
        leaveRequests={leaveRequests}
        handleClickEdit={handleClickEdit}
        handleChangeApprovalState={handleChangeApprovalState}
        handleSelectChange={handleSelectChange}
        leaveTypes={leaveTypes}
      />
    </div>
  );
}

export default AdminTableContainer;
