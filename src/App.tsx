import React, { useState } from "react";
import "./App.css";
import LoginContainer from "./login/LoginContainer";
import AdminMain from "./adminview/AdminMain";
import StaffMain from "./staffview/StaffMain";

export const Context = React.createContext<IUser | undefined>(undefined);

interface IUser {
  id: string;
  fName: string;
  lName: string;
  role: number;
  email: string;
}

export function App() {
  const [user, setUser] = useState<IUser>({
    id: "",
    fName: "",
    lName: "",
    role: 0,
    email: "",
  });

  const handleLogOut = (): void => {
    setUser({ id: "", fName: "", lName: "", role: 0, email: "" });
  };

  const handleLogIn = (data: IUser): void => {
    setUser({
      id: data.id,
      fName: data.fName,
      lName: data.lName,
      role: data.role,
      email: data.email,
    });
  };

  return (
    <Context.Provider value={user}>
      {user.id ? (
        user.role === 1 ? (
          <AdminMain handleLogOut={handleLogOut} />
        ) : (
          <StaffMain handleLogOut={handleLogOut} />
        )
      ) : (
        <LoginContainer handleLogIn={handleLogIn} />
      )}
    </Context.Provider>
  );
}

export default App;
