import React, { useState } from "react";

function DeleteEditLeaveTypeForm({ leaveTypes }) {
  // State to hold the selected leave type
  const [selectedLeaveType, setSelectedLeaveType] = useState(null);

  const handleSelectChange = (event) => {
    setSelectedLeaveType(event.target.value);
  };

  const handleEdit = () => {
    // Logic for edit action
    console.log("Edit action for:", selectedLeaveType);
  };

  const handleDelete = () => {
    // Logic for delete action
    console.log("Delete action for:", selectedLeaveType);
  };

  return (
    <div className="container mt-5 w-50 border p-2">
      <span className="bg-black text-warning p-1 rounded">
        Work In progress
      </span>

      <h4 className="mb-3">Delete or Edit Leave Type</h4>
      <div className="mb-3">
        <select className="form-select">
          <option value="">Select a Leave Type</option>
        </select>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <button
          className="btn btn-primary me-md-2"
          onClick={handleEdit}
          disabled={!selectedLeaveType}
        >
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={handleDelete}
          disabled={!selectedLeaveType}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeleteEditLeaveTypeForm;
