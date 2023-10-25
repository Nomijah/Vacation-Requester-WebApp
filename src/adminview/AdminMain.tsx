import { useContext } from "react";
import { Context } from "../App";
import LogoutContainer from "../logout/LogoutContainer";
import LeaveRequestTopBarContainer from "../staffview/Containers/LeaveRequestTopBarContainer";

import "../App.css";

import AdminTableContainer from "./containers/AdminTableContainer";
import LeaveTypeContainer from "./containers/LeaveTypeContainer";
import ExportTimeReportContainer from "./containers/ExportTimeReportContainer";
function AdminMain() {
  const { user } = useContext(Context);
  return (
    <>
      <div className="bg-white admin-page text-center">
        <h1>
          <span className="text-success">Admin</span> &nbsp;{user.firstName}
        </h1>
        <LeaveRequestTopBarContainer />
        <ExportTimeReportContainer />
        <LeaveTypeContainer />
        <AdminTableContainer />
        <LogoutContainer />
      </div>
    </>
  );
}

export default AdminMain;
