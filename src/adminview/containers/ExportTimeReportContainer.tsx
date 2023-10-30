import getAllLeaveTypes from "../../apicalls/leaveTypeRequests/getAllLeaveTypes";
import getAllUserLeaveRequests from "../../apicalls/adminLeaveRequest/getAllLeaveRequests";
import DeleteEditLeaveTypeForm from "../components/DeleteEditLeaveTypeForm";
import { useState, useEffect } from "react";
import LeaveRequestTable from "../components/LeaveRequestTable";
import SelectTimeWithTypeForm from "../components/SelectTimeWithTypeForm";
import TimeExportButtons from "../components/TimeExportButtons";

function ExportTimeReportContainer() {
  const [leaveTypes, setLeaveTypes] = useState<ILeaveType[]>([]);
  const [selectedLeaveType, setSelectedLeaveType] =
    useState<ILeaveType>({
      id: "defaultID",
      type: "Choose a leave type..",
    });

  const [leaveRequests, setLeaveRequests] = useState<ILeaveRequest[]>(
    []
  );
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [filteredLeaveRequests, setFilteredLeaveRequests] = useState<
    ILeaveRequest[]
  >([]);

  const [reFetch, setReFetch] = useState<boolean>(false);

  useEffect(() => {
    fetchLeaveTypes();

    getAllUserLeaveRequests()
      .then((data) => {
        setLeaveRequests(data as ILeaveRequest[]);
      })
      .catch((err) => console.error("An error occurred:", err));
  }, [reFetch]);

  const fetchLeaveTypes = async () => {
    try {
      const types = await getAllLeaveTypes();
      setLeaveTypes(types);
    } catch (error) {
      console.error("Failed to fetch leave types", error);
    }
  };

  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const date = new Date(event.target.value);
    setStartDate(date);
  };

  const handleEndDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const date = new Date(event.target.value);
    if (date < startDate) {
      alert("End date cannot be less than start date");
      return;
    }
    setEndDate(date);
  };

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLFormElement>
  ) => {
    const selectedId = event.target.value;
    const matchingLeaveType = leaveTypes.find(
      (leaveType) => leaveType.id === selectedId
    );
    setSelectedLeaveType(matchingLeaveType);
  };

  function filterLeaveRequests() {
    let filteredRequests = leaveRequests;
    if (
      startDate &&
      endDate &&
      selectedLeaveType.id !== "defaultID" &&
      selectedLeaveType.type !== "Choose a leave type.."
    ) {
      filteredRequests = leaveRequests.filter((request) => {
        const requestDate = new Date(request.dateRequested);

        return (
          requestDate >= startDate &&
          requestDate <= endDate &&
          request.leaveType === selectedLeaveType.type &&
          request.approvalState === 1
        );
      });
    }
    setFilteredLeaveRequests(filteredRequests);
  }

  const handleExportButtonClick = () => {
    const lines = filteredLeaveRequests.map((request) => {
      return `${request.employeeName} - ${request.leaveType} - ${request.dateRequested} -  ${request.startDate} - ${request.startDate} - ${request.approvalState}`;
    });

    const data = lines.join("\n");

    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    if (
      window.confirm(
        "Are you sure you want to download the time report?"
      )
    ) {
      const link = document.createElement("a");
      link.download = "time-report.txt";
      link.href = url;
      link.click();
    }
  };

  return (
    <div className="container m-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 border pt-2">
          <h2>Export Time Report</h2>
          <SelectTimeWithTypeForm
            leaveTypes={leaveTypes}
            selectedLeaveType={selectedLeaveType}
            handleStartDateChange={handleStartDateChange}
            startDate={startDate}
            handleEndDateChange={handleEndDateChange}
            handleSelectChange={handleSelectChange}
          />
          <TimeExportButtons
            filterLeaveRequests={filterLeaveRequests}
            handleExportButtonClick={handleExportButtonClick}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <LeaveRequestTable leaveRequests={filteredLeaveRequests} />
        </div>
      </div>
    </div>
  );
}

export default ExportTimeReportContainer;
