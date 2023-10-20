interface ILeaveType {
  // Define the properties you need from the LeaveType object here
  type: string; // Example property
  // ... other properties
}

enum ApprovalState {
  "Pending" = 1, // Assuming 1 maps to "Pending"
  "Accepted" = 2, // Assuming 2 maps to "Accepted"
  "Rejected" = 3, // Assuming 3 maps to "Rejected"
}

interface ILeaveRequest {
  id: string;
  userId: string;
  leaveTypeId: string;
  startDate: Date;
  endDate: Date;
  dateRequested: Date;
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
