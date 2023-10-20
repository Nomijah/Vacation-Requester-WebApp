function LogoutButton({ handleClick }: { handleClick: () => void }) {
  return (
    <button onClick={handleClick} className="btn btn-danger m-3 mt-1">
      Log out
    </button>
  );
}

export default LogoutButton;
