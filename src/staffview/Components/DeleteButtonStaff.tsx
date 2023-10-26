import React from "react";
import { Trash } from "react-bootstrap-icons";
import "../../interface/InterfaceCollection";

const DeleteButtonStaff: React.FC<DeleteButtonProps> = ({
  approvalState,
  onDelete,
  id,
}) => {
  if (approvalState !== 1) {
    return null;
  }

  return (
    <button className="btn btn-danger" onClick={() => onDelete(id)}>
      <Trash color="white" size={16} />
    </button>
  );
};

export default DeleteButtonStaff;
