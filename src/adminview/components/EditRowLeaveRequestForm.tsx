function EditRowLeaveRequestForm({
  leaveRequest,
  leaveTypes,
  index,
  handleOnSubmit,
  handleChange,
  setEditingState,
  formState,
}: {
  leaveRequest: ILeaveRequest;
  leaveTypes?: ILeaveType[];
  index: number;
  handleOnSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  setEditingState: (index: number) => void;
  formState: ILeaveRequest;
}) {
  return (
    <tr className={`border-2 border-success`} key={index}>
      <td className="bg-dark-subtle grow-0  ">
        <input
          type="text"
          readOnly
          value={leaveRequest.employeeName}
          className="form-control"
        />
      </td>
      <td className="bg-dark-subtle grow-0">
        <input
          onChange={handleChange}
          type="date"
          name="startDate"
          value={new Date(formState.startDate).toLocaleDateString()}
          className="form-control"
        />
      </td>
      <td className="bg-dark-subtle grow-0">
        <input
          onChange={handleChange}
          type="date"
          name="endDate"
          value={new Date(formState.endDate).toLocaleDateString()}
          className="form-control"
        />
      </td>
      <td className="bg-dark-subtle grow-0">
        <input
          readOnly
          type="date"
          value={new Date(leaveRequest.dateRequested).toLocaleDateString()}
          className="form-control"
        />
      </td>
      <td className="bg-dark-subtle grow-0">
        <select
          name="leaveType"
          className="form-select"
          onChange={handleChange}
          defaultValue={formState.leaveType}
        >
          <option disabled>Choose a leave type..</option>
          {leaveTypes?.map((leaveType) => (
            <option key={leaveType.id} value={leaveType.type}>
              {leaveType.type}
            </option>
          ))}
        </select>
      </td>
      <td className="bg-dark-subtle grow-0">
        <select
          name="approvalState"
          className="form-select"
          onChange={handleChange}
          defaultValue={leaveRequest.approvalState}
        >
          <option value={1}>Pending</option>
          <option value={2}>Accepted</option>
          <option value={3}>Rejected</option>
        </select>
      </td>
      <td className="bg-dark-subtle grow-0">
        <button
          onClick={() => setEditingState(null)}
          className="btn btn-danger me-1 p-1"
        >
          Cancel
        </button>
        <button onClick={handleOnSubmit} className="btn btn-success p-1">
          Submit
        </button>
      </td>
    </tr>
  );
}

export default EditRowLeaveRequestForm;
