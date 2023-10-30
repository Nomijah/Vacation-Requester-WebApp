import DeleteEditLeaveTypeForm from "./DeleteEditLeaveTypeForm";

function SelectTimeWithTypeForm({
  leaveTypes,
  selectedLeaveType,
  handleStartDateChange,
  startDate,
  handleEndDateChange,
  handleSelectChange,
}: {
  leaveTypes: ILeaveType[];
  handleSelectChange: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
}) {
  return (
    <>
      <div className="input-group mb-3">
        <div className="input-group">
          <label className="input-group-text" htmlFor="">
            Start Date
          </label>
          <input
            onChange={handleStartDateChange}
            type="date"
            className="form-control"
            value={startDate.toISOString().substr(0, 10)}
          />
        </div>
        <div className="input-group">
          <label className="input-group-text" htmlFor="">
            End Date
          </label>
          <input
            onChange={handleEndDateChange}
            type="date"
            className="form-control"
          />
        </div>
        <div className="input-group row">
          <DeleteEditLeaveTypeForm
            leaveTypes={leaveTypes}
            selectedLeaveType={selectedLeaveType}
            handleSelectChange={handleSelectChange}
          />
        </div>
      </div>
    </>
  );
}

export default SelectTimeWithTypeForm;
