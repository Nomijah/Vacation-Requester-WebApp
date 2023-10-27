function UserTable({
  users,
  handleClick,
}: {
  users: IUser[];
  handleClick: (event: React.ChangeEvent<any>) => void;
}) {
  return (
    <div className="container-fluid bg-light-subtle border border-dark-subtle rounded mt-3">
      <h2 className="ms-2 mt-3">Staff list</h2>
      <table className="table mt-4">
        <thead>
          <tr className="border-1">
            <th className="bg-dark-subtle">First name</th>
            <th className="bg-dark-subtle">Last name</th>
            <th className="bg-dark-subtle">Email</th>
            <th className="bg-dark-subtle">Role</th>
            <th className="bg-dark-subtle"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr className="align-middle" key={user.id}>
              <td className="bg-light-subtle">{user.firstName}</td>
              <td className="bg-light-subtle">{user.lastName}</td>
              <td className="bg-light-subtle">{user.email}</td>
              {user.role == 1 ? (
                <td className="bg-light-subtle">Admin</td>
              ) : (
                <td className="bg-light-subtle">Staff</td>
              )}
              <td className="bg-light-subtle">
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
    //hej
  );
}

export default UserTable;
