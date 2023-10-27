import React, { useState, useContext, useEffect } from "react";
import "../../interface/InterfaceCollection";
import { Context } from "../../App";
import ApplyForm from "../Components/ApplyForm";
import getAllLeaveTypes from "../../apicalls/leaveTypeRequests/getAllLeaveTypes";
import postLeaveRequest from "../../apicalls/staffLeaveRequest/postLeaveRequest";
import { isEndDateValid } from "../../validation/isEndDateValid";

function ApplyViewContainer({
  setViewState,
}: {
  setViewState: (arg0: string) => void;
}) {
  const { user } = useContext(Context);
  const [formData, setFormData] = useState<ILeaveRequestDto>({
    userId: "",
    leaveTypeId: "",
    startDate: "",
    endDate: "",
  });

  const [leaveTypes, setLeaveTypes] = useState<ILeaveType[]>([]);

  useEffect(() => {
    const fetchLeaveTypes = async () => {
      setLeaveTypes(await getAllLeaveTypes());
    };
    setFormData({ ...formData, userId: user.id });
    fetchLeaveTypes();
  }, []);

  const handleChange = ({ target }: React.ChangeEvent<any>) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (
    event: React.ChangeEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (!isEndDateValid(formData.startDate, formData.endDate)) {
      alert("End date cannot be earlier than start date.");
      return;
    }
    await postLeaveRequest(formData);
    alert("Leave request created.");
    setViewState("home");
  };

  return (
    <div className="container-fluid bg-light-subtle border border-dark-subtle rounded">
      <ApplyForm
        leaveTypes={leaveTypes}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
      />
    </div>
  );
}

export default ApplyViewContainer;
