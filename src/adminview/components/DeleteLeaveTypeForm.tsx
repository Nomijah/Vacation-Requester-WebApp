function DeleteLeaveTypeForm({ selectedLeaveType, handleDelete }) {
  return (
    <>
      <button
        className="btn btn-danger rounded-top-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseDelete"
        aria-expanded="false"
        aria-controls="collapseDelete"
      >
        Delete
      </button>
      <div className="collapse" id="collapseDelete">
        <div className="card card-body">
          <form action="" className="my-3">
            <div className="input-group d-flex justify-content-center">
              {/* Set the value of the input to the current formData, and call handleChange when the input value changes */}
              <span className="fw-bold">Do you want to delete&nbsp;</span>
              <span className="text-danger fw-bold">
                {" "}
                {selectedLeaveType.type}{" "}
              </span>
              <span className="fw-bold">?</span>
              <button
                className="btn btn-success me-3 rounded"
                type="submit"
                onClick={handleDelete}
                data-bs-toggle="collapse"
                data-bs-target="#collapseDelete"
                aria-expanded="false"
                aria-controls="collapseDelete"
              >
                Delete
              </button>
              <button
                className="btn btn-danger ms-3 rounded w-25"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseDelete"
                aria-expanded="false"
                aria-controls="collapseDelete"
              >
                No
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default DeleteLeaveTypeForm;
