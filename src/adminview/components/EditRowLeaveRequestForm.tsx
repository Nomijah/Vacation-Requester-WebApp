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
}) {
  return (
    <Collapse in={openRows[index] || false}>
      <tr
        className={`border-2 border-success ${isActive ? "show" : "collapse"}`}
        id={`collapseEditRow-${index}`}
      >
        <td className="bg-dark-subtle">
          <input
            type="text"
            readOnly
            value={leaveRequest.employeeName}
            className="form-control"
          />
        </td>
        <td className="bg-dark-subtle">
          <input
            readOnly
            type="date"
            value={new Date(leaveRequest.startDate).toISOString().substr(0, 10)}
            className="form-control"
          />
        </td>
        <td className="bg-dark-subtle">
          <input
            readOnly
            type="date"
            value={new Date(leaveRequest.endDate).toISOString().substr(0, 10)}
            className="form-control"
          />
        </td>
        <td className="bg-dark-subtle">
          <input
            readOnly
            type="date"
            value={new Date(leaveRequest.dateRequested)
              .toISOString()
              .substr(0, 10)}
            className="form-control"
          />
        </td>
        <td className="bg-dark-subtle">
          <SelectApprovalState
            handleSelectChangeApprovalState={handleChangeApprovalState}
            className="form-select"
          />
        </td>
        <td className="bg-dark-subtle">
          <DeleteEditLeaveTypeForm
            leaveTypes={leaveTypes}
            handleSelectChange={handleSelectChange}
            className="form-select"
          />
        </td>
        <td className="bg-dark-subtle">
          <button className="btn btn-success">Submit</button>
        </td>
      </tr>
    </Collapse>
  );
}

export default EditRowLeaveRequestForm;
