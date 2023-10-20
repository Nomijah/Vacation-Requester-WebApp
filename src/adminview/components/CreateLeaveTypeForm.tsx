import React from "react";

// Define the props that this component will receive
function CreateLeaveTypeForm({ formData, handleChange, handleSubmit }) {
  return (
    <div className="m-4">
      <h4>Create Leave Type</h4>
      <div className="container w-50">
        <div className="row">
          <div className="col-12">
            {/* Use the handleSubmit function when the form is submitted */}
            <form action="" className="my-3" onSubmit={handleSubmit}>
              <div className="input-group">
                {/* Set the value of the input to the current formData, and call handleChange when the input value changes */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Vacation, Sick leave"
                  value={formData.type} // assuming it's a 'type' field
                  onChange={handleChange}
                  name="type" // this should correspond with the structure of your formData
                />
                <button className="btn btn-outline-success" type="submit">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateLeaveTypeForm;
