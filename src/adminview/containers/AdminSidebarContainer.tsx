import AdminSidebar from "../components/AdminSideBar";

function AdminSidebarContainer({
  setViewState,
}: {
  setViewState: (data: string) => void;
}) {
  const handleClick = (event: any) => {
    console.log(event.target.value);
    setViewState(event.target.value);
  };

  return <AdminSidebar handleClick={handleClick} />;
}

export default AdminSidebarContainer;
