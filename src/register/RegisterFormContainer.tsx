import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import userRegister from "../apicalls/Register/userRegister";

function RegisterFormContainer({
  handleRegistration,
}: {
  handleRegistration: (data: any) => void;
}) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (
    event: React.ChangeEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const userData: any = await userRegister(formData);
    handleRegistration(userData);
  };

  return (
    <RegisterForm
      handleChange={handleChange}
      formData={formData}
      handleSubmit={handleSubmit}
    />
  );
}

export default RegisterFormContainer;
