interface User {
  // Define the properties you need from the User object here
  name: string; // Example property
  // ... other properties
}

interface LeaveType {
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

type LeaveRequestTableProps = {
  leaveRequests: ILeaveRequest[]; // The leave requests to display
};
