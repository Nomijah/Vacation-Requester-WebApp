import React from "react";

function UserMain({ user, onClick }) {
  return (
    <>
      <h1>Välkommen {user}</h1>
      <button className="button-primary" onClick={onClick}>
        Logga ut
      </button>
    </>
  );
}

export default UserMain;
