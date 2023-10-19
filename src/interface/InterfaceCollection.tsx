interface User {
  // Define the properties you need from the User object here
  name: string; // Example property
  // ... other properties
}

interface LeaveType {
  // Define the properties you need from the LeaveType object here
  id: string; // Example property
  type: string; // Example property
  // ... other properties
}

enum ApprovalState {
  Pending = "Pending",
  Accepted = "Accepted",
  Rejected = "Rejected",
}

interface ILeaveRequest {
  Id: string;
  User: User;
  UserId: string;
  LeaveType: LeaveType;
  LeaveTypeId: string;
  StartDate: Date;
  EndDate: Date;
  DateRequested: Date;
  ApprovalState: ApprovalState;
}

type LeaveRequestTableProps = {
  leaveRequests: ILeaveRequest[]; // The leave requests to display
};
