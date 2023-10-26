import DeleteEditLeaveTypeForm from "../components/DeleteEditLeaveTypeForm";
import SelectApprovalState from "../components/SelectApprovalState";
import { Collapse } from "react-bootstrap";
function EditRowLeaveRequestForm({
  leaveRequest,
  leaveTypes,
  handleSelectChange,
  handleChangeApprovalState,
  index,
  openRows,
  isActive,
  startDate,
  endDate,
  handleStartDateChange,
  handleEndDateChange,
  handleOnSubmit,
}: {
  leaveRequest: ILeaveRequest;
  leaveTypes?: ILeaveType[];
  handleSelectChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleChangeApprovalState: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  index: number;
  openRows: Record<number, boolean>;
  isActive: boolean;
  startDate: Date;
  endDate: Date;
  handleStartDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleEndDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <Collapse in={openRows[index] || false}>
      <tr
        className={`border-2 border-success ${isActive ? "show" : "collapse"}`}
        id={`collapseEditRow-${index}`}
      >
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
            onChange={handleStartDateChange}
            type="date"
            value={startDate.toISOString()}
            className="form-control"
          />
        </td>
        <td className="bg-dark-subtle grow-0">
          <input
            onChange={handleEndDateChange}
            type="date"
            value={endDate.toISOString()}
            className="form-control"
          />
        </td>
        <td className="bg-dark-subtle grow-0">
          <input
            readOnly
            type="date"
            value={new Date(leaveRequest.dateRequested)
              .toISOString()
              .substr(0, 10)}
            className="form-control"
          />
        </td>
        <td className="bg-dark-subtle grow-0 ">
          <DeleteEditLeaveTypeForm
            leaveTypes={leaveTypes}
            handleSelectChange={handleSelectChange}
            className="form-select"
          />
        </td>
        <td className="bg-dark-subtle grow-0">
          <SelectApprovalState
            handleSelectChangeApprovalState={handleChangeApprovalState}
            className="form-select"
          />
        </td>

        <td className="bg-dark-subtle grow-0">
          <button onClick={handleOnSubmit} className="btn btn-success">
            Submit
          </button>
        </td>
      </tr>
    </Collapse>
  );
}

export default EditRowLeaveRequestForm;
