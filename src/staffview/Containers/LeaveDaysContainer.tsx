import { useState, useEffect, useContext } from "react";
import leaveDayCounter from "../../apicalls/staffLeaveRequest/leaveDayCounter";
import { Context } from "../../App";
import LeaveDaysTable from "../Components/LeaveDaysTable";

function LeaveDaysContainer() {
  const { user } = useContext(Context);
  const [leaveTypeDays, setLeaveTypeDays] = useState<
    ILeaveTypeDays[]
  >([]);

  useEffect(() => {
    const leaveTypeDaysArrayGetter = async () => {
      setLeaveTypeDays(await leaveDayCounter(user.id, 2023));
    };
    leaveTypeDaysArrayGetter();
  }, []);

  return <LeaveDaysTable leaveTypeDays={leaveTypeDays} />;
}

export default LeaveDaysContainer;
