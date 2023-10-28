import LogoutContainer from "../../logout/LogoutContainer";
import {
  HouseFill,
  FileEarmarkPlusFill,
  PersonFill,
  GearFill,
} from "react-bootstrap-icons";
import "../AdminMain.css";

function AdminSidebar({
  handleClick,
}: {
  handleClick: (event: React.ChangeEvent<any>) => void;
}) {
  return (
    <div className="sidebar">
      <h3 className="m-3">Admin view</h3>
      <button
        className="btn btn-outline-dark mb-2"
        onClick={handleClick}
        value="overview"
      >
        <HouseFill className="mb-1" /> Overview
      </button>
      <button
        className="btn btn-outline-dark mb-2"
        onClick={handleClick}
        value="staff"
      >
        <PersonFill className="mb-1" /> Staff details
      </button>
      <button
        className="btn btn-outline-dark mb-2"
        onClick={handleClick}
        value="leavetype"
      >
        <GearFill className="mb-1" /> Leave type management
      </button>
      <button
        className="btn btn-outline-dark mb-2"
        onClick={handleClick}
        value="export"
      >
        <FileEarmarkPlusFill className="mb-1" /> Export time report
      </button>
      <LogoutContainer />
    </div>
  );
}

export default AdminSidebar;
