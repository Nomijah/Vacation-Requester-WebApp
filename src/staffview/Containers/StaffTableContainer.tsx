import React, { useState, useEffect, useContext } from "react";
// import { IStaffLeaveRequest } from "../../interface/InterfaceCollection";
import "../../interface/InterfaceCollection";
import getAllUserLeaveRequests from "../../apicalls/staffLeaveRequest/getAllUserLeaveRequests";
import StaffTable from "../Components/StaffTable";
import { Context } from "../../App"; // make sure to import Context from the correct path

function StaffTableContainer() {
  const { user } = useContext(Context);
  const [leaveRequests, setLeaveRequests] = useState<
    IStaffLeaveRequest[]
  >([]);

  useEffect(() => {
    if (user && user.id) {
      getAllUserLeaveRequests(user.id)
        .then((data) => {
          setLeaveRequests(data as IStaffLeaveRequest[]);
        })
        .catch((err) => console.error("An error occurred:", err));
    }
  }, [user.id]);

  return (
    <div className="container-fluid bg-light-subtle border border-dark-subtle">
      <StaffTable leaveRequests={leaveRequests} />
    </div>
  );
}

export default StaffTableContainer;

//OLd code below

// import React, { useState, useEffect, useContext } from "react";

// // import { ILeaveRequest } from "../../interface/InterfaceCollection";
// import "../../interface/InterfaceCollection";

// import getAllUserLeaveRequests from "../../apicalls/staffLeaveRequest/getAllUserLeaveRequests";
// import StaffTable from "../Components/StaffTable";

// function StaffTableContainer() {

//   const [leaveRequests, setLeaveRequests] = useState<
//     IStaffLeaveRequest[]
//   >([]);

//   useEffect(() => {
//     getAllUserLeaveRequests("10b61599-4174-4936-c5f3-08dbceeba650")
//       .then((data) => {
//         setLeaveRequests(data as IStaffLeaveRequest[]);
//       })
//       .catch((err) => console.error("An error occurred:", err));
//   }, []);
//   return <StaffTable leaveRequests={leaveRequests} />;
// }

// export default StaffTableContainer;
