import React from "react";

function LogoutButton({ handleClick }: { handleClick: () => void }) {
  return (
    <button onClick={handleClick} className="btn btn-warning m-3 mt-1">
      Log out
    </button>
  );
}

export default LogoutButton;
