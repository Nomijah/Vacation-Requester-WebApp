import React, { useState, useEffect } from "react";
import DeleteEditLeaveTypeForm from "../components/DeleteEditLeaveTypeForm";
import deleteLeaveType from "../../apicalls/adminLeaveRequest/deleteLeaveType";
import editLeaveType from "../../apicalls/adminLeaveRequest/editLeaveType";
import getAllLeaveTypes from "../../apicalls/adminLeaveRequest/getAllLeaveTypes";

function DeleteEditLeaveTypeContainer() {
  const [leaveTypes, setLeaveTypes] = useState([]);
  const [selectedLeaveType, setSelectedLeaveType] = useState(null);

  useEffect(() => {
    // Fetch the leave types when the component mounts
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

  const handleSelectChange = (event) => {
    setSelectedLeaveType(event.target.value);
  };

  const handleEdit = async () => {
    try {
      // Assuming editLeaveType needs the ID of the leaveType to be edited
      const response = await editLeaveType(selectedLeaveType);
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
    <DeleteEditLeaveTypeForm
      leaveTypes={leaveTypes}
      selectedLeaveType={selectedLeaveType}
      handleSelectChange={handleSelectChange}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
}

export default DeleteEditLeaveTypeContainer;
