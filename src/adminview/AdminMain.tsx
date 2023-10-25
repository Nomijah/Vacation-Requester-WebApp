import { useContext } from "react";
import { Context } from "../App";
import LogoutContainer from "../logout/LogoutContainer";
import LeaveRequestTopBarContainer from "../staffview/Containers/LeaveRequestTopBarContainer";
import UserTableContainer from "./containers/UserTableContainer";

import "../App.css";

import AdminTableContainer from "./containers/AdminTableContainer";
import DeleteEditLeaveTypeContainer from "./containers/DeleteEditLeaveTypeContainer";
import OverviewLeaveTimeTableContainer from "./containers/OverviewLeaveTimeTableContainer";
import LeaveTypeContainer from "./containers/LeaveTypeContainer";
import ExportTimeReportContainer from "./containers/ExportTimeReportContainer";
function AdminMain() {
  const { user } = useContext(Context);
  return (
    <>
      <div className="bg-white admin-page text-center">
        <h1>
          <span className="text-success">Admin</span> &nbsp;
          {user.firstName}
        </h1>
        <OverviewLeaveTimeTableContainer />
        <LeaveRequestTopBarContainer />
        <ExportTimeReportContainer />
        <LeaveTypeContainer />
        <AdminTableContainer />
        <UserTableContainer />
        <LogoutContainer />
      </div>
    </>
  );
}

export default AdminMain;
