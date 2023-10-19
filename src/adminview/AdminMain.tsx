import React, { useContext, useState } from "react";
import { Context } from "../App";
import LogoutContainer from "../logout/LogoutContainer";

function AdminMain() {
  const { user, handleLogOut } = useContext(Context);
  return (
    <>
      <h1>Hej {user.firstName} du ärofyllda admin.</h1>
      <LogoutContainer />
    </>
  );
}

export default AdminMain;
