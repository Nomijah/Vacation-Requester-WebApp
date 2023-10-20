import React, { useState } from "react";
import "./App.css";
import LoginContainer from "./login/LoginContainer";
import AdminMain from "./adminview/AdminMain";
import StaffMain from "./staffview/StaffMain";

import "./interface/InterfaceCollection";

import LoginView from "./login/LoginView";
import RegisterView from "./register/RegisterView";


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

  const handleLogOut = (): void => {
    setUser({
      id: "",
      firstName: "",
      lastName: "",
      role: 0,
      email: "",
    });
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
