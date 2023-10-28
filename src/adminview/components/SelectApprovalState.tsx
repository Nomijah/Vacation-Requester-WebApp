function SelectApprovalState(
  leaveRequest: ILeaveRequest,
  handleChangeApprovalState: (leaveRequest: ILeaveRequest) => void
) {
  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => handleChangeApprovalState(leaveRequest)}
      >
        <option defaultValue="test" value={1}>
          Pending
        </option>
        <option defaultValue="Test" value={2}>
          Accepted
        </option>
        <option defaultValue="test" value={3}>
          Rejected
        </option>
      </select>
    </div>
  );
}

export default SelectApprovalState;
