import { useState, useEffect, useContext } from "react";
import adminLeaveDayCounter from "../../apicalls/adminLeaveRequest/adminLeaveDayCounter";
import OverviewLeaveTimeTable from "../components/OverviewLeaveTimeTable";

function OverviewLeaveTimeTableContainer() {
  const [leaveTypeDays, setLeaveTypeDays] = useState<
    ILeaveTypeDays[]
  >([]);

  useEffect(() => {
    const leaveTypeDaysArrayGetter = async () => {
      setLeaveTypeDays(await adminLeaveDayCounter(2023));
    };
    leaveTypeDaysArrayGetter();
  }, []);

  return <OverviewLeaveTimeTable leaveTypeDays={leaveTypeDays} />;
}

export default OverviewLeaveTimeTableContainer;
