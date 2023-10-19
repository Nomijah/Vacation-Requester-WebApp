import React, { useContext, useState } from "react";
import { Context } from "../App";
import LogoutContainer from "../logout/LogoutContainer";

function StaffMain() {
  const { user, handleLogOut } = useContext(Context);

  return (
    <>
      <h1>Välkommen {user.firstName}</h1>
      <LogoutContainer />
    </>
  );
}

export default StaffMain;
