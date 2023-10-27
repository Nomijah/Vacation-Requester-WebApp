import { useState } from "react";
import LogoutContainer from "../logout/LogoutContainer";
import LeaveRequestTopBarContainer from "../staffview/Containers/LeaveRequestTopBarContainer";
import UserTableContainer from "./containers/UserTableContainer";
import "./AdminMain.css";
import "../App.css";

import AdminTableContainer from "./containers/AdminTableContainer";
import OverviewLeaveTimeTableContainer from "./containers/OverviewLeaveTimeTableContainer";
import LeaveTypeContainer from "./containers/DeleteEditLeaveTypeContainer";
import ExportTimeReportContainer from "./containers/ExportTimeReportContainer";
import AdminSidebarContainer from "./containers/AdminSidebarContainer";

function AdminMain() {
  const [viewState, setViewState] = useState("overview");

  return (
    <>
      <div className="adminView">
        <AdminSidebarContainer setViewState={setViewState} />
        <div className="main">
          <div className="m-5 mt-2">
            {viewState === "overview" && (
              <>
                <LeaveRequestTopBarContainer />
                <OverviewLeaveTimeTableContainer />
                <AdminTableContainer />
              </>
            )}
            {viewState === "staff" && <UserTableContainer />}
            {viewState === "leavetype" && <LeaveTypeContainer />}
            {viewState === "export" && <ExportTimeReportContainer />}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminMain;
