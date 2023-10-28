import "../../interface/InterfaceCollection";

function LeaveDaysTable({
  leaveTypeDays,
}: {
  leaveTypeDays: ILeaveTypeDays[];
}) {
  return (
    <div className="container-fluid bg-light-subtle border border-dark-subtle rounded">
      <h5 className="mt-2">Days used/left</h5>
      <table className="table">
        <tbody>
          {leaveTypeDays.map((element) => (
            <tr key={element.type}>
              {element.type !== "Vacation" ? (
                <td className="bg-light-subtle">
                  {element.type}: {element.days}
                  {element.days === 1 ? (
                    <span> day </span>
                  ) : (
                    <span> days </span>
                  )}
                  used.
                </td>
              ) : (
                <td className="bg-light-subtle">
                  {element.type}: {25 - element.days}
                  {element.days === 1 ? (
                    <span> day </span>
                  ) : (
                    <span> days </span>
                  )}
                  left.
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaveDaysTable;
