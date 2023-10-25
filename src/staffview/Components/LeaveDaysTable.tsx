import "../../interface/InterfaceCollection";

function LeaveDaysTable({
  leaveTypeDays,
}: {
  leaveTypeDays: ILeaveTypeDays[];
}) {
  return (
    <div className="container-fluid bg-light-subtle border border-dark-subtle">
      {leaveTypeDays.map((element) => (
        <div key={element.type}>
          {element.type !== "Vacation" ? (
            <div>
              <h5>
                {element.type}: <span>{element.days} days used.</span>
              </h5>
            </div>
          ) : (
            <div>
              <h5>
                {element.type}: <span>{25 - element.days} days left.</span>
              </h5>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default LeaveDaysTable;
