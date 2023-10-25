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
    <div>
      <h2 className="ms-2 mt-3">Staff list</h2>
      <h4>{userName}</h4>
      <table className="table">
        <tbody>
          {leaveTypeDays.map((element) => (
            <tr key={element.type}>
              {element.type !== "Vacation" ? (
                <td>
                  {element.type}: {element.days} days used.
                </td>
              ) : (
                <td>
                  {element.type}: {25 - element.days} days left.
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-warning" onClick={handleReturnClick}>
        Return
      </button>
    </div>
  );
}

export default UserLeaveDetails;
