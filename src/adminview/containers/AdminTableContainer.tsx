import LeaveRequestEditTable from "../components/LeaveRequestEditTable";
import { useState, useEffect } from "react";

import getAllUserLeaveRequests from "../../apicalls/adminLeaveRequest/getAllLeaveRequests";
import getAllLeaveTypes from "../../apicalls/leaveTypeRequests/getAllLeaveTypes";
import editLeaveRequest from "../../apicalls/adminLeaveRequest/editLeaveRequest";
import getAllLeaveRequests from "../../apicalls/adminLeaveRequest/getAllLeaveRequests";

function AdminTableContainer() {
  const [leaveRequests, setLeaveRequests] = useState<ILeaveRequest[]>([]);
  const [leaveTypes, setLeaveTypes] = useState<ILeaveType[]>([]);

  const [formState, setFormState] = useState({
    id: "",
    userId: "",
    startDate: new Date(),
    endDate: new Date(),
    leaveType: "Default",
    approvalState: 1,
    dateRequested: new Date(),
  });

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

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    if (name === "startDate" || name === "endDate") {
      setFormState((prevState) => ({
        ...prevState,
        [name]: new Date(value),
      }));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }

    const idToUpdate = formState.id;

    const updatedLeaveRequests = leaveRequests.map((leaveRequest) => {
      if (leaveRequest.id === idToUpdate) {
        return { ...leaveRequest, ...formState };
      }
      return leaveRequest;
    });

    setLeaveRequests(updatedLeaveRequests);
  };

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const leaveTypeId = leaveTypes.find(
        (leaveType) => leaveType.type === formState.leaveType
      )?.id;

      const leaveRequestToEdit = {
        id: formState.id,
        userId: formState.userId,
        startDate: formState.startDate,
        endDate: formState.endDate,
        leaveTypeId: leaveTypeId,
        leaveType: formState.leaveType,
        dateRequested: formState.dateRequested,
        approvalState: formState.approvalState,
      };

      await editLeaveRequest(leaveRequestToEdit);
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
    const leaveRequestToEdit = leaveRequests.find(
      (leaveRequest) => leaveRequest.id === id
    );
    if (leaveRequestToEdit) {
      setFormState({
        ...formState, // Spread existing formState properties
        id: leaveRequestToEdit.id,
        userId: leaveRequestToEdit.userId,
        dateRequested: leaveRequestToEdit.dateRequested,
        startDate: leaveRequestToEdit.startDate,
        endDate: leaveRequestToEdit.endDate,
        leaveType: leaveRequestToEdit.leaveType,
        approvalState: leaveRequestToEdit.approvalState,
      });
    }
  };

  return (
    <div>
      <h2>All LeaveRequests</h2>
      <button onClick={() => console.log(formState)}>Log UseState</button>
      <LeaveRequestEditTable
        leaveRequests={leaveRequests}
        handleClickEdit={handleClickEdit}
        leaveTypes={leaveTypes}
        handleChange={handleChange}
        handleOnSubmit={handleOnSubmit}
        formState={formState}
      />
    </div>
  );
}

export default AdminTableContainer;
