function UserTable({
  users,
  handleClick,
}: {
  users: IUser[];
  handleClick: (event: React.ChangeEvent<any>) => void;
}) {
  return (
    <div>
      <h2 className="ms-2 mt-3">Staff list</h2>
      <table className="table mt-4">
        <thead>
          <tr className="border-1">
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr className="align-middle" key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              {user.role == 1 ? <td>Admin</td> : <td>Staff</td>}
              <td>
                {user.role != 1 && (
                  <button
                    className="btn btn-primary"
                    onClick={handleClick}
                    value={user.id}
                  >
                    Leave details
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
