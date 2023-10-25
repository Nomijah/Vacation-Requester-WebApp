import React, { useState, useEffect } from "react";
import "./App.css";
import AdminMain from "./adminview/AdminMain";
import StaffMain from "./staffview/StaffMain";

import "./interface/InterfaceCollection";

import LoginView from "./login/LoginView";
import RegisterView from "./register/RegisterView";
import userLogin from "./apicalls/userLogin";

export const Context = React.createContext<any>(undefined);

export function App() {
  const [user, setUser] = useState<IUser>({
    id: "",
    firstName: "",
    lastName: "",
    role: 0,
    email: "",
  });

  const [isRegistering, setIsRegistering] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const data = window.localStorage.getItem("VACATION_REQUESTER_USER");
    const loggedInUser: IUser = JSON.parse(data);
    console.log(loggedInUser);
    if (loggedInUser !== null) {
      setUser(loggedInUser);
      setIsLoggedIn(true);
    } else {
      setUser({
        id: "",
        firstName: "",
        lastName: "",
        role: 0,
        email: "",
      });
    }
  }, [isLoggedIn]);

  const handleLogOut = (): void => {
    setUser({
      id: "",
      firstName: "",
      lastName: "",
      role: 0,
      email: "",
    });
    window.localStorage.setItem(
      "VACATION_REQUESTER_USER",
      JSON.stringify({
        id: "",
        firstName: "",
        lastName: "",
        role: 0,
        email: "",
      })
    );
    setIsLoggedIn(false);
  };

  const handleLogIn = (data: IUser): void => {
    setUser({
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      role: data.role,
      email: data.email,
    });
    window.localStorage.setItem(
      "VACATION_REQUESTER_USER",
      JSON.stringify(data)
    );
    setIsLoggedIn(true);
  };

  const handleRegistration = (data: IUser): void => {
    setUser({
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      role: data.role,
      email: data.email,
    });
  };
  return (
    <div className="app-container">
      <Context.Provider value={{ user, handleLogOut }}>
        {user.id ? (
          user.role === 1 ? (
            <AdminMain />
          ) : (
            <StaffMain />
          )
        ) : isRegistering ? (
          <RegisterView
            handleSwitchToLogin={() => setIsRegistering(false)}
            handleRegistration={handleRegistration}
          />
        ) : (
          <LoginView
            handleSwitchToRegister={() => setIsRegistering(true)}
            handleLogIn={handleLogIn}
          />
        )}
      </Context.Provider>
    </div>
  );
}

export default App;

//Petters gamla kod :P
//   return (
//     <Context.Provider value={{ user, handleLogOut }}>
//       {user.id ? (
//         user.role === 1 ? (
//           <AdminMain />
//         ) : (
//           <StaffMain />
//         )
//       ) : (
//         <LoginContainer handleLogIn={handleLogIn} />
//       )}
//     </Context.Provider>
//   );
// }

// export default App;
