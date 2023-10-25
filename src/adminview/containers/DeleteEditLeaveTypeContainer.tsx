import React, { useState, useEffect } from "react";
import DeleteEditLeaveTypeForm from "../components/DeleteEditLeaveTypeForm";
import deleteLeaveType from "../../apicalls/leaveTypeRequests/deleteLeaveType";
import editLeaveType from "../../apicalls/leaveTypeRequests/editLeaveType";
import getAllLeaveTypes from "../../apicalls/leaveTypeRequests/getAllLeaveTypes";
import EditLeaveTypeForm from "../components/EditLeaveTypeForm";
import CreateLeaveTypeContainer from "./CreateLeaveTypeContainer";
import DeleteLeaveTypeForm from "../components/DeleteLeaveTypeForm";

export function DeleteEditLeaveTypeContainer() {
  const [leaveTypes, setLeaveTypes] = useState<ILeaveType[]>([]);
  const [selectedLeaveType, setSelectedLeaveType] = useState<ILeaveType>({
    id: "defaultID",
    type: "Choose a leave type..",
  });

  const [reFetch, setReFetch] = useState<boolean>(false);

  useEffect(() => {
    fetchLeaveTypes();
  }, [reFetch]);

  const fetchLeaveTypes = async () => {
    try {
      const types = await getAllLeaveTypes();
      setLeaveTypes(types);
    } catch (error) {
      console.error("Failed to fetch leave types", error);
    }
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.target.value;
    const matchingLeaveType = leaveTypes.find(
      (leaveType) => leaveType.id === selectedId
    );
    if (matchingLeaveType === undefined) return;

    setSelectedLeaveType(matchingLeaveType);
  };

  const handleEditFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSelectedLeaveType({
      ...selectedLeaveType,
      type: newValue,
      id: selectedLeaveType.id,
    });
  };

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await editLeaveType(selectedLeaveType, selectedLeaveType.id);
      setReFetch(!reFetch);
      // fetchLeaveTypes(); // Refresh the list after editing
    } catch (error) {
      console.error("Failed to edit leave type", error);
    }
  };

  const handleDelete = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // Assuming deleteLeaveType needs the ID of the leaveType to be deleted
      await deleteLeaveType(selectedLeaveType.id);
      fetchLeaveTypes(); // Refresh the list after deletion
    } catch (error) {
      console.error("Failed to delete leave type", error);
    }
  };
  return (
    <>
      <div className="container mt-5 w-50 border p-2">
        <h4 className="mb-3">Leave Type Management</h4>

        <CreateLeaveTypeContainer setReFetch={setReFetch} reFetch={reFetch} />
        <DeleteEditLeaveTypeForm
          leaveTypes={leaveTypes}
          handleSelectChange={handleSelectChange}
        />
        <div className="d-flex row mt-4">
          <EditLeaveTypeForm
            selectedLeaveType={selectedLeaveType}
            handleEditFormChange={handleEditFormChange}
            handleOnSubmit={handleOnSubmit}
          />
          <DeleteLeaveTypeForm
            selectedLeaveType={selectedLeaveType}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </>
  );
}

export default DeleteEditLeaveTypeContainer;
