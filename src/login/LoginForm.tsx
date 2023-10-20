function LoginForm({
  handleSubmit,
  handleChange,
  formData,
}: {
  handleSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formData: { email: string; password: string };
}) {
  return (
    <div className="loginBody">
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
          <button type="submit" className="btn btn-primary m-3 mt-1">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
