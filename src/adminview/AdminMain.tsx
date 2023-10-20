import React, { useContext, useState } from "react";
import { Context } from "../App";
import LogoutContainer from "../logout/LogoutContainer";
import LeaveRequestTopBarContainer from "../staffview/Containers/LeaveRequestTopBarContainer";

import AdminTableContainer from "./containers/AdminTableContainer";

function AdminMain() {
  const { user, handleLogOut } = useContext(Context);
  return (
    <>
      <h1>Hej {user.firstName} du ärofyllda admin.</h1>
      <LeaveRequestTopBarContainer />
      <AdminTableContainer />
      <LogoutContainer />
    </>
  );
}

export default AdminMain;
