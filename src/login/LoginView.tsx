import React from "react";
import LoginContainer from "./LoginContainer";

interface LoginViewProps {
  handleSwitchToRegister: () => void;
  handleLogIn: (data: IUser) => void;
}

const LoginView: React.FC<LoginViewProps> = ({
  handleSwitchToRegister,
  handleLogIn,
}) => {
  return (
    <div>
      <LoginContainer handleLogIn={handleLogIn} />
      <div className="d-flex justify-content-center mt-3">
        <button
          onClick={handleSwitchToRegister}
          className="btn btn-secondary m-3 mt-1"
        >
          Go to Register
        </button>
      </div>
    </div>
  );
};

export default LoginView;
