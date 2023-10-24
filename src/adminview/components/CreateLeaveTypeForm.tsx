function CreateLeaveTypeForm({ formData, handleChange, handleSubmit }) {
  return (
    <div className="mb-4">
      {/* Use the handleSubmit function when the form is submitted */}
      <form action="" className="" onSubmit={handleSubmit}>
        <label className="mb-1">Create Leave Type</label>
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
  );
}

export default CreateLeaveTypeForm;
