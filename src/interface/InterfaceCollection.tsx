interface ILeaveType {
  id: string;
  type: string;
}

enum ApprovalState {
  "Pending" = 1, // Assuming 1 maps to "Pending"
  "Accepted" = 2, // Assuming 2 maps to "Accepted"
  "Rejected" = 3, // Assuming 3 maps to "Rejected"
}

interface ILeaveRequestToEdit {
  id: string;
  userId: string;
  leaveTypeId: string;
  startDate: Date;
  endDate: Date;
  dateRequested: Date;
  approvalState: number;
}

interface DeleteButtonProps {
  approvalState: number;
  onDelete: (id: string) => void;
  id: string;
}

interface ILeaveRequest {
  id: string;
  leaveRequestId: string;
  employeeName: string;
  userId: string;
  leaveType: string;
  leaveTypeId: string;
  startDate: Date;
  endDate: Date;
  dateRequested: Date;
  approvalState: number; // Changed to number
}

interface IStaffLeaveRequestDto {
  leaveRequestId: string;
  userId: string;
  employeeName: string;
  leaveType: string;
  startDate: Date;
  endDate: Date;
  dateRequested: Date;
  approvalState: number; // Changed to number
}

interface IStaffLeaveRequest {
  id: string;
  userId: string;
  leaveTypeId: string;
  startDate: Date;
  endDate: Date;
  dateRequested: Date;
  approvalState: number; // Stayed as number
  leaveType: ILeaveType; // Updated to reflect the nested object structure
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

type StaffLeaveRequestTableProps = {
  leaveRequests: IStaffLeaveRequest[]; // The leave requests to display
};

interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  role: number;
  email: string;
}

interface ILeaveTypeDays {
  leaveTypeId: string;
  type: string;
  days: number;
}
