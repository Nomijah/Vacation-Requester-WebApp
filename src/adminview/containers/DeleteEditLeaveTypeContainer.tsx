import React, { useState, useEffect } from "react";
import DeleteEditLeaveTypeForm from "../components/DeleteEditLeaveTypeForm";
import deleteLeaveType from "../../apicalls/adminLeaveRequest/deleteLeaveType";
import editLeaveType from "../../apicalls/adminLeaveRequest/editLeaveType";
import getAllLeaveTypes from "../../apicalls/leaveTypeRequests/getAllLeaveTypes";
import EditLeaveTypeForm from "../components/EditLeaveTypeForm";
import CreateLeaveTypeContainer from "./CreateLeaveTypeContainer";
import "../../interface/InterfaceCollection";

function DeleteEditLeaveTypeContainer() {
  const [leaveTypes, setLeaveTypes] = useState<ILeaveType[]>([]);
  const [selectedLeaveType, setSelectedLeaveType] = useState<ILeaveType>({
    id: "defaultID",
    type: "defaultType",
  });

  useEffect(() => {
    fetchLeaveTypes();
  }, []);

  const fetchLeaveTypes = async () => {
    try {
      const types = await getAllLeaveTypes();
      setLeaveTypes(types);
    } catch (error) {
      console.error("Failed to fetch leave types", error);
    }
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    const selectedId = event.target.value;
    const matchingLeaveType = leaveTypes.find(
      (leaveType) => leaveType.id === selectedId
    );
    setSelectedLeaveType(matchingLeaveType);
    console.log("handleSelectChange = ", matchingLeaveType);
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
    console.log("HANDLEONSUBMIT");
    console.log(selectedLeaveType.id);
    console.log(selectedLeaveType.type);
    console.log("HANDLEONSUBMIT");
    try {
      const response = await editLeaveType(
        selectedLeaveType,
        selectedLeaveType.id
      );
      console.log(response);
      fetchLeaveTypes(); // Refresh the list after editing
    } catch (error) {
      console.error("Failed to edit leave type", error);
    }
  };

  const handleDelete = async () => {
    try {
      // Assuming deleteLeaveType needs the ID of the leaveType to be deleted
      const response = await deleteLeaveType(selectedLeaveType);
      console.log(response);
      fetchLeaveTypes(); // Refresh the list after deletion
    } catch (error) {
      console.error("Failed to delete leave type", error);
    }
  };
  return (
    <>
      <div className="container mt-5 w-50 border p-2">
        <h4 className="mb-3">Delete or Edit Leave Type</h4>

        <CreateLeaveTypeContainer />
        <DeleteEditLeaveTypeForm
          leaveTypes={leaveTypes}
          selectedLeaveType={selectedLeaveType}
          handleSelectChange={handleSelectChange}
          handleDelete={handleDelete}
        />
        <div className="d-flex row mt-4">
          <EditLeaveTypeForm
            selectedLeaveType={selectedLeaveType}
            handleEditFormChange={handleEditFormChange}
            handleOnSubmit={handleOnSubmit}
          />
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </>
  );
}

export default DeleteEditLeaveTypeContainer;
