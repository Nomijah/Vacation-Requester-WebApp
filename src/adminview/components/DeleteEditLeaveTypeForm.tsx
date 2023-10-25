import "../../interface/InterfaceCollection";

function DeleteEditLeaveTypeForm({
  leaveTypes,
  handleSelectChange,
}: {
  leaveTypes: ILeaveType[];
  handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <>
      <label className="mb-1">Select Leave Type</label>
      <select
        name="leaveTypeId"
        className="form-select"
        id="leaveType"
        onChange={handleSelectChange}
        defaultValue="Choose a leave type.."
      >
        <option disabled>Choose a leave type..</option>
        {leaveTypes.map((leaveType) => (
          <option key={leaveType.id} value={leaveType.id}>
            {leaveType.type}
          </option>
        ))}
      </select>
    </>
  );
}

export default DeleteEditLeaveTypeForm;
