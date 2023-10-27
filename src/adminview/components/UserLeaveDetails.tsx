function UserLeaveDetails({
  leaveTypeDays,
  userName,
  handleReturnClick,
}: {
  leaveTypeDays: ILeaveTypeDays[];
  userName: string;
  handleReturnClick: () => void;
}) {
  return (
    <div className="container-fluid bg-light-subtle border border-dark-subtle rounded">
      <h2 className="ms-2 mt-3">Staff list</h2>
      <h4 className="ms-2">{userName}</h4>
      <table className="table ms-1">
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
      <button className="btn btn-warning mb-3 ms-1" onClick={handleReturnClick}>
        Return
      </button>
    </div>
  );
}

export default UserLeaveDetails;
