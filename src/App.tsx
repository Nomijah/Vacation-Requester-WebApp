import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import AdminMain from "./adminview/AdminMain";
import StaffMain from "./staffview/StaffMain";
import "./interface/InterfaceCollection";
import LoginView from "./login/LoginView";
import RegisterView from "./register/RegisterView";
import tokenRenewal from "./apicalls/tokenRenewal";
import useDidMountEffect from "./useDidMountEffect";

export const Context = React.createContext<any>(undefined);
//Nu borde Alvins grejer funka
export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(true);
  const [userActivity, setUserActivity] = useState(true);
  const [timerTrigger, setTimerTrigger] = useState(true);
  const [user, setUser] = useState<IUser>({
    id: "",
    firstName: "",
    lastName: "",
    role: 0,
    email: "",
  });

  useEffect(() => {
    const data = window.localStorage.getItem(
      "VACATION_REQUESTER_USER"
    );
    if (data) {
      const loggedInUser: IUser = JSON.parse(data);
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

  const refreshTriggerFunc = () => {
    setRefreshTrigger(!refreshTrigger);
  };

  useEffect(() => {
    const minute = 1000 * 60;
    console.log("timer startas om");
    setTimeout(refreshTriggerFunc, minute * 12);
  }, [timerTrigger]);

  // useDidMountEffect to not render on refresh
  useDidMountEffect(() => {
    console.log("useDidMount körs");
    if (isLoggedIn && userActivity) {
      tokenRenewal();
      setUserActivity(false);
      setTimerTrigger(!timerTrigger);
    } else {
      handleLogOut();
    }
  }, [refreshTrigger]);

  function debounce(func: any, delay: any) {
    let timeoutId: number;

    return function (...args: any[]) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }

  // Delay the time until next execution to not overflow the system with constant functions running when user is active.
  const debouncedUserActivity = debounce(() => {
    setUserActivity(true);
    console.log("setUserActivit körs");
  }, 1000); // 1000 milliseconds (1 second) delay

  useEffect(() => {
    window.addEventListener("click", debouncedUserActivity);
    window.addEventListener("keypress", debouncedUserActivity);
    window.addEventListener("scroll", debouncedUserActivity);
    window.addEventListener("mousemove", debouncedUserActivity);

    return () => {
      window.removeEventListener("click", debouncedUserActivity);
      window.removeEventListener("keypress", debouncedUserActivity);
      window.removeEventListener("scroll", debouncedUserActivity);
      window.removeEventListener("mousemove", debouncedUserActivity);
    };
  }, [refreshTrigger]);

  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogOut = (): void => {
    setUser({
      id: "",
      firstName: "",
      lastName: "",
      role: 0,
      email: "",
    });
    console.log("Nu tas local storage bort");
    window.localStorage.removeItem("VACATION_REQUESTER_USER");
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
    setRefreshTrigger(!refreshTrigger);
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
