import { useState, useEffect } from "react";
import getAllUsers from "../../apicalls/userRequests/getAllUsers";
import UserTable from "../components/UserTable";
import leaveDayCounter from "../../apicalls/staffLeaveRequest/leaveDayCounter";
import UserLeaveDetails from "../components/UserLeaveDetails";

function UserTableContainer() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [view, setView] = useState(true);
  const [userName, setUserName] = useState("");
  const [leaveTypeDays, setLeaveTypeDays] = useState<ILeaveTypeDays[]>([]);

  useEffect(() => {
    const userFetch = async () => {
      setUsers(await getAllUsers());
    };
    userFetch();
  }, []);

  const handleClick = ({ target }: React.ChangeEvent<any>) => {
    const currentUser = users.find((user) => user.id === target.value);
    if (currentUser) {
      setUserName(currentUser?.firstName + " " + currentUser?.lastName);
      const leaveTypeDaysArrayGetter = async () => {
        setLeaveTypeDays(await leaveDayCounter(currentUser.id, 2023));
      };
      leaveTypeDaysArrayGetter();
      setView(false);
    } else {
      alert("Something went wrong!");
    }
  };

  const handleReturnClick = () => {
    setUserName("");
    setView(true);
    setLeaveTypeDays([]);
  };

  return (
    <div>
      {view ? (
        <UserTable users={users} handleClick={handleClick} />
      ) : (
        <UserLeaveDetails
          userName={userName}
          leaveTypeDays={leaveTypeDays}
          handleReturnClick={handleReturnClick}
        />
      )}
    </div>
  );
}

export default UserTableContainer;
