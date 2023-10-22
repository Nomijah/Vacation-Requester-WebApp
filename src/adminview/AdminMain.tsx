import React, { useContext, useState } from "react";
import { Context } from "../App";
import LogoutContainer from "../logout/LogoutContainer";
import LeaveRequestTopBarContainer from "../staffview/Containers/LeaveRequestTopBarContainer";
import CreateLeaveTypeContainer from "./containers/CreateLeaveTypeContainer";

import "../App.css";

import AdminTableContainer from "./containers/AdminTableContainer";
import DeleteEditLeaveTypeForm from "./components/DeleteEditLeaveTypeForm";

function AdminMain() {
  const { user, handleLogOut } = useContext(Context);
  return (
    <>
      <div className="bg-white admin-page text-center">
        <h1>
          <span className="text-success">Admin</span> &nbsp;{user.firstName}
        </h1>
        <LeaveRequestTopBarContainer />
        <CreateLeaveTypeContainer />
        <DeleteEditLeaveTypeForm />
        <AdminTableContainer />
        <LogoutContainer />
      </div>
    </>
  );
}

export default AdminMain;
