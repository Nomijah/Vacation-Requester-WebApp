// RegisterForm
function RegisterForm({
  handleSubmit,
  handleChange,
  formData,
}: {
  handleSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formData: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  };
}) {
  return (
    <div className="registerBody">
      <div className="border rounded bg-light bg-opacity-50">
        <form onSubmit={handleSubmit}>
          <div className="form-group m-3">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>
          <div className="form-group m-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="form-group m-3">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              autoComplete="given-name"
            />
          </div>
          <div className="form-group m-3">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              autoComplete="family-name"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary m-3 mt-1 mx-auto d-block"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
