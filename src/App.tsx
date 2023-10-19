import React, { useState } from "react";
import "./App.css";
import LoginContainer from "./login/LoginContainer";
import AdminMain from "./adminview/AdminMain";
import StaffMain from "./staffview/StaffMain";

export const Context = React.createContext<any>(undefined);

interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  role: number;
  email: string;
}

export function App() {
  const [user, setUser] = useState<IUser>({
    id: "",
    firstName: "",
    lastName: "",
    role: 0,
    email: "",
  });

  const handleLogOut = (): void => {
    setUser({ id: "", firstName: "", lastName: "", role: 0, email: "" });
  };

  const handleLogIn = (data: IUser): void => {
    setUser({
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      role: data.role,
      email: data.email,
    });
  };

  return (
    <Context.Provider value={{ user, handleLogOut }}>
      {user.id ? (
        user.role === 1 ? (
          <AdminMain />
        ) : (
          <StaffMain />
        )
      ) : (
        <LoginContainer handleLogIn={handleLogIn} />
      )}
    </Context.Provider>
  );
}

export default App;
