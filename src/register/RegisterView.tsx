import React from "react";
import RegisterFormContainer from "./RegisterFormContainer";

interface RegisterViewProps {
  handleSwitchToLogin: () => void;
  handleRegistration: (data: IUser) => void;
}

const RegisterView: React.FC<RegisterViewProps> = ({
  handleSwitchToLogin,
  handleRegistration,
}) => {
  return (
    <div className="login-container">
      <RegisterFormContainer
        handleRegistration={handleRegistration}
      />
      <div className="d-flex justify-content-center mt-3">
        <button
          onClick={handleSwitchToLogin}
          className="btn btn-secondary m-3 mt-1"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default RegisterView;
