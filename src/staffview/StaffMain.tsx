import { useState } from "react";
import SidebarContainer from "./Containers/SidebarContainer";
import HomeViewContainer from "./Containers/HomeViewContainer";
import ApplyViewContainer from "./Containers/ApplyViewContainer";
import "./StaffMain.css";

function StaffMain() {
  const [viewState, setViewState] = useState("home");

  return (
    <div className="staffView">
      <SidebarContainer setViewState={setViewState} />
      <div className="main">
        <div className="m-5">
          {viewState === "home" && <HomeViewContainer />}
          {viewState === "apply" && (
            <ApplyViewContainer setViewState={setViewState} />
          )}
        </div>
      </div>
    </div>
  );
}

export default StaffMain;
