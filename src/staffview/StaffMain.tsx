import React, { useContext, useState } from "react";
import { Context } from "../App";

function StaffMain({ handleLogOut }: { handleLogOut: () => void }) {
  const user = useContext(Context);

  return (
    <>
      <h1>Välkommen {user.fName}</h1>
      <button onClick={handleLogOut} className="button-primary">
        Logga ut
      </button>
    </>
  );
}

export default StaffMain;
