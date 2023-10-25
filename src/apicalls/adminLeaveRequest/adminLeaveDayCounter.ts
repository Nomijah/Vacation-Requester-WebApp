import getAllLeaveTypes from "../leaveTypeRequests/getAllLeaveTypes";
import "../../interface/InterfaceCollection";
import getAllLeaveRequests from "./getAllLeaveRequests";

const adminLeaveDayCounter = async (
  year: number
): Promise<ILeaveTypeDays[]> => {
  const leaveRequests = await getAllLeaveRequests();

  const leaveTypes = await getAllLeaveTypes();

  const leaveTypeDaysArray: ILeaveTypeDays[] = leaveTypes.map(
    (leaveType): ILeaveTypeDays => ({
      leaveTypeId: leaveType.id,
      type: leaveType.type,
      days: 0,
    })
  );

  leaveRequests.map((leaveRequest) => {
    // check that the leave has occured in the correct year
    if (
      new Date(leaveRequest.startDate).getFullYear() === year &&
      leaveRequest.approvalState === 1
    ) {
      const leaveTypeDaysToUpdate = leaveTypeDaysArray.find(
        (leaveTypeDays) =>
          leaveTypeDays.type === leaveRequest.leaveType
      );
      // Calculate how many days the leave request spans
      const timeSpanInMilliseconds =
        new Date(leaveRequest.endDate).getTime() -
        new Date(leaveRequest.startDate).getTime();
      const timeSpanInDays = Math.ceil(
        timeSpanInMilliseconds / (1000 * 60 * 60 * 24)
      );

      if (leaveTypeDaysToUpdate) {
        leaveTypeDaysToUpdate.days += timeSpanInDays;
      }
    }
  });
  console.log(leaveTypeDaysArray);
  return leaveTypeDaysArray;
};

export default adminLeaveDayCounter;
