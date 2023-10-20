import LogoutContainer from "../../logout/LogoutContainer";
import {
  HouseFill,
  FileEarmarkPlusFill,
  PersonFill,
} from "react-bootstrap-icons";
import "../StaffMain.css";
import "./Sidebar.css";

function Sidebar({
  name,
  homeHandle,
  applyHandle,
}: {
  name: string;
  homeHandle: () => void;
  applyHandle: () => void;
}) {
  return (
    <div className="sidebar">
      <h3 className="m-3">
        <PersonFill /> {name}
      </h3>
      <p className="h5 link-dark" onClick={homeHandle}>
        <HouseFill className="pb-1" /> Home
      </p>
      <p className="h5 link-dark" onClick={applyHandle}>
        <FileEarmarkPlusFill className="pb-1" /> Apply for leave
      </p>
      <LogoutContainer />
    </div>
  );
}

export default Sidebar;
