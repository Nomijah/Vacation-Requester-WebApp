import React, { useState } from "react";
import LoginForm from "./LoginForm";
import userLogin from "../apicalls/userLogin";

function LoginContainer({ handleLogIn }: { handleLogIn: (data: any) => void }) {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userData: any = await userLogin(formData);
    handleLogIn(userData);
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
