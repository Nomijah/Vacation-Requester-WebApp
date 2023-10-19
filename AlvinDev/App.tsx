import "./App.css";
import LoginContainer from "./login/LoginContainer";
import { CookiesProvider, useCookies } from "react-cookie";
import UserMain from "./userview/UserMain";

import LeaveRequestTable from "./componentviews/LeaveRequestTable";
import getAllLeaveRequests from "./apicalls/adminLeaveRequest/getAllLeaveRequests";
import { useEffect, useState } from "react";

import {
  ILeaveRequest,
  User,
  LeaveType,
  ApprovalState,
} from "./interface/InterfaceCollection"; // No need for the file extension

function App() {
  const [cookies, setCookie] = useCookies(["user"]);
  const [leaveRequests, setLeaveRequests] = useState<ILeaveRequest[]>([]); // Define the type of state here
  useEffect(() => {
    getAllLeaveRequests().then((data: ILeaveRequest) => {
      setLeaveRequests(data);
      console.log(data);
    });
  }, []);

  function handleLogin(user: string) {
    setCookie("user", user, { path: "/testcookie/" });
  }

  const handleClick = () => {
    setCookie("user", null);
  };

  return (
    <CookiesProvider>
      <LeaveRequestTable leaveRequests={leaveRequests} />
      {cookies.user ? (
        <UserMain user={cookies.user} onClick={handleClick} />
      ) : (
        <LoginContainer onLogin={handleLogin} />
      )}
    </CookiesProvider>
  );
}

export default App;
