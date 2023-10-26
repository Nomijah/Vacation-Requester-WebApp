import React, { useState } from "react";
import CreateLeaveTypeForm from "../components/CreateLeaveTypeForm";
import createLeaveType from "../../apicalls/leaveTypeRequests/createLeaveType";

function CreateLeaveTypeContainer({
  setReFetch,
  reFetch,
}: {
  setReFetch: (arg0: boolean) => void;
  reFetch: boolean;
}) {
  const [formData, setFormData] = useState({ type: "" });

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Assuming createLeaveType is an async function that creates a leave type.
    await createLeaveType(formData);
    setReFetch(!reFetch);
    // Handle the response as needed, like updating the UI or state to indicate success.
  };

  return (
    <CreateLeaveTypeForm
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default CreateLeaveTypeContainer;
