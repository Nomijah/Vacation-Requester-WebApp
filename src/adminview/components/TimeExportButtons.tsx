import DeleteEditLeaveTypeForm from "./DeleteEditLeaveTypeForm";

function TimeExportButtons({
  filterLeaveRequests,
  handleExportButtonClick,
}: {
  leaveTypes: ILeaveType[];
  handleSelectChange: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
}) {
  return (
    <>
      <div className="">
        <button
          onClick={filterLeaveRequests}
          className="btn btn-primary rounded-end-0"
        >
          Find requests
        </button>
        <button
          onClick={handleExportButtonClick}
          className="btn btn-warning rounded-start-0"
        >
          Export Data
        </button>
      </div>
    </>
  );
}

export default TimeExportButtons;
