import { useContext } from "react";
import Sidebar from "../Components/Sidebar";
import { Context } from "../../App";

function SidebarContainer({
  setViewState,
}: {
  setViewState: (data: string) => void;
}) {
  const { user } = useContext(Context);
  const fullName = user.firstName + " " + user.lastName;

  const homeHandle = () => {
    setViewState("home");
  };

  const applyHandle = () => {
    setViewState("apply");
  };

  return (
    <Sidebar
      name={fullName}
      homeHandle={homeHandle}
      applyHandle={applyHandle}
    />
  );
}

export default SidebarContainer;
