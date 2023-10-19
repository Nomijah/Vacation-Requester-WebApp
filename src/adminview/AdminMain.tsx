import React, { useContext, useState } from "react";
import { Context } from "../App";

function AdminMain({ handleLogOut }: { handleLogOut: () => void }) {
  const us = useContext(Context);
  const [user, setUser] = useState(us);
  return (
    <>
      <h1>Hej {user.firstName} du ärofyllda admin.</h1>
      <button onClick={handleLogOut} className="button-primary">
        Logga ut
      </button>
    </>
  );
}

export default AdminMain;
