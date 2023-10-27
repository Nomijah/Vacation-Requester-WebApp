import "../../interface/InterfaceCollection";

function OverviewLeaveTimeTable({
  leaveTypeDays,
}: {
  leaveTypeDays: ILeaveTypeDays[];
}) {
  return (
    <div className="container-fluid bg-light-subtle border border-dark-subtle rounded">
      <h5 className="mt-2">Total days for each leave type</h5>
      <table className="table">
        <tbody>
          {leaveTypeDays.map((element) => (
            <tr key={element.type}>
              <td className="bg-light-subtle">
                {element.type}: {element.days}
                {element.days === 1 ? <span> day </span> : <span> days </span>}
                registered.
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OverviewLeaveTimeTable;
