import React, { useContext, useState } from "react";
import { Context } from "../App";
import LogoutContainer from "../logout/LogoutContainer";
import LeaveRequestTopBarContainer from "../staffview/Containers/LeaveRequestTopBarContainer";
import CreateLeaveTypeContainer from "./containers/CreateLeaveTypeContainer";

import AdminTableContainer from "./containers/AdminTableContainer";

function AdminMain() {
  const { user, handleLogOut } = useContext(Context);
  return (
    <>
      <div className="bg-white admin-page text-center">
        <h1>Admin: {user.firstName} du ärofyllda admin.</h1>
        <LeaveRequestTopBarContainer />
        <CreateLeaveTypeContainer />
        <AdminTableContainer />
        <LogoutContainer />
      </div>
    </>
  );
}

export default AdminMain;
