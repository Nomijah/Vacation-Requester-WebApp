import LeaveRequestEditTable from "../components/LeaveRequestEditTable";
import { useState, useEffect } from "react";

import getAllUserLeaveRequests from "../../apicalls/adminLeaveRequest/getAllLeaveRequests";
import getAllLeaveTypes from "../../apicalls/leaveTypeRequests/getAllLeaveTypes";
import editLeaveRequest from "../../apicalls/adminLeaveRequest/editLeaveRequest";
import getAllLeaveRequests from "../../apicalls/adminLeaveRequest/getAllLeaveRequests";
import deleteLeaveRequest from "../../apicalls/staffLeaveRequest/deleteleaverequest";

function AdminTableContainer() {
  const [leaveRequests, setLeaveRequests] = useState<ILeaveRequest[]>(
    []
  );
  const [leaveTypes, setLeaveTypes] = useState<ILeaveType[]>([]);

  const [formState, setFormState] = useState({
    leaveRequestId: "",
    userId: "",
    startDate: new Date(),
    endDate: new Date(),
    leaveType: "Default",
    approvalState: 1,
    dateRequested: new Date(),
  });

  const [isEditing, setIsEditing] = useState<number | null>(null);

  const setEditingState = (index: number) => {
    if (isEditing !== index) {
      setIsEditing(index);
    } else {
      setIsEditing(null);
    }
  };

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

    const idToUpdate = formState.leaveRequestId;

    const updatedLeaveRequests = leaveRequests.map((leaveRequest) => {
      if (leaveRequest.id === idToUpdate) {
        return { ...leaveRequest, ...formState };
      }
      return leaveRequest;
    });

    setLeaveRequests(updatedLeaveRequests);
  };

  const handleOnSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setEditingState(null);
    try {
      const leaveTypeId = leaveTypes.find(
        (leaveType) => leaveType.type === formState.leaveType
      )?.id;

      const leaveRequestToEdit = {
        id: formState.leaveRequestId,
        userId: formState.userId,
        startDate: formState.startDate,
        endDate: formState.endDate,
        leaveTypeId: leaveTypeId,
        dateRequested: formState.dateRequested,
        approvalState: formState.approvalState,
      };
      console.log(
        "Trying to update this formState object to API:",
        leaveRequestToEdit
      );

      await editLeaveRequest(leaveRequestToEdit);
      getAllLeaveRequests().then((data) => {
        setLeaveRequests(data);
      });

      // fetchLeaveTypes(); // Refresh the list after editing
    } catch (error) {
      console.error("Failed to edit leave request", error);
    }
  };
  const handleDelete = (id: string) => {
    const userConfirmed = window.confirm(
      "Are you sure you want to delete this leave request?"
    );

    if (!userConfirmed) {
      return;
    }

    deleteLeaveRequest(id)
      .then(() => {
        setLeaveRequests((prevRequests) =>
          prevRequests.filter((request) => request.id !== id)
        );
      })
      .catch((err) => console.error("An error occurred:", err))
      .finally(() => {
        getAllLeaveRequests().then((data) => {
          setLeaveRequests(data);
        });
      });
  };

  const handleClickEdit = (
    leaveRequestId: string,
    userId: string
  ) => {
    console.log("Edit Clicked");

    const leaveRequestToEdit = leaveRequests.find(
      (leaveRequest) => leaveRequest.leaveRequestId === leaveRequestId
    );
    console.log(
      "OnClick - Trying to set FormState to this object: leaveRequestToEdit: ",
      leaveRequestToEdit
    );

    if (leaveRequestToEdit) {
      console.log("Trying to set formState to id..");
      setFormState({
        ...formState, // Spread existing formState properties
        leaveRequestId: leaveRequestId,
        userId: userId,
        dateRequested: leaveRequestToEdit.dateRequested,
        startDate: leaveRequestToEdit.startDate,
        endDate: leaveRequestToEdit.endDate,
        leaveType: leaveRequestToEdit.leaveType,
        approvalState: leaveRequestToEdit.approvalState,
      });
      console.log(
        "LeaveRequest Edit on click found, current formState: ",
        formState
      );
    }
  };

  return (
    <div>
      <h2>All LeaveRequests</h2>
      {/* <button onClick={() => console.log(formState)}>Log UseState</button> */}
      <LeaveRequestEditTable
        leaveRequests={leaveRequests}
        handleClickEdit={handleClickEdit}
        leaveTypes={leaveTypes}
        handleChange={handleChange}
        handleOnSubmit={handleOnSubmit}
        formState={formState}
        setEditingState={setEditingState}
        isEditing={isEditing}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default AdminTableContainer;
