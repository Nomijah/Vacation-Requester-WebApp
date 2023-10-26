import LeaveRequestEditTable from "../components/LeaveRequestEditTable";
import { useState, useEffect } from "react";

import getAllUserLeaveRequests from "../../apicalls/adminLeaveRequest/getAllLeaveRequests";
import getAllLeaveTypes from "../../apicalls/leaveTypeRequests/getAllLeaveTypes";
import editLeaveRequest from "../../apicalls/adminLeaveRequest/editLeaveRequest";
import getAllLeaveRequests from "../../apicalls/adminLeaveRequest/getAllLeaveRequests";

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

  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  useEffect(() => {
    getAllUserLeaveRequests()
      .then((data) => {
        setLeaveRequests(data);
      })
      .catch((err) => console.error("An error occurred:", err));
    getAllLeaveTypes().then((data) => {
      setLeaveTypes(data);
    });
  }, []);

  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const date = new Date(event.target.value);
    setStartDate(date);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(event.target.value);
    if (date < startDate) {
      alert("End date cannot be less than start date");
      return;
    }
    setEndDate(date);
  };

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const leaveRequestToEdit: ILeaveRequest = {
        id: leaveRequest.id,

        userId: leaveRequest.userId,
        approvalState: leaveRequest.approvalState,

        startDate: startDate,
        endDate: endDate,
      };
      await editLeaveRequest(leaveRequest.id, leaveRequestToEdit);
      getAllLeaveRequests().then((data) => {
        setLeaveRequests(data);
      });

      // fetchLeaveTypes(); // Refresh the list after editing
    } catch (error) {
      console.error("Failed to edit leave request", error);
    }
  };

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
      type: selectedLeaveType.type,
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
      <LeaveRequestEditTable
        leaveRequests={leaveRequests}
        handleClickEdit={handleClickEdit}
        handleChangeApprovalState={handleChangeApprovalState}
        handleSelectChange={handleSelectChange}
        leaveTypes={leaveTypes}
        startDate={startDate}
        endDate={endDate}
        handleStartDateChange={handleStartDateChange}
        handleEndDateChange={handleEndDateChange}
        handleOnSubmit={handleOnSubmit}
      />
    </div>
  );
}

export default AdminTableContainer;
