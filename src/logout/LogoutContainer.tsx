import LogoutButton from "./LogoutButton";
import userLogout from "../apicalls/userLogout";
import { useContext } from "react";
import { Context } from "../App";

function LogoutContainer() {
  const { handleLogOut } = useContext(Context);
  const handleClick = async (): Promise<void> => {
    await userLogout();
    handleLogOut();
  };

  return <LogoutButton handleClick={handleClick} />;
}

export default LogoutContainer;
