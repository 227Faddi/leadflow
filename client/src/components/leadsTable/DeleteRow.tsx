import { Lead } from "../../types";
import { useDeleteLead } from "../../features/lead/hooks";
import { LuTrash2 } from "react-icons/lu";

type Props = {
  id: Lead["id"];
};

const DeleteRow = ({ id }: Props) => {
  const deleteLead = useDeleteLead();

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this lead? This action cannot be undone."
    );
    if (confirmed) {
      await deleteLead(id);
    }
  };

  return (
    <button onClick={handleDelete} className="text-red-600 hover:text-red-900">
      <LuTrash2 size={23} />
    </button>
  );
};

export default DeleteRow;
