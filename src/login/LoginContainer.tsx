import React, { useState } from "react";
import LoginForm from "./LoginForm";
import userLogin from "../apicalls/userLogin";

function LoginContainer({ onLogin }) {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    userLogin(formData);
    onLogin(formData.email);
  };

  return (
    <LoginForm
      handleChange={handleChange}
      formData={formData}
      handleSubmit={handleSubmit}
    />
  );
}

export default LoginContainer;
