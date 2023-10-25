import "../../interface/InterfaceCollection";

function OverviewLeaveTimeTable({
  leaveTypeDays,
}: {
  leaveTypeDays: ILeaveTypeDays[];
}) {
  return (
    <div className="container-fluid bg-light-subtle border border-dark-subtle">
      {leaveTypeDays.map((element) => (
        <div key={element.leaveTypeId}>
          <div>
            <h5>
              {element.type}: <span>{element.days}</span>
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OverviewLeaveTimeTable;
