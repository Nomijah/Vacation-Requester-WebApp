import React from "react";
import "../../interface/InterfaceCollection";

function ApplyForm({
  leaveTypes,
  handleChange,
  handleSubmit,
  formData,
}: {
  leaveTypes: ILeaveType[];
  handleChange: (event: React.ChangeEvent<any>) => void;
  handleSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
  formData: ILeaveRequestDto;
}) {
  return (
    <div className="m-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3 mt-3">
          <label className="input-group-text" htmlFor="leaveType">
            Leave type
          </label>
          <select
            name="leaveTypeId"
            className="form-select"
            id="leaveType"
            defaultValue="Choose a leave type.."
            onChange={handleChange}
          >
            <option disabled selected>
              Choose a leave type..
            </option>
            {leaveTypes.map((leaveType) => (
              <option key={leaveType.id} value={leaveType.id}>
                {leaveType.type}
              </option>
            ))}
          </select>
        </div>
        <div className="input-group mb-3">
          <label htmlFor="StartDate" className="input-group-text">
            Start date
          </label>
          <input
            name="startDate"
            type="date"
            className="form-control"
            id="StartDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <label htmlFor="EndDate" className="input-group-text">
            End date
          </label>
          <input
            name="endDate"
            type="date"
            className="form-control"
            id="EndDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ApplyForm;
