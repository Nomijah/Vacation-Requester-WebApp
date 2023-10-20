interface ILeaveType {
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

// interface ILeaveRequest {
//   Id: string;
//   User: User;
//   UserId: string;
//   LeaveType: LeaveType;
//   LeaveTypeId: string;
//   StartDate: Date;
//   EndDate: Date;
//   DateRequested: Date;
//   ApprovalState: ApprovalState;
// }

//Alvins gamla kod ^^
interface ILeaveRequest {
  id: string;
  userId: string;
  leaveTypeId: string;
  startDate: string;
  endDate: string;
  dateRequested: string;
  approvalState: number; // Changed to number
}

interface ILeaveRequestDto {
  userId: string;
  leaveTypeId: string;
  startDate: string;
  endDate: string;
}

type LeaveRequestTableProps = {
  leaveRequests: ILeaveRequest[]; // The leave requests to display
};

interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  role: number;
  email: string;
}
