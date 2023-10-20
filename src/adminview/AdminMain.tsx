import React, { useContext, useState } from "react";
import { Context } from "../App";
import LogoutContainer from "../logout/LogoutContainer";
import LeaveRequestTopBarContainer from "../staffview/Containers/LeaveRequestTopBarContainer";

function AdminMain() {
  const { user, handleLogOut } = useContext(Context);
  return (
    <>
      <h1>Hej {user.firstName} du ärofyllda admin.</h1>
      <LeaveRequestTopBarContainer />
      <LogoutContainer />
    </>
  );
}

export default AdminMain;
