function EditLeaveTypeForm({
  selectedLeaveType,
  handleEditFormChange,
  handleOnSubmit,
}) {
  return (
    <>
      <button
        className="btn btn-primary rounded-bottom-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Edit
      </button>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <form action="" className="my-3" onSubmit={handleOnSubmit}>
            <div className="input-group">
              {/* Set the value of the input to the current formData, and call handleChange when the input value changes */}
              <input
                type="text"
                className="form-control"
                placeholder="Vacation, Sick leave"
                value={selectedLeaveType.type} // corrected extra closing curly brace
                onChange={handleEditFormChange}
                name="type" // this should correspond with the structure of your formData
              />
              <button className="btn btn-outline-success" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditLeaveTypeForm;
